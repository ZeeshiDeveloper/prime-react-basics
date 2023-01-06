import React from 'react'
import * as Yup from 'yup'
const FormComValidation = Yup.object({
    name:Yup.string().min(2).max(25).required("Please enter your Name"),
    email:Yup.string().email().required(),
    password:Yup.string().min(2).required("Please enter your Password"),
    dob:Yup.date().required("DOB is required"),
    country:Yup.object().required("Must Select atleast one Country"),
    checkbox:Yup.bool().isTrue(),
})

export default FormComValidation