const new_task = document.getElementById("new-task-input");
const form = document.getElementById("new-task-form");
const task_list = document.querySelector(".task-list");

const tasksArray = localStorage.getItem("tasksArray") ? JSON.parse(localStorage.getItem("tasksArray")) : [];

showAllTasks();
function showAllTasks(){
    tasksArray.forEach((value, index) => {
        const div = document.createElement("div");
        div.setAttribute("id", "tasks");

        const innerDiv = document.createElement("div");
        innerDiv.setAttribute("class", "task");
        div.append(innerDiv);

        const inner_2_Div = document.createElement("div");
        inner_2_Div.setAttribute("class", "content");
        innerDiv.append(inner_2_Div);
        
        const new_input = document.createElement("input");
        new_input.setAttribute("class", "test text");
        // new_input.setAttribute("class", "text");
        new_input.setAttribute("readonly", "readonly");
        new_input.setAttribute("value", value.new_task);
        inner_2_Div.append(new_input);
        
        const actions = document.createElement("div");
        actions.setAttribute("class", "actions");
        innerDiv.append(actions);
        
        
        /*const buttonEdit = document.createElement("button");
        buttonEdit.setAttribute("class", "edit");
        buttonEdit.innerText = "EDIT";
        buttonEdit.addEventListener("click", ()=>{
        
            if(buttonEdit.innerText.toLowerCase() == "edit"){
                new_task.removeAttribute("readonly");
                buttonEdit.innerText == "SAVE";
            }
        }) 
        actions.append(buttonEdit);*/
        
        const buttonDel = document.createElement("button");
        buttonDel.setAttribute("class", "delete");
        buttonDel.innerText = "DELETE";
        buttonDel.addEventListener("click", ()=>{
            removeAll();
            tasksArray.splice(index, 1);
            console.log(localStorage.setItem("tasksArray", JSON.stringify(tasksArray)));
            localStorage.setItem("tasksArray", JSON.stringify(tasksArray));
            showAllTasks();
        })
        actions.append(buttonDel);


        task_list.append(div);
        
        new_task.setAttribute("placeholder", "What have you planned..?");
    })
}

function removeAll(){
    tasksArray.forEach(()=>{
        const div = document.querySelector(".task"); 
        div.remove();
    });
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    removeAll();
    tasksArray.push({
        new_task : new_task.value,
    });
    localStorage.setItem("tasksArray", JSON.stringify(tasksArray));
    showAllTasks();
//new_task.setAttribute("placeholder", "What have you planned..?");
})


