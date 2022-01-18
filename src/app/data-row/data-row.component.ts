import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-data-row',
    templateUrl: './data-row.component.html',
    styleUrls: [ './data-row.component.scss' ]
})
export class DataRowComponent implements OnInit {

    public data: any;

    public ngOnInit(): void {

        // console.log(this.data);

    }

}
