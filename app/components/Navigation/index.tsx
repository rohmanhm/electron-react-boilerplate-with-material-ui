import * as React from 'react'
import { Nav } from 'office-ui-fabric-react/lib/Nav'
import { withRouter, RouteComponentProps } from 'react-router-dom'

require('./style.scss')

type Props = RouteComponentProps<any>

class Navigation extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props)
  }

  navigateTo (e: React.MouseEvent<HTMLElement>, url: string) {
    this.props.history.push(url)
  }

  public render(): JSX.Element {
    return (
      <div className="ms-NavExample-LeftPane">
        <Nav
          groups={[
            {
              links: [
                {
                  name: 'User Manajemen',
                  url: '',
                  icon: 'Contact',
                  key: 'homeKey',
                  onClick: (e: any) => this.navigateTo(e, '/')
                },
                {
                  name: 'Mutasi Manajemen',
                  url: '',
                  icon: 'ActivateOrders',
                  key: 'mutationKey',
                  onClick: (e: any) => this.navigateTo(e, 'counter')
                },
                {
                  name: 'Manajamen Riwayat',
                  url: '',
                  icon: 'DateTime2',
                  key: 'historyKey',
                  onClick: (e: any) => this.navigateTo(e, 'counter')
                },
                // { name: 'Documents', url: '/', key: 'key3', isExpanded: true },
                // { name: 'Pages', url: '/counter', key: 'key4' },
                // { name: 'Notebook', url: '/counter', key: 'key5' },
                // { name: 'Long Name Test for ellipse', url: '/counter', key: 'key6' },
                // {
                //   name: 'Edit',
                //   url: '/counter',
                //   onClick: this._onClickHandler,
                //   icon: 'Edit',
                //   key: 'key8'
                // },
                // {
                //   name: 'Delete',
                //   url: '/counter',
                //   onClick: this._onClickHandler2,
                //   iconProps: { iconName: 'Delete' },
                //   key: 'key9'
                // }
              ]
            }
          ]}
          expandedStateText={'expanded'}
          collapsedStateText={'collapsed'}
          selectedKey={'key3'}
        />
      </div>
    )
  }
}

export default withRouter(Navigation)
