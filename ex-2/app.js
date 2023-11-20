let data = {
    "results": [
        {
            "title": "Estudiar Js",
            "priority": "alta",
            "isDone": false
        },
        {
            "title": "Estudiar CSS",
            "priority": "alta",
            "isDone": true
        },
        {
            "title": "Estudiar OOP",
            "priority": "media",
            "isDone": false
        },
        {
            "title": "Estudiar IA",
            "priority": "baja",
            "isDone": false
        }
    ]
};


function buttonTitlesAndProperties() {
    let titleList = document.getElementById('title-list');
    titleList.innerHTML = '';

    let todosTable = document.getElementById('todos-table');
    todosTable.style.display = 'block'; // Mostrar la tabla

    data.results.forEach(function(item) {
        let row = document.createElement('tr');

        let titleCell = document.createElement('td');
        titleCell.textContent = item.title;
        row.appendChild(titleCell);

        let priorityCell = document.createElement('td');
        priorityCell.textContent = item.priority;
        row.appendChild(priorityCell);

        let isDoneCell = document.createElement('td');
        isDoneCell.textContent = item.isDone ? 'Sí' : 'No';
        row.appendChild(isDoneCell);

        titleList.appendChild(row);
    });
}
