import React from 'react';
import { Button } from '../../atoms/Button/Button';
import { InputWithIcon } from '../../molecules/InputWithIcon/InputWithIcon';
import './LoginForm.css';

export function LoginForm() {
  return (
    <form className="login-form">
      <h1 className="title">Bienvenido!</h1>
      <InputWithIcon
        type="email"
        placeholder="Escribe tu correo"
        iconName="email"
      />
      <InputWithIcon
        type="password"
        placeholder="Escribe tu contraseña"
        iconName="password"
      />

      <Button>Login</Button>

      <p>No tienes una cuenta? registrate aquí</p>
    </form>
  );
}
