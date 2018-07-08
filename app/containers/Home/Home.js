import * as React from 'react';
import CmdBar from './CmdBar';
import TableData from './TableData';
// POPUP MODAL
import AddUser from './AddUser';
let styles = require('./Home.scss');
export default class Home extends React.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement(AddUser, Object.assign({}, this.props)),
            React.createElement(CmdBar, Object.assign({}, this.props)),
            React.createElement(TableData, Object.assign({}, this.props))));
    }
}
