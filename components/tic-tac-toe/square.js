import { useState } from 'react'
import styles from './square.module.css'

export default function Square(props) {
  return (
    <button
      className={styles.square}
      onClick={() => props.onClick()}
      >{props.value}</button>
  )
}