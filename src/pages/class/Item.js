/**
 * Created by admin on 2019/4/11.
 */
import React, { useState } from 'react';
import styles from './Item.css';
function useItem (props) {
  const [computed, setComputed] = useState(props.item.computed)
  const clickHandle = () => {
    setComputed(!computed)
  }
  return (
    <div className={styles.item} onClick={clickHandle}>
      {
        computed ? <s>{props.item.value}</s> : <p>{props.item.value}</p>
      }
    </div>
  )
}

export default useItem;
