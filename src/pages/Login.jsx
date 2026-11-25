
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    navigate("/dashboard");
  }

  return (
    <div>
      <h1>Log in</h1>
      <p>Enter your email below to login to your account</p>

      <form onSubmit={handleLogin}>
        <label>Email :</label>
        <input
          type="email"
          placeholder="Entrez votre email"
          required
        />

        <br /><br />

        <label>Mot de passe :</label>
        <input
          type="password"
          placeholder="Entrez votre mot de passe"
          required
        />

        <br /><br />

        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default Login;
