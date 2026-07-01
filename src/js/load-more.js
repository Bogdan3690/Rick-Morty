import { createCards } from "./create-markup";
import { fetchCharacters } from "./server";

const btn = document.querySelector(".js-load-more")
const list = document.querySelector(".character-list")
let countOfPages = 1
let page = 1

btn.addEventListener("click", onLoadMoreBtnClick)

async function onLoadMoreBtnClick(params) {
   try {
   page += 1

        btn.disabled = true
   const data = await fetchCharacters(page)
   console.log(data.info.pages);
   countOfPages = data.info.pages

       if (page > countOfPages) {
        console.log(page > countOfPages);
        btn.style.display = "none"
        return
    }
    btn.disabled = false
    createCards(data.results, list)
   } catch (error) {
    console.log(error);

    
   }
}