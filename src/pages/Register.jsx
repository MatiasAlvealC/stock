import '../assets/styles/Register.css';

function Register() {
    return (
        <div className="login-container">
        <div className="login-box">
            <h1>Registrarse</h1>
            <form>
            <input type="text" placeholder="RUT" className="login-input" />
            <input type="text" placeholder="Nombre" className="login-input" />
            <input type="text" placeholder="Apellido Paterno" className="login-input" />
            <input type="text" placeholder="Apellido Materno" className="login-input" />
            <input type="password" placeholder="Contraseña" className="login-input" />
            <button type="submit" className="login-button">Registrarse</button>
            </form>
            <p className="signup-link"><a href="Login">¿Ya tienes cuenta? Inicia sesión</a></p>
        </div>
        </div>
    );
}

export default Register;
