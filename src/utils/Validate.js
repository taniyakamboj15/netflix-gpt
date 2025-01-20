export const checkValidData=(Email,Password)=>{
    const isEmailValid=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(Email);
    const isPassword= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+.]).{6,20}$/.test(Password);

    if(!isEmailValid) return "Email is not valid";
    if(!isPassword) return "password is not valid";

    return null;
}