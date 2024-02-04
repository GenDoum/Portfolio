var p_Presentation = document.getElementsByClassName(".para_Presentation");
var p_Langue = document.getElementsByClassName(".para_Langue");
var p_SoftSkills = document.getElementsByClassName(".para_SoftSkills");
var p_Passions = document.getElementsByClassName(".para_Passions");

function masquerTousLesParagraphes() {
    var tousLesParagraphes = document.querySelectorAll('.aPropos_Contenu p');
    tousLesParagraphes.forEach(function(paragraphe) {
        paragraphe.style.display = "none";
    });
}

function afficherContenu(classe) {
    masquerTousLesParagraphes(); // Masque tous les paragraphes avant d'afficher le spécifique
    document.querySelector(classe + ' p').style.display = "block";
}

function txtPresentation() {
    afficherContenu('.aPropos_Presentation');
}

function txtLangue() {
    afficherContenu('.aPropos_Langue');
}

function txtSoftSkills() {
    afficherContenu('.aPropos_SoftSkills');
}

function txtPassions() {
    afficherContenu('.aPropos_Passions');
}
