// app.js
import fs from 'fs/promises';

async function getData() {
    try {
        const jsonData = await fs.readFile('list.json', 'utf-8');
        return JSON.parse(jsonData);
    } catch (error) {
        console.error('Error al leer el archivo:', error.message);
        throw error;
    }
}

async function dataConsole() {
    try {
        const result = await getData();
        result.results.forEach((item) => {
            console.log(item.title);
        });
    } catch (error) {
        // Manejar errores si es necesario
    }
}

async function buttonTitles() {
    try {
        const result = await getData();
        let titleList = document.getElementById('title-list');
        titleList.innerHTML = '';
        result.results.forEach((item) => {
            let listItem = document.createElement('h2');
            listItem.textContent = item.title;
            titleList.appendChild(listItem);
        });
    } catch (error) {
        // Manejar errores si es necesario
    }
}

dataConsole();
buttonTitles();
