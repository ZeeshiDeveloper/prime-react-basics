import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { Image } from 'primereact/image';
import { useFormik } from 'formik'
import signup from './images/sign_up_image.jpg'
import SignUpValidation from './ValidationSchema/SignUpValidation'
import { Checkbox } from 'primereact/checkbox'

const SignUpPage = () => {
    const initialValues = {
      firstname:"",
      lastname:"",
      email:"",
      password:"",
      confirmPassword:"",
      checkbox:false
    }
    const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
      initialValues:initialValues,
      validationSchema:SignUpValidation,
      onSubmit : (value,action) =>{
        console.log("Values : ", value)
        action.resetForm();
      }
    })
    console.log("Error : ",errors)
  return (
    <div className='pt-8 h-screen'>
			<Card className='w-8 mx-auto border-noround'>
        <div className="grid m-0">
          <div className='col-12 md:col-5 lg:col-6 xl:col-6 pt-6'>
            <Image src={signup} alt="Login Image Preview" width="100%"  className="border-round"/>
          </div>
          <div className='col-12 md:col-7 lg:col-6 xl:col-6 flex p-0'>
            <Card className="mx-auto w-25rem flex flex-column shadow-none" title="Sign Up" subTitle="Please fill in this form to create an account!">
              <hr className="mb-5 mt-0"/>
                <form onSubmit={handleSubmit}>
                  <span className="p-float-label">
                    <InputText id="firstname" name="firstname" className='w-full' value={values.firstname} onChange={handleChange} onBlur={handleBlur}/>
                    <label htmlFor='firstname'>First Name</label>
                  </span>
                  {errors.firstname && touched.firstname ? (<p className="m-0 text-sm text-red-500">{errors.firstname}</p>) : null}

                  <span className="p-float-label mt-4">
                    <InputText id="lastname" name="lastname" className='w-full' value={values.lastname} onChange={handleChange} onBlur={handleBlur}/>
                    <label htmlFor='lastname'>Last Name</label>
                  </span>
                    {errors.lastname && touched.lastname ? (<p className="m-0 text-sm text-red-500">{errors.lastname}</p>) : null}

                  <span className="p-float-label mt-4">
                    <InputText id="email" name="email" className='w-full' value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                    <label htmlFor='email'>Email</label>
                  </span>
                    {errors.email && touched.email ? (<p className="m-0 text-sm text-red-500">{errors.email}</p>) : null}
        
                  <span className="p-float-label mt-4">
                    <Password id="password" type="password" name="password" className='w-full flex-column' value={values.password} onChange={handleChange} onBlur={handleBlur} toggleMask/>
                    <label htmlFor='password'>Password</label>
                  </span>
                    {errors.password && touched.password ? (<p className="m-0 text-sm text-red-500 pb-3">{errors.password}</p>) : null}
        
                  <span className="p-float-label mt-4">
                    <Password id="confirmPassword" type="confirmPassword" name="confirmPassword" className='w-full flex-column' value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} toggleMask/>
                    <label htmlFor='confirmPassword'>Confirm Password</label>
                  </span>
                    {errors.confirmPassword && touched.confirmPassword ? (<p className="m-0 text-sm text-red-500 pb-3">{errors.confirmPassword}</p>) : null}

                      <span className='field-checkbox mt-3'>
                          <Checkbox id="checkbox" name="checkbox" inputId="binary" checked={values.checkbox} onChange={handleChange} />
                          <label htmlFor="binary">I agree to the terms and conditions*</label>
                      </span>
                      {errors.checkbox && touched.checkbox ? (<p className="m-0 text-sm text-red-500 pb-3">
                      {errors.checkbox}</p>) : null}

                  <Button label='Sign Up' type="submit" className='p-button-primary w-5 my-4 border-noround'/>
                </form>
            </Card>
          </div>
        </div>
      </Card>
		</div>
  )
}

export default SignUpPage




// https://youtu.be/7Ophfq0lEAY 
// for validation and Formik by using Field (check in prime react hook forms)