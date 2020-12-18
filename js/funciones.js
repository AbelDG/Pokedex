const getTypes = async() => {
    let types = [];
    let datos = await getTypesAPI();
    Object.values(datos).forEach(type => {
        types.push(type.name.charAt(0).toUpperCase() + type.name.slice(1));
    });

    return types;

}

const getTypesOfPokemon = (datos) => {
    let arrayTipos = [];
    Object.values(datos).forEach(dato => {
        arrayTipos.push(dato.type.name);
    });
    return arrayTipos;
}



const getColorType = (types) => {
    let arrayColores = [];
    Object.values(types).forEach(type => {
        switch (type.toLowerCase()) {
            case 'normal':
                arrayColores.push('style="background:gray; color:#ffffff""');
                break;
            case 'fighting':
                arrayColores.push('style="background:#940000; color:#ffffff"');
                break;
            case 'flying':
                arrayColores.push('style="background:#58aaca; color:#ffffff"');
                break;
            case 'poison':
                arrayColores.push('style="background:#830094; color:#ffffff"');
                break;
            case 'ground':
                arrayColores.push('style="background:#94672d; color:#ffffff"');
                break;
            case 'rock':
                arrayColores.push('style="background:#704000; color:#ffffff"');
                break;
            case 'bug':
                arrayColores.push('style="background:#8abe0f; color:#ffffff"');
                break;
            case 'ghost':
                arrayColores.push('style="background:#370047; color:#ffffff"');
                break;
            case 'steel':
                arrayColores.push('style="background:#646f7c; color:#ffffff"');
                break;
            case 'fire':
                arrayColores.push('style="background:#f83b01; color:#ffffff"');
                break;
            case 'water':
                arrayColores.push('style="background:#0045e7; color:#ffffff"');
                break;
            case 'grass':
                arrayColores.push('style="background:#06bd00; color:#ffffff"');
                break;
            case 'electric':
                arrayColores.push('style="background:#f1ed00; color:#000000"');
                break;
            case 'psychic':
                arrayColores.push('style="background:#7f4581; color:#ffffff"');
                break;
            case 'ice':
                arrayColores.push('style="background:#00f3fb; color:#ffffff"');
                break;
            case 'dragon':
                arrayColores.push('style="background: linear-gradient(0deg, rgba(34,181,195,0.6783088235294117) 0%, rgba(226,45,253,0.6502976190476191) 100%)"');
                break;
            case 'dark':
                arrayColores.push('style="background:#242424; color:#ffffff"');
                break;
            case 'fairy':
                arrayColores.push('style="background:#c538ae; color:#ffffff"');
                break;
            case 'unknown':
                arrayColores.push('style="background:#222222; color:#ffffff"');
                break;
            case 'shadow':
                arrayColores.push('style="background:#430249; color:#ffffff"');
                break;

            default:

        }
    })
    return arrayColores;
}

const searchPokemon = async(target) => {
    let allPokemon = await getAllPokemonAPI();
    pokeCard.innerHTML = '';
    Object.values(allPokemon.results).forEach((pokemon) => {
        if (pokemon.name === target.value) {
            drawPokemonCard(pokemon);
        }
    })
}

const drawPokemonCard = async(pokemon) => {
    let datosPokemon = await getPokemonByNameAPI(pokemon);
    let newPokemon = {
        id: datosPokemon.id,
        img: datosPokemon.sprites.other.dream_world.front_default,
        nombre: datosPokemon.name.charAt(0).toUpperCase() + datosPokemon.name.slice(1),
        tipo: {
            elemento: getTypesOfPokemon(datosPokemon.types),
            color: getColorType(getTypesOfPokemon(datosPokemon.types))
        },
        exp_base: datosPokemon.base_experience,
        stats: {
            hp: datosPokemon.stats[0].base_stat,
            ataque: datosPokemon.stats[1].base_stat,
            defensa: datosPokemon.stats[2].base_stat,
            ataqueEspecial: datosPokemon.stats[3].base_stat,
            defensaEspecial: datosPokemon.stats[4].base_stat,
            velocidad: datosPokemon.stats[5].base_stat,
        }
    }



    const clone = templates.pokeCard.cloneNode(true);

    clone.querySelector('.card-body-img').setAttribute('src', newPokemon.img);
    clone.querySelector('.card-body-title').innerHTML = `${newPokemon.nombre}  <span>#${newPokemon.id}</span>`;

    clone.querySelector('.card-body-text').innerHTML = `Exp Base: <span>${newPokemon.exp_base}</span>`;
    clone.querySelector('.card-body-text').innerHTML += '<br><br>';
    clone.querySelector('.card-body-text').innerHTML += 'Tipo: ';
    for (let i = 0; i < newPokemon.tipo.elemento.length; i++) {
        clone.querySelector('.card-body-text').innerHTML += `<span ${newPokemon.tipo.color[i]}>${newPokemon.tipo.elemento[i]}</span>`;
        clone.querySelector('.card-body-text').innerHTML += ' ';
    }


    clone.querySelectorAll('.card-footer-stats h3')[0].textContent = newPokemon.stats.hp;
    clone.querySelectorAll('.card-footer-stats h3')[1].textContent = newPokemon.stats.ataque;
    clone.querySelectorAll('.card-footer-stats h3')[2].textContent = newPokemon.stats.defensa;
    clone.querySelectorAll('.card-footer-stats h3')[3].textContent = newPokemon.stats.ataqueEspecial;
    clone.querySelectorAll('.card-footer-stats h3')[4].textContent = newPokemon.stats.defensaEspecial;
    clone.querySelectorAll('.card-footer-stats h3')[5].textContent = newPokemon.stats.velocidad;


    fragment.appendChild(clone);
    pokeCard.appendChild(fragment);
}



const drawAdvancedSearcher = async() => {
    let elementTypes = await getTypes();
    let colorTypes = getColorType(await getTypes());
    const clone = templates.searcherAdvanced.cloneNode(true);
    for (let i = 0; i < elementTypes.length; i++) {
        clone.querySelector('.main-content-searcher-advanced-options-types').innerHTML += `
        <div>
            <div class="main-content-searcher-advanced-options-types-type" ${colorTypes[i]}>${elementTypes[i]}</div>
            <i class="fas fa-circle main-content-searcher-advanced-options-types-checkType"></i>
        </div>
        `;
    }
    generalidades.fragment.appendChild(clone);
    contentSearcher.busquedaAvanzada.append((generalidades.fragment));


}