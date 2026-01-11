const word = "Довод";
let reversed = "";

for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
}

if (word === reversed) {
    console.log("Слово " + word + " является палиндромом");
} else {
    console.log("Слово " + word + " не является палиндромом");
}