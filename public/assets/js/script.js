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


// CHOIX DE L'ORDINATEUR

choixOrdi = () => {

    let randomOrdi =  Math.floor(Math.random() * 6) + 1

    if (randomOrdi == 1) {
        console.log('caitlyn');
    } else if (randomOrdi == 2) {
        console.log('ekko');
    } else if (randomOrdi == 3) {
        console.log('jinx');
    } else if (randomOrdi == 4) {
        console.log('silco');
    } else if (randomOrdi == 5) {
        console.log('vi');
    } else {
        console.log('jayce');
    }

images[randomOrdi-1].classList.add('cyan');

}

// COMPARAISON AVEC JOUEUR

choixPlayer = () => {

    let randomOrdi =  Math.floor(Math.random() * 6) + 1
    
    // EGALITES

    // if (player == 'caitlyn' && randomOrdi == 1) {
    //     message.textContent = 'Égalité !';
    //     return
    // } else if (player == 'ekko' && randomOrdi == 2) {
    //     console.log('égalité');
    // } else if (player == 'jinx' && randomOrdi == 3) {
    //     console.log('égalité');
    // } else if (player == 'silco' && randomOrdi == 4) {
    //     console.log('égalité');
    // } else if (player == 'vi' && randomOrdi == 5) {
    //     console.log('égalité');
    // } else if (player == 'jayce' && randomOrdi == 6) {
    //     console.log('égalité');
    // }
    

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
        } else if (player == 'caitlyn' && randomOrdi == 3) {
            victoireOrdi();
        } else if (player == 'caitlyn' && randomOrdi == 4) {
            victoireOrdi();
        } else if (player == 'caitlyn' && randomOrdi == 5) {
            victoireOrdi();
        } else {
            victoirePlayer();
        } 
    }

    // EKKO
    if (player == 'ekko') {

        if (player == 'ekko' && randomOrdi == 1) {
            victoirePlayer();
        } else if (player == 'ekko' && randomOrdi == 3) {
            victoireOrdi();
        } else if (player == 'ekko' && randomOrdi == 4) {
            victoireOrdi();
        } else if (player == 'ekko' && randomOrdi == 5) {
            victoireOrdi();
        } else {
            victoirePlayer();
        }
    
    }
    // JINX
    if (player == 'jinx') {
        
        if (player == 'jinx' && randomOrdi == 1) {
            victoirePlayer();
        } else if (player == 'jinx' && randomOrdi == 2) {
            victoirePlayer();
        } else if (player == 'jinx' && randomOrdi == 4) {
            victoirePlayer();
        } else if (player == 'jinx' && randomOrdi == 5) {
            victoireOrdi();
        } else {
            victoirePlayer();
        }
    }

    // SILCO
    if (player == 'silco') {
        
        if (player == 'silco' && randomOrdi == 1) {
            victoirePlayer();
        } else if (player == 'silco' && randomOrdi == 2) {
            victoirePlayer();
        } else if (player == 'silco' && randomOrdi == 3) {
            victoireOrdi();
        } else if (player == 'silco' && randomOrdi == 5) {
            victoireOrdi();
        } else {
            victoirePlayer();
        }
    }

    // VI
    if (player == 'vi') {
        
        if (player == 'vi' && randomOrdi == 1) {
            victoirePlayer();
        } else if (player == 'vi' && randomOrdi == 2) {
            victoirePlayer();
        } else if (player == 'vi' && randomOrdi == 3) {
            victoirePlayer();
        } else if (player == 'vi' && randomOrdi == 4) {
            victoirePlayer();
        } else {
            victoirePlayer();
        }
    }

    // JAYCE
    if (player == 'jayce') {
        
        if (player == 'jayce' && randomOrdi == 1) {
            victoireOrdi();
        } else if (player == 'jayce' && randomOrdi == 2) {
            victoireOrdi();
        } else if (player == 'jayce' && randomOrdi == 3) {
            victoireOrdi();
        } else if (player == 'jayce' && randomOrdi == 4) {
            victoireOrdi();
        } else {
            victoireOrdi();
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
    choixOrdi()
    choixPlayer()
})
});

// CHANGEMENT DE COULEURS ORDINATEUR



// MESSAGES DES JOUEURS

message.textContent = 'A toi de jouer !'

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

    message.textContent = "A toi de jouer !";
};

btnNext.addEventListener('click', nouvelleManche);