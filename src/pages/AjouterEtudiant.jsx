
import { useNavigate } from "react-router-dom";

function AjouterEtudiant({ etudiants, setEtudiants }) {
  const navigate = useNavigate();

  function ajouter(e) {
    e.preventDefault();

    const nouveauEtudiant = {
      id: Date.now(),
      nom: e.target.nom.value,
      prenom: e.target.prenom.value,
      age: Number(e.target.age.value),
      email: e.target.email.value,
      ville: e.target.ville.value
    };

    setEtudiants([...etudiants, nouveauEtudiant]);

    alert("Étudiant ajouté avec succès !");
    navigate("/etudiants");
  }

  return (
    <div>
      <h1>Ajouter un étudiant</h1>

      <form onSubmit={ajouter}>
        <input type="text" name="nom" placeholder="Nom" required />

        <input type="text" name="prenom" placeholder="Prénom" required />

        <input type="number" name="age" placeholder="Âge" required />

        <input type="email" name="email" placeholder="Email" required />

        <input type="text" name="ville" placeholder="Ville" required />

        <button type="submit">Ajouter</button>
      </form>

      <button onClick={() => navigate("/etudiants")}>
        Retour
      </button>
    </div>
  );
}

export default AjouterEtudiant;
