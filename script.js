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
    var alarmBtns = document.getElementById('activateFirealarm');
    if (alarmBtns.style.display === 'none' || alarmBtns.style.display === '') {
alarmBtns.style.display = 'block';
this.textContent = "BRANDALARM AKTIVERAT";
 } else {
   // alarmBtns.style.display = 'none';
    this.textContent = "Aktivera brandalarm";
}
});

const alert = document.getElementById("alertFire");
alert.addEventListener("click", function() {
    var fireAlert = document.getElementById("alertFire").style.display = "block";

    alert("ALARMET ÄR NU AKTIVERAT TEST");
});

document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("alertFire").style.display = "none";
})