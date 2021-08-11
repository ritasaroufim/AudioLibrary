import React, { useState } from 'react';

import classes from "./SignIn.css";
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

const signIn = () => {
    const [signInForm, setSignInForm] = useState(
        {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email'
                },
                value: '',
                message: 'Please enter an email',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },

            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Your Password'
                },
                value: '',
                message: 'Please enter a password',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false

            }
        }


    );

    const [formIsValid, setFormIsValid] = useState(false);

    const checkValidity = (value, rules) => {
        let isValid = true;
        console.log(rules);

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        return isValid;


    }



    const inputChangedHandler = (event, inputIdentifier) => {
        const updatedSignInForm = {
            ...signInForm
        };
        const updatedFormElement = {
            ...updatedSignInForm[inputIdentifier]

        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedSignInForm[inputIdentifier] = updatedFormElement;


        let formIsValid = true;
        for (let inputIdentifier in updatedSignInForm) {
            formIsValid = updatedSignInForm[inputIdentifier].valid && formIsValid
        }

        // this.setState({ signInForm: updatedSignInForm, formIsValid: formIsValid });
        setSignInForm(updatedSignInForm);
        setFormIsValid(formIsValid);
    }

    // const submitHandler = (event) => {
    //     event.preventDefault();
    //     props.onAuth(signInForm.email.value, signInForm.password.value);
    // }




    const formElementsArray = [];
    for (let key in signInForm) {
        formElementsArray.push({
            id: key,
            config: signInForm[key]
        });
    }

    const form = formElementsArray.map(formElement => (
        <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            touched={formElement.config.touched}
            message={!formElement.config.valid && formElement.config.touched ? formElement.config.message : null}
            changed={(event) => inputChangedHandler(event, formElement.id)}
        />

    )

    )

    return (
        <div>
            <h1>Sign In</h1>
            <form className={classes.SignIn}>
                {form}
                <Button btnType="Success" disabled={!formIsValid}> Sign in </Button>
                <div>
                    <p>Don't have an accout? Please<a href="/SignUp" > Sign Up </a> here</p>
                </div>
            </form>
        </div>
    );



}

export default signIn;