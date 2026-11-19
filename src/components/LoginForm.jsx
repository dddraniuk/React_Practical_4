
import { useState } from 'react'
import './LoginForm.css'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()

    const newErrors = {}

    if (email.trim() === '') {
      newErrors.email = 'Введіть Email'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Введіть правильний Email'
    }

    if (password === '') {
      newErrors.password = 'Введіть пароль'
    } else if (password.length < 6) {
      newErrors.password = 'Пароль повинен містити мінімум 6 символів'
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      alert('Дані введено успішно!')
    }
  }

  return (
    <div className="login-container">
      <h2 className="login-title">Вхід до системи</h2>

      <form className="login-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label className="form-label">Email:</label>

          <input
            className="form-input"
            type="email"
            placeholder="Введіть Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {errors.email && (
            <p className="error-message">{errors.email}</p>
          )}
        </div>

        <div className="form-group">
          <label className="form-label">Пароль:</label>

          <div className="password-wrapper">
            <input
              className="form-input"
              type={showPassword ? 'text' : 'password'}
              placeholder="Введіть пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="toggle-password"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Сховати пароль' : 'Показати пароль'}
            </button>
          </div>

          {errors.password && (
            <p className="error-message">{errors.password}</p>
          )}
        </div>

        <button className="submit-button" type="submit">
          Увійти
        </button>
      </form>
    </div>
  )
}

export default LoginForm
