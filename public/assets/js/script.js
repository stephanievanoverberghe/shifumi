let caitlyn = document.getElementById('caitlyn');
let ekko = document.getElementById('ekko');
let jinx = document.getElementById('jinx');
let silco = document.getElementById('silco');
let vi = document.getElementById('vi');
let jayce = document.getElementById('jayce');
let images = document.querySelectorAll('img');
let player ;
let scorePlayer = document.getElementById('scorePlayer');
let scoreOrdi = document.getElementById('scoreOrdi');
let btnReset = document.querySelector('.reset');
let btnNext = document.querySelector('.next');
let message = document.getElementById('message');


// COMPARAISON AVEC JOUEUR

choixPlayer = () => {

    let randomOrdi =  Math.floor(Math.random() * 6) + 1
    images[randomOrdi-1].classList.add('cyan');
    
    // EGALITES
    

    if ((player == 'caitlyn' && randomOrdi == 1)
        || (player == 'ekko' && randomOrdi == 2)
        || (player == 'jinx' && randomOrdi == 3)
        || (player == 'silco' && randomOrdi == 4)
        || (player == 'vi' && randomOrdi == 5)
        || (player == 'jayce' && randomOrdi == 6)) {
            message.textContent = 'Égalité !';
            images[randomOrdi-1].classList.add('magentaCyan');
            images[randomOrdi-1].classList.remove('magenta');
            images[randomOrdi-1].classList.remove('Cyan');
    }

    // CAITLYN
    if (player == 'caitlyn') {
        
        if (player == 'caitlyn' && randomOrdi == 2) {
            victoireOrdi();
            message.textContent = 'Perdu - Victoire EKKO';
        } else if (player == 'caitlyn' && randomOrdi == 3) {
            victoireOrdi();
            message.textContent = 'Perdu - Victoire JINX';
        } else if (player == 'caitlyn' && randomOrdi == 4) {
            victoirePlayer();
            message.textContent = 'Gagné - Victoire CAITLYN';
        } else if (player == 'caitlyn' && randomOrdi == 5) {
            victoireOrdi();
            message.textContent = 'Perdu - Victoire VI';
        } else if (player == 'caitlyn' && randomOrdi == 6) {
            victoirePlayer();
            message.textContent = 'Gagné - Victoire Caitlyn';
        } else {
            victoirePlayer();
            victoireOrdi();
            message.textContent = 'Égalité !';
        } 
    }

    // EKKO
    if (player == 'ekko') {

        if (player == 'ekko' && randomOrdi == 1) {
            victoirePlayer();
            message.textContent = 'Gagné - Victoire EKKO';
        } else if (player == 'ekko' && randomOrdi == 3) {
            victoireOrdi();
            message.textContent = 'Perdu - Victoire JINX';
        } else if (player == 'ekko' && randomOrdi == 4) {
            victoirePlayer();
            message.textContent = 'Gagné - Victoire EKKO';
        } else if (player == 'ekko' && randomOrdi == 5) {
            victoireOrdi();
            message.textContent = 'Perdu - Victoire VI';
        } else if (player == 'ekko' && randomOrdi == 6) {
            victoireOrdi();
            message.textContent = 'Perdu - Victoire Jayce';
        } else {
            victoirePlayer();
            victoireOrdi();
            message.textContent = 'Égalité !';
        }
    
    }
    // JINX
    if (player == 'jinx') {
        
        if (player == 'jinx' && randomOrdi == 1) {
            victoirePlayer();
            message.textContent = 'Gagné - Victoire JINX';
        } else if (player == 'jinx' && randomOrdi == 2) {
            victoireOrdi();
            message.textContent = 'Perdu - Victoire EKKO';
        } else if (player == 'jinx' && randomOrdi == 4) {
            victoirePlayer();
            message.textContent = 'Gagné - Victoire JINX';
        } else if (player == 'jinx' && randomOrdi == 5) {
            victoireOrdi();
            message.textContent = 'Perdu - Victoire VI';
        } else if (player == 'jinx' && randomOrdi == 6) {
            victoirePlayer();
            message.textContent = 'Gagné - Victoire JINX';
        } else {
            victoirePlayer();
            victoireOrdi();
            message.textContent = 'Égalité !';
        }
    }

    // SILCO
    if (player == 'silco') {
        
        if (player == 'silco' && randomOrdi == 1) {
            victoirePlayer();
            message.textContent = 'Gagné - Victoire SILCO';
        } else if (player == 'silco' && randomOrdi == 2) {
            victoirePlayer();
            message.textContent = 'Gagné - Victoire SILCO';
        } else if (player == 'silco' && randomOrdi == 3) {
            victoireOrdi();
            message.textContent = 'Perdu - Victoire JINX';
        } else if (player == 'silco' && randomOrdi == 5) {
            victoireOrdi();
            message.textContent = 'Perdu - Victoire VI';
        } else if (player == 'silco' && randomOrdi == 6) {
            victoireOrdi();
            message.textContent = 'Perdu - Victoire JAYCE';
        } else {
            victoirePlayer();
            victoireOrdi();
            message.textContent = 'Égalité !';
        }
    }

    // VI
    if (player == 'vi') {
        
        if (player == 'vi' && randomOrdi == 1) {
            victoirePlayer();
            message.textContent = 'Gagné - Victoire VI';
        } else if (player == 'vi' && randomOrdi == 2) {
            victoirePlayer();
            message.textContent = 'Gagné - Victoire VI';
        } else if (player == 'vi' && randomOrdi == 3) {
            victoirePlayer();
            message.textContent = 'Gagné - Victoire VI';
        } else if (player == 'vi' && randomOrdi == 4) {
            victoirePlayer();
            message.textContent = 'Gagné - Victoire VI';
        } else if (player == 'vi' && randomOrdi == 6) {
            victoirePlayer();
            message.textContent = 'Gagné - Victoire VI';
        } else {
            victoirePlayer();
            victoireOrdi();
            message.textContent = 'Égalité !';
        }
    }

    // JAYCE
    if (player == 'jayce') {
        
        if (player == 'jayce' && randomOrdi == 1) {
            victoirePlayer();
            message.textContent = 'Gagné - Victoire JAYCE'
        } else if (player == 'jayce' && randomOrdi == 2) {
            victoireOrdi();
            message.textContent = 'Perdu - Victoire JINX'
        } else if (player == 'jayce' && randomOrdi == 3) {
            victoireOrdi();
            message.textContent = 'Perdu - Victoire SILCO'
        } else if (player == 'jayce' && randomOrdi == 4) {
            victoirePlayer();
            message.textContent = 'Gagné - Victoire JAYCE'
        } else if (player == 'jayce' && randomOrdi == 5) {
            victoireOrdi();
            message.textContent = 'Perdu - Victoire VI';
        } else {
            victoireOrdi();
            victoirePlayer();
            message.textContent = 'Égalité !';
        }
    }
}

// CHANGEMENT DE COULEURS PLAYER

images.forEach((image)  => {
    
    image.addEventListener('click', () => {
        images.forEach((image)=>{
            image.classList.remove('magenta');
            image.classList.remove('cyan');
            image.classList.remove('magentaCyan');
        })
        player = image.id

    image.classList.add('magenta');

    choixPlayer()
})
});


// MESSAGES DES JOUEURS

message.textContent = 'A toi de jouer, cliques sur un perso !'

// SCORE

let victoireOrdi = () => {
    scoreOrdi.textContent++;
}

let victoirePlayer = () => {
    scorePlayer.textContent++;
}

// BOUTONS RESET

btnReset.addEventListener('click', () =>{
    scoreOrdi.textContent = 0;
    scorePlayer.textContent = 0;

    nouvelleManche();
})

// BOUTONS NEXT

let nouvelleManche = () => {

    images.forEach((btn)  => {
        btn.classList.remove('magenta');
        btn.classList.remove('cyan');
        btn.classList.remove('magentaCyan');
    });

    message.textContent = "A toi de jouer, cliques sur un perso !";
};

btnNext.addEventListener('click', nouvelleManche);