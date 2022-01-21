import { DropdownService } from './dropdown.service';
import { DropdownConfig } from './dropdown-config';
import { Subject } from 'rxjs';
import { DropdownState } from './dropdown-state';

export class DropdownInstance {

    public config: DropdownConfig<any>;
    public dropdownService: DropdownService;
    public state: DropdownState = DropdownState.CLOSED;
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

    public toggle(): void {

        if (this.state === DropdownState.CLOSED) {

            this.state = DropdownState.OPEN;

        } else {

            this.state = DropdownState.CLOSED;

        }

    }

}
