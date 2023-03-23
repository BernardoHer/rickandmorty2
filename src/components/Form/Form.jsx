import React, { useEffect, useState } from "react";
import styles from "./Form.module.css";
import { validate } from "./validation";

export default function Form(props) {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    setErrors((prevErrors) => ({
      ...validate({
        ...userData,
        [name]: value,
      }),
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <img
        className={styles.img}
        src="https://wallpapercave.com/dwp1x/wp4791005.png"
        alt="not found"
      />
      <label htmlFor="name" className={styles.label} onSubmit={handleSubmit}>
        Nombre:
      </label>
      {errors.username ? (
        <p style={{ color: "red" }}>{errors.username}</p>
      ) : null}
      <input
        onChange={handleChange}
        type="text"
        id="name"
        className={errors.username && styles.warning}
        value={userData.username}
        name="username"
      />
      <label htmlFor="password" className={styles.label}>
        Password:
      </label>
      <input
        onChange={handleChange}
        type={showPassword ? "text" : "password"}
        id="password"
        className={errors.password && styles.warning}
        value={userData.password}
        name="password"
      />
      {errors.password ? (
        <p style={{ color: "red" }}>{errors.password}</p>
      ) : null}
      <button type="submit" className={styles.button}>
        Login
      </button>
      <button type="button" onClick={toggleShowPassword}>
        {showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
      </button>
    </form>
  );
}
