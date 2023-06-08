//This code make a screenshot of the url
const puppeteer = require('puppeteer')

async function tirarPrint() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://techsos.com.br/')
    await page.screenshot({path: 'example.png'})
    await browser.close()
}
tirarPrint()
