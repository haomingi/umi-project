//import styles from './index.css';

import React from 'react'
import BasicLayout from './BasicLayout';

const ULR_NO_LAYOUT = ['/', '/home', '/class', '/account'];

class index extends React.Component {
  renderBody = () => {
    const {location: {pathname}, children } = this.props;
    if (ULR_NO_LAYOUT.includes(pathname)) {
      return  (<BasicLayout {...this.props} />);
    }
    return (
      <React.Fragment>
        {children}
      </React.Fragment>
    );
  }
  render() {
    return (
      <React.Fragment>
        {this.renderBody()}
      </React.Fragment>
    )
  }
}

export default index;
