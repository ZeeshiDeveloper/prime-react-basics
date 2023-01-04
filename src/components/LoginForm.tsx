import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";

import {Link} from 'react-router-dom'

const LoginForm = () => {
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')
	return (
		<div>
			<h1 className="mx-auto text-primary text-center">Login Form</h1>
            <Card className="mx-auto w-25rem border-round hover:shadow-3 flex flex-column">
				<span className="text-center flex justify-content-center text-4xl font-bold">Login</span>
				<hr className="my-5"/>
				<span className="p-float-label mb-3">
					<InputText id="username" className='w-full' value={name} onChange={(e)=> setName(e.target.value)}/>
					<label htmlFor='username'>Username</label>
				</span>
				<span className="p-float-label mb-3">
					<InputText id="password" className='w-full' value={password} onChange={(e)=> setPassword(e.target.value)}/>
					<label htmlFor='username'>Password</label>
				</span>
				<span className="my-3	 flex"><a href="" className="no-underline text-700">Forget Password?</a></span>
				<Button label='Login' className='p-button-primary w-full my-4 border-round-3xl'/>
				<span className="flex justify-content-center">Not a Member?&nbsp;
				<Link to='/sign-up' className="no-underline text-primary">Signup</Link></span>
			</Card>
		</div>
	);
};

export default LoginForm;
