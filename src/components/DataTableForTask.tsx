import React, { useState, useRef } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

const DataTableForTask = (props: { data: any[] | undefined; }) => {
    const [selectedItems, setSelectedItems] = useState(null);

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
                <Button icon="pi pi-user-edit" onClick={showEdit} className="p-button-rounded p-button-text w-2rem h-2rem"/>
                <Button icon="pi pi-trash" onClick={showDelete} className="p-button-rounded p-button-text w-2rem h-2rem ml-2"/>
            </div>
        )
    }
     // Toast msg for Edit Button
     const toast:any = useRef(null);
     const showEdit = () => {
         toast.current.show({severity:'success', summary: 'Success Message', detail:'Edit Button Clicked', life: 8000});
     }
     // Toast msg for Delete Button
     const toastDel:any = useRef(null);
     const showDelete = () => {
         toastDel.current.show({severity:'error', summary: 'Delete Message', detail:'Delete Button Clicked', life: 8000});
     }
  return (
    <div>
    <Toast ref={toast} />
    <Toast ref={toastDel} />
       <DataTable value={props.data} responsiveLayout="scroll" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
            selection={selectedItems} onSelectionChange={(e) => setSelectedItems(e.value)}
            editMode="row" showGridlines>
                <Column selectionMode="multiple"></Column>
                {/* Loop we just need one column and map all properties according to data. */}
                <Column field="id" header="No." headerStyle={{fontWeight:"bold"}} style={{minWidth:"50px"}}></Column>
                {/* <Column field="profileLabel" header="Profile Label" style={{minWidth:"150px"}}></Column>
                <Column field="isGlobal" header="Global" style={{minWidth:"150px"}}></Column>
                <Column field="effectiveStartDate" header="Effective Date" style={{minWidth:"150px"}}></Column>
                <Column field="effectiveEndDate" header="End Date" style={{minWidth:"150px"}}></Column>
                <Column field="chargesType" header="Charges Type" style={{minWidth:"150px"}}></Column>
                <Column field="t4SummaryCharges" header="T4 Summary Charges" style={{minWidth:"200px"}}></Column>
                <Column field="t4aSummaryCharges" header="T4 Summary Charges" style={{minWidth:"200px"}}></Column>
                <Column field="rl1SummaryCharges" header="RL-1 Summary Charges" style={{minWidth:"220px"}}></Column>
                <Column field="discountPercentage" header="Discount %" style={{minWidth:"150px"}}></Column>
                <Column field="discountAmount" header="Discount $" style={{minWidth:"120px"}}></Column> */}
                <Column body={delEdit} header={setting} style={{minWidth:"80px"}}></Column>
            </DataTable>
    </div>
  )
}

export default DataTableForTask
