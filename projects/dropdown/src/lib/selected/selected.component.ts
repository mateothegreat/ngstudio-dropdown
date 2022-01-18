import { Component, Input, OnInit } from '@angular/core';
import { DropdownConfig } from '../dropdown-config';

@Component({
    selector: 'lib-selected',
    templateUrl: './selected.component.html',
    styleUrls: [ './selected.component.scss' ]
})
export class SelectedComponent implements OnInit {

    @Input() public config: DropdownConfig<any>;
    @Input() public item: any;

    public value: string;

    public ngOnInit() {

        this.value = this.config.selectedRenderFn(this.item);

    }

}
