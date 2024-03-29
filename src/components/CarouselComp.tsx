import React from 'react'
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import DividerDark from './DividerDark';
 
const CarouselComp = () => {
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '600px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    const data = [
        {id: "1000",code: "f230fh0g3",name: "Bamboo Watch",description: "Product Description",image: "https://www.primefaces.org/primereact/images/product/bamboo-watch.jpg",price: 65,category: "Accessories",quantity: 24,inventoryStatus: "INSTOCK",rating: 5},
        {id: "1001",code: "f230fh0g3",name: "Blue T-Shirt",description: "Product Description",image: "https://www.primefaces.org/primereact/images/product/blue-t-shirt.jpg",price: 65,category: "Accessories",quantity: 24,inventoryStatus: "INSTOCK",rating: 5},
        {id: "1002",code: "f230fh0g3",name: "Bracelet",description: "Product Description",image: "https://www.primefaces.org/primereact/images/product/bracelet.jpg",price: 65,category: "Accessories",quantity: 24,inventoryStatus: "INSTOCK",rating: 5},
        {id: "1003",code: "f230fh0g3",name: "Blue Band",description: "Product Description",image: "https://www.primefaces.org/primereact/images/product/blue-band.jpg",price: 65,category: "Accessories",quantity: 24,inventoryStatus: "INSTOCK",rating: 5},
        {id: "1004",code: "f230fh0g3",name: "Black Watch",description: "Product Description",image: "https://www.primefaces.org/primereact/images/product/black-watch.jpg",price: 65,category: "Accessories",quantity: 24,inventoryStatus: "INSTOCK",rating: 5},
        {id: "1005",code: "f230fh0g3",name: "Brown Purse",description: "Product Description",image: "https://www.primefaces.org/primereact/images/product/brown-purse.jpg",price: 65,category: "Accessories",quantity: 24,inventoryStatus: "INSTOCK",rating: 5},
        {id: "1006",code: "f230fh0g3",name: "Game Controller",description: "Product Description",image: "https://www.primefaces.org/primereact/images/product/game-controller.jpg",price: 65,category: "Accessories",quantity: 24,inventoryStatus: "INSTOCK",rating: 5},
        {id: "1007",code: "f230fh0g3",name: "Bamboo Watch",description: "Product Description",image: "https://www.primefaces.org/primereact/images/product/bamboo-watch.jpg",price: 65,category: "Accessories",quantity: 24,inventoryStatus: "INSTOCK",rating: 5},
    ]
    const productTemplate = (data: { image: any; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; price: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; inventoryStatus: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined; }) => {
        return (
            <div className="border-1 p-4 border-round border-black-alpha-30 m-2">
                <div className="">
                    <div className="mb-3 flex flex-column align-items-center justify-content-center">
                        <img src={data.image}  className="product-image" />
                    </div>
                    <div className='flex flex-column align-items-center justify-content-center'>
                        <h4 className="mb-1">{data.name}</h4>
                        <h6 className="mt-0 mb-3">${data.price}</h6>
                        <span>{data.inventoryStatus}</span>
                        <div className="car-buttons mt-5">
                            <Button icon="pi pi-search" className="p-button p-button-rounded mr-2" />
                            <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded mr-2" />
                            <Button icon="pi pi-cog" className="p-button-help p-button-rounded" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
  return (
    <div className='w-9 mx-auto'>
        <h1 className='text-center text-green-700 border-bottom-2 w-21rem flex justify-content-center mx-auto'>Carousel Component</h1>
        <Carousel value={data} numVisible={3} numScroll={1} responsiveOptions={responsiveOptions} 
                itemTemplate={productTemplate} header={<h2 className='ml-5 text-primary bg-gray-200 p-3 w-4 border-round hover:shadow-2 transition-colors transition-duration-1000 hover:bg-gray-400'>3 Items per Page and Scroll by 1</h2>} />
        <DividerDark/>
    </div>
  )
}

export default CarouselComp
