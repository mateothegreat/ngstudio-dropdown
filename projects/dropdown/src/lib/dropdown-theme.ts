export class DropdownTheme {

    public background: string;
    public width: string;
    public selected: {

        background?: string,
        item?: any

    };
    public dropdown: {

        borderColor?: string,

        top: {

            background: string,
            input: {

                background: string,
                color: string,
                placeholderClassName: string

            },
            list: {

                background: string,
                height: string

            }

        },

        footer: {

            background: string,
            color: string,
            label?: {

                color: string,
                fontSize: string

            },
            button?: {

                background: string,
                borderColor: string,
                color: string

            }

        }

    };

    public constructor(theme: DropdownTheme) {

        Object.assign(this, theme);

    }

}
