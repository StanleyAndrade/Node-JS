//Confing
//Importando o express + Lembre de importar na pasta index: require('./modules/express')
const express = require('express')
//Inicializando o Express e colocando na variavel router1
const puppeteerExpress = express()
//importando o Puppeteer
const puppeteer = require('puppeteer')

//Criar PDF
async function createPDF() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://techsos.com.br/', {
        waitUntil: 'networkidle2',
    })
    await page.pdf({
        path: 'arquivo.pdf',
        format: 'letter',
    })
    await browser.close()
}
createPDF()

//This code make a screenshot of the url
async function tirarPrint() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://techsos.com.br/')
    //await page.screenshot({path: 'example.png'})
    await page.setViewport({width: 1365, height: 923});
    //await browser.close()
}
tirarPrint()

//Screenshot FULLPAGE
async function tirarPrintFullPage() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    //simula celular iphone 6
    //await page.emulate(puppeteer.devices['iPhone 6']);
    await page.goto('https://techsos.com.br/')
    //largura e altura
    await page.setViewport({width: 1365, height: 923});
    await page.screenshot({path: 'fullpage3.png', fullPage: true})
    await browser.close()
}
tirarPrintFullPage()
