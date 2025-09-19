const artikli = [
    { br: 1, naziv: "Monitor", cena: 165, dostupan: "DA" },
    { br: 2, naziv: "TV", cena: 650, dostupan: "NE" },
    { br: 3, naziv: "Miš", cena: 20, dostupan: "DA" }
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
