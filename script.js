const pin = "1234*"
const pinForm = document.getElementById("pinForm");
const pinInput = document.getElementById("pinInput");
const message = document.getElementById("message");
let pinAttempts = 0;

pinForm.addEventListener("submit", function(event) {
    event.preventDefault();  /* så att sidan inte ska laddas om */
    var numbers = /[0-9]/g;
    if (pinInput.value.match(numbers)) {

    }
    if (pinInput.value === pin) {
        message.textContent = "Inloggning lyckades";
        pinAttempts = 0;
    }
    else {
        pinAttempts++;
        if (pinAttempts < 3) {
        message.textContent = "Fel pin-kod, försök igen";
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
    var 
})