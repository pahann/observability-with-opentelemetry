const service = 'app-microservice';

const express = require('express')
const cors = require('cors')
const { logger: parentLogger } = require('./utils/logger');
const { sleep } = require('./utils/sleep');
const app = express()
const port = 7030

const logger = parentLogger.child({service })

app.use(cors())

app.get('/coffees', async (req, res) => {
    const coffees = await fetch(`http://localhost:7032/coffees`).then(res => res.json())

    res.send({
        coffees,
    })
})

app.get('/coffee/random', async (req, res) => {
    const coffees = await fetch(`http://localhost:7032/coffees`).then(res => res.json())

    await sleep()
    const indexFound = Math.round(Math.random() * coffees.length)
    logger.info(`found random index ${indexFound}`)
    const randomCoffeeId = coffees[indexFound].id;

    const coffee = await fetch(`http://localhost:7032/coffee/${randomCoffeeId}`).then(res => res.json())

    res.send({
        coffee,
    })
})

app.get('/coffee/:idParam', async (req, res) => {
    const idParam = req.params.id

    const coffee = await fetch(`http://localhost:7032/coffee/${idParam}`).then(res => res.json())

    res.send({
        coffee,
    })
})

app.get('/user/me', async (req, res) => {
    const selectFakeUserId = 1

    logger.info(`received request for user ${selectFakeUserId}`)

    const user = await fetch(`http://localhost:7031/user/${selectFakeUserId}`).then(res => res.json())

    logger.info({ user }, `found user ${selectFakeUserId}`)

    res.send({
        user,
    })
})

app.listen(port, () => {
    logger.info(`${service}  listening on port ${port}`)
})
