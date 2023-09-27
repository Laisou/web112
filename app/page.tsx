import styles from './page.module.css'
import ProductList from './productList'

import {MyButton3}  from './MyButton'

export default function Home() {
  return (<div className={styles.main}>
    <h1>Hello</h1>
    <ProductList />
  </div>)
}