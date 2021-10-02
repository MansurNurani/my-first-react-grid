import React, { Component } from 'react'
import "ag-grid-community/dist/styles/ag-grid.css"
import "ag-grid-community/dist/styles/ag-theme-balham.css"
import {AgGridReact} from 'ag-grid-react'
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
      <div className="ag-theme-balham" style={{direction:"rtl", width:700,height:600}}>
        <AgGridReact columnDefs={this.state.columnDefs} rowData={this.state.rowData} />

      </div>
    )
  }
}
