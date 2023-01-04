import React from 'react'
import * as Yup from 'yup'

const LoginPageValidation = Yup.object({
    name:Yup.string().min(2).max(25).required("Please Enter UserName"),
    password:Yup.string().min(6).required("Please Enter your Password")
})

export default LoginPageValidation