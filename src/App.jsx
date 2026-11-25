import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Etudiants from "./pages/Etudiants";
import DetailsEtudiant from "./pages/DetailsEtudiant";
import AjouterEtudiant from "./pages/AjouterEtudiant";
import ModifierEtudiant from "./pages/ModifierEtudiant";

function App() {
     const [etudiants, setEtudiants] = useState([
    {
      id: 1,
      nom: "najem",
      prenom: "Amine",
      age: 20,
      email: "sara@gmail.com",
      ville: "Casablanca"
    },
    {
      id: 2,
      nom: "omaira",
      prenom: "Youssef",
      age: 22,
      email: "karim@gmail.com",
      ville: "Rabat"
    },
    {
      id: 3,
      nom: "iraoui",
      prenom: "Salma",
      age: 19,
      email: "lina@gmail.com",
      ville: "Casa"
    }
  ]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
  path="/dashboard"
  element={<Dashboard etudiants={etudiants} />}
/>
       <Route
             path="/etudiants"
               element={
                 <Etudiants
                    etudiants={etudiants}
                        setEtudiants={setEtudiants}
                                       />
                    }
                    />
       <Route
  path="/details/:id"
  element={<DetailsEtudiant etudiants={etudiants} />}
/>
        <Route
  path="/ajouter"
  element={
    <AjouterEtudiant
      etudiants={etudiants}
      setEtudiants={setEtudiants}
    />
  }
/>
   <Route
  path="/modifier/:id"
  element={
    <ModifierEtudiant
      etudiants={etudiants}
      setEtudiants={setEtudiants}
    />
  }
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;