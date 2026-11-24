import { useState } from 'react';
import {
  Eye,
  EyeOff,
  Mail,
  ArrowRight
} from 'lucide-react';

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.7V3.7c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8h3.4Z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M16.7 12.8c0-2 1.6-3 1.7-3.1a3.7 3.7 0 0 0-2.9-1.6c-1.2-.1-2.3.7-2.9.7-.6 0-1.5-.7-2.5-.7a3.9 3.9 0 0 0-3.3 2c-1.4 2.4-.4 6 1 8 .7 1 1.4 2 2.4 2s1.3-.6 2.5-.6 1.5.6 2.5.6 1.7-1 2.3-2a9 9 0 0 0 1-2.1 3.4 3.4 0 0 1-1.8-3.2ZM14.8 6.8A3.6 3.6 0 0 0 15.7 4a3.8 3.8 0 0 0-2.5 1.3 3.4 3.4 0 0 0-.9 2.7 3.2 3.2 0 0 0 2.5-1.2Z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.3.8-.6v-2.1c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.2-5.1-5.5 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 1.1a10.4 10.4 0 0 1 5.5 0c2.1-1.4 3-1.1 3-1.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.7 1.1 2.9 0 4.3-2.6 5.2-5.1 5.5.4.3.7 1 .7 1.9v3.4c0 .3.2.7.8.6A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setMessage('Antarmuka masuk berhasil diuji. Silakan hubungkan backend autentikasi.');
  }

  function handleSocialLogin(provider) {
    setMessage(`Login dengan ${provider} belum dikonfigurasi. Hubungkan OAuth untuk mengaktifkannya.`);
  }

  return (
    <div className="login-card">
      <div className="login-card-header">
  <span className="login-eyebrow">SELAMAT DATANG KEMBALI</span>
  <h2>Masuk ke akun Anda</h2>
  <p>Masukkan informasi akun Anda untuk melanjutkan.</p>
</div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Alamat Email</label>

          <div className="input-wrapper">
            <Mail size={19} className="input-icon" />
            <input
              id="email"
              type="email"
              placeholder="nama@contoh.com"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setMessage('');
              }}
              autoComplete="email"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <div className="password-label">
            <label htmlFor="password">Kata Sandi</label>
<a href="#forgot-password">Lupa kata sandi?</a>
          </div>

          <div className="input-wrapper">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
             placeholder="Masukkan kata sandi"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                setMessage('');
              }}
              autoComplete="current-password"
              required
            />

            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
            >
              {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
            </button>
          </div>
        </div>

        <label className="remember-control">
          <input
            type="checkbox"
            checked={remember}
            onChange={(event) => setRemember(event.target.checked)}
          />
          <span>Ingat saya</span>
        </label>

        <button type="submit" className="login-button">
          <span>Masuk</span>
        </button>

        {message && (
          <div className="login-message" role="status">
            {message}
          </div>
        )}
      </form>

      <div className="login-divider">
        <span />
        <p>ATAU LANJUTKAN DENGAN</p>
        <span />
      </div>

      <div className="social-login">
        <button
          type="button"
          className="social-login-button"
          onClick={() => handleSocialLogin('Facebook')}
        >
          <FacebookIcon />
          <span>Facebook</span>
        </button>

        <button
          type="button"
          className="social-login-button"
          onClick={() => handleSocialLogin('Apple')}
        >
          <AppleIcon />
          <span>Apple</span>
        </button>

        <button
          type="button"
          className="social-login-button"
          onClick={() => handleSocialLogin('GitHub')}
        >
          <GithubIcon />
          <span>GitHub</span>
        </button>
      </div>

      <p className="login-security">
  Informasi Anda terlindungi dan terenkripsi.
</p>

      <div className="signup-text">
        Belum memiliki akun?
        <a href="#register"> Buat akun</a>
      </div>
    </div>
  );
}

