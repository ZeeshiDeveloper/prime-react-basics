import React,{ useState} from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ToggleButton } from 'primereact/togglebutton';
const FrozenColumnDataTable = () => {
    const [balanceFrozen, setBalanceFrozen] = useState(false);
    
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
  return (
    <div className='px-6 '>
        <h1 className='text-center text-green-700 border-bottom-2 w-5 mb-8 flex justify-content-center mx-auto'>Frozen Column Data Table Component</h1>
        <h2 className='text-primary bg-gray-200 p-3 w-4 border-round hover:shadow-2 transition-colors transition-duration-1000 hover:bg-gray-400'>Frozen Columns</h2>
                <ToggleButton checked={balanceFrozen} onChange={(e) => setBalanceFrozen(e.value)} onIcon="pi pi-lock" offIcon="pi pi-lock-open" onLabel="Unfreeze Balance" offLabel="Freeze Balance" style={{ flexGrow: 1, flexBasis: '12rem' }} />

                <DataTable value={tableData} scrollable scrollHeight="400px" scrollDirection="both" className="mt-3">
                    <Column field="name" header="Name" style={{ width: '160px', fontWeight:"bold" }} frozen></Column>
                    <Column field="id" header="Id" style={{ width: '100px' }} frozen></Column>
                    <Column field="name" header="Name" style={{ width: '200px' }}></Column>
                    <Column field="description" header="Description" style={{ width: '200px' }}></Column>
                    <Column field="price" header="Price" style={{ width: '200px' }}></Column>
                    <Column field="category" header="Category" style={{ width: '200px' }}></Column>
                    <Column field="quantity" header="Quantity" style={{ width: '200px' }}></Column>
                    <Column field="inventoryStatus" header="InventoryStatus" style={{ width: '200px' }}></Column>
                    <Column field="rating" header="Rating" style={{ width: '200px' }}></Column>
                    <Column field="balance" header="Balance" style={{ width: '120px',fontWeight:"bold" }} alignFrozen="right" frozen={balanceFrozen}></Column>
                </DataTable>
    </div>
  )
}

export default FrozenColumnDataTable
