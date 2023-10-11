import React from 'react';
import { LoginForm } from '../components/organisms/LoginForm/LoginForm';
import { LoginTemplate } from '../components/templates/LoginTemplate';

export function Login() {
  return (
    <LoginTemplate>
      <LoginForm />
    </LoginTemplate>
  );
}
