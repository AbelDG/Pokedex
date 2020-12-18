const getAllPokemonAPI = async() => {
    let data = {};
    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=2000`);
        data = await resp.json();
    } catch (error) {
        console.log(error);
    }
    return data;
}

const getPokemonByNameAPI = async(pokemon) => {
    let data = {};
    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        data = await resp.json();
    } catch (error) {
        console.log(error);
    }
    return data;
}

const getTypesAPI = async() => {
    let data = {};
    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/type`);
        data = await resp.json();
    } catch (error) {
        console.log(error);
    }

    return data.results;
}