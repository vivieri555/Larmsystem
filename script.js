let isFireActive = false;
let isBurglarActive = false;
let isFireBurgActive = false;

const pin = "1234*"
const pinForm = document.getElementById("pinForm");
const pinInput = document.getElementById("pinInput");
const message = document.getElementById("message");
const validation = document.getElementById("validation");
let pinAttempts = 0;

pinForm.addEventListener("submit", function(event) {
    event.preventDefault();  /* så att sidan inte ska laddas om */
    message.textContent = "";

    const hasStar = pinInput.value.includes('*');
    const numbers = /[0-9]/.test(pinInput.value);

    if (hasStar && numbers) {
        validation.style.color ="green";
    }
else {
    message.style.color = "red";
    message.textContent = "Kod måste innehålla siffror och *";
    logEvent(`Användaren har skrivit in fel inloggningskod`);
    return;
}

    if (pinInput.value === pin) {
        validation.textContent = "Inloggning lyckades";
        pinForm.style.display = "none";
        const alarmBtns = document.getElementById("alarmBtns");
        alarmBtns.style.display = "block";
        pinAttempts = 0;
        logEvent(`Användaren har loggat in`);
    }
    else {
        pinAttempts++;
        if (pinAttempts < 3) {
        message.textContent = `Fel pin-kod, försök igen (${pinAttempts}/3)`;
        logEvent(`Användaren har slagit in fel PIN-kod.`);
        pinInput.value = "";  //tömma fält
        }
        else {
        message.textContent = "3 misslyckade försök tyvärr";
        pinInput.disabled = true;    //låsa fältet, byta till annat?
        logEvent(`Användaren har gjort 3 felaktiga inloggningar.`);
    }
    }
});

const activateFirealarm = document.getElementById("activateFirealarm");
activateFirealarm.addEventListener('click', function() {
isFireActive = !isFireActive;

    if (isFireActive) {
this.textContent = "BRANDALARM AKTIV! Deaktivera";
this.style.backgroundColor = "green";
document.getElementById("alertFire").style.display = "block";
document.getElementById("deactivateAlarmBtn").style.display = "none";
logEvent(`Brandalarm aktiverat`);
    }
 else {
    this.textContent = "Aktivera brandalarm";
    this.style.backgroundColor = "red";
    document.body.style.backgroundColor = "";
document.getElementById("deactivateAlarmBtn").style.display = "block";
document.getElementById("alertFire").style.display = "none";
logEvent(`Brandalarm deaktiverat`);
}
});

//Knappfunktioner brandalarm
document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("alertFire").style.display = "none";
});
//avaktivera brandalarm
document.getElementById("closeDeactivateBtn").addEventListener("click", function() {
    document.getElementById("deactivateAlarmBtn").style.display = "none";
});

//inbrottsalarm
const activeBa = document.getElementById("activateBurglaralarm");
activeBa.addEventListener("click", function() {
isBurglarActive = !isBurglarActive;

if (isBurglarActive) {
    this.textContent = "INBROTTSALARM AKTIV! Deaktivera";
    this.style.backgroundColor = "green";
    document.getElementById("burglarAlarm").style.display = "block";
    document.getElementById("deactivateBurglar").style.display = "none";
    logEvent(`Inbrottsalarm aktiverat`);
}
else {
    this.textContent ="Aktivera inbrottsalarm";
    this.style.backgroundColor = "rgb(8, 141, 250)";
    document.getElementById("burglarAlarm").style.display = "none";
    document.getElementById("deactivateBurglar").style.display = "block";
    logEvent(`Inbrottsalarm är deaktiverat.`);
}
});

document.getElementById("closeActiveB").addEventListener("click", function() {
    document.getElementById("burglarAlarm").style.display = "none";
});
document.getElementById("closeDeactivateB").addEventListener("click", function() {
    document.getElementById("deactivateBurglar").style.display = "none";
});

//För inbrotts och brandalarm
document.getElementById("activateFireandBurglar").addEventListener("click", function() {
isFireBurgActive = !isFireBurgActive;

if (isFireBurgActive) {
    this.textContent = "BRAND- OCH INBROTTSALARM AKTIV! Deaktivera";
    this.style.backgroundColor = "green";
    document.getElementById("divFireBurg").style.display = "block";
    document.getElementById("deactivateFireBurg").style.display = "none";
    logEvent(`Brand- och inbrottsalarm aktiverat.`);
}
else {
    this.textContent ="Aktivera brand- och inbrottsalarm";
    this.style.backgroundColor = "rgb(250, 117, 8)";
    document.getElementById("divFireBurg").style.display = "none";
    document.getElementById("deactivateFireBurg").style.display = "block";
    logEvent(`Brand- och inbrottsalarm deaktiverat.`);
}
});
document.getElementById("closeFB").addEventListener("click", function() {
    document.getElementById("divFireBurg").style.display = "none";
});
//avaktivera brandalarm
document.getElementById("closeDeactivateFB").addEventListener("click", function() {
    document.getElementById("deactivateFireBurg").style.display = "none";
});

const eventList = document.getElementById("eventList");
function logEvent(eventName) {
    const eventItem = document.createElement("li");
    const timestamp = new Date().toLocaleTimeString();
    eventItem.textContent = `[${timestamp}] - ${eventName}`;
    eventList.prepend(eventItem);                 //lägga till i listan
}

const loggingBtn = document.getElementById("loggingBtn");
loggingBtn.addEventListener("click", function() {
    var logg = document.getElementById("eventList");
    if (logg.style.display === "none" || logg.style.display=== "") {
        logg.style.display = "block";
        this.textContent = "Dölj händelser";
    } 
    else {
        logg.style.display = "none";
        this.textContent = "Se loggningshändelser";
    }
});