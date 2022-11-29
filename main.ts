import './style.css'

let errorsInp: HTMLUListElement = document.querySelector('#errors')!
let inputName: HTMLInputElement = document.querySelector('#name')!
let inputPhone: HTMLInputElement = document.querySelector('#phone')!
let inputMessage: HTMLTextAreaElement = document.querySelector('#message')!
let btnSave: HTMLButtonElement = document.querySelector('#save')!
let result: HTMLElement = document.querySelector('#result')!

function sendForm(): void {
    let errors: string[] = []

    if (!isNaN(parseInt(inputName.value))) errors.push('El nombre no puede ser un número')
    if (inputName.value === '') errors.push('El nombre es obligatorio')
    if (inputPhone.value === '') errors.push('El teléfono es obligatorio')
    if (inputMessage.value === '') errors.push('El mensaje es obligatorio')
    
    result.textContent = ''
    printErrors(errors)
    if (errors.length === 0) {
      result.textContent = ''
      let nuevop = document.createElement('p')
      nuevop.textContent = "Mensaje enviado con éxito." 
      result.appendChild(nuevop)
    }
}

function printErrors(errors: string[]): void {
  errorsInp.textContent = '' 
    errors.forEach(function(message) {
        let nuevoLi = document.createElement('li')
        nuevoLi.textContent = message
        errorsInp.appendChild(nuevoLi)
    })
}

btnSave.addEventListener('click', sendForm)