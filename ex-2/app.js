function buttonTitles() {
    fetch('list.json')
        .then(response => response.json())
        .then(data => {
            let titleList = document.getElementById('title-list');
            let table = document.createElement('table');
            let tr = document.createElement('tr');
            let th1 = document.createElement('th');
            let th2 = document.createElement('th');
            let th3 = document.createElement('th');

            th1.textContent = 'Título';
            th2.textContent = 'Prioridad';
            th3.textContent = '¿Hecho?';

            tr.appendChild(th1);
            tr.appendChild(th2);
            tr.appendChild(th3);
            table.appendChild(tr);

            data.results.forEach(item => {
                let tr = document.createElement('tr');
                let td1 = document.createElement('td');
                let td2 = document.createElement('td');
                let td3 = document.createElement('td');

                td1.textContent = item.title;
                td2.textContent = item.priority;
                td3.textContent = item.isDone ? 'Sí' : 'No';

                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                table.appendChild(tr);
            });

            titleList.appendChild(table);
        })
    .catch(error => console.error(' error encontrado snif snif :( ', error));
}
