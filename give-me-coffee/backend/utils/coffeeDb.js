const { sleep } = require("./sleep")

const coffeeDb = [
    {
        id: '1',
        origin: "Ethiopie",
        format: "Expresso",
    },
    {
        id: '2',
        origin: "Ethiopie",
        format: "Long",
    },
    {
        id: '3',
        origin: "Ethiopie",
        format: "Americano",
    },
    {
        id: '4',
        origin: "Colombie",
        format: "Expresso",
    },
    {
        id: '5',
        origin: "Colombie",
        format: "Long",
    },
    {
        id: '6',
        origin: "Colombie",
        format: "Americano",
    },
]


async function getCoffeesFromDb() {
    await sleep()
    return coffeeDb;
}

async function getCoffeeFromDb(seekId) {
    await sleep()
    return coffeeDb.find(({id}) => id === seekId);
}

async function getRandomCoffeeFromDb() {
    await sleep()
    return coffeeDb[Math.round(Math.random() * coffeeDb.length)];
}

module.exports = {
    getCoffeesFromDb,
    getCoffeeFromDb,
    getRandomCoffeeFromDb,
}
