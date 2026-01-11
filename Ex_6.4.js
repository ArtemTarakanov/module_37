for (let row = 0; row < 3; row++) {
    let line = "";
    for (let col = 0; col < 3; col++) {
        if ((row + col) % 2 === 0) {
            line += "x ";
        } else {
            line += "o ";
        }
    }
    console.log(line);
}