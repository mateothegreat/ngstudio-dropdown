# Rich dropdown like a boss 🚀

![screenshot](docs/screenshot.png)

## Features

* Inject multiple instances using a `@ViewChild`, element id, or at the application root without needing to embed any
  html.
* Use a [custom component](src/app/data-row/data-row.component.ts) to render each list item.
* Uses Observables for data source changes and event tracking.
* Use a default ([light/dark](projects/dropdown/src/lib/dropdown-themes.ts)) theme
  or [customize](projects/dropdown/src/lib/dropdown-theme.ts) to your liking.
* Close dropdown on escape keypress and/or click.
* Programmatically manage dropdown states.
* Configure every aspect of the [dropdown component](projects/dropdown/src/lib/dropdown-config-component.ts) per
  instance.
* Search and filter against all data source object properties.

## Installation

```bash
npm install @ngstudio/dropdown
```

## Example

```typescript
const instance = this.dropdownService.open('one', 'myElementId', this.one, {

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

});

instance.selected$.subscribe(selected => {

    console.log(`List item selected: ${ selected }`);

});
```

For a full example see [src/app/app.component.ts](src/app/app.component.ts).
