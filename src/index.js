import "./styles.css";
import pizzaImage from './pizza.webp'
import breadImage from './bread.svg'
import wingsImage from './wings.webp'
import backgroundMain from './cowboy-background.jpg'
import backgroundMenu from './pizza-background.webp'
import backgroundContact from './contact-background.jpg'
import { greeting } from "./greeting.js";

pageLoad()

// loads homepage using eventlistener
document.querySelector('#home').addEventListener('click', function () {
    clearPage()
    pageLoad()
})

//load menu page using eventlistener
document.querySelector('#menu').addEventListener('click', function () {
    clearPage()
    menuLoad()
})

//load contact page using eventlistener
document.querySelector('#contact').addEventListener('click', function () {
    clearPage()
    contactLoad()
})

function clearPage () {
    const content = document.querySelector('#content')
    content.innerHTML = ''
}

function pageLoad() {
    const content = document.querySelector('#content')
    const body = document.querySelector('body')
    body.style.backgroundImage = `url(${backgroundMain})`
    const h1 = document.createElement('h1')
    h1.textContent = 'Pizza Ranch'
    content.appendChild(h1)
    const h2 = document.createElement('h2')
    h2.textContent = 'Cheese Stuffed Crust'
    content.appendChild(h2)
    const p = document.createElement('p')
    p.textContent = "Pizza ranch is one of Costa Rica's top pizza restaurants. With world class ingredients, you can choose from a variety of sauces, crust styles, and cheese to create the pizza of your dreams."
    p.classList.add('info')
    content.appendChild(p)
    const hoursDiv = document.createElement('div')
    hoursDiv.textContent = "Hours of operation:"
    hoursDiv.classList.add('info')
    const list = document.createElement('ul')
    const li1 = document.createElement('li')
    li1.textContent = 'Monday: 5pm-10pm'
    list.appendChild(li1)
    const li2 = document.createElement('li')
    li2.textContent = 'Tuesday: 5pm-10pm'
    list.appendChild(li2)
    const li3 = document.createElement('li')
    li3.textContent = 'Wednesday: 5pm-10pm'
    list.appendChild(li3)
    const li4 = document.createElement('li')
    li4.textContent = 'Thursday: 5pm-10pm'
    list.appendChild(li4)
    const li5 = document.createElement('li')
    li5.textContent = 'Friday: 5pm-10pm'
    list.appendChild(li5)
    const li6 = document.createElement('li')
    li6.textContent = 'Saturday: 5pm-11pm'
    list.appendChild(li6)
    const li7 = document.createElement('li')
    li7.textContent = 'Sunday: Closed'
    list.appendChild(li7)
    hoursDiv.appendChild(list)
    content.appendChild(hoursDiv)
    const imgs = document.createElement('div')
    imgs.style.backgroundColor = 'white'
    imgs.style.padding = '1em'
    imgs.style.borderRadius = '23em'
    imgs.style.border = '2px dotted lightgray'
    imgs.classList.add('imgs')
    content.appendChild(imgs)
    const img1 = document.createElement('img')
    img1.src = pizzaImage
    imgs.appendChild(img1)
    const img2 = document.createElement('img')
    img2.src = breadImage
    imgs.appendChild(img2)
    const img3 = document.createElement('img')
    img3.src = wingsImage
    imgs.appendChild(img3)
    content.appendChild(imgs)
}

function menuLoad() {
    const content = document.querySelector('#content')
    const h1 = document.createElement('h1')
    h1.textContent = 'Menu'
    content.appendChild(h1)
    const body = document.querySelector('body')
    body.style.backgroundImage = `url(${backgroundMenu})`
    const crustDiv = document.createElement('div')
    crustDiv.textContent = "Types of Crust:"
    crustDiv.classList.add('info')
    const crustList = document.createElement('ul')
    const li1 = document.createElement('li')
    li1.textContent = 'Thin'
    crustList.appendChild(li1)
    const li2 = document.createElement('li')
    li2.textContent = 'Normal'
    crustList.appendChild(li2)
    const li3 = document.createElement('li')
    li3.textContent = 'Thick'
    crustList.appendChild(li3)
    const li4 = document.createElement('li')
    li4.textContent = 'Cheese Stuffed Crust'
    crustList.appendChild(li4)
    crustDiv.appendChild(crustList)
    content.append(crustDiv)
    const sauceDiv = document.createElement('div')
    sauceDiv.classList.add('info')
    sauceDiv.textContent = 'Types of Sauce:'
    const sauceList = document.createElement('ul')
    const li11 = document.createElement('li')
    li11.textContent = 'BBQ'
    sauceList.appendChild(li11)
    const li22 = document.createElement('li')
    li22.textContent = 'Ranch'
    sauceList.appendChild(li22)
    const li33 = document.createElement('li')
    li33.textContent = 'Marinera'
    sauceList.appendChild(li33)
    const li44 = document.createElement('li')
    li44.textContent = 'Buffalo'
    sauceList.appendChild(li44)
    sauceDiv.appendChild(sauceList)
    content.appendChild(sauceDiv)
    const toppingsDiv = document.createElement('div')
    toppingsDiv.classList.add('info')
    toppingsDiv.textContent = 'Toppings:'
    const toppingsList = document.createElement('ul')
    const li01 = document.createElement('li')
    li01.textContent = 'BBQ'
    toppingsList.appendChild(li01)
    const li02 = document.createElement('li')
    li02.textContent = 'Ranch'
    toppingsList.appendChild(li02)
    const li03 = document.createElement('li')
    li03.textContent = 'Marinera'
    toppingsList.appendChild(li03)
    const li04 = document.createElement('li')
    li04.textContent = 'Buffalo'
    toppingsList.appendChild(li04)
    toppingsDiv.appendChild(toppingsList)
    content.appendChild(toppingsDiv)
}

function contactLoad() {
    const content = document.querySelector('#content')
    const body = document.querySelector('body')
    body.style.backgroundImage = `url(${backgroundContact})`
    const h1 = document.createElement('h1')
    h1.textContent = "Contact Information"
    content.appendChild(h1)
    const h2 = document.createElement('h2')
    h2.textContent = 'Reach Out To Us!'
    content.appendChild(h2)
    const div = document.createElement('div')
    div.classList.add('info')
    const ul = document.createElement('ul')
    const li1 = document.createElement('li')
    li1.textContent = "Phone: 1234-5678"
    ul.appendChild(li1)
    const li2 = document.createElement('li')
    li2.textContent = "Email: pizzaranch@theranch.org"
    ul.appendChild(li2)
    const li3 = document.createElement('li')
    li3.textContent = 'Fax: 1234-5678'
    ul.appendChild(li3)
    const li4 = document.createElement('li')
    li4.textContent = "Address: 198 The Ranch Drive"
    ul.appendChild(li4)
    const li5 = document.createElement('li')
    li5.textContent = "The Ranch, Costa Rica"
    ul.appendChild(li5)
    div.appendChild(ul)
    content.appendChild(div)


}