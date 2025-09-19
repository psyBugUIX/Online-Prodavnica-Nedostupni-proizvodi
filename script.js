class Artikal {
    constructor(br, naziv, cena, dostupan) {
        this.br = br;
        this.naziv = naziv;
        this.cena = cena;
        this.dostupan = dostupan;
    }
}

const artikli = [
    new Artikal(1, "Monitor", 165, "DA"),
    new Artikal(2, "TV", 650, "NE"),
    new Artikal(3, "Miš", 20, "DA")
];

function popuniTabelu() {
    const tabela = document.getElementById("artikli");

    for (let i = 0; i < artikli.length; i++) {
        const artikal = artikli[i];
        const red = tabela.insertRow();

        red.insertCell(0).textContent = artikal.br;
        red.insertCell(1).textContent = artikal.naziv;
        red.insertCell(2).textContent = artikal.cena;
        red.insertCell(3).textContent = artikal.dostupan;

        if (artikal.dostupan === "NE") {
            red.className = "nedostupno-red";
        }
    }
}

window.onload = popuniTabelu;
