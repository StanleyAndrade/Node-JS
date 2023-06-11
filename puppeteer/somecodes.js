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
const puppeteer = require('puppeteer')

async function tirarPrint() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://techsos.com.br/')
    await page.screenshot({path: 'example.png'})
    await browser.close()
}
tirarPrint()
