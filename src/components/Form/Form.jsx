import React from 'react';
import styles from './Form.module.css'

export default function Form(props){
    return(
    <form className={styles.container}>
        <label htmlfor='' >Nombre: </label>
        <input type='text'/>
         <label htmlfor='' >Password: </label>
        <input type='password'/>
        <button>Login</button>
        </form>
        );
    }