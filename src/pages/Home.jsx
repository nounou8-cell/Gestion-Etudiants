
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">

      <nav className="navbar">
        <h2>🎓 Gestion Étudiants</h2>

        <div>
          <button onClick={() => navigate("/")}>Accueil</button>
          <button onClick={() => navigate("/login")}>Log in</button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-text">
          <span className="tag">Espace Étudiant</span>

          <h1>
            Bienvenue sur
            <br />
            Gestion Étudiants
          </h1>

          <p>
            Gérez facilement les informations de vos étudiants,
            suivez leurs parcours et simplifiez votre administration.
          </p>

          <button
            className="btn-start"
            onClick={() => navigate("/login")}
          >
            Commencer →
          </button>
        </div>

        <div className="hero-card">
          <div className="student-icon">🎓</div>
          <h2>Bienvenue dans votre espace</h2>
          <p>Organisez vos étudiants dans un seul espace.</p>

          <div className="mini-card">
            <span>👩‍🎓</span>
            <div>
              <strong>Étudiants</strong>
              <small>Gestion des informations</small>
            </div>
          </div>

          <div className="mini-card">
            <span>📊</span>
            <div>
              <strong>Suivi</strong>
              <small>Organisation et consultation</small>
            </div>
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <span>⚡ Gestion Rapide</span>
        <span>✓ Sécurité Garantie</span>
        <span>📊 Suivi Efficace</span>
      </footer>

    </div>
  );
}

export default Home;
