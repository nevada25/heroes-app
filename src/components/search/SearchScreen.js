import {HeroCard} from "../heroes/HeroCard";
import {useForm} from "../../hooks/useForm";
import {useLocation} from "react-router-dom";
import queryString from 'query-string';
import {getHeroesByName} from "../../selectors/getHeroesByName";
import {useMemo} from "react";

export const SearchScreen = ({history}) => {
    const location = useLocation();
    const {q = ''} = queryString.parse(location.search);

    const [{searchText}, handleInputChange] = useForm({
        searchText: q
    });

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchText.trim().length <= 1) {
            return;
        }
        history.push(`?q=${searchText}`);
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="searchText"
                            onChange={handleInputChange}
                            value={searchText}
                            placeholder="Find your Hero..."
                            className="form-control"
                            autoComplete="off"
                        />
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>

                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>
                    {(q === '') && <div className="alert alert-info text-center">
                        Search a hero
                    </div>}
                    {(q !== '' && heroesFiltered.length === 0) && <div className="alert alert-danger text-center">
                        There is no a hero with {q}
                    </div>}

                    {

                        heroesFiltered.map(hero => (
                            <HeroCard key={hero.id} {...hero}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
