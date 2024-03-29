

import axios from '../api/axios'
import useAuth from './useAuth'


const useLogout = () => {
    const {setAuth} = useAuth();

    const logout = async () => {
         setAuth({});
         try{
            const response = await axios('logout', {
                withCredentials:true
            });

            return response.data;
         }

         catch(error){

            console.log({error:error, })
                
         }
    }
    return logout;
}
 
export default useLogout;