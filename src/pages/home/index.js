/**
 * Created by admin on 2019/3/23.
 */
import React from 'react';
import { connect } from 'dva';
//import router from 'umi/router';
import styles from './index.scss';

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      cc: 1
    }
  }
  componentWillMount () {
    console.log('211212')
    let arr = ['abc', 'ab', 'cad', 'ccbdd', 'ykli', 'cdbaykb', 'cdba']
    let maxItem = ''
    let maxLength = 0
    let num = 0
    for (let item of arr) {
      //获取数组中每个对象
      //console.log(item)
      for (let j = 1; j < item.length; j++) {
        //获取数组中每个对象 截取每个对象
        let mess = item.substr(0, j)
        num = 0
        for (let items of arr) {
          //console.log(items)
          //对比的字段、数组中字段、出现次数
          chooseItem(mess, items)
        }
      }
    }
    console.log(maxItem)
    function chooseItem (mess, items) {
      if (~items.indexOf(mess)) {
        if (num > 0 && mess.length > maxItem.length) {
          maxItem = mess
          maxLength = mess.length
        } else {
          //第一次出现的时候 不计算 第二次 才算重复
          num += 1
        }
      }
    }
  }
  render () {
    const { name } = this.props;
    return (
      <div className={styles.name}>
        my name is {name}.
      </div>
    )
  }
}
//字面意思就是，把models的state变成组件的props
function mapStateToProps (state) {
  const home = state.home // home就是models命名空间名字
  // 在这return,上面才能获取到 props == 命名空间home下面的state
  return home
}
export default connect(mapStateToProps)(Home);
