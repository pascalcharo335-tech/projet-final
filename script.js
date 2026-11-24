
 let etudiants = [];

        function afficherEtudiants() {
            let liste = document.getElementById("listeEtudiants");
            liste.innerHTML = "";
            etudiants.forEach(function (etudiant, index) {
                let texte = document.createTextNode(
                    "Nom : " + etudiant.nom +
                    "  Prénom : " + etudiant.prenom +
                    "  Filière : " + etudiant.filiere + " "
                );

                let boutonModifier = document.createElement("button");
                boutonModifier.textContent = "Modifier";
                boutonModifier.addEventListener("click", function () {
                    modifierEtudiant(index);
                });

                let boutonSupprimer = document.createElement("button");
                boutonSupprimer.textContent = "Supprimer";
                boutonSupprimer.addEventListener("click", function () {
                    supprimerEtudiant(index);
                });

                liste.appendChild(texte);
                liste.appendChild(boutonModifier);
                liste.appendChild(boutonSupprimer);
            });
        }

        document.getElementById("formEtudiant")
            .addEventListener("submit", function (event) {
                event.preventDefault();
                let nom = document.getElementById("nom").value;
                let prenom = document.getElementById("prenom").value;
                let filiere = document.getElementById("filiere").value;
                if (nom === "" || prenom === "" || filiere === "") {
                    alert("Veuillez remplir tous les champs.");
                    return;
                }
                let nouvelEtudiant = {
                    nom: nom,
                    prenom: prenom,
                    filiere: filiere
                };
                etudiants.push(nouvelEtudiant);
                afficherEtudiants();
                document.getElementById("formEtudiant").reset();
            });

        function modifierEtudiant(index) {
            let nouveauNom = prompt("Entrez le nouveau nom :");
            if (nouveauNom !== null && nouveauNom.trim() !== "") {
                etudiants[index].nom = nouveauNom;  
                afficherEtudiants();
            }
        }

        function supprimerEtudiant(index) {
            let confirmation = confirm("Voulez-vous supprimer cet étudiant ?");
            if (confirmation) {
                etudiants.splice(index, 1);
                afficherEtudiants();
            }
        }

        afficherEtudiants();
  
