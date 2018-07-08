import * as React from 'react';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
export default (props) => {
    const cmdBarItems = [
        {
            key: 'addUser',
            name: 'Tambah Akun',
            cacheKey: 'addUserCacheKey',
            iconProps: {
                iconName: 'Add'
            },
            ariaLabel: 'New. Use left and right arrow keys to navigate',
            onClick: props.toggleAdding,
            ['data-automation-id']: 'addUserMenu'
        },
        {
            key: 'editUser',
            name: 'Edit',
            cacheKey: 'editUserCacheKey',
            iconProps: {
                iconName: 'Edit'
            },
            ariaLabel: 'New. Use left and right arrow keys to navigate',
            ['data-automation-id']: 'editUserMenu'
        }
    ];
    return (React.createElement(CommandBar, { items: cmdBarItems }));
};
