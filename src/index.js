document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('form')
    form.addEventListener('submit',(e) => {
    e.preventDefault()
    handleMyToDo(e.target.new-task-description.value)
  })
})

function handleMyToDo(mytodo){
let p = document.createElement('p')
let btn = document.createElement('button')
btn.addEventListener('click', handleDelete)
btn.textContent = 'x'
p.textContent = `${mytodo}`
p.appendChild(btn)
console.log(p)
document.querySelector('#mytodo_container').appendChild(p)
}

function handleDelete(e){
  e.target.parentNode.remove()
}
