import React, { useState } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

const SimpleTableTask = () => {
    const [selectedItems, setSelectedItems] = useState(null);
    const [value, setValue] = useState('')
    
const tableData =  {
        page: 1,
        size: 25,
        total: 2,
        items: [
          {
            id: "1",
            profileLabel: "Global Profile 2022",
            isGlobal: true,
            effectiveStartDate: "Jan 01 2023",
            effectiveEndDate: null,
            chargesType: "Slab Charges",
            t4SummaryCharges: 25,
            t4aSummaryCharges: 25,
            rl1SummaryCharges: 25,
            discountPercentage: 0,
            discountAmount: 0
          },
          {
            id: "2",
            profileLabel: "Zero Profile",
            isGlobal: false,
            effectiveStartDate: "Jan 01 2023",
            effectiveEndDate: null,
            chargesType: "Slab Charges",
            t4SummaryCharges: 0,
            t4aSummaryCharges: 0,
            rl1SummaryCharges: 0,
            discountPercentage: 0,
            discountAmount: 0
          },
        ],
        keyField: {
          field: "id",
          templateUrl: "/billing-profile/setup/id"
        },
        headerColumns: [
          {
            field: "profileLabel",
            headerName: "Profile Label",
            description: "Profile Label",
            flex: 1,
            hide: false,
            hideable: false,
            sortable: true,
            // "sortingOrder": "asc",
            resizable: false,
            type: "string",
            align: "left",
            headerAlign: "left",
            hideSortIcons: false,
            disableColumnMenu: true,
            disableReorder: true,
            disableExport: true,
            maskable: false,
            // "isFixed": true,
            sequence: 0
          },
          {
            field: "isGlobal",
            headerName: "Global?",
            description: "Global",
            flex: 0,
            hide: false,
            hideable: false,
            sortable: true,
            // "sortingOrder": "asc",
            resizable: false,
            type: "string",
            align: "left",
            headerAlign: "left",
            hideSortIcons: false,
            disableColumnMenu: true,
            disableReorder: true,
            disableExport: true,
            maskable: false,
            // "isFixed": true,
            sequence: 1
          },
          {
            field: "effectiveStartDate",
            headerName: "Effective Date",
            description: "Effective Date",
            flex: 1,
            hide: false,
            hideable: false,
            sortable: true,
            // "sortingOrder": "asc",
            resizable: false,
            type: "string",
            align: "left",
            headerAlign: "left",
            hideSortIcons: false,
            disableColumnMenu: true,
            disableReorder: true,
            disableExport: true,
            maskable: false,
            // "isFixed": true,
            sequence: 2
          },
          {
            field: "effectiveEndDate",
            headerName: "End Date",
            description: "End Date",
            flex: 0,
            hide: false,
            hideable: false,
            sortable: true,
            // "sortingOrder": "asc",
            resizable: false,
            type: "string",
            align: "left",
            headerAlign: "left",
            hideSortIcons: false,
            disableColumnMenu: true,
            disableReorder: true,
            disableExport: true,
            maskable: false,
            // "isFixed": true,
            sequence: 3
          },
          {
            field: "chargesType",
            headerName: "Charges Type",
            description: "Charges Type",
            flex: 1,
            hide: false,
            hideable: false,
            sortable: true,
            // "sortingOrder": "asc",
            resizable: false,
            type: "string",
            align: "left",
            headerAlign: "left",
            hideSortIcons: false,
            disableColumnMenu: true,
            disableReorder: true,
            disableExport: true,
            maskable: false,
            // "isFixed": true,
            sequence: 4
          },
          {
            field: "t4SummaryCharges",
            headerName: "T4 Summary Charges",
            description: "T4 Summary Charges",
            flex: 1,
            hide: false,
            hideable: false,
            sortable: true,
            // "sortingOrder": "asc",
            resizable: false,
            type: "string",
            align: "left",
            headerAlign: "left",
            hideSortIcons: false,
            disableColumnMenu: true,
            disableReorder: true,
            disableExport: true,
            maskable: false,
            // "isFixed": true,
            sequence: 5
          },
          {
            field: "t4aSummaryCharges",
            headerName: "T4A Summary Charges",
            description: "T4A Summary Charges",
            flex: 1,
            hide: false,
            hideable: false,
            sortable: true,
            // "sortingOrder": "asc",
            resizable: false,
            type: "string",
            align: "left",
            headerAlign: "left",
            hideSortIcons: false,
            disableColumnMenu: true,
            disableReorder: true,
            disableExport: true,
            maskable: false,
            // "isFixed": true,
            sequence: 6
          },
          {
            field: "rl1SummaryCharges",
            headerName: "RL-1 Summary Charges",
            description: "RL-1 Summary Charges",
            flex: 1,
            hide: false,
            hideable: false,
            sortable: true,
            // "sortingOrder": "asc",
            resizable: false,
            type: "string",
            align: "left",
            headerAlign: "left",
            hideSortIcons: false,
            disableColumnMenu: true,
            disableReorder: true,
            disableExport: true,
            maskable: false,
            // "isFixed": true,
            sequence: 7
          },
          {
            field: "discountPercentage",
            headerName: "Discount %",
            description: "Discount %",
            flex: 0,
            hide: false,
            hideable: false,
            sortable: true,
            // "sortingOrder": "asc",
            resizable: false,
            type: "string",
            align: "left",
            headerAlign: "left",
            hideSortIcons: false,
            disableColumnMenu: true,
            disableReorder: true,
            disableExport: true,
            maskable: false,
            // "isFixed": true,
            sequence: 8
          },
          {
            field: "discountAmount",
            headerName: "Discount $",
            description: "Discount $",
            flex: 0,
            hide: false,
            hideable: false,
            sortable: true,
            // "sortingOrder": "asc",
            resizable: false,
            type: "string",
            align: "left",
            headerAlign: "left",
            hideSortIcons: false,
            disableColumnMenu: true,
            disableReorder: true,
            disableExport: true,
            maskable: false,
            // "isFixed": true,
            sequence: 8
          }
        ]
      }
    
    
    const setting = () => {
        return(
            <div className='ml-4 pl-1'>
                <i className='pi pi-cog text-xl'></i>
            </div>
        )
    }
    const delEdit = () => {
        return(
            <div className='flex'>
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-text w-2rem h-2rem"/>
                <Button icon="pi pi-trash" className="p-button-rounded p-button-text w-2rem h-2rem ml-2"/>
            </div>
        )
    }

  return (
    <div className='mx-6 mb-8'>
        <h1 className='text-center text-green-700 border-bottom-2 w-3 mb-8 flex justify-content-center mx-auto'>TASK : Basic Data Table</h1>
        <div className='p-3 bg-gray-100'>
            <div className='flex justify-content-between mb-3'>
                <span className="p-input-icon-left w-5">
                    <i className="pi pi-search" />
                    <InputText value={value} onChange={(e) => setValue(e.target.value)} placeholder="Search" className='w-full bg-transparent'/>
                </span>
            <Button label='Add Billing Profile' className='p-button-success uppercase'/>

            </div>

            <DataTable value={tableData.items} responsiveLayout="scroll" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
            selection={selectedItems} onSelectionChange={(e) => setSelectedItems(e.value)}
            editMode="row">
                <Column selectionMode="multiple"></Column>
                <Column field="id" header="No." headerStyle={{fontWeight:"bold"}} style={{minWidth:"50px"}}></Column>
                <Column field="profileLabel" header="Profile Label" style={{minWidth:"150px"}}></Column>
                <Column field="isGlobal" header="Global" style={{minWidth:"150px"}}></Column>
                <Column field="effectiveStartDate" header="Effective Date" style={{minWidth:"150px"}}></Column>
                <Column field="effectiveEndDate" header="End Date" style={{minWidth:"150px"}}></Column>
                <Column field="chargesType" header="Charges Type" style={{minWidth:"150px"}}></Column>
                <Column field="t4SummaryCharges" header="T4 Summary Charges" style={{minWidth:"200px"}}></Column>
                <Column field="t4aSummaryCharges" header="T4 Summary Charges" style={{minWidth:"200px"}}></Column>
                <Column field="rl1SummaryCharges" header="RL-1 Summary Charges" style={{minWidth:"220px"}}></Column>
                <Column field="discountPercentage" header="Discount %" style={{minWidth:"150px"}}></Column>
                <Column field="discountAmount" header="Discount $" style={{minWidth:"120px"}}></Column>
                {/* <Column body={delEdit} header={setting} style={{minWidth:"80px"}}></Column> */}
                <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
            </DataTable>
        </div>
    </div>
  )
}

export default SimpleTableTask


//edited row function need to be cover from (Edit) Data Table