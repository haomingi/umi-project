/**
 * Created by admin on 2019/3/23.
 */
import React from 'react';
import { connect } from 'dva';
//import router from 'umi/router';
import styles from './index.scss';

class Account extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      cc: 1
    }
  }
  render () {
    return (
      <div>
        www.baidu.com
      </div>
    )
  }
}

export default Account;
