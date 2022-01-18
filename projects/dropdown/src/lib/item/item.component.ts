import { Component, ChangeDetectorRef, AfterViewInit, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponentFactoryService } from '@ngstudio/dynamic-component-factory';
import { DropdownInstance } from '../dropdown-instance';

@Component({
    selector: 'lib-item',
    templateUrl: './item.component.html',
    styleUrls: [ './item.component.scss' ]
})
export class ItemComponent implements AfterViewInit {

    @ViewChild('item', { read: ViewContainerRef }) private listContainerRef: ViewContainerRef;

    @Input() public instance: DropdownInstance;
    @Input() public index: number;
    @Input() public item: any;
    @Input() public selected: boolean;

    public constructor(private readonly dynamicComponentFactoryService: DynamicComponentFactoryService,
                       private readonly changeDetectorRef: ChangeDetectorRef) {


    }

    public ngAfterViewInit() {

        this.changeDetectorRef.detach();

        setTimeout(() => {

            this.changeDetectorRef.reattach();

            const instance = this.dynamicComponentFactoryService.createInContainer('item', this.listContainerRef, this.instance.config.rowComponentType);

            instance.componentRef.instance[ this.instance.config.rowComponentPropertyName ] = this.item;

        });

    }

}
