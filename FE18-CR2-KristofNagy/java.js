/*let todo = [{

    taskName: "Shopping",

    image: "images/planner.jpg",

    description: "Shop for weekly groceries at Billa and Hofer.",

    importance: 0

}, {

    taskName: "Walk with the Dog",

    image: "images/planner.jpg",

    description: "Shop for weekly groceries at Billa and Hofer.",

    importance: 0

}, {

    taskName: "Running",

    image: "images/planner.jpg",

    description: "Shop for weekly groceries at Billa and Hofer.",

    importance: 0

}, {

    taskName: "Clean the apartment",

    image: "images/planner.jpg",

    description: "Shop for weekly groceries at Billa and Hofer.",

    importance: 0

}, {

    taskName: "Video call with the Parents",

    image: "images/planner.jpg",

    description: "Shop for weekly groceries at Billa and Hofer.",

    importance: 0

}, {

    taskName: "Clean the car",

    image: "images/planner.jpg",

    description: "Shop for weekly groceries at Billa and Hofer.",

    importance: 0

}, {

    taskName: "Caffe with John Doe",

    image: "images/planner.jpg",

    description: "Shop for weekly groceries at Billa and Hofer.",

    importance: 0

}, {

    taskName: "Cook",

    image: "images/planner.jpg",

    description: "Shop for weekly groceries at Billa and Hofer.",

    importance: 0

}];*/

//parse json

let todo = JSON.parse(todos);

//cards
var text1 = ""
text1 += `<div class="row row-cols-lg-3 row-cols-md-2  row-cols-sm-1 row-gap-2">`

for (let val of todo) {

    text1 += `
    <div>
        <div class="card " style="width: 18rem;">
            <img src="${val.image}" class="card-img-top" alt="picture">
            <div class="card-body">
                <h5 class="card-title">${val.taskName}</h5>
                <p class="card-text">${val.description}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item level " >priority level: <span class="numbers"> ${val.importance} </span></li>
            <li class="list-group-item">Deadline: 11.02.2023</li>
  
        </ul>
        <div class="card-body">
            <p class="btn btn-success">Done</p>
            <p class="btn btn-danger">Delete</p>
            <p class="btn btn-warning importanceBtn">Importance</p>

        </div>
        </div>
    </div>`

}

text1 += `</div>`
document.getElementById("card").innerHTML = text1;

//importance

let btns = document.getElementsByClassName("importanceBtn");
let level1 = document.getElementsByClassName("numbers");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        todo[i].importance++;
        level1[i].innerHTML = `${todo[i].importance}`;
        if (todo[i].importance < 2) {
            level1[i].style.backgroundColor = "green";
        } else if (todo[i].importance > 1 && todo[i].importance < 4) {
            level1[i].style.backgroundColor = "orange";
        } else {
            level1[i].style.backgroundColor = "red";
        }


        //document.getElementsByClassName("level")[i].innerHTML = "priority level: " + todo[i].importance;

    })
}



//sort function

document.getElementById("sort").addEventListener("click", sort);


function sort() {
    todo.sort(function(a, b) {
        return b.importance - a.importance;
    });

    var text = "";

    text += `<div class="row row-cols-lg-3 row-cols-md-2  row-cols-sm-1 row-gap-2">`

    for (let val of todo) {
        text += `
        
        <div class="" >
            <div class="" style="width: 18rem;">
                <img src="${val.image}" class="card-img-top" alt="picture">
                <div class="card-body">
                    <h5 class="card-title">${val.taskName}</h5>
                    <p class="card-text">${val.description}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item level " >priority level: <span class="numbers"> ${val.importance} </span></li>
                    <li class="list-group-item">Deadline: 11.02.2023</li>
  
                </ul>
                <div class="card-body">
                    <p class="btn btn-success">Done</p>
                    <p class="btn btn-danger">Delete</p>
                    <p class="btn btn-warning importanceBtn">Importance</p>

                </div>
            </div>
        </div>`
    }
    text += `</div>`

    document.getElementById("card").innerHTML = text;

}