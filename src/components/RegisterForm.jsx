import { useState } from 'react';
import {
  Mail,
  Phone,
  Eye,
  EyeOff,
  ArrowRight
} from 'lucide-react';

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agree: false
  });
  const [message, setMessage] = useState('');

  function updateField(event) {
    const { name, value, checked, type } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: type === 'checkbox' ? checked : value
    }));

    setMessage('');
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (form.password !== form.confirmPassword) {
      setMessage('Kata sandi dan konfirmasi kata sandi tidak sama.');
      return;
    }

    if (!form.agree) {
      setMessage('Silakan setujui syarat dan ketentuan terlebih dahulu.');
      return;
    }

    setMessage('Form pendaftaran berhasil diuji. Hubungkan backend untuk menyimpan akun.');
  }

  return (
    <div className="login-card register-card">
      <div className="login-card-header">
  <span className="login-eyebrow">GABUNG BERSAMA KAMI</span>
  <h2>Buat Akun Anda</h2>
  <p>Lengkapi informasi berikut untuk membuat akun WAVE.</p>
</div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="register-name">Nama Lengkap</label>
          <div className="input-wrapper">
            <input
              id="register-name"
              name="name"
              type="text"
              placeholder="Masukkan nama lengkap Anda"
              value={form.name}
              onChange={updateField}
              autoComplete="name"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="register-email">Alamat Email</label>
          <div className="input-wrapper">
            <Mail size={19} className="input-icon" />
            <input
              id="register-email"
              name="email"
              type="email"
              placeholder="nama@contoh.com"
              value={form.email}
              onChange={updateField}
              autoComplete="email"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="register-phone">Nomor WhatsApp</label>
          <div className="input-wrapper">
            <Phone size={19} className="input-icon" />
            <input
              id="register-phone"
              name="phone"
              type="tel"
              placeholder="+62 812 3456 7890"
              value={form.phone}
              onChange={updateField}
              autoComplete="tel"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="register-password">Buat kata sandi</label>
          <div className="input-wrapper">
            <input
              id="register-password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Buat kata sandi"
              value={form.password}
              onChange={updateField}
              autoComplete="new-password"
              minLength={8}
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

        <div className="form-group">
          <label htmlFor="register-confirm-password">Konfirmasi Kata Sandi</label>
          <div className="input-wrapper">
            <input
              id="register-confirm-password"
              name="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Konfirmasi kata sandi Anda"
              value={form.confirmPassword}
              onChange={updateField}
              autoComplete="new-password"
              minLength={8}
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              aria-label={showConfirmPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
            >
              {showConfirmPassword ? <EyeOff size={19} /> : <Eye size={19} />}
            </button>
          </div>
        </div>

        <label className="remember-control register-agreement">
          <input
            type="checkbox"
            name="agree"
            checked={form.agree}
            onChange={updateField}
          />
          <span>
            Saya menyetujui <a href="#terms">Ketentuan Layanan</a> dan{' '}
            <a href="#privacy">Kebijakan Privasi</a>.
          </span>
        </label>

        <button type="submit" className="login-button">
          <span> Daftar Sekarang</span>
        </button>

        {message && (
          <div className="login-message" role="status">
            {message}
          </div>
        )}
      </form>

      <div className="signup-text register-signin">
        	Sudah memiliki akun?
        <a href="#login"> Masuk</a>
      </div>
    </div>
  );
}

