import { Builder, By} from 'selenium-webdriver';
import 'chromedriver';

const bench = async () => {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000')
    console.time('create')
    await driver.findElement(By.id("create")).click()
    await driver.findElement(By.id("9999"));
    console.timeLog('create')
}

bench().then(() => console.log("success"));
