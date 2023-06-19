let input = document.getElementById("input");

let ToDOItems = document.getElementsByClassName("to-do-items")[0];

input.addEventListener("keydown" , function(event){
    if(event.key === "Enter"){
        addItems();
    }
})
function addItems (){
    let parentDiv = document.createElement("div");
    let childDiv =document.createElement("div");
    let check = document.createElement("i");
    let trash = document.createElement("i"); 

    parentDiv.className="item";
    parentDiv.innerHTML = '<div>' + input.value +'</div>'

    check.className="fa-solid fa-square-check";
    check.style.color="lightgray";
    check.addEventListener("click",function(){
        check.style.color="limegreen";
    })
    childDiv.appendChild(check);

    trash.className="fa-solid fa-trash";
    trash.style.color="darkgray";
    trash.addEventListener("click",function(){
        parentDiv.remove();
    })
    childDiv.appendChild(trash);
    parentDiv.appendChild(childDiv);
    ToDOItems.appendChild(parentDiv);
    input.value="";

}
