import { Injectable, ViewContainerRef } from '@angular/core';
import { DropdownInstance } from './dropdown-instance';
import { DropdownConfig } from './dropdown-config';
import { DynamicComponentFactoryService, DynamicComponentFactoryInstance } from '@ngstudio/dynamic-component-factory';
import { DropdownComponent } from './dropdown.component';

@Injectable({
    providedIn: 'root'
})
export class DropdownService {

    private instances: Array<DropdownInstance> = [];

    public constructor(private readonly dynamicComponentFactoryService: DynamicComponentFactoryService) {

    }

    public open(name: string,
                config: DropdownConfig<any>,
                injectionPoint?: string | ViewContainerRef): DropdownInstance {

        config = new DropdownConfig(config);
        config.name = name;

        const instance = new DropdownInstance(config, this);

        this.instances.push(instance);

        let ref: DynamicComponentFactoryInstance<DropdownComponent>;

        if (injectionPoint) {

            if (typeof injectionPoint === 'string') {

                ref = this.dynamicComponentFactoryService.createInElementById(name, injectionPoint, DropdownComponent);

            } else {

                ref = this.dynamicComponentFactoryService.createInContainer(name, injectionPoint, DropdownComponent);

            }

        } else {

            ref = this.dynamicComponentFactoryService.createInApplicationRoot(name, DropdownComponent);

        }

        ref.componentRef.instance.config = config;
        ref.componentRef.instance.instance = instance;

        return instance;

    }

    public get(name: string): DropdownInstance {

        // return this.instances.find(instance => instance.config.name === name);

        return null;
    }

}
