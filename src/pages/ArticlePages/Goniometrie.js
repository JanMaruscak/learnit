import React from "react";

function Goniometrie() {
  return (
    <main className="article">
      <h1>Goniometrie</h1>
      <p>
        Každý trojúhelník má tři vnitřní úhly, které obvykle označujeme řeckými
        písmeny alfa α, beta β a gama γ. Součet všech tří vnitřních úhlů musí
        vždy dát 180 stupňů. U vrcholu A máme obvykle úhel alfa, u B beta a u C
        gama.
      </p>
      <p>
        Přestože goniometrické funkce můžeme nějakým způsobem používat u
        jakéhokoliv trojúhelníku, často pracujeme pouze s pravoúhlým
        trojúhelníkem. Pravoúhlý trojúhelník je takový trojúhelník, který má
        jeden úhel pravý, tj. o velikosti 90 stupňů. Vypadá například takto:
      </p>
      <img
        src="https://matematika.cz/content/images/ptroj1.png"
        alt="trojuhelnik"
      />
      <h2>Značení odvěsen v trojúhelníku</h2>
      <p>
        Přejděme postupně k první goniometrické funkci, k funkci sinus. Všechny
        goniometrické funkce nám ukazují vztah mezi nějakým úhlem v trojúhelníku
        a poměrem délek dvou stran.
      </p>
      <p>
        Zpravidla se pak nejedná o pravý úhel, ale o ty zbývající dva. Vstupem
        do goniometrické funkce je tak velikost úhlu. Výstupem je poměr nějakých
        dvou stran. Jednotlivé funkce se liší podle toho, s jakými stranami
        pracují.
      </p>
      <p>
        Funkce sinus pracuje s protilehlou odvěsnou a přeponou. Co je přilehlá a
        protilehlá odvěsna vzhledem k danému úhlu ukazuje následující obrázek.
      </p>
      <img
        src="https://matematika.cz/content/images/gonio1.png"
        alt="odvesny a prepony"
      />
      <h2>Funkce Sinus</h2>
      <p>
        Sinus úhlu alfa se rovná poměru délky protilehlé odvěsny ku délce
        přepony. Co to znamená? Pokud spočítáme (na kalkulačce například) sinus
        úhlu alfa, získáme hodnotu podílu
      </p>
      <img src="https://i.imgur.com/C6Rmgic.png" alt="vzorec sinusove funkce" />
      <h2>Další funkce</h2>
      <p>
        Cosinus, tanges a cotangens fungují na podobných principech. Pro více
        informací použijte zdroje dole v článku.
      </p>
      <h3>Cosinus</h3>
      <img src="https://i.imgur.com/iFeCLaq.png" alt="vzorec cosinove funkce" />
      <h3>Tangens</h3>
      <img
        src="https://i.imgur.com/y4mdPlz.png"
        alt="vzorec tangensove funkce"
      />
      <h3>Cotangens</h3>
      <img
        src="https://i.imgur.com/edktAqI.png"
        alt="vzorec cotangenove funkce"
      />
      <h2>Zdroje:</h2>
      <ul>
        <li>
          <a href="https://matematika.cz/goniometrie">
            https://matematika.cz/goniometrie
          </a>
        </li>
      </ul>
    </main>
  );
}

export default Goniometrie;
