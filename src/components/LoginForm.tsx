import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import React, { useState } from "react";
import {Link} from 'react-router-dom'

// this liberary is for handle the form
import { useFormik } from "formik";
import LoginPageValidation from "./ValidationSchema/LoginPageValidation";
const initialValues = {
	name:"",
	password:""
}
const LoginForm = () => {
	const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
		initialValues:initialValues,
		validationSchema:LoginPageValidation,
		onSubmit : (value,action) =>{
			console.log("Values : ", value)
			action.resetForm();
		}
	})
	console.log("Error : ",errors)

	// const [name, setName] = useState('')
	// const [password, setPassword] = useState('')
	return (
		<div>
			<h1 className="mx-auto text-primary text-center">Login Form</h1>
            <Card className="mx-auto w-25rem border-round hover:shadow-3 flex flex-column">
				<span className="text-center flex justify-content-center text-4xl font-bold">Login</span>
				<hr className="my-5"/>
					<form onSubmit={handleSubmit}>
						<span className="p-float-label ">
							<InputText id="username" name="name" className='w-full' value={values.name} onChange={handleChange} onBlur={handleBlur}/>
							<label htmlFor='username'>Username</label>
						</span>
							{errors.name && touched.name ? (<p className="m-0 text-sm text-red-500">{errors.name}</p>) : null}
							
						<span className="p-float-label mt-4">
							<Password id="password" type="password" name="password" className='w-full flex-column' value={values.password} onChange={handleChange} onBlur={handleBlur} toggleMask/>
							<label htmlFor='password'>Password</label>
						</span>
							{errors.password && touched.password ? (<p className="m-0 text-sm text-red-500 pb-3">{errors.password}</p>) : null}
							
						<span className="my-3 flex"><Link to="/forget-password" className="no-underline 	text-700 hover:text-primary">Forget Password?</Link></span>
						<Button label='Login' type="submit" className='p-button-primary w-full my-4 border-round-3xl'/>
					</form>
				<span className="flex justify-content-center">Not a Member?&nbsp;
				<Link to='/sign-up' className="no-underline text-primary">Signup</Link></span>
			</Card>
		</div>
	);
};

export default LoginForm;

// install these liberaries for Form
// npm i formik

// this liberary is for form validation
// npm i yup