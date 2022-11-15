import React from 'react'
import { Button } from 'primereact/button';
import DividerDark from './DividerDark';
 
const ButtonComp = () => {
  return (
    <>
        <div>
            <h1 className='text-center text-green-700 border-bottom-2 w-19rem mb-5 flex justify-content-center mx-auto'>Button Component</h1>
            <Button label='Secondary' className='p-button-secondary mx-2' icon="pi pi-check" iconPos='right'/>
            <Button label='Loading' className='p-button-primary mx-2' loading iconPos='right'/>
            <Button label='Ronded' className='p-button-success mx-2 p-button-rounded'/>
            <Button label='Text Btn' className='p-button-info mx-2 p-button-text'/>
            <Button label='Outlined Btn' className='p-button-danger mx-2 p-button-outlined'/>
            <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary mx-2" aria-label="Bookmark" />
            <Button icon="pi pi-check" className="p-button-rounded p-button-text mx-2" aria-label="Submit" />
            <Button icon="pi pi-check" className="p-button-rounded p-button-outlined mx-2" aria-label="Submit" />
            <Button type="button" label="Badge btn" badge="8" />
            <span className="p-buttonset mx-2">
                <Button label="Save" icon="pi pi-check" />
                <Button label="Delete" icon="pi pi-trash" />
                <Button label="Cancel" icon="pi pi-times" />
            </span>
            <Button className="amazon p-0 mx-2 p-button-warning" aria-label="Amazon">
                <i className="pi pi-amazon px-2"></i>
                <span className="px-3">Amazon</span>
            </Button>
        </div>
        <DividerDark/>
    </>
  )
}

export default ButtonComp
