import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import React, { useState } from "react";
import {Link} from 'react-router-dom'
import { Image } from 'primereact/image';
import login from './images/login.jpg'

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

	return (
		<div className='surface-900 pt-8 h-screen'>
			<div className="grid m-0">
				<div className='col-12 md:col-7 lg:col-6 xl:col-6 p-0 surface-900 '>
					{/* <Image src={login} alt="Login Image Preview" width="100%" className="border-round"/> */}
					<img src={login} alt="Login Image Preview" width="100%" className="border-round-3xl border-noround-left"/>
				</div>
				<div className='col-12 md:col-5 lg:col-6 xl:col-6 flex p-0 surface-900'>
					<Card className="mx-auto w-25rem flex flex-column shadow-none surface-900">
						<span className="text-center flex justify-content-center text-4xl font-bold text-white">Login</span>
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
				
								<span className="my-3 flex"><Link to="/forget-password" className="no-underline text-white text-700 hover:text-primary">Forget Password?</Link></span>
								<Button label='Login' type="submit" className='p-button-primary w-full my-4 border-round-3xl'/>
							</form>
						<span className="flex justify-content-center text-white">Not a Member?&nbsp;
						<Link to='/sign-up' className="no-underline text-primary">Signup</Link></span>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default LoginForm;

// install these liberaries for Form
// npm i formik

// this liberary is for form validation
// npm i yup