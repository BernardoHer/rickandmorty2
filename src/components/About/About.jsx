import React from "react"; 
import styles from './About.module.css';


export default function About(){
    return(
        <div>
            <h1 className={styles.h1} > Aplicacion creada por Bernardo Hernandez</h1>
            <a className={styles.a} href="https://www.linkedin.com/in/bernardo-hernandez-7b39a3243/"><img src="https://content.linkedin.com/content/dam/me/brand/en-us/brand-home/logos/In-Blue-Logo.png.original.png"/></a>
            <div className={styles.img} >
            <img src="https://wallpapercave.com/dwp1x/wp5979168.png" alt="error" /> 
            </div>
            <br/>
            

        </div>

    )
}