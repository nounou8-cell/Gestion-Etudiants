
import { useNavigate, useParams } from "react-router-dom";

function ModifierEtudiant({ etudiants, setEtudiants }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const etudiant = etudiants.find((e) => e.id === Number(id));

  if (!etudiant) {
    return <h1>Étudiant introuvable</h1>;
  }

  function modifier(e) {
    e.preventDefault();

    const etudiantModifie = {
      ...etudiant,
      nom: e.target.nom.value,
      prenom: e.target.prenom.value,
      age: Number(e.target.age.value),
      email: e.target.email.value,
      ville: e.target.ville.value
    };

    const nouvelleListe = etudiants.map((e) =>
      e.id === etudiant.id ? etudiantModifie : e
    );

    setEtudiants(nouvelleListe);

    alert("Modification réussie !");
    navigate("/etudiants");
  }

  return (
    <div>
      <h1>Modifier un étudiant</h1>

      <form onSubmit={modifier}>
        <input name="nom" defaultValue={etudiant.nom} required />
        <input name="prenom" defaultValue={etudiant.prenom} required />
        <input name="age" type="number" defaultValue={etudiant.age} required />
        <input name="email" type="email" defaultValue={etudiant.email} required />
        <input name="ville" defaultValue={etudiant.ville} required />

        <button type="submit">Enregistrer</button>
      </form>

      <button onClick={() => navigate("/etudiants")}>
        Retour
      </button>
    </div>
  );
}

export default ModifierEtudiant;
