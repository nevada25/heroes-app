import {mount} from "enzyme";
import {AppRouter} from "../../routers/AppRouter";
import {AuthContext} from "../../auth/AuthContext";
import {MemoryRouter} from "react-router-dom";

describe('Pruebas en el <AppRouter/>', () => {
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    };
    test('Debe de mostrar login si no esta autenticado', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter/>
            </AuthContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe de mostrar el componente marvel si esta autenticado', () => {
        const contextValue = {
            dispatch: jest.fn(),
            user: {
                name: 'Kevin',
                logged: true
            }
        };
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <AppRouter/>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        //expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.navbar').exists()).toBe(true);
    });

});
