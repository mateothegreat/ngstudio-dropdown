import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DropdownModule } from '../../projects/dropdown/src/lib/dropdown.module';
import { DataRowComponent } from './data-row/data-row.component';

@NgModule({

    declarations: [

        AppComponent,
         DataRowComponent

    ],

    imports: [

        BrowserModule,
        DropdownModule

    ],

    providers: [],
    bootstrap: [ AppComponent ]

})
export class AppModule {
}
