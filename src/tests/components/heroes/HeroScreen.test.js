import {mount, shallow} from "enzyme";
import {HeroScreen} from "../../../components/heroes/HeroScreen";
import {MemoryRouter, Route, Router} from "react-router-dom";

describe('Pruebas de <HeroScreen/>', () => {
    const history = {
        length: 10,
        listen: jest.fn(),
        push: jest.fn(),
        goBack: jest.fn()
    };/*
    test('Debe de mostar el componente redirect si no hat arquimentos en el URL', () => {
        const wrapper = shallow(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroScreen history={history}/>
            </MemoryRouter>
        );
        expect(wrapper.find('Rdirect').exists()).toBe(false);
    });*/
    /*test('Debe de mostra run hero si el parametro existe y se encuentra', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/dc-batman']}>
                    <Route path="/hero/:heroeId" component={<HeroScreen history={history}/>}/>
            </MemoryRouter>
        );
        expect(wrapper.find('.row').exists()).toBe(true);
    })*/
    test('Debe de mostra run hero si el parametro existe y se encuentra', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/dc-batman']}>
                <Route path="/hero/:heroeId" component={<HeroScreen history={history}/>}/>
            </MemoryRouter>
        );
        wrapper.find('button').prop('onClick')();
        expect(history.push).toHaveBeenCalledTimes(0);
        expect(history.goBack).toHaveBeenCalled();

    })
});
