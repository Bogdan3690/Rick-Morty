const BASE_URL = "https://rickandmortyapi.com/api"


let characterName = ''


async function fetchCharacters(page=1, name, status='', species='', gender=''){
    if (name) {
        
    characterName = name
    }

    const response = await fetch(`${BASE_URL}/character/?page=${page}&name=${characterName}&status=${status}&species=${species}&gender=${gender}`)
    const data = await response.json()
    return data
}

export{fetchCharacters}