

// doLogin => data => set to localStorage


export const doLogin=(data, next) => {
    localStorage.setItem('data',JSON.stringify(data));
    next();
};



// isLoggedIn => cheack if the user is loggedIn
export  const isLoggedIn=()=>{
    let data = localStorage.getItem('data');
    // console.log(data);
    if(data !=null){
        return true;
    }else {
        return false;
    };
};

// doLogout => remove from local storage
export const doLogout=(next)=>{

    localStorage.removeItem('data');
    next();
};

//get current user
export const  getCurrentUserDetails=()=>{
    if(isLoggedIn()){
        return JSON.parse(localStorage.getItem('data'))?.userDetails;
    }else{
        return undefined;
    }
};

//get current user token

export const getToken=()=>{
    if(isLoggedIn()){
        return JSON.parse(localStorage.getItem('data'))?.token;
    }  else return undefined;
}