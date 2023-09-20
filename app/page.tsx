import styles from './page.module.css'
// import MyName1 from './myname'
// import {MyName2} from './myname'
// import MyButton1  from './MyButton'
// import {MyButton2}  from './MyButton'
// import {MyButton3}  from './MyButton'
import {RandomNumbersArray}  from './MyButton'

export default function Home() {
  return (
  <div className={styles.main}>
    <h1>Hello</h1>
    {/* <MyName1/>
    <MyName2/>
    <MyButton1/>
    <MyButton2/>
    <MyButton2/>
    <MyButton3/> */}
    <RandomNumbersArray/>
    <RandomNumbersArray/>
  </div>
  )
}