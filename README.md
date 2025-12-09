# README - Landing Page Optimeringer

## Projektbeskrivelse
Du skal forbedre projektet, så det viser, hvordan du har udviklet dig fagligt siden første version. Det kan være gennem bedre UX/UI, forbedret kode, tydeligere brugerflow eller en mere gennemarbejdet proces.

## Optimering i strukturen:
* Ryddet op i Mappestrukturen
> * Ingen store bogstaver, mellemrum eller specialtegn
> * Lavet en JavaScript mappe og linket til den inde i index.html
> * Lavet en mappe til gif


## index.html
#### Optimeringer:
* Opdelt Koden i sektioner, så det er nemmere at få overblik 
* Optimeret class' og id's elementer
* Lavet indrykninger og noter, så det er nemmere at læse
* Tilføjet tekst på egenskaberne i sektion 2


## style.css
#### Optimeringer:
* Lavet vandret scrollbar i sektion 1 og sektion 3 (scroll i sektion 3, da jeg ikke kunne animere billederne som i prototypen i Figma)
* Optimeret @media til at justere størrelsen af skærm
* Lavet CSS animation til billederne i sektion 1
```
. scale {
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;
}
```
* Lavet dropdown menu til "Produkter" i navbaren

## script.js
#### Optimeringer:
* "Køb nu"-knappen scroller ned til produkterne (sektion 1)
* Ændret "Køb nu"-knappen til at skifte farve i JavaScript istedet for CSS (tidligere version)
* Tilføjet "scroll til toppen" knap i footer
* Tilføjet addEventListener på billederne i sektion 1, med mouseover og mouseout effekt
```
const greenSpeaker = document.getElementById("g-speaker");

greenSpeaker.addEventListener("mouseover", function() {
    this.classList.add("scale");
});

greenSpeaker.addEventListener("mouseout", function() {
    this.classList.remove("scale");
});
```

## Optimering i design:
* Lavet Hero billedet til et stort billede istedet for at bestå af flere små elementer:
>* Gradient
>* Seperat billede af højttaler og mennesker
* Tilføjet en footer til landing pagen
* Oprettet ny sektion (sektion 5) 
