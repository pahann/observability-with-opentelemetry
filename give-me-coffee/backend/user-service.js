const service = 'user-microservice';

const express = require('express')
const { getUserFromDb } = require('./utils/userDb')
const { logger: parentLogger } = require('./utils/logger')
const app = express()
const port = 7031

const logger = parentLogger.child({service })

app.get('/user/:id', async (req, res) => {
    const idParam = req.params.id
    logger.info(`received request for user ${idParam}`)

    const user = await getUserFromDb(idParam)

    logger.info({ user }, `found user in db ${idParam}`)

    res.send(user)
})

app.listen(port, () => {
  logger.info(`${service}  listening on port ${port}`)
})
