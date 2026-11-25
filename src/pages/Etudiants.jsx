
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Etudiants({ etudiants, setEtudiants }) {
  const navigate = useNavigate();
  const [recherche, setRecherche] = useState("");

  const etudiantsFiltres = etudiants.filter((e) =>
    (e.nom + " " + e.prenom).toLowerCase().includes(recherche.toLowerCase())
  );

  function supprimer(id) {
    setEtudiants(etudiants.filter((e) => e.id !== id));
  }

  return (
    <div>
      <h1>Liste des étudiants</h1>

      <input
        type="text"
        placeholder="Rechercher un étudiant..."
        value={recherche}
        onChange={(e) => setRecherche(e.target.value)}
      />

      <button onClick={() => navigate("/ajouter")}>
        Ajouter un étudiant
      </button>

      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Âge</th>
            <th>Email</th>
            <th>Ville</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {etudiantsFiltres.map((etudiant) => (
            <tr key={etudiant.id}>
              <td>{etudiant.nom}</td>
              <td>{etudiant.prenom}</td>
              <td>{etudiant.age}</td>
              <td>{etudiant.email}</td>
              <td>{etudiant.ville}</td>
              <td>
                <button onClick={() => navigate(`/details/${etudiant.id}`)}>
                  Voir
                </button>

                <button onClick={() => navigate(`/modifier/${etudiant.id}`)}>
                  Modifier
                </button>

                <button onClick={() => supprimer(etudiant.id)}>
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Etudiants;
