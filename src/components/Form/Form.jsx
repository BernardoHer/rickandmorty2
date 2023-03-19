import styles from './Form.module.css'

export default function Form(){
    return(
        <Form>
            <label htmlFor=''>Nombre: </label>
            <input type='text' />
             <label htmlFor=''>Password: </label>
            <input type='password' />
            <button> Login </button>
        </Form>
    )
}