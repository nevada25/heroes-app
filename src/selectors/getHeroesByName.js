import {heroes} from '../data/heroes';

export const getHeroesByName = (name = '') => {
    if (name === '') {
        return [];
    }
    name = name.toLocaleUpperCase();
    return heroes.filter(hero => hero.superhero.toLocaleUpperCase().includes(name));
}
