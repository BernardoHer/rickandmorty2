import React,{useEffect, useState} from "react";
import styles from "./Form.module.css";

export default function Form(props) {
  const [userData, setUserData] = useState({ username: '', password: '' });
  const handleChange =(event) =>{
    const {name,value} = event.target
    setUserData({
      ...userData,[name]: value,
    })
  }
  useEffect(()=>{
    console.log(userData)
  },[userData])

  return (
    <form className={styles.container}>
        <img className={styles.img} src="https://wallpapercave.com/dwp1x/wp4791005.png" alt="not found"/>
      <label htmlFor="name" className={styles.label}>
        Nombre:
      </label>
      <input onChange={handleChange} type="text" id="name" className={styles.input} value={userData.username} name='username'/>
      <label   htmlFor="password" className={styles.label}>
        Password:
      </label>
      <input onChange={handleChange} type="password" id="password" className={styles.input}  value={userData.password} name='password'/>
      <button className={styles.button}>Login</button>
    </form>
  );
}
