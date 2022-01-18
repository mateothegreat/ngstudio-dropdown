import { Type } from '@angular/core';
import { Observable } from 'rxjs';
import { DropdownTheme } from './dropdown-theme';
import { DropdownConfigComponent } from './dropdown-config-component';

export class DropdownConfig<T> {

    public name: string;
    public rowComponentType: Type<any>;
    public rowComponentPropertyName: string;
    public closeAfterSelect?: boolean;
    public data$: Observable<T>;
    public selectedRenderFn: Function;
    public selectedMax?: number;
    public theme?: DropdownTheme;
    public componentConfig?: DropdownConfigComponent = new DropdownConfigComponent();
    public applyLabel?: string = 'Apply';

    public constructor(config: DropdownConfig<T>) {

        Object.assign(this, config);

    }

}
