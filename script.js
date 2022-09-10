document.getElementById('btn-plus').addEventListener('click',function(){
    const inputField = document.getElementById('todo-text');
    const inputText= inputField.value;
    const todos =JSON.parse(localStorage.getItem('TODOS'));

    if(!todos){
        const todoList=[
            {
                name:inputText,
            }
        ]
    localStorage.setItem("TODOS",JSON.stringify(todoList));
    }
    else{
        const todoList=[
            ...todos,
            {
                name:inputText,
            }
        ]
        localStorage.setItem("TODOS",JSON.stringify(todoList));
    }
    render()
})

const render=()=>{
    const todos = JSON.parse(localStorage.getItem('TODOS'));
    const ul = document.getElementById('todo-list');
    ul.innerHTML='';
    console.log(ul);
    todos.forEach(item => {
        const li = document.createElement('li');
        li.innerText=item.name;
        ul.appendChild(li)
    });
}
render()

const clearAll=() =>{
    localStorage.removeItem('TODOS');
    render()
}