import toast from "react-hot-toast";

const tostOption = {
    position:'top-center',
    duration:4000,
    className:'bg-dark text-light'
}

let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const registertoaster = (email, name, password) =>{
    var re = {
        capital: /(?=.*[A-Z])/,
        length: /(?=.{7,40}$)/,
        specialChar: /[ -\/:-@\[-\`{-~]/,
        digit: /(?=.*[0-9])/,
    };
    
    
    if(name === ""){
            toast.error("username is required",tostOption);
        return  false;

        }
    if(email === ""){
        toast.error("email is required",tostOption);
        return  false;
    }
    if(password === ""){
            toast.error("password is required",tostOption);
        return  false;

    }
    if(!regEmail.test(email)){
      toast.error("Email is not in form",tostOption);
        return  false;
    }
    if(!(re.capital.test(password) &&
        re.length.test(password) &&
        re.specialChar.test(password) &&
        re.digit.test(password))){
        toast.error("Password should contain all characters",tostOption);
        return  false;  
    }
    else{
        return true;
    }
}

export const loginToaster = (email,password) =>{
     
    if(email === ""){
        toast.error("email is required",tostOption);
        return  false;
    }
    if(password === ""){
            toast.error("password is required",tostOption);
        return  false;

    }
    if(!regEmail.test(email)){
      toast.error("Email is not in form",tostOption);
        return  false;
    }
    else{
        return true;
    }
}