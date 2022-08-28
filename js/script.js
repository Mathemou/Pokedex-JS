const nomePokemon = document.querySelector('.pokemonName')
const numeroPokemon = document.querySelector('.pokemonNumber')
const imagemPokemon = document.querySelector('.pokemonImage')
const form = document.querySelector('.form')
const input = document.querySelector('.inputSearch')
const btnAnt = document.querySelector('.btn-ant')
const btnProx = document.querySelector('.btn-prox')
let idAtual = 1
const buscaPokemon = async (pokemon) =>{
    const respostaAPI = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    if(respostaAPI.status===200){
        const dados = await respostaAPI.json()
        return dados;
    }
    

}

const renderizarPokemon = async (pokemon) => {
    nomePokemon.innerHTML = 'Procurando...'
    numeroPokemon.innerHTML = ''
    const dados = await buscaPokemon(pokemon)
    if(dados){
    idAtual = dados.id
    nomePokemon.innerHTML = dados.name
    numeroPokemon.innerHTML = dados.id + ' - '
    imagemPokemon.src = dados['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
    } else {
    nomePokemon.innerHTML = 'Não encontrado'
    numeroPokemon.innerHTML =''
    imagemPokemon.src = '#'
    
    }
}
form.addEventListener('submit', (event) =>{
    event.preventDefault()
    renderizarPokemon(input.value.toLowerCase())
    input.value=''
})
btnAnt.addEventListener('click', () =>{
    if(idAtual>1){
        idAtual -= 1;
        renderizarPokemon(idAtual);
    }
})
btnProx.addEventListener('click', () =>{
    idAtual += 1;
    renderizarPokemon(idAtual)
})

renderizarPokemon(idAtual)