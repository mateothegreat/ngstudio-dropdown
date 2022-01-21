import { Component, ViewContainerRef, ViewChild, AfterViewInit } from '@angular/core';
import { DropdownService } from '../../projects/dropdown/src/lib/dropdown.service';
import { DataRowComponent } from './data-row/data-row.component';
import { ReplaySubject } from 'rxjs';
import { DropdownThemes } from '../../projects/dropdown/src/lib/dropdown-themes';
import { DropdownInstance } from '../../projects/dropdown/src/lib/dropdown-instance';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements AfterViewInit {

    @ViewChild('two', { read: ViewContainerRef }) public twoRef: ViewContainerRef;

    public instances: { [ name: string ]: DropdownInstance } = {};

    public constructor(private readonly dropdownService: DropdownService) {

    }

    public ngAfterViewInit() {

        const data$: ReplaySubject<any> = new ReplaySubject();

        data$.next([

            {

                id: 1,
                firstname: 'aaaaaaa',
                lastname: 'b',
                email: 'a@b.com'

            }, {

                id: 1,
                firstname: 'ccccccccc',
                lastname: 'd',
                email: 'a@b.com'

            }, {

                id: 1,
                firstname: 'dddd',
                lastname: 'd',
                email: 'a@b.com'

            }, {

                id: 1,
                firstname: 'ee',
                lastname: 'd',
                email: 'a@b.com'

            }, {

                id: 1,
                firstname: 'ffffffff',
                lastname: 'd',
                email: 'a@b.com'

            }, {

                id: 1,
                firstname: 'ggggg',
                lastname: 'd',
                email: 'a@b.com'

            }, {

                id: 1,
                firstname: 'ggggg',
                lastname: 'd',
                email: 'a@b.com'

            }, {

                id: 1,
                firstname: 'ggggg',
                lastname: 'd',
                email: 'a@b.com'

            }, {

                id: 1,
                firstname: 'ggggg',
                lastname: 'd',
                email: 'a@b.com'

            }, {

                id: 1,
                firstname: 'ggggg',
                lastname: 'd',
                email: 'a@b.com'

            }, {

                id: 1,
                firstname: 'ggggg',
                lastname: 'd',
                email: 'a@b.com'

            }

        ]);

        this.instances[ 'one' ] = this.dropdownService.open('one', {

            name: 'one',

            rowComponentType: DataRowComponent,
            rowComponentPropertyName: 'data',
            closeAfterSelect: false,
            theme: DropdownThemes.dark,
            data$,
            selectedRenderFn: (item: any) => {

                return item[ 'firstname' ];

            },
            componentConfig: {

                top: {

                    show: true

                },

                bottom: {

                    show: true

                }

            }

        }, 'one');

        this.instances[ 'one' ].selected$.subscribe(selected => {

            console.log(selected);

        });


        this.instances[ 'two' ] = this.dropdownService.open('two', {

            name: 'two',

            rowComponentType: DataRowComponent,
            rowComponentPropertyName: 'data',
            closeAfterSelect: false,
            theme: DropdownThemes.dark,
            data$,
            selectedRenderFn: (item: any) => {

                return item[ 'firstname' ];

            },
            componentConfig: {

                top: {

                    show: true

                },

                bottom: {

                    show: true

                }

            }

        }, this.twoRef);

    }

}
