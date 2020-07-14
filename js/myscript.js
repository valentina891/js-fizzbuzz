// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5
// stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per?
// Abbiamo visto qualcosa di particolare che possiamo usare?

//// Scrivo i numeri da 1 a 100 con ciclo for;
///  considero come prima condizione la più specifica (divisione per 3 e per 5).
///  Se il numero (i) è divisibile sia per 3 sia per 5, allora
///  verrà stampata la parola FizzBuzz.

for (i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    }
// Altrimenti, se è divisibile per 3 darà come risultato la parola "Fizz"
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
// Altrimenti, se è divisibile per 5 darà come risultato la parola "Buzz"
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
// in tutti gli altri casi non stamperà nessuna parola
    else {
        console.log(i);
    }
}
