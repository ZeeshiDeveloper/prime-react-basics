import { Card } from 'primereact/card'
import React from 'react'
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useFormik } from 'formik';
import ResetPassValidation from './ValidationSchema/ResetPassValidation';
import { Image } from 'primereact/image';
import image from './images/reset_password.webp'

const ResetPassword = () => {
  const initialValues = {
    password : '',
    confirmPassword: ''
  }
  const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues:initialValues,
    validationSchema:ResetPassValidation,
    onSubmit : (value,action) => {
      console.log("?Value : ",value)
      action.resetForm();
    }
  })
  return (
    <div className='bg-white pt-6'>
      <div  className="grid m-0">
        <div className='sm:col-12 md:col-6 lg:col-6 xl:col-6'>
          <Image src={image} alt="Image" width="100%" height='90%'/>
        </div>
        <div className='sm:col-12 md:col-6 lg:col-6 xl:col-6 flex '>
          <Card className='w-25rem mx-auto mt-8 shadow-none'>
                  <span className="text-center flex justify-content-center text-3xl font-medium -mt-3">New Password</span>
            <span className='block text-center bg-green-100 text-green-800 p-2 border-round mt-4 mb-6'>Please create a new password that you don't use on any other side</span>
            <form onSubmit={handleSubmit}>
                      <span className="p-float-label mt-4">
                        <Password id="password" type="password" name="password" className='w-full flex-column' value={values.password} onChange={handleChange} onBlur={handleBlur} toggleMask/>
                        <label htmlFor='password'>Ceate new password</label>
                      </span>
                {errors.password && touched.password ? (
                  <p className='m-0 text-sm text-red-500'>{errors.password}</p>
                ) : null}
                      <span className="p-float-label mt-4">
                        <Password id="password" type="password" name="confirmPassword" className='w-full flex-column'  toggleMask value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} />
                        <label htmlFor='password'>Confirm your password</label>
                      </span>
                        {errors.confirmPassword && touched.confirmPassword ? (
                    <p className="m-0 text-sm text-red-500">{errors.confirmPassword}</p>
                  ) : null}
                      <Button label='Change' type="submit" className='p-button-primary w-full mt-6'/>
                    </form>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword