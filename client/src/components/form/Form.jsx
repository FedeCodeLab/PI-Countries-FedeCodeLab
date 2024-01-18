import './FormModules.css';

export default function Form () {
  return (
      <article className='form'>
        <div className="form-lft">
          <h3>¡Bienvenido!</h3>
          <h1><span>Ingresa</span> a tu cuenta</h1>

          <div className="user">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" key="email" placeholder="Invernalia@gmail.com" />
          </div>

          <div className="pass">
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" key="password" placeholder="Ingresa tu contraseña" />
          </div>
          <button className="submit" type="submit">Iniciar Sesión</button>
        </div>
        <div className="form-rght">
          <h2>¿Eres nuevo aquí?</h2>
          <p>¡Registrate y descubre más acerca de esos países que tienes planeado visitar!</p>
          <button>Registrarse</button>
        </div>
      </article>
      
  )
}