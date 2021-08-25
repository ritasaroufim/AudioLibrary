import React, { useEffect, useState, useCallback } from 'react';
import validation from './validation';
import classes from './SignUp.css';
//import axios from 'axios';
import app from "../../base.js";
import { withRouter } from "react-router";



const SignUpForm = ({ submitForm, history }) => {

    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch (error) {
            alert(error);
        }
    }, [history]);

    const [values, setValues] = useState({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);
    // const [formValidation, setFormValidation] = useState({
    //     name:{
    //         isValid:false,
    //     },
    //     email:{
    //         isValid:false,
    //     },
    //     password:{
    //         isValid:false,
    //     },
    //     confirmPassword:{
    //         isValid:false,
    //     }
    // })

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
        setErrors(validation(values));
        setDataIsCorrect(true);
    }

    // const handleFormSubmit = (event) => {
    //     event.preventDefault();
    //     setErrors(validation(values));
    //     setDataIsCorrect(true);
    //     const user = {
    //         email: values.email,
    //         password: values.password
    //     }

    //         axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDIhzkYewu21SbgqaQq6fGvR6NC2ZG63to', user)
    //             .then(response => console.log(response))
    //             .catch(error => console.log(error));
    //     };


    useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIsCorrect) {
            submitForm(true);
        }

    }, [errors]);

    return (
        <div className={classes.Container}>
            <div className={classes.AppWrapper}>
                <div className={classes.Title}>
                    <h2>
                        Create Account
                    </h2>
                </div>
                <form onSubmit={handleSignUp} className={classes.FormWrapper}>
                    <div className={classes.Name}>
                        <label className={classes.Label}>Full Name</label>
                        <input className={classes.Input}
                            type="text"
                            name="fullname"
                            value={values.fullname}
                            onChange={handleChange}
                        />
                        {errors.fullname && <p className={classes.ErrorMsg}>{errors.fullname}</p>}
                    </div>
                    <div className={classes.Email}>
                        <label className={classes.Label}>Email</label>
                        <input className={classes.Input}
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className={classes.ErrorMsg}>{errors.email}</p>}
                    </div>
                    <div className={classes.Password}>
                        <label className={classes.Label}>Password</label>
                        <input className={classes.Input}
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p className={classes.ErrorMsg}>{errors.password}</p>}
                    </div>
                    <div className={classes.confirmPassword}>
                        <label className={classes.Label}>Confirm Password</label>
                        <input className={classes.Input}
                            type="password"
                            name="confirmPassword"
                            value={values.confirmPassword}
                            onChange={handleChange}
                        />
                        { values.confirmPassword !== values.password && errors.confirmPassword && <p className={classes.ErrorMsg}>{errors.confirmPassword}</p>}
                    </div>
                    <div>
                        <button className={classes.Submit} type="submit">Sign Up</button>
                    </div>
                    <div className={classes.Paragraph}>
                        <p>Already have an accout? Please<a href="/SignIn" > Sign in </a>here</p>
                    </div>
                </form>
            </div>

        </div>);
};

export default withRouter(SignUpForm);