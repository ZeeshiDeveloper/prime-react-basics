import React from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
const BasicDataTable = () => {
    const tableData =  [
        {id: "1000",code: "f230fh0g3",name: "Bamboo Watch",description: "Product Description",image: "bamboo-watch.jpg",price: 65,category: "Accessories",quantity: 24,inventoryStatus: "INSTOCK",rating: 5},
        {id: "1001",code: "nvklal433",name: "Black Watch",description: "Product Description",image: "black-watch.jpg",price: 72,category: "Accessories",quantity: 61,inventoryStatus: "INSTOCK",rating: 4},
        {id: "1002",code: "zz21cz3c1",name: "Blue Band",description: "Product Description",image: "blue-band.jpg",price: 79,category: "Fitness",quantity: 2,inventoryStatus: "LOWSTOCK",rating: 3},
        {id: "1003",code: "244wgerg2",name: "Blue T-Shirt",description: "Product Description",image: "blue-t-shirt.jpg",price: 29,category: "Clothing",quantity: 25,inventoryStatus: "INSTOCK",rating: 5},
        {id: "1004",code: "h456wer53",name: "Bracelet",description: "Product Description",image: "bracelet.jpg",price: 15,category: "Accessories",quantity: 73,inventoryStatus: "INSTOCK",rating: 4},
        {id: "1005",code: "av2231fwg",name: "Brown Purse",description: "Product Description",image: "brown-purse.jpg",price: 120,category: "Accessories",quantity: 0,inventoryStatus: "OUTOFSTOCK",rating: 4},
        {id: "1006",code: "bib36pfvm",name: "Chakra Bracelet",description: "Product Description",image: "chakra-bracelet.jpg",price: 32,category: "Accessories",quantity: 5,inventoryStatus: "LOWSTOCK",rating: 3},
        {id: "1007",code: "mbvjkgip5",name: "Galaxy Earrings",description: "Product Description",image: "galaxy-earrings.jpg",price: 34,category: "Accessories",quantity: 23,inventoryStatus: "INSTOCK",rating: 5},
        {id: "1008",code: "vbb124btr",name: "Game Controller",description: "Product Description",image: "game-controller.jpg",price: 99,category: "Electronics",quantity: 2,inventoryStatus: "LOWSTOCK",rating: 4},
        {id: "1009",code: "cm230f032",name: "Gaming Set",description: "Product Description",image: "gaming-set.jpg",price: 299,category: "Electronics",quantity: 63,inventoryStatus: "INSTOCK",rating: 3}
    ]
    function Home() {
        return (
            <img src="	https://www.primefaces.org/primereact/images/product/bamboo-watch.jpg" alt="sample image" className='w-10 shadow-5 border-round'/>
        );
      }
  return (
    <div>
        <h1 className='text-center text-green-700 border-bottom-2 w-5 mb-8 flex justify-content-center mx-auto'>Basic Data Table Component</h1>
        <div className='px-8 pb-6'>
            <DataTable value={tableData} responsiveLayout="scroll">
                <Column field="code" header="Code"></Column>
                <Column field="description" header="Description"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="image" header="image" body={Home} className='w-1'></Column>
                <Column field="category" header="Category"></Column>
                <Column field="price" header="Price"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    </div>
  )
}

export default BasicDataTable
