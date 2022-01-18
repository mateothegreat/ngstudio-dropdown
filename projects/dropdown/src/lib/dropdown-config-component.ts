export class DropdownConfigComponent {

    public top?: {

        show?: boolean

    } = {

        show: true

    };

    public bottom?: {

        show?: boolean,
        button?: {

            show?: boolean
            label?: string

        }

    } = {

        show: true,
        button: {

            show: true,
            label: 'Apply'

        }

    };

    public constructor(config?: DropdownConfigComponent) {

        Object.assign(this, config);

    }

}
