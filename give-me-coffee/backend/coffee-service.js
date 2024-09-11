const service = 'coffee-microservice';

const express = require('express')
const { getCoffeeFromDb, getCoffeesFromDb } = require('./utils/coffeeDb')
const { logger: parentLogger } = require('./utils/logger')
const app = express()
const port = 7032

const logger = parentLogger.child({service })

app.get('/coffees', async (req, res) => {
  logger.info("received request for all coffees")

  const coffees = await getCoffeesFromDb()

  logger.info({ coffees }, "found coffees")

  res.send(coffees)
})

app.get('/coffee/:id', async (req, res) => {
    const idParam = req.params.id
    logger.info(`received request for coffee ${idParam}`)

    const coffee = await getCoffeeFromDb(idParam)

    logger.info({ coffee }, `found coffee in db ${idParam}`)

    res.send(coffee)
})


app.listen(port, () => {
  logger.info(`${service}  listening on port ${port}`)
})
