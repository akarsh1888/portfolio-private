import { allCities } from "./data";

const getSuggestions = (keyword) => {
    const result = allCities.filter((i) => i.substr(0, keyword.length).toLowerCase() === keyword.toLowerCase());
    return new Promise((res, rej) => {
        setTimeout(() => res(result), 1000)
    });
}



