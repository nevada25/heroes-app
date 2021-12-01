import {mount} from "enzyme";
import {Navbar} from "../../../components/ui/Navbar";
import {AuthContext} from "../../../auth/AuthContext";
import {MemoryRouter, Router} from "react-router-dom";
import {types} from "../../../types/types";

describe('Pruebas en  <NavBar/>', () => {
    const historyMock = {
        push: jest.fn(),
        location: {},
        replace: jest.fn(),
        listen: jest.fn(),
        createHref: jest.fn()
    };
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            name: 'Antony',
            logged: true
        }
    };
    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Router history={historyMock}>
                    <Navbar/>
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );
    afterEach(() => {
        jest.clearAllMocks();
    });
    test('debe de mostrase correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe(contextValue.user.name.toLocaleUpperCase());
    });
    test('Debe de llamar el logout y usar el history', () => {
        wrapper.find('button').prop('onClick')();
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.logout
        })
        expect(historyMock.replace).toHaveBeenCalledWith('/login');
    })
});
