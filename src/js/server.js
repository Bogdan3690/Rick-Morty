const BASE_URL = "https://rickandmortyapi.com/api"



async function fetchCharacters(page=1, name='', status='', species='', gender=''){
    
    const response = await fetch(`${BASE_URL}/character/?page=${page}&name=${name}&status=${status}&species=${species}&gender=${gender}`)
    const data = await response.json()
    return data
}

export{fetchCharacters}