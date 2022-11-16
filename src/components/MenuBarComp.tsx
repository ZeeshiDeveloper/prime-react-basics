import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { MegaMenu } from 'primereact/megamenu';
import DividerDark from './DividerDark';

const MenuBarComp = () => {
    const items = [
        {
            label:"Content",
            items:[
                {
                    label:"Algo Expert",
                    items:[
                        {
                            label:"Coding Interview Questions",
                            icon:"pi pi-fw pi-code",
                        },
                        {
                            label:"Data Structure Crash Course",
                            icon:"pi pi-fw pi-database",
                        },
                        {
                            label:"Coding Interview Accessment",
                            icon:"pi pi-fw pi-hourglass",
                        },
                        {
                            label:"Mock Coding Interview",
                            icon:"pi pi-fw pi-star",
                        },
                        {
                            label:"Coding Interview Tips",
                            icon:"pi pi-fw pi-sun",
                        },
                    ]
                },
                {
                    label:"System Expert",
                    items:[
                        {
                            label:"System Design Fundamentals",
                            icon:"pi pi-fw pi-apple",
                        },
                        {
                            label:"Sytem Design Questions",
                            icon:"pi pi-fw pi-align-justify",
                        },
                        {
                            label:"Sytem Design Quiz",
                            icon:"pi pi-fw pi-align-center",
                        },
                        {
                            label:"Sytem Design Interview Tips",
                            icon:"pi pi-fw pi-sun",
                        },
                    ]
                },
                {
                    label:"ML Expert",
                    items:[
                        {
                            label:"ML Crash Course",
                            icon:"pi pi-fw pi-bookmark",
                        },
                        {
                            label:"ML Coding Expert",
                            icon:"pi pi-fw pi-code",
                        },
                        {
                            label:"Large-Scale ML",
                            icon:"pi pi-fw pi-arrows-v",
                        },
                        {
                            label:"ML Design",
                            icon:"pi pi-fw pi-desktop",
                        },
                        {
                            label:"ML Quiz",
                            icon:"pi pi-fw pi-align-center",
                        },
                        {
                            label:"ML Interview tips",
                            icon:"pi pi-fw pi-sun",
                        },
                    ]
                },
                {
                    label:"FrontEnd Expert",
                    items:[
                        {
                            label:"interview Questions",
                            icon:"pi pi-fw pi-align-justify",
                        },
                        {
                            label:"HTML Crash Course",
                            icon:"pi pi-fw pi-code",
                        },
                        {
                            label:"CSS  Crash Course",
                            icon:"pi pi-fw pi-list",
                        },
                        {
                            label:"Java Script Crash Course",
                            icon:"pi pi-fw pi-code",
                        },
                        {
                            label:"ML Quiz",
                            icon:"pi pi-fw pi-prime",
                        },
                        {
                            label:"React Crash Course",
                            icon:"pi pi-fw pi-align-justify",
                        },
                        {
                            label:"Web Development Fundamentals",
                            icon:"pi pi-fw pi-sort",
                        },
                        {
                            label:"Front End Quiz",
                            icon:"pi pi-fw pi-align-center",
                        },
                    ]
                },
                {
                    label:"Bonus",
                    items:[
                        {
                            label:"Behavioral Interview prep",
                            icon:"pi pi-fw pi-sun",
                        },
                    ]
                },
            ]
        },
        {
            label:"Team"
        },
        {
            label:"Purchase"
        },
        
    ];
    const megaItems = [
        {
            label:"Products",
            items:[
                [
                {
                    label:"AlgoExpert",
                    items:[{label:"Ace the coding Interview"}]
                },
                {
                    label:"SystemExpert",
                    items:[{label:"Ace the system design Interview"}]
                },
                {
                    label:"MLExpert",
                    items:[{label:"Ace the ML Interview"}]
                },
                {
                    label:"FrontEndExpert",
                    items:[{label:"Ace the Front End Interview"}]
                },
                {
                    label:"ProgramingExpert",
                    items:[{label:"Learn to code"}]
                },
            ]
        ]
        },
        
        
    ]

  return (
    <>
        <h1 className='text-center text-green-700 border-bottom-2 w-5 mb-5 flex justify-content-center mx-auto'>MenuBar and MegaMenu Component</h1>
        <div className='bg-white flex justify-content-evenly hover:shadow-3'>
            <div className='flex'>
                <img className='w-4rem' src='https://www.primefaces.org/primereact/images/logo.png' alt='logo'/>
                <div className='flex flex-column mt-1 ml-2'>
                    <span className='text-2xl'>AlgoExpert</span>
                    <span className='text-purple-700'>Ace the Technical Interviews</span>
                </div>
            </div>
                <div>
                    <MegaMenu model={megaItems} className="inline-block border-none"/>
                    <Menubar model={items}  className="inline-block border-none bg-none"/>
                </div>
            <Button label='Log In' className='p-button-text w-5rem h-2rem p-1 mt-2'/> 
        </div>  
        <DividerDark/>    
    </>
  )
}

export default MenuBarComp
