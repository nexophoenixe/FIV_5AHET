function erstelleDeck() {
    const farben = ['♡', '♢', '♤', '♧'];
    const werte = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Bube', 'Dame', 'König', 'Ass'];
    let deck = [];
    
    for (let farbe of farben) {
        for (let wert of werte) {
            deck.push([wert, farbe]);
        }
    }
    return deck;
}

function mischeDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

function main() {
    let deck = erstelleDeck();
    console.log("Originales Deck:", deck);
    
    mischeDeck(deck);
    console.log("\nGemischtes Deck:", deck);
    
    let x = 0;
    console.log("Drücke Enter, um eine Karte zu ziehen...");
    
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', () => {
        if (x >= deck.length) {
            console.log("Es gibt keine Karten mehr!");
            process.exit();
        } else {
            console.log(deck[x]);
            x++;
        }
    });
}

main();
