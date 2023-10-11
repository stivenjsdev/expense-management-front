import React from 'react';
import './LoginTemplate.css';

export function LoginTemplate({ children }) {
  return (
    <>
      <header className="header">
        <div className="logo">
          EM
        </div>
      </header>

      <main>
        {children}
      </main>
    </>
  );
}
