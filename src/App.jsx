
import { useEffect, useState } from 'react';

import WaveBackground from './components/WaveBackground';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

import './styles/login.css';
import './styles/page-transition.css';

function AuthPanel({ type, active }) {
  return (
    <section
      className={`auth-panel ${type}-panel`}
      aria-hidden={!active}
      inert={!active}
    >
      <div className="auth-only-layout">
        <div className="form-section">
          {type === 'login' ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    return window.location.hash === '#register'
      ? 'register'
      : 'login';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const nextPage =
        window.location.hash === '#register'
          ? 'register'
          : 'login';

      setCurrentPage(nextPage);
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <main className="login-page auth-clean-page">
      <WaveBackground />

      <div className={`auth-slider ${currentPage === 'register' ? 'show-register' : 'show-login'}`}>
        <AuthPanel
          type="login"
          active={currentPage === 'login'}
        />

        <AuthPanel
          type="register"
          active={currentPage === 'register'}
        />
      </div>
    </main>
  );
}
