import { myAxios } from "./helper";

export const signUp=(user)=>{
    return myAxios
    .post('/api/auth/register',user);
    
};

export const userLogin=(loginDetails)=>{
    return myAxios
    .post('/api/auth/login',loginDetails);
}
