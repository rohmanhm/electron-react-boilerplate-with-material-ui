import * as React from 'react'
import { IContextualMenuItem } from 'office-ui-fabric-react'
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar'
import { IProps } from './Home'

export default (props: IProps) => {
  const cmdBarItems: IContextualMenuItem[] = [
    {
      key: 'addUser',
      name: 'Tambah Akun',
      cacheKey: 'addUserCacheKey',
      iconProps: {
        iconName: 'Add'
      },
      ariaLabel: 'New. Use left and right arrow keys to navigate',
      onClick: (props.toggleAdding as any),
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
  ]

  return (
    <CommandBar
      items={cmdBarItems}
    />
  )
}