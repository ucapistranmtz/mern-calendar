import { useDispatch, useSelector } from "react-redux"
import { calendarApi } from "../api";
import { onChecking, onLogin, onLogout, clearErrorMessage, onLogoutCalendar } from '../store'

export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async ({ email, password }) => {

        console.log('startLogin', email, password);
        dispatch(onChecking());

        try {
            const { data } = await calendarApi.post('/auth', { email, password })

            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({ name: data.name, uid: data.uid }))


        } catch (error) {
            dispatch(onLogout('Invalid Credentials'));
            setTimeout(() => {
                dispatch(clearErrorMessage())
            }, 10)
        }
    }

    const startRegister = async ({ email, password, name }) => {
        dispatch(onChecking());
        try {


            const { data } = await calendarApi.post('/auth/new', { email, password, name });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({ name: data.name, uid: data.uid }));

        } catch (error) {
            //console.error(error)
            dispatch(onLogout(error.response.data?.msg || '--'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }
    }


 
    const checkAuthToken = async () => {

        const token = localStorage.getItem('token');

        if (!token) {
            return dispatch(onLogout());
        }

        try {

            const { data } = calendarApi.get('auth/renew');
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({ name: data.name, uid: data.uid }))
        } catch (error) {
            localStorage.clear();
            dispatch(onLogout());
        }
    }


    const startLogout = () => {
        localStorage.clear();
        dispatch( onLogoutCalendar() );
        dispatch( onLogout() );
    }
   
 


    return {
        //*properties
        status,
        user,
        errorMessage,

        //*methods
        startLogin,
        startRegister,
        checkAuthToken,
        startLogout
        
    }
}