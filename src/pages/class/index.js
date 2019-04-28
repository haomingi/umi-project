/**
 * Created by admin on 2019/4/11.
 */
import React from 'react';
//hooks实现demo
import Form from './Form';
import Item from './Item';

class Index extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      list: [{
        computed: false,
        value: '初始化内容'
      }]
    }
  }
  addHandle = (val) => {
    this.setState({
      list: [{
        computed: false,
        value: val
      }].concat(this.state.list)
    })
  }
  render () {
    return (
      <div className="App">
        <Form add={this.addHandle} />
        <div className="List">
          {
            this.state.list.map((item, index) => {
              return <Item item={item} key={index} />
            })
          }
        </div>
      </div>
    )
  }
}
export default Index;
