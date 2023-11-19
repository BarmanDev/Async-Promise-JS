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


function dataConsole(){
data.results.forEach(function(item) {
    console.log(item.title);
});

}

function buttonTitles() {
    let titleList = document.getElementById('title-list');
    titleList.innerHTML = '';
    data.results.forEach(function(item) {
        let listItem = document.createElement('h2'); 
        listItem.textContent = item.title; 
        titleList.appendChild(listItem); 
    });
}



dataConsole();