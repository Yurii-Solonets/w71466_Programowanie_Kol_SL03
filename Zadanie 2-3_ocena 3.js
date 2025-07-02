// Zadanie 2 - ocena 3

class Ksiazka {
    constructor(tytul, rok, imieAutora, nazwiskoAutora) {
        this.tytul = tytul;
        this.rok = rok;
        this.imieAutora = imieAutora;
        this.nazwiskoAutora = nazwiskoAutora;
    }
    pelneImieNazwiskoAutora() {
        return `${this.imieAutora} ${this.nazwiskoAutora}`;
    }
}

const ksiazki = [
    new Ksiazka("Książka 1", 2011, "Andrzej", "Nowak"),
    new Ksiazka("Książka 2", 2024, "Mateusz", "Mazur"),
    new Ksiazka("Książka 3", 1980, "Janusz", "Wiśniewski"),
    new Ksiazka("Książka 4", 2017, "Marek", "Kowalcyk")
];

const wybranyRok = 2017;

ksiazki.forEach(ksiazka => {
    if (ksiazka.rok === wybranyRok) {
        console.log(`Tytuł: ${ksiazka.tytul}, Autor: ${ksiazka.pelneImieNazwiskoAutora()}`);
    }
});

// Zadanie 3 - ocena 3

const form = document.querySelector('form');

const showHidePassword = document.querySelector("#showHidePassword")
const passwordInput = document.querySelector("#password")
const passwordConfirmInput = document.querySelector("#confirmedPassword")

showHidePassword.addEventListener("change", () =>{
   passwordInput.type = showHidePassword.checked? "text": "password";
})

const countrySelect = document.querySelector("#country")
const franceOption = new Option("Francja", "FR");
countrySelect.add(franceOption)

const emailInput = document.querySelector("#email");
const emailError = document.querySelector("#emailError")

emailInput.addEventListener('blur', function() { 
    checkEmail(emailInput, emailError);
}); 

const passwordError = document.querySelector("#passwordError")

passwordInput.addEventListener('blur', function() { 
    checkPassword(passwordInput.value, passwordError);

}); 

const passwordConfirmError = document.querySelector("#passwordConfirmError")

passwordInput.addEventListener('blur', function() { 
    checkPassword(passwordConfirmInput.value, passwordConfirmError);
}); 


function formIsValid(){
    let valid = true;
    valid = checkEmail(emailInput, emailError) && valid;
    valid = checkPassword(passwordInput.value, passwordError) && valid;

    return valid;
}

form.addEventListener("submit", event =>{
    event.preventDefault();

    const isValid = formIsValid();

    if (isValid){
        alert("Formularz poprawny")
    }
    else{
        console.log("Błędy");
    }
})