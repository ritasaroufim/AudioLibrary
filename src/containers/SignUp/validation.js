
const validation = (values) => {
    let errors = {};

    if (!values.fullname) {
        errors.fullname = "Name is required"
    }
    if (!values.email) {
        errors.email = "Email is required"

    }
    else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is Invalid"
    }
    if (!values.password) {
        errors.password = "password is required"
    }
    else if (values.password.length < 8) {
        errors.password = "Password must be more than 8 characters"
    }
    else if (!/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/.test(values.password)) {
        errors.password = "Password must contains Uppercase and Lowercase letters, Numbers and Symbols"
    }
    if(!values.confirmPassword){
        errors.confirmPassword ="Please enter your confirm password"
    }
    if( values.confirmPassword !== values.password) {
        errors.confirmPassword ="Passwords must match"
        console.log(values.confirmPassword, values.password)
    }
   

    return errors;
}
export default validation;