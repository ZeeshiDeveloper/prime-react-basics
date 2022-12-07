import React, { useState, useRef } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column, ColumnHeaderOptions } from 'primereact/column';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export interface IDataTable {
    showChecboxColumn: boolean,
    showSettingColumn: boolean,
        page:number;
        size:number;
        total:number;
        items:{id: string; profileLabel: string; isGlobal: boolean; effectiveStartDate: string; effectiveEndDate: null; chargesType: string; t4SummaryCharges: number; t4aSummaryCharges: number; rl1SummaryCharges: number; discountPercentage: number; discountAmount: number;}[];
        keyField:{field:string; templateUrl:string};
        headerColumns:{field:string; headerName:string; description:string; flex:number; hide:boolean; hideable:boolean; sortable:boolean; resizable:boolean; type:string; align:string; headerAlign:string; hideSortIcons:boolean; disableColumnMenu:boolean; disableReorder:boolean; disableExport:boolean; maskable:boolean; sequence:number }[]

}

const DataTableForTask = (props:IDataTable) => {
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
   
    console.log(props.headerColumns)

      
    // object || Array destructuring
    const [col0, col1, col2, col3, col4, col5, col6, col7, col8, col9] = props.headerColumns
    console.log(col1)

    const {field, headerName} = col1
    console.log(headerName)
   

  return (
    <div>
    <Toast ref={toast} />
    <Toast ref={toastDel} />

       <DataTable value={props.items} responsiveLayout="scroll" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
            selection={selectedItems} onSelectionChange={(e) => setSelectedItems(e.value)}
            editMode="row" showGridlines
            resizableColumns columnResizeMode="expand">
                <Column selectionMode="multiple" hidden={props.showChecboxColumn} ></Column>
                <Column field="id" header="No." headerStyle={{fontWeight:"bold"}} style={{minWidth:"50px"}}></Column>
                
                {props.headerColumns.map((x:any) => (
                    <Column field={x.field} header={x.headerName} sortable={x.sortable} align={x.align}
                    alignHeader={x.headerAlign} hidden={x.hide} 
                    headerTooltip={x.description}
                    resizeable={x.resizable}
                    sortableDisabled={x.hideSortIcons}
                    style={{minWidth:"200px"}}/>
                ))}
                    
                <Column body={delEdit} header={setting} style={{minWidth:"80px"}} hidden={props.showChecboxColumn}></Column>
            </DataTable>
       
    </div>
  )
}

export default DataTableForTask

// resizableColumns={props.headerColumns.resizable} columnResizeMode="expand"