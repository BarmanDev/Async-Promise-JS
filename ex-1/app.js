function consoleFerch() {

fetch('list.json')
    .then(response => response.json())
    //Cuando se resuleve la promesa de arriba se ejecuta la siguiente función .then y recorre el objeto JSON eon un for each
    .then(data => {
        data.results.forEach(item => {
            console.log(item.title);
        });
    })

    .catch(error => console.error('Algo fue mal :(', error));

}

consoleFerch();

function buttonTitles() {
    fetch('list.json')
        .then(response => response.json())
        .then(data => {
            let titleList = document.getElementById('title-list');
            data.results.forEach(item => {
                let p = document.createElement('p');
                p.textContent = item.title;
                titleList.appendChild(p);
            });
        })
        .catch(error => console.error('Algo fue mal nooo :/', error));
    }

    