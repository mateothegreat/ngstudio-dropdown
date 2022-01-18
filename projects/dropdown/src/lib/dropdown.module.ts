import { NgModule } from '@angular/core';
import { DropdownComponent } from './dropdown.component';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { SelectedComponent } from './selected/selected.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({

    declarations: [

        DropdownComponent,
        ItemComponent,
        SelectedComponent

    ],

    imports: [

        CommonModule,
        ReactiveFormsModule

    ],

    exports: [

        DropdownComponent

    ]

})
export class DropdownModule {
}
