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

    const hasStar = pinInput.value.includes('*');
    const numbers = /[0-9]/.test(pinInput.value);

    if (hasStar && numbers) {
        validation.style.color ="green";
    }
else {
    message.style.color = "red";
    message.textContent = "Kod måste innehålla siffror och *";
    return;
}

    if (pinInput.value === pin) {
        validation.textContent = "Inloggning lyckades";
        pinForm.style.display = "none";
        const alarmBtns = document.getElementById("alarmBtns");
        alarmBtns.style.display = "block";
        pinAttempts = 0;
    }
    else {
        pinAttempts++;
        if (pinAttempts < 3) {
        message.textContent = `Fel pin-kod, försök igen (${pinAttempts}/3)`;
        pinInput.value = "";  //tömma fält
        }
        else {
        message.textContent = "3 misslyckade försök tyvärr";
        pinInput.disabled = true;    //låsa fältet
    }
    }
});

const activateFirealarm = document.getElementById("activateFirealarm");
activateFirealarm.addEventListener('click', function() {
isFireActive = !isFireActive;

    if (isFireActive) {
this.textContent = "Deaktivera brandalarmet";
this.style.backgroundColor = "green";
document.getElementById("alertFire").style.display = "block";
document.getElementById("deactivateAlarmBtn").style.display = "none";
    }
 else {
    this.textContent = "Aktivera brandalarm";
    this.style.backgroundColor = "red";
    document.body.style.backgroundColor = "";
document.getElementById("deactivateAlarmBtn").style.display = "block";
document.getElementById("alertFire").style.display = "none";
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
    this.textContent = "Deaktivera inbrottsalarmet";
    this.style.backgroundColor = "green";
    document.getElementById("burglarAlarm").style.display = "block";
    document.getElementById("deactivateBurglar").style.display = "none";
}
else {
    this.textContent ="Aktivera inbrottsalarm";
    this.style.backgroundColor = "rgb(8, 141, 250)";
    document.getElementById("burglarAlarm").style.display = "none";
    document.getElementById("deactivateBurglar").style.display = "block";
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
    this.textContent = "Deaktivera brand- och inbrottsalarmet";
    this.style.backgroundColor = "green";
    document.getElementById("divFireBurg").style.display = "block";
    document.getElementById("deactivateFireBurg").style.display = "none";
}
else {
    this.textContent ="Aktivera brand- och inbrottsalarm";
    this.style.backgroundColor = "rgb(250, 117, 8)";
    document.getElementById("divFireBurg").style.display = "none";
    document.getElementById("deactivateFireBurg").style.display = "block";
}
});
document.getElementById("closeFB").addEventListener("click", function() {
    document.getElementById("divFireBurg").style.display = "none";
});
//avaktivera brandalarm
document.getElementById("closeDeactivateFB").addEventListener("click", function() {
    document.getElementById("deactivateFireBurg").style.display = "none";
});