import { Component, OnInit } from '@angular/core';
import { error } from 'util';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'simple-grid',
    templateUrl: './simple.grid.component.html',
})
export class SimpleGridComponent implements OnInit {
    gridLocalData: any[] =[];
    constructor(private _dataService: DataService) { }

    ngOnInit(): void {
        let responseData: any;
        this._dataService.getData('assets/data/employee.json').subscribe(
            res =>{
                responseData = res;
            },
            error =>{
                console.log(error);
            },
            () =>{
            this.gridLocalData = responseData.response.data;
            }
        )
     }

     onSelectRow(rowData: any) {
        let responseSave: any;
      this._dataService.postData('/api/save', rowData).subscribe(
        res =>{
            responseSave = res;
        },
        error =>{
            console.log(error);
        },
        () =>{
          console.log(responseSave);
        }
      )
     }
}
