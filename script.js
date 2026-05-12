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

let isAlarmActive = false;
const activateFirealarm = document.getElementById("activateFirealarm");

activateFirealarm.addEventListener('click', function() {
isAlarmActive = !isAlarmActive;

    if (isAlarmActive) {
this.textContent = "Deaktivera brandalarmet";
this.style.backgroundColor = "green";
document.getElementById("alertFire").style.display = "block";
document.getElementById("deactivateAlarmBtn").style.display = "none";
    }
 else {
    this.textContent = "Aktivera brandalarm";
    this.style.backgroundColor = "red";
    document.body.style.backgroundColor = "";
document.getElementById("deactiveAlarmBtn").style.display = "block";
document.getElementById("alertFire").style.display = "none";
}
});


document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("alertFire").style.display = "none";
});

const alertDeactive = document.getElementById("closeDeactivateBtn");
alertDeactive.addEventListener("click", function() {
    document.getElementById("deactiveAlarmBtn").style.display = "none";
});