
import { Link, useNavigate } from "react-router-dom";

function Dashboard({ etudiants }) {
  const navigate = useNavigate();

  return (
    <div className="dashboard-page">

      <aside className="sidebar">
        <h2>🎓 Gestion</h2>

        <Link to="/">Accueil</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/etudiants">Étudiants</Link>

        <button onClick={() => navigate("/login")}>
          Déconnexion
        </button>
      </aside>

      <main className="dashboard-content">

        <h1>Dashboard</h1>
        <p>Bienvenue dans votre espace de gestion.</p>

        <div className="dashboard-cards">

          <div className="dashboard-card">
            <span>👨‍🎓</span>
            <h3>Total des étudiants</h3>
            <h2>{etudiants.length}</h2>
          </div>

          <div className="dashboard-card">
            <span>📚</span>
            <h3>Gestion des étudiants</h3>
            <p>Consultez les informations des étudiants.</p>
            <Link to="/etudiants">Voir la liste →</Link>
          </div>

          <div className="dashboard-card">
            <span>➕</span>
            <h3>Ajouter un étudiant</h3>
            <p>Ajouter un nouvel étudiant facilement.</p>
            <Link to="/ajouter">Ajouter →</Link>
          </div>

        </div>

      </main>
    </div>
  );
}

export default Dashboard;
