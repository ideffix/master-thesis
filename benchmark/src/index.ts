import { Builder, By } from 'selenium-webdriver'
import 'chromedriver'
const fs = require('fs')
const path = require('path')

const ITERATIONS = 10;

const main = async () => {
    let driver = await new Builder().forBrowser('chrome').build()
    await benchmarkApp(driver, 'react', 'http://localhost:3000')
    await benchmarkApp(driver, 'vue', 'http://localhost:8080')
    await benchmarkApp(driver, 'angular', 'http://localhost:4200')
}

const benchmarkApp = async (driver, label, address) => {
    const benchResults = {
        create: await createBenchmark(driver, address),
        update: await updateBenchmark(driver, address),
        update10th: await update10thBenchmark(driver, address),
        emphasize: await emphasizeBenchmark(driver, address),
        swap: await swapBenchmark(driver, address),
        clear: await clearBenchmark(driver, address)
    }
    await saveToFile(benchResults, label)
}

const createBenchmark = async (driver, address) => {
    await driver.get(address)
    const times = []
    for (let i = 0; i < ITERATIONS; i++) {
        const start = Date.now()
        await driver.findElement(By.id('create')).click()
        await driver.findElement(By.id('9999'))
        const stop = Date.now()
        times.push(stop - start)
    }
    return calculateStats(times)
}

const updateBenchmark = async (driver, address) => {
    await driver.get(address);
    await driver.findElement(By.id('create')).click()
    await driver.findElement(By.id('9999'));
    const times = [];
    for (let i = 0; i < ITERATIONS; i++) {
        const start = Date.now()
        await driver.findElement(By.id('update')).click()
        await driver.findElement(By.id('9999'))
        const stop = Date.now()
        times.push(stop - start)
    }
    return calculateStats(times)
}

const update10thBenchmark = async (driver, address) => {
    await driver.get(address);
    await driver.findElement(By.id('create')).click()
    await driver.findElement(By.id('9999'));
    const times = [];
    for (let i = 0; i < ITERATIONS; i++) {
        const start = Date.now()
        await driver.findElement(By.id('update10th')).click()
        await driver.findElement(By.id('9999'))
        const stop = Date.now()
        times.push(stop - start)
    }
    return calculateStats(times)
}

const emphasizeBenchmark = async (driver, address) => {
    await driver.get(address);
    const times = [];
    for (let i = 0; i < ITERATIONS; i++) {
        await driver.findElement(By.id('create')).click()
        await driver.findElement(By.id('9999'));
        const start = Date.now()
        await driver.findElement(By.id('5555')).click()
        await driver.findElement(By.className('highlight'))
        const stop = Date.now()
        times.push(stop - start)
        await driver.findElement(By.id('clear')).click()
    }
    return calculateStats(times)
}

const swapBenchmark = async (driver, address) => {
    await driver.get(address);
    await driver.findElement(By.id('create')).click()
    await driver.findElement(By.id('9999'));
    const times = [];
    for (let i = 0; i < ITERATIONS; i++) {
        const start = Date.now()
        await driver.findElement(By.id('swap')).click()
        await driver.findElement(By.id('9997'))
        const stop = Date.now()
        times.push(stop - start)
    }
    return calculateStats(times)
}

const clearBenchmark = async (driver, address) => {
    await driver.get(address);
    const times = [];
    for (let i = 0; i < ITERATIONS; i++) {
        await driver.findElement(By.id('create')).click()
        await driver.findElement(By.id('9999'));
        const start = Date.now()
        await driver.findElement(By.id('clear')).click()
        await driver.findElement(By.id('empty'))
        const stop = Date.now()
        times.push(stop - start)
    }
    return calculateStats(times)
}

const calculateStats = (times) => ({
    max: Math.max(...times),
    min: Math.min(...times),
    average: times.reduce((acc, num) => acc + num, 0) / times.length,
    times,
})

const saveToFile = (stats, label) => {
    fs.writeFileSync(
        path.join(__dirname, '../results', `${label}-${Date.now()}.json`),
        JSON.stringify(stats)
    )
}

main().then(() => console.log('success'))
