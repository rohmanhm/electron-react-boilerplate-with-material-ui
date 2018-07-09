import * as React from 'react';
import { initializeIcons } from '@uifabric/icons';
import Navigation from '../components/Navigation'

// Register icons and pull the fonts from the default SharePoint cdn:
initializeIcons();

export default class App extends React.Component {
  render() {
    return (
      <div className="c-grid">
        <div className="c-row">
          <div id="navigation-col" className="c-col c-md2">
            <Navigation />
          </div>
          <div id="page-col" className="c-col c-md10">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
