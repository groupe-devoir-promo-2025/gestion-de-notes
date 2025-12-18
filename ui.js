
document.getElementById('btnRechercher').addEventListener('click', function() {
    const saisie = document.getElementById('champMatricule').value;
    const etu = trouverEtudiantParMatricule(saisie);
    const divResultat = document.getElementById('bulletin');

    if (etu) {
        const moyenne = calculerMoyenne(etu);
        divResultat.innerHTML = `
            <h3>Nom: ${etu.nom}</h3>
            <p>Physique: ${etu.physique}</p>
            <p>Sécurité: ${etu.securite}</p>
            <p>Génie Logiciel: ${etu.genie}</p>
            <p>Réseau: ${etu.reseau}</p>
            <hr>
            <strong>Moyenne: ${moyenne} / 20</strong>
        `;
    } else {
        alert("Matricule non trouvé !");
    }
});