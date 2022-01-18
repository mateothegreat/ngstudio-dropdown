import { DropdownService } from './dropdown.service';
import { DropdownConfig } from './dropdown-config';
import { Subject } from 'rxjs';

export class DropdownInstance {

    public config: DropdownConfig<any>;
    public dropdownService: DropdownService;
    public selected: Array<any> = [];
    public selected$: Subject<any> = new Subject();

    public constructor(config: DropdownConfig<any>, dropdownService: DropdownService) {

        this.config = config;
        this.dropdownService = dropdownService;

    }

    public add(item: any): void {

        this.selected.push(item);

        this.selected$.next(this.selected);

    }

}
