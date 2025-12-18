function calculerMoyenne(etudiant) {
    const total = etudiant.physique + etudiant.securite + etudiant.genie + etudiant.reseau;
    return (total / 4).toFixed(2);
}
