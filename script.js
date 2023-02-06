var selectedRow = null;


//show Alerts

function showAlert(message,className){
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div,main);
    setTimeout(() => document.querySelector(".alert".remove(),3000));
}


//Edit Data

document.querySelector("#student-list").addEventListener("click",(e) =>{
    target = e.target;
    if(target.classList.contains("edit")){
        selectedRow = target.parentElement.parentElement.parentElement;
        document.querySelector("#firstName").value = selectedRow.children[0].textContent;
        document.querySelector("#firstName").value = selectedRow.children[0].textContent;
        document.querySelector("#firstName").value = selectedRow.children[0].textContent;
        document.querySelector("#firstName").value = selectedRow.children[0].textContent;
    }
})




//Delete Data

document.querySelector("#student-list").addEventListener("click",(e) =>{
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.parentElement.remove();
        showAlert("Data is deleted","danger");
    }
})




