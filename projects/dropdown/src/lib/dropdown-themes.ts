import { DropdownTheme } from './dropdown-theme';

export const DropdownThemes = {

    dark: new DropdownTheme({

        background: '#222',
        width: '400px',

        selected: {

            background: '#222',
            item: {

                background: 'rebeccapurple',
                padding: '3px 6px',
                'font-size': '12px',
                color: '#aaa',
                'border-radius': '4px'

            }

        },
        dropdown: {

            top: {

                background: '#333',
                input: {

                    background: '#222',
                    color: '#ddd',
                    placeholderClassName: 'dark'

                },
                list: {

                    background: '#111',
                    height: '250px'

                }

            },
            footer: {

                background: '#333',
                color: '#aaa',
                label: {

                    color: 'lightgreen',
                    fontSize: '12px'

                },
                button: {

                    background: '#555',
                    borderColor: '#666',
                    color: '#aaa'

                }

            }

        }

    })

};
