
var audio1 = new Audio('audio.mp3')
var audio2 = new Audio('audio.mp3')
var audio3 = new Audio('audio.mp3')
var audio4 = new Audio('audio.mp3')
var audio5 = new Audio('audio.mp3')
var audio6 = new Audio('audio.mp3')
var audio7 = new Audio('audio.mp3')
var audio8 = new Audio('audio.mp3')
var audio9 = new Audio('audio.mp3')
var audio10 = new Audio('audio.mp3')
var score = 0
var questions = 0



function start() {
    audio1.play()
    var page1 = document.getElementById("page1")
    page1.style.display = "none"
    var question1 = document.getElementById('question1')
    question1.style.display = "block"
    // time show
    var time = document.getElementsByClassName("time")
    for (var i = 0; i < time.length; i++) {
        time[i].style.display = "inline"
    }
    // score
    var score = document.getElementsByClassName('score')
    for (var i = 0; i < score.length; i++) {
        score[i].style.display = 'inline'
    }
    // questions
    var questions = document.getElementsByClassName('questions')
    for (var j = 0; j < questions.length; j++) {
        questions[j].style.display = 'inline'
    }
    // change image
    document.body.style.backgroundImage = "url('bg6.avif')"
    // plien ecran
    var element = document.documentElement
    requestFullscreen(element)
    // questions
    var questions = document.getElementsByClassName('questions')
    questions.style.display = "block"
    // score
    var score = document.getElementsByClassName('score')
    score.style.display = "block"
    // time
    temps = 1
    for (var i = 0; i < 10; i++) {
        temps = temps + 1
        document.getElementById('time').innerText = temps
    }

}



// start question1 
function statue1() {
    // text change
    var button1 = document.getElementById('btn1');
    button1.textContent = 'X'
    button1.style.fontSize = '60px'
    button1.style.borderColor = "red"
    button1.style.color = 'red'
    // audio
    var audio = new Audio('false.mp3')
    audio.play()
    audio1.pause()
    // time
}
function statue2() {
    // text change
    var button2 = document.getElementById('btn2');
    button2.textContent = 'X'
    button2.style.fontSize = '60px'
    button2.style.borderColor = "red"
    button2.style.color = 'red'
    // audio
    var audio = new Audio('false.mp3')
    audio.play()
    audio1.pause()

}
function statue3() {
    // text change
    var button3 = document.getElementById('btn3');
    button3.textContent = '√'
    button3.style.fontSize = '67px'
    button3.style.borderColor = "green"
    button3.style.color = 'green'
    // audio
    var audio = new Audio('true.mp3')
    audio.play()
    audio1.pause()
    //score
    score = score + 10
    document.getElementById('score').innerText = score

}

function next1() {
    var question1 = document.getElementById('question1')
    question1.style.display = "none"
    var question2 = document.getElementById('question2')
    question2.style.display = "block"

    audio2.play()
    // start time
    clearInterval(intervalId);
    time = 10; // Réinitialiser le temps à 10
    updateTime(); // Mettre à jour le temps une fois immédiatement
    intervalId = setInterval(updateTime, 1000); // Relancer le minuteur
    // audio pause
    audio1.pause()
    // questions
    questions = questions + 1
    document.getElementById('questions').innerText = questions + '\\10'
}



// question2
function statue1q2() {
    // text change
    var button1q2 = document.getElementById('btn1q2');
    button1q2.textContent = '√'
    button1q2.style.fontSize = '60px'
    button1q2.style.borderColor = "green"
    button1q2.style.color = 'green'
    // audio
    var audioq2 = new Audio('true.mp3')
    audioq2.play()
    audio2.pause()
    //score
    score = score + 10
    document.getElementById('score').innerText = score




}

function statue2q2() {
    // text change
    var button2q2 = document.getElementById('btn2q2');
    button2q2.textContent = 'X'
    button2q2.style.fontSize = '60px'
    button2q2.style.borderColor = "red"
    button2q2.style.color = 'red'
    // audio
    var audioq2 = new Audio('false.mp3')
    audioq2.play()
    audio2.pause()
}
function statue3q2() {
    // text change
    var button3q2 = document.getElementById('btn3q2');
    button3q2.textContent = 'X'
    button3q2.style.fontSize = '60px'
    button3q2.style.borderColor = "red"
    button3q2.style.color = 'red'
    var audioq2 = new Audio('false.mp3')
    audioq2.play()
    audio2.pause()

}
function next2() {
    var question2 = document.getElementById('question2')
    question2.style.display = "none"
    var question3 = document.getElementById('question3')
    question3.style.display = "block"
    audio3.play()
    // start time
    clearInterval(intervalId);
    time = 10; // Réinitialiser le temps à 10
    updateTime(); // Mettre à jour le temps une fois immédiatement
    intervalId = setInterval(updateTime, 1000); // Relancer le minuteur
    // audio pause
    audio2.pause()
    // questions
    questions = questions + 1
    document.getElementById('questions').innerText = questions + '\\10'
}

// question3
function statue1q3() {
    // text change
    var button1q3 = document.getElementById('btn1q3');
    button1q3.textContent = '√'
    button1q3.style.fontSize = '60px'
    button1q3.style.borderColor = "green"
    button1q3.style.color = 'green'
    var audioq3 = new Audio('true.mp3')
    audioq3.play()
    audio3.pause()
    //score
    score = score + 10
    document.getElementById('score').innerText = score
}

function statue2q3() {
    // text change
    var button2q3 = document.getElementById('btn2q3');
    button2q3.textContent = 'X'
    button2q3.style.fontSize = '60px'
    button2q3.style.borderColor = "red"
    button2q3.style.color = 'red'
    var audioq3 = new Audio('false.mp3')
    audioq3.play()
    audio3.pause()
}

function statue3q3() {
    // text change
    var button3q3 = document.getElementById('btn3q3');
    button3q3.textContent = 'X'
    button3q3.style.fontSize = '60px'
    button3q3.style.borderColor = "red"
    button3q3.style.color = 'red'
    var audioq3 = new Audio('false.mp3')
    audioq3.play()
    audio3.pause()


}


function next3() {
    var question3 = document.getElementById('question3')
    question3.style.display = "none"
    var question4 = document.getElementById('question4')
    question4.style.display = "block"
    audio4.play()
    // audio pause
    audio3.pause()
    //time
    clearInterval(intervalId);
    time = 10; // Réinitialiser le temps à 10
    updateTime(); // Mettre à jour le temps une fois immédiatement
    intervalId = setInterval(updateTime, 1000); // Relancer le minuteur
    // questions
    questions = questions + 1
    document.getElementById('questions').innerText = questions + '\\10'

}


// start question4 
function statue1q4() {
    // text change
    var button1q4 = document.getElementById('btn1q4');
    button1q4.textContent = 'X'
    button1q4.style.fontSize = '60px'
    button1q4.style.borderColor = "red"
    button1q4.style.color = 'red'
    // audio
    var audioq4 = new Audio('false.mp3')
    audioq4.play()
    audio4.pause()
    // time
}
function statue2q4() {
    // text change
    var button2q4 = document.getElementById('btn2q4');
    button2q4.textContent = '√'
    button2q4.style.fontSize = '60px'
    button2q4.style.borderColor = "green"
    button2q4.style.color = 'green'
    // audio
    var audioq4 = new Audio('true.mp3')
    audioq4.play()
    audio4.pause()

}
function statue3q4() {
    // text change
    var button3q4 = document.getElementById('btn3q4');
    button3q4.textContent = 'X'
    button3q4.style.fontSize = '67px'
    button3q4.style.borderColor = "red"
    button3q4.style.color = 'red'
    // audio
    var audioq4 = new Audio('true.mp3')
    audioq4.play()
    audio4.pause()
    //score
    score = score + 10
    document.getElementById('score').innerText = score

}

function next4() {
    var question4 = document.getElementById('question4')
    question4.style.display = "none"
    var question5 = document.getElementById('question5')
    question5.style.display = "block"

    audio5.play()
    // start time
    clearInterval(intervalId);
    time = 10; // Réinitialiser le temps à 10
    updateTime(); // Mettre à jour le temps une fois immédiatement
    intervalId = setInterval(updateTime, 1000); // Relancer le minuteur
    // audio pause
    audio4.pause()
    // questions
    questions = questions + 1
    document.getElementById('questions').innerText = questions + '\\10'
}

// question5
function statue1q5() {
    // text change
    var button1q5 = document.getElementById('btn1q5');
    button1q5.textContent = 'X'
    button1q5.style.fontSize = '60px'
    button1q5.style.borderColor = "red"
    button1q5.style.color = 'red'
    // audio
    var audioq5 = new Audio('false.mp3')
    audio.play()
    audio1q5.pause()
    audio5.pause()
    // time
}
function statue2q5() {
    // text change
    var button2q5 = document.getElementById('btn2q5');
    button2q5.textContent = '√'
    button2q5.style.fontSize = '60px'
    button2q5.style.borderColor = "green"
    button2q5.style.color = 'green'
    // audio
    var audio = new Audio('true.mp3')
    audio.play()
    audio5.pause()

}
function statue3q5() {
    // text change
    var button3q5 = document.getElementById('btn3q5');
    button3q5.textContent = 'X'
    button3q5.style.fontSize = '67px'
    button3q5.style.borderColor = "red"
    button3q5.style.color = 'red'
    // audio
    var audio = new Audio('false.mp3')
    audio.play()
    audio5.pause()
    //score
    score = score + 10
    document.getElementById('score').innerText = score

}

function next5() {
    var question5 = document.getElementById('question5')
    question5.style.display = "none"
    var question6 = document.getElementById('question6')
    question6.style.display = "block"

    audio6.play()
    // start time
    clearInterval(intervalId);
    time = 10; // Réinitialiser le temps à 10
    updateTime(); // Mettre à jour le temps une fois immédiatement
    intervalId = setInterval(updateTime, 1000); // Relancer le minuteur
    // audio pause
    audio5.pause()
    // questions
    questions = questions + 1
    document.getElementById('questions').innerText = questions + '\\10'
}


// question6
function statue1q6() {
    // text change
    var button1q6 = document.getElementById('btn1q6');
    button1q6.textContent = 'X'
    button1q6.style.fontSize = '60px'
    button1q6.style.borderColor = "red"
    button1q6.style.color = 'red'
    // audio
    var audio = new Audio('false.mp3')
    audio.play()
    audio6.pause()
    
    // time
}
function statue2q6() {
    // text change
    var button2q6 = document.getElementById('btn2q6');
    button2q6.textContent = '√'
    button2q6.style.fontSize = '60px'
    button2q6.style.borderColor = "green"
    button2q6.style.color = 'green'
    // audio
    var audio = new Audio('true.mp3')
    audio.play()
    audio6.pause()

}
function statue3q6() {
    // text change
    var button3q6 = document.getElementById('btn3q6');
    button3q6.textContent = 'X'
    button3q6.style.fontSize = '67px'
    button3q6.style.borderColor = "red"
    button3q6.style.color = 'red'
    // audio
    var audio = new Audio('false.mp3')
    audio.play()
    audio6.pause()
    //score
    score = score + 10
    document.getElementById('score').innerText = score

}

function next6() {
    var question6 = document.getElementById('question6')
    question6.style.display = "none"
    var question7 = document.getElementById('question7')
    question7.style.display = "block"

    audio7.play()
    // start time
    clearInterval(intervalId);
    time = 10; // Réinitialiser le temps à 10
    updateTime(); // Mettre à jour le temps une fois immédiatement
    intervalId = setInterval(updateTime, 1000); // Relancer le minuteur
    // audio pause
    audio6.pause()
    // questions
    questions = questions + 1
    document.getElementById('questions').innerText = questions + '\\10'
}

// question7
function statue1q7() {
    // text change
    var button1q7 = document.getElementById('btn1q7');
    button1q7.textContent = 'X'
    button1q7.style.fontSize = '60px'
    button1q7.style.borderColor = "red"
    button1q7.style.color = 'red'
    // audio
    var audio = new Audio('false.mp3')
    audio.play()
    audio7.pause()
    // time
}
function statue2q7() {
    // text change
    var button2q7 = document.getElementById('btn2q7');
    button2q7.textContent = '√'
    button2q7.style.fontSize = '60px'
    button2q7.style.borderColor = "green"
    button2q7.style.color = 'green'
    // audio
    var audio = new Audio('true.mp3')
    audio.play()
    audio7.pause()

}
function statue3q7() {
    // text change
    var button3q7 = document.getElementById('btn3q7');
    button3q7.textContent = 'X'
    button3q7.style.fontSize = '67px'
    button3q7.style.borderColor = "red"
    button3q7.style.color = 'red'
    // audio
    var audio = new Audio('false.mp3')
    audio.play()
    audio7.pause()
    //score
    score = score + 10
    document.getElementById('score').innerText = score

}

function next7() {
    var question7 = document.getElementById('question7')
    question7.style.display = "none"
    var question8 = document.getElementById('question8')
    question8.style.display = "block"

    audio8.play()
    // start time
    clearInterval(intervalId);
    time = 10; // Réinitialiser le temps à 10
    updateTime(); // Mettre à jour le temps une fois immédiatement
    intervalId = setInterval(updateTime, 1000); // Relancer le minuteur
    // audio pause
    audio7.pause()
    // questions
    questions = questions + 1
    document.getElementById('questions').innerText = questions + '\\10'
}

// question8
function statue1q8() {
    // text change
    var button1q8 = document.getElementById('btn1q8');
    button1q8.textContent = 'X'
    button1q8.style.fontSize = '60px'
    button1q8.style.borderColor = "red"
    button1q8.style.color = 'red'
    // audio
    var audio = new Audio('false.mp3')
    audio.play()
    audio8.pause()
    // time
}
function statue2q8() {
    // text change
    var button2q8 = document.getElementById('btn2q8');
    button2q8.textContent = 'X'
    button2q8.style.fontSize = '60px'
    button2q8.style.borderColor = "red"
    button2q8.style.color = 'red'
    // audio
    var audio = new Audio('false.mp3')
    audio.play()
    audio8.pause()

}
function statue3q8() {
    // text change
    var button3q8 = document.getElementById('btn3q8');
    button3q8.textContent = '√'
    button3q8.style.fontSize = '67px'
    button3q8.style.borderColor = "green"
    button3q8.style.color = 'green'
    // audio
    var audio = new Audio('true.mp3')
    audio.play()
    audio8.pause()
    //score
    score = score + 10
    document.getElementById('score').innerText = score

}

function next8() {
    var question8 = document.getElementById('question8')
    question8.style.display = "none"
    var question9 = document.getElementById('question9')
    question9.style.display = "block"

    audio9.play()
    // start time
    clearInterval(intervalId);
    time = 10; // Réinitialiser le temps à 10
    updateTime(); // Mettre à jour le temps une fois immédiatement
    intervalId = setInterval(updateTime, 1000); // Relancer le minuteur
    // audio pause
    audio8.pause()
    // questions
    questions = questions + 1
    document.getElementById('questions').innerText = questions + '\\10'
}

// question9
function statue1q9() {
    // text change
    var button1q9 = document.getElementById('btn1q9');
    button1q9.textContent = '√'
    button1q9.style.fontSize = '60px'
    button1q9.style.borderColor = "green"
    button1q9.style.color = 'green'
    // audio
    var audio = new Audio('true.mp3')
    audio.play()
    audio9.pause()
    // time
}
function statue2q9() {
    // text change
    var button2q9 = document.getElementById('btn2q9');
    button2q9.textContent = 'X'
    button2q9.style.fontSize = '60px'
    button2q9.style.borderColor = "red"
    button2q9.style.color = 'red'
    // audio
    var audio = new Audio('false.mp3')
    audio.play()
    audio9.pause()

}
function statue3q9() {
    // text change
    var button3q9 = document.getElementById('btn3q9');
    button3q9.textContent = 'X'
    button3q9.style.fontSize = '67px'
    button3q9.style.borderColor = "red"
    button3q9.style.color = 'red'
    // audio
    var audio = new Audio('false.mp3')
    audio.play()
    audio9.pause()
    //score
    score = score + 10
    document.getElementById('score').innerText = score

}

function next9() {
    var question9 = document.getElementById('question9')
    question9.style.display = "none"
    var question10 = document.getElementById('question10')
    question10.style.display = "block"
    // start time
    clearInterval(intervalId);
    time = 10; // Réinitialiser le temps à 10
    updateTime(); // Mettre à jour le temps une fois immédiatement
    intervalId = setInterval(updateTime, 1000); // Relancer le minuteur
    audio10.play()
    // audio pause
    audio9.pause()
    // questions
    questions = questions + 1
    document.getElementById('questions').innerText = questions + '\\10'
    var time = document.getElementsByClassName("time")
    time.display = 'none'
    
    
}


// question10
function statue1q10() {
    // text change
    var button1q10 = document.getElementById('btn1q10');
    button1q10.textContent = '√'
    button1q10.style.fontSize = '60px'
    button1q10.style.borderColor = "green"
    button1q10.style.color = 'green'
    var audioq10 = new Audio('true.mp3')
    audioq10.play()
    audio10.pause()


}
function statue2q10() {
    // text change
    var button2q10 = document.getElementById('btn2q10');
    button2q10.textContent = 'X'
    button2q10.style.fontSize = '60px'
    button2q10.style.borderColor = "red"
    button2q10.style.color = 'red'
    var audioq10 = new Audio('false.mp3')
    audioq10.play()
    audio10.pause()

}
function statue3q10() {
    // text change
    var button3q10 = document.getElementById('btn3q10');
    button3q10.textContent = 'X'
    button3q10.style.fontSize = '60px'
    button3q10.style.borderColor = "red"
    button3q10.style.color = 'red'
    var audioq10 = new Audio('false.mp3')
    audioq10.play()
    audio10.pause()

}


function next10() {
    var question10 = document.getElementById('question10')
    question10.style.display = "none"
    var resultat = document.getElementById('Resultat')
    resultat.style.display = "block"
    // audio pause
    audio10.pause()
    clearInterval(intervalId);
    time = 1; // Réinitialiser le temps à 10
    updateTime(); // Mettre à jour le temps une fois immédiatement
    intervalId = setInterval(updateTime, 1000); // Relancer le minuteur
    var resultatText = document.getElementsByClassName('resultat')[0]
    resultat.innerText = 'resultat'
  
    // questions
    questions = questions + 1
    document.getElementById('questions').innerText = questions + '\\10'

    switch (score) {
        case 10:
            resultat.innerText = "Hmm, votre score est de 10/100. Ne vous découragez pas ! C'est une excellente occasion d'apprendre et de découvrir davantage sur les capitales du monde. 💪🌍";
            break;
        case 20:
            resultat.innerText = "Votre score est de 20/100. Il y a de la place pour s'améliorer ! Continuez à pratiquer et à apprendre sur les capitales du monde. 👍🌍";
            break;
        case 30:
            resultat.innerText = "Votre score est de 30/100. Pas mal ! Vous commencez à bien maîtriser certaines capitales du monde. Continuez comme ça ! 🌎";
            break;
        case 40:
            resultat.innerText = "Votre score est de 40/100. Vous progressez ! Continuez à vous entraîner pour renforcer vos connaissances sur les capitales du monde. 💪🌍";
            break;
        case 50:
            resultat.innerText = "Votre score est de 50/100. Pas mal du tout ! Vous avez une bonne base de connaissances sur les capitales du monde. Continuez comme ça ! 👍🌍";
            break;
        case 60:
            resultat.innerText = "Votre score est de 60/100. Vous vous en sortez bien ! Continuez à réviser et à explorer davantage sur les capitales du monde. 🌎";
            break;
        case 70:
            resultat.innerText = "Votre score est de 70/100. Bravo ! Vous avez une solide connaissance des capitales du monde. Continuez ainsi ! 🌟🌍";
            break;
        case 80:
            resultat.innerText = "Votre score est de 80/100. Excellent travail ! Vous êtes vraiment doué pour les capitales du monde. Continuez à exceller ! 🎉🌍";
            break;
        case 90:
            resultat.innerText = "Votre score est de 90/100. Fantastique ! Vous êtes presque parfait ! Continuez à vous défier et à apprendre davantage sur les capitales du monde. 🌟🌍";
            break;
        case 100:
            resultat.innerText = "Waouh ! Félicitations ! Vous avez obtenu un score parfait de 100/100 ! 🎉 Vous êtes un véritable expert des capitales du monde ! Bravo ! 🌟🌍";
            break;
        default:
            resultat.innerText = "Votre score est de " + score + "/100. Continuez à vous entraîner pour améliorer vos connaissances sur les capitales du monde. 💪🌍";
    }
        

}


// function audio
document.getElementById("audio").addEventListener("click", function () {
    var audio = document.getElementById("audio");
    audio.play();
    // Cache le bouton après le clic pour éviter de démarrer plusieurs fois
    this.style.display = 'none';
});


// en mode plein écran
/*function requestFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { //Firefox 
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari & Opera 
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { //IE/Edge 
        element.msRequestFullscreen();
    }
}*/

// Fonction pour demander le mode plein écran
/*function plienecran(){
    if(element.requestFullscreen){
        element.requestFullscreen()
    }
    else if(element.webkitRequestFullscreen){
        element.webkitRequestFullscreen()
    }
    else if (element.msRequestFullscreen){
        element.msRequestFullscreen()
    }
}*/

//time function
var time = 10;
var intervalId;

function updateTime() {
    if (time < 0) {
        clearInterval(intervalId);
        return;
    }

    else if (time == 0) {

        // button 1
        var button1 = document.getElementById('btn3');
        button1.textContent = '√'
        button1.style.fontSize = '60px'
        button1.style.borderColor = "green"
        button1.style.color = 'green'

        // button 2
        var buttonq2 = document.getElementById('btn1q2');
        buttonq2.textContent = '√'
        buttonqq2.style.fontSize = '60px'
        button2.style.borderColor = "green"
        buttonq2.style.color = 'green'

        // audio
        var audio = new Audio('fintime.mp3')
        audio.play()
        audio1.pause()


    }
    document.getElementById('timer').innerHTML = time;
    time--;
}



// Démarrer le minuteur au chargement de la page
intervalId = setInterval(updateTime, 1000);



// Ajoutez un gestionnaire d'événements à chaque bouton de la question1
document.querySelectorAll('#question1 button').forEach(button => {
    button.addEventListener('click', function () {
        // Désactivez tous les boutons de la question1 sauf le bouton "next"
        document.querySelectorAll('#question1 button').forEach(btn => {
            if (btn !== this && btn.textContent !== "next") {
                btn.disabled = true;
            }
        });

    });
});


// Ajoutez un gestionnaire d'événements à chaque bouton de la question2
document.querySelectorAll('#question2 button').forEach(button => {
    button.addEventListener('click', function () {
        // Désactivez tous les boutons de la question2 sauf le bouton "next"
        document.querySelectorAll('#question2 button').forEach(btn => {
            if (btn !== this && btn.textContent !== "next") {
                btn.disabled = true;
            }
        });

    });
});

// Ajoutez un gestionnaire d'événements à chaque bouton de la question3
document.querySelectorAll('#question3 button').forEach(button => {
    button.addEventListener('click', function () {
        // Désactivez tous les boutons de la question3 sauf le bouton "next"
        document.querySelectorAll('#question3 button').forEach(btn => {
            if (btn !== this && btn.textContent !== "next") {
                btn.disabled = true;
            }
        });

    });
});

// Ajoutez un gestionnaire d'événements à chaque bouton de la question4
document.querySelectorAll('#question4 button').forEach(button => {
    button.addEventListener('click', function () {
        // Désactivez tous les boutons de la question4 sauf le bouton "next"
        document.querySelectorAll('#question4 button').forEach(btn => {
            if (btn !== this && btn.textContent !== "next") {
                btn.disabled = true;
            }
        });

    });
});
// Ajoutez un gestionnaire d'événements à chaque bouton de la question5
document.querySelectorAll('#question5 button').forEach(button => {
    button.addEventListener('click', function () {
        // Désactivez tous les boutons de la question5 sauf le bouton "next"
        document.querySelectorAll('#question5 button').forEach(btn => {
            if (btn !== this && btn.textContent !== "next") {
                btn.disabled = true;
            }
        });

    });
});

// Ajoutez un gestionnaire d'événements à chaque bouton de la question6
document.querySelectorAll('#question6 button').forEach(button => {
    button.addEventListener('click', function () {
        // Désactivez tous les boutons de la question6 sauf le bouton "next"
        document.querySelectorAll('#question6 button').forEach(btn => {
            if (btn !== this && btn.textContent !== "next") {
                btn.disabled = true;
            }
        });

    });
});

// Ajoutez un gestionnaire d'événements à chaque bouton de la question7
document.querySelectorAll('#question7 button').forEach(button => {
    button.addEventListener('click', function () {
        // Désactivez tous les boutons de la question7 sauf le bouton "next"
        document.querySelectorAll('#question7 button').forEach(btn => {
            if (btn !== this && btn.textContent !== "next") {
                btn.disabled = true;
            }
        });

    });
});

// Ajoutez un gestionnaire d'événements à chaque bouton de la question8
document.querySelectorAll('#question8 button').forEach(button => {
    button.addEventListener('click', function () {
        // Désactivez tous les boutons de la question8 sauf le bouton "next"
        document.querySelectorAll('#question8 button').forEach(btn => {
            if (btn !== this && btn.textContent !== "next") {
                btn.disabled = true;
            }
        });

    });
});

// Ajoutez un gestionnaire d'événements à chaque bouton de la question9
document.querySelectorAll('#question9 button').forEach(button => {
    button.addEventListener('click', function () {
        // Désactivez tous les boutons de la question9 sauf le bouton "next"
        document.querySelectorAll('#question9 button').forEach(btn => {
            if (btn !== this && btn.textContent !== "next") {
                btn.disabled = true;
            }
        });

    });
});

// Ajoutez un gestionnaire d'événements à chaque bouton de la question10
document.querySelectorAll('#question10 button').forEach(button => {
    button.addEventListener('click', function () {
        // Désactivez tous les boutons de la question10 sauf le bouton "next"
        document.querySelectorAll('#question10 button').forEach(btn => {
            if (btn !== this && btn.textContent !== "next") {
                btn.disabled = true;
            }
        });

    });
});



































