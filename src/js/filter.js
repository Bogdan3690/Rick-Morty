import { createCards } from "./create-markup"
import { fetchCharacters } from "./server"

const input = document.querySelector(".name")
const btn = document.querySelector(".filter-name-btn")
const status = document.querySelector("#status")
const species = document.querySelector("#species")
const gender = document.querySelector("#gender")
const list = document.querySelector(".character-list")
console.log(input);

// input.addEventListener("input", onInput)
btn.addEventListener("click", onInput)

async function onInput(e) {

            const value = input.value
    console.log(value);
    try {

    const data = await fetchCharacters(1, value)
    list.innerHTML= ""
    createCards(data.results)
    } catch (error) {
        console.log(error);
        
    }
}

