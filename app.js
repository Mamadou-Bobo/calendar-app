/** PLAN
 * 
 * 1 - Créer les éléments en parcourant le DOM : chaque élément doit avoir un identifiant | ==> createDiv()
 * 
 * 2 - Afficher le mois et l'année actuelle | ==> displayDate()
 * 
 * 3 - Déterminer le nombre de jours de chaque mois | ==> getNumberOfDays(month)
 * 
 * 4 - Déterminer le premier jour de chaque mois | ==> getFirstDay()
 * 
 * 5 - Afficher les jours de chaque mois grâce aux identifiants | ==> showDays()
 * 
 * 6 - Afficher les derniers jours du mois précédent | ==> showDays()
 * 
 * 7 - Afficher les premiers jours du mois suivant | ==> showDays()
 * 
 * 8 - Changer la couleur de l'arrière plan du jour actuel | ==> setBackgroundColor(lastDaysCount)
 * 
 * 9 - Supprimer le contenu pour permettre à nouveau l'insertion des éléments dans le DOM lors du clic
 *     | ==> deleteContent()
 * 
 * 10 - Décrémenter le mois lorsqu'on clic sur le bouton de droite | si on est au mois de janvier et qu'on
 *     clic sur le bouton, on décrémente aussi l'année
 * 
 * 11 - Inrémenter le mois lorsqu'on clic sur le bouton de gauche : si on est au mois de décembre et qu'on
 *     clic sur le bouton, on incrémente aussi l'année
 */


const monthAndYear = document.getElementById("month_year");

const prev = document.getElementById("prev");
const next = document.getElementById("next");

const monday = document.getElementById("monday");
const tuesday = document.getElementById("tuesday");
const wednesday = document.getElementById("wednesday");
const thursday = document.getElementById("thursday");
const friday = document.getElementById("friday");
const saturday = document.getElementById("saturday");
const sunday = document.getElementById("sunday");

let date = new Date();
let daysNumber = getNumberOfDays(date.getMonth());

let month = date.getUTCMonth();
let year = date.getUTCFullYear();

let currentMonth = date.getUTCMonth();
let currentYear = date.getUTCFullYear();

let firstDay, currentDayBackgroundColor;

function createDiv() {

    let count_1 = 1, count_2 = 2, count_3 = 3, count_4 = 4, count_5 = 5, count_6 = 6, count_7 = 7;

    for(let i = 0; i < 6; i++) {

        let mondayId = count_1;
        let tuesdayId = count_2;
        let wednesdayId = count_3;
        let thursdayId = count_4;
        let fridayId = count_5;
        let saturdayId = count_6;
        let sundayId = count_7;

        let mondayDiv_h2 = document.createElement("h3");
        let tuesdayDiv_h2 = document.createElement("h3");
        let wednesdayDiv_h2 = document.createElement("h3");
        let thursdayDiv_h2 = document.createElement("h3");
        let fridayDiv_h2 = document.createElement("h3");
        let saturdayDiv_h2 = document.createElement("h3");
        let sundayDiv_h2 = document.createElement("h3");

        mondayDiv_h2.id = 'div'+mondayId;
        tuesdayDiv_h2.id = 'div'+tuesdayId;
        wednesdayDiv_h2.id = 'div'+wednesdayId;
        thursdayDiv_h2.id = 'div'+thursdayId;
        fridayDiv_h2.id = 'div'+fridayId;
        saturdayDiv_h2.id = 'div'+saturdayId;
        sundayDiv_h2.id = 'div'+sundayId;

        monday.appendChild(mondayDiv_h2);
        tuesday.appendChild(tuesdayDiv_h2);
        wednesday.appendChild(wednesdayDiv_h2);
        thursday.appendChild(thursdayDiv_h2);
        friday.appendChild(fridayDiv_h2);
        saturday.appendChild(saturdayDiv_h2);
        sunday.appendChild(sundayDiv_h2);

        count_1 += 7, count_2 += 7, count_3 += 7, count_4 += 7, count_5 += 7, count_6 += 7, count_7 += 7;

    }

}

function displayDate() {
    switch (month) {
        case 0:
            monthAndYear.innerText = "January " + year;
            break;
        case 1:
            monthAndYear.innerText = "February " + year;
            break;
        case 2:
            monthAndYear.innerText = "March " + year;
            break;
        case 3:
            monthAndYear.innerText = "April " + year;
            break;
        case 4:
            monthAndYear.innerText = "May " + year;
            break;
        case 5:
            monthAndYear.innerText = "June " + year;
            break;
        case 6:
            monthAndYear.innerText = "July " + year;
            break;
        case 7:
            monthAndYear.innerText = "August " + year;
            break;
        case 8:
            monthAndYear.innerText = "September " + year;
            break;
        case 9:
            monthAndYear.innerText = "October " + year;
            break;
        case 10:
            monthAndYear.innerText = "November " + year;
            break;
        case 11:
            monthAndYear.innerText = "December " + year;
            break;
        
    }
}

function getNumberOfDays(month) {

    let daysNumber;
  
    if(month <= 6) {
        if(month % 2 === 0) {
            daysNumber = 31;
        } else {
            daysNumber = 30;
        }
    } else {
        if(month % 2 === 0) {
            daysNumber = 30
        } else {
            daysNumber = 31
        }
    }

    if(month === -1) {
        daysNumber = 31;
    }

    if(month === 1) {
        if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            daysNumber = 29;
        } else {
            daysNumber = 28;
        }
    }

    return daysNumber;
}

function getFirstDay() {
    
    let date = new Date(year,month,1);

    switch (date.toString().substring(0,3)) {
        case "Mon":
            firstDay = 0;
            break;
        case "Tue":
            firstDay = 1;
            break;
        case "Wed":
            firstDay = 2;
            break;
        case "Thu":
            firstDay = 3;
            break;
        case "Fri":
            firstDay = 4;
            break;
        case "Sat":
            firstDay = 5;
            break;
        case "Sun":
            firstDay = 6;
            break;  
    }
    return firstDay;
}

function showDays() {

    let count = 1;
    let begin = getFirstDay();

    for (let j = 0; j < getNumberOfDays(month); j++) {
        let element_id = count++;
        begin++;
        document.getElementById("div"+begin).innerText = element_id;
        document.getElementById("div"+begin).style.opacity = "1";
    } 
    
    let lastDays = getNumberOfDays(month-1);

    let lastDaysCount = 0;
    
    for(let i = getFirstDay(); i >= 1; i--) {
        lastDaysCount++
        document.getElementById("div"+i).style.opacity = ".6";
        document.getElementById("div"+i).innerText = lastDays;
        lastDays--;
    }

    let firstDays = 1;

    for(let k = getNumberOfDays(month)+1+lastDaysCount; k <= 42; k++) {
        document.getElementById("div"+k).innerText = firstDays;
        document.getElementById("div"+k).style.opacity = ".6";
        firstDays++;
    }

    setBackgroundColor(lastDaysCount);

}

function deleteContent() {
    for(let i = 1; i <= 42; i++) {
        document.getElementById("div"+i).innerText = "";
    }
}

function setBackgroundColor(lastDaysCount) {

    for(let i = 0; i <= 6; i++) {
        if(lastDaysCount === i && currentMonth === month && currentYear === year) {
            document.getElementById("div"+(date.getDate()+i)).style.backgroundColor = '#3498db';
            document.getElementById("div"+(date.getDate()+i)).style.color = '#fff';
        } else {
            document.getElementById("div"+(date.getDate()+i)).style.background = 'none';
            document.getElementById("div"+(date.getDate()+i)).style.color = '#000';
        }
    }

}

createDiv();

displayDate();

showDays();

prev.addEventListener("click", () => {
    
    // Suppression du contenu pour pouvoir ajouter à nouveau des éléments
    deleteContent();

    month--;

    if(month === -1) {
        month = 11;
        year = year-1;
        displayDate();
        showDays(); 
    } else {
        displayDate();
        showDays();
    }

   
});

next.addEventListener("click", () => {

    deleteContent();
  
    month++;
   
    if(month === 12) {
        month = 0;
        year = year+1;
        displayDate();
        showDays();
    } else {
        displayDate();
        showDays();
    }

});