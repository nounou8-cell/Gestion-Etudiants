
import { useNavigate, useParams } from "react-router-dom";

function DetailsEtudiant({ etudiants }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const etudiant = etudiants.find((e) => e.id === Number(id));

  if (!etudiant) {
    return (
      <div>
        <h1>Étudiant introuvable</h1>

        <button onClick={() => navigate("/etudiants")}>
          Retour
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>Détails de l'étudiant</h1>

      <p>Nom : {etudiant.nom}</p>
      <p>Prénom : {etudiant.prenom}</p>
      <p>Âge : {etudiant.age}</p>
      <p>Email : {etudiant.email}</p>
      <p>Ville : {etudiant.ville}</p>

      <button onClick={() => navigate("/etudiants")}>
        Retour
      </button>
    </div>
  );
}

export default DetailsEtudiant;
