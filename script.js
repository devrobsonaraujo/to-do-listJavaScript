const inputElement = document.querySelector('.new-task-input')
const addTaskButton = document.querySelector('.new-task-button')

const tasksContainer = document.querySelector('.tasks-container')

/* === Inicio - Função para validação === */
const validateInput = () => {
    return inputElement.value.trim().length > 0
}


const handleAddTask = () => {
    const inputIsValid = validateInput()
    console.log(inputIsValid)
    if (!inputIsValid) {
        return inputElement.classList.add('error')
    }

    /* === Inicio - Adição de Tarefa === */
    const taskItemContainer = document.createElement('div')
    taskItemContainer.classList.add('task-item')


    

    const taskContent = document.createElement('p')
    taskContent.innerText = inputElement.value

   

    const deleteItem = document.createElement('i')
    deleteItem.classList.add('fa-light')
    deleteItem.classList.add('fa-trash-can')

    

    taskItemContainer.appendChild(taskContent)
    taskItemContainer.appendChild(deleteItem)

    tasksContainer.appendChild(taskItemContainer)

    /** Limpando o Input */
    inputElement.value = ''

    

}

const handleInputChange = () => {
    const inputIsValid = validateInput()
    if (inputIsValid) {
        return inputElement.classList.remove('error')
    }
}

addTaskButton.addEventListener('click', () => handleAddTask())

inputElement.addEventListener('change', () => handleInputChange())

/* === Fim - Função para validação === */






