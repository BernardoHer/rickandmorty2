import React from "react"; 
import styles from './About.module.css';


export default function About(){
    return(
        <div>
            <h1 className={styles.h1} > Aplicacion recreada por Bernardo Hernandez</h1>
            <div className={styles.img} >
            <img src="https://i.pinimg.com/564x/54/36/98/543698d5e0467da9658fb71bde272881.jpg" alt="error" /> 
            </div>
            <br/>
            <a className={styles.a} href="https://www.linkedin.com/in/bernardo-hernandez-7b39a3243/" target="_blank">LinkedIn</a>

        </div>

    )
}