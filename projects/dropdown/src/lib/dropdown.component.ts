import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { DropdownConfig } from './dropdown-config';
import { DropdownInstance } from './dropdown-instance';
import { FormControl } from '@angular/forms';

@Component({

    selector: 'ngstudio-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: [ './dropdown.component.scss' ]

})
export class DropdownComponent implements OnInit {

    @ViewChild('dropdown', { read: ElementRef, static: false }) public dropdownElementRef: ElementRef;

    public config: DropdownConfig<any>;
    public instance: DropdownInstance;
    public control: FormControl = new FormControl();
    public isOpen: boolean = true;
    public filtered: Array<any>;

    // public isOpen: boolean;

    public items: Array<any>;

    public constructor() {

        this.control.valueChanges.subscribe(value => this.filter(value));
        console.log(12);
    }

    @HostListener('document:click', [ '$event' ])
    public onFocusOut(event: any): void {

        if (!this.dropdownElementRef.nativeElement.contains(event.target)) {

            this.isOpen = false;

        }

    }

    public ngOnInit() {

        this.config.data$.subscribe(data => {

            this.items = data;
            this.filtered = data;

        });

    }

    public toggle(): void {

        if (this.isOpen) {

            this.isOpen = false;

        } else {

            this.control.reset();

            this.isOpen = true;

        }

    }

    public filter(value: string): void {

        if (value && value.length > 0) {

            this.filtered = this.items.filter(item => {

                const items = Object.values<string>(item);

                for (let i = 0; i < items.length; i++) {

                    if (items[ i ].toString().includes(value)) {

                        return true;

                    }

                }

                return false;

            });

        } else {

            this.filtered = this.items;

        }

    }

    public add(item: any): void {

        const index = this.instance.selected.indexOf(item);

        if (index === -1) {

            if (this.config.selectedMax) {

                if (this.instance.selected.length < this.config.selectedMax) {

                    this.instance.add(item);

                }

            } else {

                this.instance.add(item);

            }

        } else {

            this.instance.selected.splice(index, 1);

        }

        if (this.config.closeAfterSelect) {

            this.isOpen = false;

        }

    }

    public remove(i: number): void {

        this.instance.selected.splice(i, 1);

    }

    public apply(): void {

        this.isOpen = false;

    }

    public selectAll(): void {

        if (this.instance.selected.length === this.items.length) {

            this.instance.selected = [];

        } else {

            this.instance.selected = this.items;

        }

    }

}
