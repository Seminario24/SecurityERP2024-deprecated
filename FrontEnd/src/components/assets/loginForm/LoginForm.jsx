import { FaUserTie, FaLock } from "react-icons/fa";
import './LoginForm.css'

const LoginForm = () => {
  return (
    <div className='wrapper'>
      <form action=''>
        <h1>Login</h1>
        <div className='input-box'>
          <input type='email' placeholder='correo electrónico' required />
          <FaUserTie className='icon' />
        </div>
        <div className='input-box'>
          <input type='password' placeholder='********' required />
          <FaLock className='icon' />
        </div>
        <div className='remember-forgot'>
          <label><input type='checkbox' />Remember me</label>
          <a href='#'>Forgot password?</a>
        </div>
        {/* Botón de ingresar */}
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginForm