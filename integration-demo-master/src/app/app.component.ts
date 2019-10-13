import { Component } from '@angular/core';
import { MatCheckboxComponent } from './mat-checkbox.component';
import { GridOptions } from 'ag-grid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public gridOptions: GridOptions;

  columnDefs = [
    { headerName: 'Checkbox1', field: 'on_off', cellRenderer: 'checkboxRenderer' },
    { headerName: 'Make', field: 'make' },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price', editable: true }
  ];

  rowData = [];

  constructor() {
    this.gridOptions = <GridOptions>{
      rowData: this.createRowData(),
      columnDefs: this.createColumnDefs(),
      onGridReady: () => {
        this.gridOptions.api.sizeColumnsToFit();
      },
      rowHeight: 48, // recommended row height for material design data grids,
      frameworkComponents: {
        checkboxRenderer: MatCheckboxComponent
      }
    };
  }

  ngOnInit() {
    // fetch('https://api.myjson.com/bins/15psn9')
    //   .then(result => result.json())
    //   .then(rowData => this.rowData = rowData);
  }

  private createColumnDefs() {
    return [
      { headerName: 'Checkbox1', field: 'on_off', cellRenderer: 'checkboxRenderer' },
      { headerName: 'Make', field: 'make' },
      { headerName: 'Model', field: 'model' },
      { headerName: 'Price', field: 'price', editable: true }
    ];
  }
  private createRowData() {
    return [
      { on_off: "On", "make": "Toyota", "model": "Celica", "price": 35000 }, 
      { on_off: "On", "make": "Ford", "model": "Mondeo", "price": 32000 }
    ];
    
  }
}
