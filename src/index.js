import "./styles.css";
import pizzaImage from './pizza.webp'
import breadImage from './bread.svg'
import wingsImage from './wings.webp'
import { greeting } from "./greeting.js";

function pageLoad() {
    const content = document.querySelector('#content')
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
