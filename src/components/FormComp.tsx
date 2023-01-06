import React from 'react'
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Divider } from 'primereact/divider';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import DividerDark from './DividerDark';
import { useFormik } from 'formik';
import FormComValidation from './ValidationSchema/FormComValidation';
const FormComp = () => {
    const passwordHeader = <h6>Pick a password</h6>;
    const passwordFooter = (
        <React.Fragment>
            <Divider />
            <p className="mt-2">Suggestions</p>
            <ul className="pl-2 ml-2 mt-0" style={{lineHeight: '1.5'}}>
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </React.Fragment>
    )
    const countries = [
        {name: "Pakistan", code: "PK"},
        {name: "Afghanistan", code: "AF"},
        {name: "India", code: "IN"},
        {name: "America", code: "AM"},
        {name: "Iran", code: "IR"},
        {name: "Turkey", code: "TR"},
        {name: "Caneda", code: "CD"},
        {name: "Bangladesh", code: "BD"},
        {name: "Corea", code: "CO"},
        {name: "China", code: "CH"},
        {name: "Zambia", code: "ZM"},
        {name: "Zimbabwe", code: "ZW"}
    ]
    const initialValues = {
        name:"",
        email:"",
        password:"",
        dob:'',
        country:"",
        checkbox:false

    }
    const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues:initialValues,
        validationSchema:FormComValidation,
        onSubmit: (value,action)=>{
            console.log("Value of Basic form Fields : ",value)
            action.resetForm()
        }
    })
  return (
    <>
    <h1 className='text-center text-green-700 border-bottom-2 w-24rem flex justify-content-center mx-auto'>Basic Form Component</h1>
    <Card className='w-28rem bg-surface-0 border-round flex flex-column mx-auto p-2 hover:shadow-8'>
        <h4 className='text-center mt-0 mb-5 text-lg'>Register</h4>
        <form action="" onSubmit={handleSubmit}>
            <span className="p-float-label mb-3">
                <InputText id="username" className='w-full' name='name' value={values.name} onChange={handleChange} onBlur={handleBlur}/>
                <label htmlFor='username'>Name*</label>
            </span>
            {errors.name && touched.name ? (<p className="mb-3 -mt-3 text-sm text-red-500">{errors.name}</p>) : null}
            
            <span className="p-float-label p-input-icon-right w-full mb-3">
              <InputText id="email" name="email" className='w-full' value={values.email} onChange={handleChange} onBlur={handleBlur}/>
              <i className="pi pi-envelope" />
              <label htmlFor='email'>Email*</label>
            </span>
            {errors.email && touched.email ? (<p className="mb-3 -mt-3 text-sm text-red-500">{errors.email}</p>) : null}

            {/* <Password value={pass} className="mb-3 flex-column w-full" onChange={(e)=> setPass(e.target.value)} toggleMask /> */}
            <span className="p-float-label mb-3">
                <Password id="password" type="password" className="w-full flex-column" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} toggleMask
                     header={passwordHeader} footer={passwordFooter} />
                <label htmlFor="password">Password*</label>
            </span>
            {errors.password && touched.password ? (<p className="mb-3 -mt-3 text-sm text-red-500">{errors.password}</p>) : null}

            <span className='p-float-label mb-3'>
                <Calendar id="birthday" className='w-full' name='dob' value={values.dob} onChange={handleChange} onBlur={handleBlur} showIcon />
                <label htmlFor="birthday">Birthday</label>
            </span>
            {errors.dob && touched.dob ? (<p className="mb-3 -mt-3 text-sm text-red-500">{errors.dob}</p>) : null}

            <span className='p-float-label mb-3'>
                <Dropdown id='country' className="w-full" name="country" value={values.country} options={countries}  onChange={handleChange} onBlur={handleBlur} optionLabel="name"/>
                <label htmlFor="country">Country</label>
            </span>
            {errors.country && touched.country ? (<p className="mb-3 -mt-3 text-sm text-red-500">{errors.country}</p>) : null}

            <span className='field-checkbox mb-3'>
                <Checkbox inputId="binary" name='checkbox' checked={values.checkbox}  onChange={handleChange} onBlur={handleBlur} />
                <label htmlFor="binary">I agree to the terms and conditions*</label>
            </span>
            {errors.checkbox && touched.checkbox ? (<p className="mb-3 -mt-3 text-sm text-red-500">{errors.checkbox}</p>) : null}
            
            <Button label='Submit' className='p-button-primary w-full'/>
        </form>
    </Card>
    <DividerDark/>
    </>
  )
}

export default FormComp
