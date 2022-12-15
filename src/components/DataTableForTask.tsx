import React, { useState, useRef } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';

export interface IDataTable {
    showChecboxColumn: boolean,
    showSettingColumn: boolean,
        page:number;
        size:number;
        total:number;
        items:{id: string; profileLabel: string; isGlobal: boolean; effectiveStartDate: string; effectiveEndDate: null; chargesType: string; t4SummaryCharges: number; t4aSummaryCharges: number; rl1SummaryCharges: number; discountPercentage: number; discountAmount: number;}[];
        keyField:{field:string; templateUrl:string};
        headerColumns:{field:string; headerName:string; description:string; flex:number; hide:boolean; hideable:boolean; sortable:boolean; resizable:boolean; type:string; align:string; headerAlign:string; hideSortIcons:boolean; disableColumnMenu:boolean; disableReorder:boolean; disableExport:boolean; maskable:boolean; sequence:number; frozenColumn:boolean;}[]

}

const DataTableForTask = (props:IDataTable) => {
    const [selectedItems, setSelectedItems] = useState(null);

    // this states used in the process of filteration of dataTable
    const [loading, setLoading] = useState(false);
    const [itemSearsch, setItemSearsch] = useState('');
   
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
   
     const maskingCol = (val:any,hName:any) => {
        if(val == true){
            return "*****"
        }else{
            return hName
        }
     }

// Search type and billing profile Button
    const renderHeader = () => {
        return (
             <div className='flex justify-content-between mb-3'>
                <span className="p-input-icon-left w-5">
                    <i className="pi pi-search" />
                    <InputText value={itemSearsch} onChange={(e) => setItemSearsch(e.target.value)} placeholder="Keyword Search" className='w-full bg-transparent'/>
                </span>
                <Button label='Add Billing Profile' className='p-button-success uppercase'/>
            </div>
        )
    }
    const headerSearch = renderHeader();
    function search(_row:any){
        // return props.items.filter((rows)=> rows.profileLabel.toLowerCase().indexOf(globalFilterValue1)>-1 || 
        // rows.effectiveStartDate.toLowerCase().indexOf(globalFilterValue1)>-1)

        // another way where we dont need to write all properties which you want to search (we can search with all props) 
        const columns = _row[0] && Object.keys(_row[0])
        return props.items.filter((rows:any)=> columns.some((columns:any)=> rows[columns]?.toString().toLowerCase().indexOf(itemSearsch.toLowerCase())>-1))  
    }


  return (
    <div>
    <Toast ref={toast} />
    <Toast ref={toastDel} />
       <DataTable value={search(props.items)} responsiveLayout="scroll" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
            selection={selectedItems} onSelectionChange={(e) => setSelectedItems(e.value)}
            editMode="row" showGridlines
            resizableColumns columnResizeMode="expand"
            scrollable
            reorderableColumns
            filterDisplay="menu"
            loading={loading}
            globalFilterFields={['headerName']}
            header={headerSearch}
            emptyMessage="No Record found."
            >
                <Column selectionMode="multiple" hidden={props.showChecboxColumn} frozen resizeable={false}
                style={{maxWidth:"65px"}} field="selection" columnKey='selection'></Column>
                <Column field="id" header="No." headerStyle={{fontWeight:"bold"}} style={{maxWidth:"60px"}}
                resizeable={false} reorderable={false} columnKey='id'></Column>
                
                {props.headerColumns && props.headerColumns.map((x:any,index:any) => (
                    <Column key={index} field={x.field} header={x.headerName && maskingCol(x.maskable,x.headerName)} sortable={x.sortable} align={x.align}
                        alignHeader={x.headerAlign} hidden={x.hide} 
                        headerTooltip={x.description}
                        resizeable={x.resizable}
                        frozen={x.frozenColumn}
                        reorderable={x.disableReorder}
                        columnKey={x.field}
                        dataType={x.type}
                        exportable={x.disableExport}
                        // filter
                        // filterApply
                        // filterElement
                        // showFilterMenu
                        // showFilterOperator
                        // filterHeader
                        // filterMenuStyle={x.disableColumnMenu}
                        filterPlaceholder='Search' 
                        filterField={x.headerName}
                        style={{minWidth:"230px"}}/>
                ))}
                    
                <Column body={delEdit} header={setting} style={{width:"110px",maxWidth:"110px"}} hidden={props.showSettingColumn}
                resizeable={false} reorderable={false} frozen alignFrozen='right' filter></Column>
            </DataTable>
         
    </div>
  )
}

export default DataTableForTask

//resizeablbe must be false if frozen is true and viseversa