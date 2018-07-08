import * as React from 'react';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import { withRouter } from 'react-router-dom';
require('./style.scss');
class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }
    navigateTo(e, url) {
        this.props.history.push(url);
    }
    render() {
        return (React.createElement("div", { className: "ms-NavExample-LeftPane" },
            React.createElement(Nav, { groups: [
                    {
                        links: [
                            {
                                name: 'User Manajemen',
                                url: '',
                                icon: 'Contact',
                                key: 'homeKey',
                                onClick: (e) => this.navigateTo(e, '/')
                            },
                            {
                                name: 'Mutasi Manajemen',
                                url: '',
                                icon: 'ActivateOrders',
                                key: 'mutationKey',
                                onClick: (e) => this.navigateTo(e, 'counter')
                            },
                            {
                                name: 'Manajamen Riwayat',
                                url: '',
                                icon: 'DateTime2',
                                key: 'historyKey',
                                onClick: (e) => this.navigateTo(e, 'counter')
                            },
                        ]
                    }
                ], expandedStateText: 'expanded', collapsedStateText: 'collapsed', selectedKey: 'key3' })));
    }
}
export default withRouter(Navigation);
