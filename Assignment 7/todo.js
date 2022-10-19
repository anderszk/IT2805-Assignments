var counter = 0
var done = 0
let btn = document.getElementById("add-btn");
let active = [];


const addTask = () => {
    counter++;
    let status = document.getElementById("status");
    let task = document.getElementById("task-content").value;
    let content = document.getElementById("content")
    const div = document.createElement('div');

    if (task == ""){return;}

    status.innerHTML= done+" / "+counter+" Tasks Done";

    btn.addEventListener

    div.classList.add("task")
    div.setAttribute("id", counter)
    div.innerHTML = "<p>Task "+counter+"</p><p>"+task+"</p> <input type='checkbox' id='done"+counter+"'>";

    content.appendChild(div);

    div.style.animation = ".8s slide-in";

    document.getElementById("done"+counter).addEventListener("change", () =>{
        done++;
        let donecontent = document.getElementById("donecontent");
        div.style.opacity = "0.6";
        div.style.textDecoration = "line-through";
        document.getElementById("done"+div.getAttribute('id')).disabled = true;
        donecontent.appendChild(div);

        status.innerHTML= done+" / "+counter+" Tasks Done";
    });

    active.push(task+", time:"+new Date().toJSON().slice(0,10).replace(/-/g,'/'));

    console.log(active)
    document.getElementById("task-content").value = ""

}

btn.addEventListener("click", addTask);