//Conversion de la date de l'input en ms
function dateEnd(){
    let dateInput = document.getElementById('date').value;
    let convertedDateInput = new Date(dateInput).getTime();
    return convertedDateInput;
};

//Écouteur d'évènement sur la soumission de l'input
document.getElementById("submitDate").addEventListener('click', 
function(){
    //Vérification du remplissage du champ
    if(isNaN(dateEnd())){
        return alert("Veuillez entrer une valeur !");
    }else{
        setInterval(function(){
            //Récupération de la date actuelle en ms
            let dateToday = new Date().getTime();
            //Calcul du temps restant en ms
            let timeBetween = dateEnd() - dateToday;

            //Conversion des ms en j,m,h et s
            let seconds = Math.floor((timeBetween / 1000) % 60);
            let minutes = Math.floor((timeBetween / (1000 * 60)) % 60);
            let hours = Math.floor((timeBetween / (1000 * 60 * 60)) % 24);
            let days = Math.floor((timeBetween / (1000 * 60 * 60 * 24)));

            //Ajout d'un 0 pour l'affichage
            hours = (hours < 10) ? "0" + hours : hours;
            minutes = (minutes < 10) ? "0" + minutes : minutes;
            seconds = (seconds < 10) ? "0" + seconds : seconds;

            //Affichage du résultat dans l'HTML
            let resultat = document.getElementById("resultat");
            if(timeBetween < 0){
                return resultat.innerText = `Compte à rebours terminé !`
            }else if(days === 0 && hours === '00' && minutes === '00'){
                return resultat.innerText = `Il reste ${seconds} seconde(s)`;
            }else if (days === 0 && hours === '00'){
                return resultat.innerText = `Il reste ${minutes} minute(s) ${seconds} seconde(s)`;
            }else if(days === 0){
                return resultat.innerText = `Il reste ${hours} heure(s) ${minutes} minute(s) ${seconds} seconde(s)`;
            }else{
                return resultat.innerText = `Il reste ${days} jour(s) ${hours} heure(s) ${minutes} minute(s) ${seconds} seconde(s)`;
            };
        });
    };
});