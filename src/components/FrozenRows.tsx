import React,{useEffect, useState} from 'react'
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
const FrozenRows = () => {
    const [lockedCustomers, setLockedCustomers] = useState([]);
    const [unlockedCustomers, setUnlockedCustomers] = useState([]);
    const tableData =  [
        {id: "1000",code: "f230fh0g3",name: "Bamboo Watch",description: "Product Description",image: "bamboo-watch.jpg",price: 65,category: "Accessories",quantity: 24,inventoryStatus: "INSTOCK",rating: 5,balance:"$67,126.00"},
        {id: "1001",code: "nvklal433",name: "Black Watch",description: "Product Description",image: "black-watch.jpg",price: 72,category: "Accessories",quantity: 61,inventoryStatus: "INSTOCK",rating: 4,balance:"$67,126.00"},
        {id: "1002",code: "zz21cz3c1",name: "Blue Band",description: "Product Description",image: "blue-band.jpg",price: 79,category: "Fitness",quantity: 2,inventoryStatus: "LOWSTOCK",rating: 3,balance:"$67,126.00"},
        {id: "1003",code: "244wgerg2",name: "Blue T-Shirt",description: "Product Description",image: "blue-t-shirt.jpg",price: 29,category: "Clothing",quantity: 25,inventoryStatus: "INSTOCK",rating: 5,balance:"$67,126.00"},
        {id: "1004",code: "h456wer53",name: "Bracelet",description: "Product Description",image: "bracelet.jpg",price: 15,category: "Accessories",quantity: 73,inventoryStatus: "INSTOCK",rating: 4,balance:"$67,126.00"},
        {id: "1005",code: "av2231fwg",name: "Brown Purse",description: "Product Description",image: "brown-purse.jpg",price: 120,category: "Accessories",quantity: 0,inventoryStatus: "OUTOFSTOCK",rating: 4,balance:"$67,126.00"},
        {id: "1006",code: "bib36pfvm",name: "Chakra Bracelet",description: "Product Description",image: "chakra-bracelet.jpg",price: 32,category: "Accessories",quantity: 5,inventoryStatus: "LOWSTOCK",rating: 3,balance:"$67,126.00"},
        {id: "1007",code: "mbvjkgip5",name: "Galaxy Earrings",description: "Product Description",image: "galaxy-earrings.jpg",price: 34,category: "Accessories",quantity: 23,inventoryStatus: "INSTOCK",rating: 5,balance:"$67,126.00"},
        {id: "1008",code: "vbb124btr",name: "Game Controller",description: "Product Description",image: "game-controller.jpg",price: 99,category: "Electronics",quantity: 2,inventoryStatus: "LOWSTOCK",rating: 4,balance:"$67,126.00"},
        {id: "1009",code: "cm230f032",name: "Gaming Set",description: "Product Description",image: "gaming-set.jpg",price: 299,category: "Electronics",quantity: 63,inventoryStatus: "INSTOCK",rating: 3,balance:"$67,126.00"}
    ]
    // useEffect(()=>{
    //      setLockedCustomers([ 
    //         {
    //             id: "1000",
    //             code: "f230fh0g3",
    //             name: "Bamboo Watch",
    //             description: "Product Description",
    //             price: 65,
    //             category: "Accessories",
    //             quantity: 24,
    //             inventoryStatus: "INSTOCK",
    //             rating: 5,balance:"$67,126.00"
    //         }
    //     ])
    // },[])
    const lockTemplate = (a:any | never | Array<any>,b:any) => {
        const icon = b.frozenRow ? 'pi pi-lock' : 'pi pi-lock-open';
        const disabled = b.frozenRow ? false : lockedCustomers.length >= 2;

        return <Button type="button" icon={icon} disabled={disabled} className="p-button-sm p-button-text" onClick={() => toggleLock(a, b.frozenRow, b.rowIndex)} />
    }
    const toggleLock = (data: never | any | Array<any>, frozen: any, index: number) => {
        let _lockedCustomers: never | any, _unlockedCustomers:any | never | Array<any>;

        if (frozen) {
            _lockedCustomers = lockedCustomers.filter((c, i) => i !== index);
            if(unlockedCustomers !== null){
            _unlockedCustomers = [...unlockedCustomers, data];}
        }
        else {
            if(unlockedCustomers !== null){
            _unlockedCustomers = unlockedCustomers.filter((_c: any, i: number) => i !== index);}
            _lockedCustomers = [...lockedCustomers, data];
        }

        _unlockedCustomers.sort((val1: { id: number; }, val2: { id: number; }) => {
            return val1.id < val2.id ? -1 : 1;
        });

        setLockedCustomers(_lockedCustomers);
        setUnlockedCustomers(_unlockedCustomers);
    }
  return (
    <div className='px-6 '>
        <h1 className='text-center text-green-700 border-bottom-2 w-5 mb-8 flex justify-content-center mx-auto'>Frozen Column Data Table Component</h1>
        <DataTable value={tableData} frozenValue={lockedCustomers} scrollable scrollHeight="400px" className='mb-5'>
            <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
            <Column field="description" header="Description" style={{ minWidth: '200px' }}></Column>
            <Column field="category" header="Category" style={{ minWidth: '200px' }}></Column>
            <Column field="price" header="Price" style={{ minWidth: '200px' }}></Column>
            <Column style={{ flex: '0 0 4rem' }} body={lockTemplate}></Column>
        </DataTable>
    </div>
  )
}

export default FrozenRows
