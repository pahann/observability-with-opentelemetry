async function sleep(duration = generateLatency()) {
    return new Promise((res) => setTimeout(res, duration))
}

function generateLatency() {
    return Math.random() * 30000
}

module.exports = {
    generateLatency,
    sleep,
}
