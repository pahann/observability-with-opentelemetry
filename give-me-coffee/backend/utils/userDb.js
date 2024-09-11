const { logger } = require("./logger");
const { sleep } = require("./sleep")
const { faker } = require('@faker-js/faker');


const userDb = [
    {
        id: '1',
        firstName: "Fabien",
        lastName: "Veillance",
    },
    {
        id: '2',
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
    },
    {
        id: '3',
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
    },
]


async function getUserFromDb(seekId) {
    await sleep()
    const user = userDb.find(({id}) => id === seekId);
    logger.info(user, 'found user');
    return user;
}

async function getRandomUserFromDb() {
    await sleep()
    return {
        id: faker.number.int(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
    };
}

module.exports = {
    getUserFromDb,
    getRandomUserFromDb,
}
