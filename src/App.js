import React, { Component } from 'react'
import "ag-grid-community/dist/styles/ag-grid.css"
import "ag-grid-community/dist/styles/ag-theme-balham.css"
import {AgGridReact} from 'ag-grid-react'
import { AutoScrollService } from 'ag-grid-community';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      columnDefs:[
        {headerName :'سازنده',field:'make',sortable:true,filter:true},
        {headerName :'مدل',field:'model',sortable:true,filter:true},
        {headerName :'قیمت',field:'price',sortable:true,filter:true},
    ],
    rowData:[
      {make:'Toyota1',model:'model1',price:3000},
      {make:'Toyota2',model:'model2',price:4000},
      {make:'Toyota3',model:'model3',price:5000},
    ]
    }
  }
  render() {
    return (
      <div className="ag-theme-balham" style={{margin:"0 auto", direction:"rtl", width:700,height:600}}>
        <br />
        <AgGridReact enableRtl="true" columnDefs={this.state.columnDefs} rowData={this.state.rowData} />

      </div>
    )
  }
}
