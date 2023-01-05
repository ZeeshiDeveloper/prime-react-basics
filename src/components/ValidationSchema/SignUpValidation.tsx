import React from 'react'
import * as Yup from 'yup'

const SignUpValidation = Yup.object({
    firstname:Yup.string().min(2).max(25).required("Please enter your first name"),
    lastname:Yup.string().min(2).max(25).required("Please enter your last name"),
    email:Yup.string().email().required("Please enter your Email"),
    password:Yup.string().min(4).required("Please enter your password"),
    confirmPassword:Yup.string().required().oneOf([Yup.ref("password"),null],"Password must matched"),
    checkbox:Yup.bool().isTrue()
})

export default SignUpValidation