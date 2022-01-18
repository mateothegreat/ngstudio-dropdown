import { Injectable, ViewContainerRef } from '@angular/core';
import { DropdownInstance } from './dropdown-instance';
import { DropdownConfig } from './dropdown-config';
import { DynamicComponentFactoryService } from '@ngstudio/dynamic-component-factory';
import { DropdownComponent } from './dropdown.component';

@Injectable({
    providedIn: 'root'
})
export class DropdownService {

    private instances: Array<DropdownInstance> = [];

    public constructor(private readonly dynamicComponentFactoryService: DynamicComponentFactoryService) {

    }

    public open(name: string, elementId: string, viewContainerRef: ViewContainerRef, config: DropdownConfig<any>): DropdownInstance {

        config = new DropdownConfig(config);
        config.name = name;

        const instance = new DropdownInstance(config, this);

        this.instances.push(instance);

        const ref = this.dynamicComponentFactoryService.createInElementById(name, elementId, DropdownComponent);

        ref.componentRef.instance.config = config;
        ref.componentRef.instance.instance = instance;

        return instance;

    }

    public get(name: string): DropdownInstance {

        // return this.instances.find(instance => instance.config.name === name);

        return null;
    }

}
