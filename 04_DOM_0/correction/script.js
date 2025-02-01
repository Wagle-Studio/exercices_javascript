// ========================================================================
// Exercice 1 : Création et Insertion d'un Élément Paragraph
// ========================================================================
const myNewHtmlParagraph = document.createElement("p");
myNewHtmlParagraph.classList.add("exo1");
myNewHtmlParagraph.textContent = "Hello World";
const myHtmlTargetExo1 = document.getElementById("targetExo1");
myHtmlTargetExo1.appendChild(myNewHtmlParagraph);

// ========================================================================
// Exercice 2 : Donner du style au HTML
// ========================================================================
const htmlArticle = document.getElementById("article");
htmlArticle.style.background = "#ababab";
htmlArticle.style.border = "2px dotted #000000";

const htmlPara1 = document.getElementById("para1");
htmlPara1.style.color = "#0000cc";

const htmlPara2 = document.getElementById("para2");
htmlPara2.style.fontWeight = "bold";

const htmlPara3 = document.getElementById("para3");
htmlPara3.classList.add("colorfull");

const htmlArticleTitle = document.getElementById("articleTitle");
htmlArticleTitle.innerText = "Mon super titre";

const htmlArticleLink = document.getElementById("articleLink");
htmlArticleLink.href = "https://www.lilo.org/";

const htmlParaElements = document.getElementsByClassName("para");

for (let i = 0; i < htmlParaElements.length; i++) {
  const htmlPara = htmlParaElements[i];
  htmlPara.style.fontStyle = "italic";
}

// ========================================================================
// Exercice 3 : Fonction de Création d'Éléments Paragraph
// ========================================================================
function createHtmlParagraph(text) {
  const myNewHtmlParagraph = document.createElement("p");
  myNewHtmlParagraph.textContent = text;
  return myNewHtmlParagraph;
}

// ========================================================================
// Exercice 3.1 : Génération d'Éléments Paragraph à partir d'un Tableau
// ========================================================================
var countries = [
  "France",
  "Brazil",
  "South Africa",
  "Australia",
  "China",
  "Canada",
];

let myArrayOfParagraph = [];
for (let i = 0; i < countries.length; i++) {
  const country = countries[i];
  const myNewHtmlParagraph = createHtmlParagraph(country);
  myArrayOfParagraph.push(myNewHtmlParagraph);
}

// ========================================================================
// Exercice 3.2 : Insertion d'Éléments Paragraph dans le DOM
// ========================================================================
const myHtmlTargetExo2 = document.getElementById("targetExo3");
for (let i = 0; i < myArrayOfParagraph.length; i++) {
  const paragraph = myArrayOfParagraph[i];
  myHtmlTargetExo2.append(paragraph);
}
