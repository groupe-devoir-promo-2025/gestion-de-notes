function trouverEtudiantParMatricule(mat) {
    return listeEtudiants.find(e => e.matricule === mat.toUpperCase().trim());
}
