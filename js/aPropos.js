document.addEventListener('DOMContentLoaded', function() {
    // Ne pas masquer les divs ici, car la classe aPropos_Active les affichera
});

function masquerToutesLesDivs() {
    var toutesLesDivs = document.querySelectorAll('.aPropos_Contenu > div');
    toutesLesDivs.forEach(function(div) {
        div.style.display = "none";
    });
}

function afficherContenu(classe) {
    masquerToutesLesDivs();
    document.querySelector(classe).style.display = "block";


}

function txtPresentation() {
    afficherContenu('.aPropos_Presentation.aPropos_Active');
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
