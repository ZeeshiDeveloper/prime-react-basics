import React, { useState, useRef } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';
import './dataTableTask.css'

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

    const [val, setValue] = useState(false)
    const [field, setField] = useState("")
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

// Sequence of header Columns
    props.headerColumns.sort((a,b) => (a.sequence > b.sequence) ? 1 : ((b.sequence > a.sequence) ? -1 : 0))
    console.log("props.headerColumns", typeof(props.headerColumns))

    const HideButton = (option: any, value: any , field: any) => {
        if(option == true){
                return(
                <span className='field-checkbox mt-3 mb-0'>
                    <Button label='Hide Column'  className='p-button-secondary uppercase' onClick={()=>clickHideBtn(value, field, true)}/>
                </span>
                )       
        }else{
            return option = null
        }
    }

    const clickHideBtn = (value: any, field: any, is_load: any) => {
        // console.log("xyz", value.field);
        // console.log("is_load", is_load);
        // console.log("x", value);
        // console.log("value.field === field", value.field === field);
        
        if(is_load){
            if(value.field === field){
                setValue(value)
                setField(field)
                // return true
            }
            //  else {
            //     setValue(value)
            //     setField("")
            // }
        } else {
            return false
        }
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
                
                {typeof(props.headerColumns) === 'object' ? props.headerColumns.map((x:any,index:any) => {
                    console.log("clickHideBtn(x, x.field, false) inhhhher", clickHideBtn(x, x.field, false));
                    
                    return (
                    <Column key={index} field={x.field} header={x.headerName && maskingCol(x.maskable,x.headerName)} 
                        headerTooltip={x.description}
                        // flex (This property is not use Yet)
                        hidden={val === x.hide ? clickHideBtn(x, x.field, false) : x.field === field ? val: x.hide } 
                        sortable={x.sortable} 
                        resizeable={x.resizable}
                        dataType={x.type}
                        align={x.align}
                        alignHeader={x.headerAlign}
                        // hideSortIcons (This property is not use Yet)
                        filterElement={HideButton(x.hideable, x, x.field)}
                        showFilterMenuOptions
                        filter
                        showFilterMenu={x.disableColumnMenu}
                        filterPlaceholder="Search by name"
                        reorderable={x.disableReorder}
                        exportable={x.disableExport}
                        frozen={x.frozenColumn}
                        columnKey={x.field}
                        style={{minWidth:"250px"}}
                        className="p-column-header-content"
                        />
                )}): ''}
                    
                <Column body={delEdit} header={setting} style={{width:"110px",maxWidth:"110px"}} hidden={props.showSettingColumn}
                resizeable={false} reorderable={false} frozen alignFrozen='right'></Column>
            </DataTable>
         
    </div>
  )
}

export default DataTableForTask

//resizeablbe must be false if frozen is true and viseversa