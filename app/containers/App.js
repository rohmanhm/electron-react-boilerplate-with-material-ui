import * as React from 'react';
import { initializeIcons } from '@uifabric/icons';
import Navigation from '../components/Navigation';
// Register icons and pull the fonts from the default SharePoint cdn:
initializeIcons();
export default class App extends React.Component {
    render() {
        return (React.createElement("div", { className: "c-grid" },
            React.createElement("div", { className: "c-row" },
                React.createElement("div", { id: "navigation-col", className: "c-col c-md2" },
                    React.createElement(Navigation, null)),
                React.createElement("div", { id: "page-col", className: "c-col c-md10" }, this.props.children))));
    }
}
