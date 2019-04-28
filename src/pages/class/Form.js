/**
 * Created by admin on 2019/4/11.
 */
import React, { useState, useEffect } from 'react';
import styles from './Form.css';

function useForm (props) {
  const [value, setValue] = useState('')
  const clickHandle = () => {
    if (typeof props.add === 'function' && value.length > 0) {
      props.add(value)
    }
    setValue('')
  }
  //测试运行，
  //useEffect(() => {
  //  let num = 0
  //  let timeObj = setInterval(() => {
  //    num += 1
  //    console.log(num)
  //  }, 1000)
  //  return () => {
  //    clearInterval(timeObj)
  //  }
  //})
  return (
    <div className={styles.wrapper}>
      <input
      value={value}
      className={styles.input}
      onChange={(e) => {setValue(e.target.value)}}
      />
      <button className={styles.btn} onClick={clickHandle}>add</button>
    </div>
  )
}

export default useForm;
