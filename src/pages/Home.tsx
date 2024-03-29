import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import html2canvas from "html2canvas";

const localisation = require("../datas/logos/localisation.jpg");
const telephone = require("../datas/logos/telephone.jpg");
const mail = require("../datas/logos/mail.jpg");
const calendrier = require("../datas/logos/calendrier.jpg");
const voiture = require("../datas/logos/voiture.jpg");
const linkedin = require("../datas/logos/linkedin.png");

export function Home() {
  // const [langue, setLangue] = useState("fr");

  const [datas, setDatas] = useState({
    titrePrincipal: {
      profession: "ETUDIANT INFORMATIQUE",
    },
    informationsPersonnelles: {
      adresse: "56 avenue Docteur Bernard Gaudeul, 64100 Bayonne",
      numero: "07 82 56 37 44",
      mail: "nico601.delahaie@gmail.com",
      date_de_naissance: "6 janvier 2003",
      permis: "Titulaire du permis B",
      linkedin: {
        lien: "https://www.linkedin.com/in/nicolas-delahaie-a02b38257/",
        nomProfil: "Nicolas DELAHAIE",
      },
    },
    objectifs: {
      stage:
        "Je souhaiterais à la suite de mon BUT informatique entrer en école d’ingénieur. Au préalable, j’aimerais, à l’issue de mes stages, trouver la specialité qui me conviendrait le mieux parmi celles que j’étudie actuellement.",
      job_etudiant:
        "Actuellement en BUT informatique, je souhaiterais trouver du travail (job d’été, missions d’intérim) pour financer mes futurs projets, tout en appréhendant le monde du travail.",
      interim:
        "Actuellement en BUT informatique, je souhaiterais découvrir le monde du travail en mettant ma condition physique à utilité.",
    },
    formations: {
      titre: "FORMATIONS",
      contenu: [
        {
          formation: "BUT Informatique",
          duree: "(depuis 2021)",
          details: [
            "Parcours A",
            "IUT de Bayonne",
            "Université de Pau et des Pays de l'Adour",
          ],
        },
        {
          formation: "Lycee Alfred Kastler",
          duree: "(2018-2020)",
          details: [
            "Spécialités :",
            ["NSI", "Maths expertes", "(Physique)"],
            "Bac mention bien",
          ],
        },
      ],
    },
    savoir_faire: [
      [true, "Organiser", " mon temps de travail"],
      [true, "Manager", " une équipe de projet"],
      [true, "Vulgariser", " un projet"],
      [true, "Fabriquer", " des objets à partir de DAO"],
      [true, "Pratiquer :", ""],
      [
        true,
        [
          "Python / C++ / Java",
          "HTML / CSS / PHP / JavaScript",
          "SQL / DAO",
          "SHELL Unix",
        ],
      ],
    ],
    savoir_etre: [
      [true, "Rigoureux :", " respecte méticuleusement les consignes"],
      [
        true,
        "Perseverant :",
        " ne lâche pas une tâche lorsqu'elle n'est pas completement achevée",
      ],
      [true, "Discipliné :", " alimentation et sports dont musculation"],
      [
        true,
        "Sociable :",
        " communication aisée en équipe grâce à ma participation à divers projets ",
      ],
      [
        true,
        "Actif :",
        " pratique quotidienne du vélo (indépendant des transports en commun)",
      ],
      [
        true,
        "Partageur :",
        " enthousiaste à l'idée de transmettre mes connaissances",
      ],
      [true, "Soif de connaissance :", " toujours envie d’apprendre"],
    ],
  });

  const TELECHARGER = () => {
    const element = document.getElementById("cv")!; // Remplacez 'your-page' par l'ID de l'élément que vous souhaitez capturer
    // html2canvas(element).then((canvas) => {
    //   canvas.toBlob((blob) => {
    //     // Créez un lien de téléchargement pour l'image
    //     const link = document.createElement("a");
    //     link.href = URL.createObjectURL(blob);
    //     link.download = "CV.png"; // Nom du fichier à télécharger
    //     link.click();
    //   });
    // });
  };

  // const puppeteer = require('puppeteer');

  // async function capturePDF() {
  //     const browser = await puppeteer.launch();
  //     const page = await browser.newPage();
  //     await page.goto('http://localhost:3000/'); // Remplacez par l'URL de votre page React

  //     // Capture de la page en PDF
  //     await page.pdf({ path: 'page.pdf', format: 'A4' }); // Le PDF sera enregistré en tant que 'page.pdf'

  //     await browser.close();
  // }
  // useEffect(() => capturePDF(), []);

  const projets = [
    {
      nomImage: "chemins_bus.jpg",
      nom: "chemins_bus",
      titre: "Itineraires de bus",
      description:
        "Codage de méthodes du plus court chemin en python appliqué sur le réseau de bus du bab",
      date: "Projet en semestre 2 de BUT 1 en Mathématiques",
    },
    {
      nomImage: "SurfNow.png",
      nom: "surfNow",
      titre: "SurfNow",
      description: "Application maquetée puis programmée en html et css",
      date: "Projet en semestre 1 de BUT 1 en Développement web",
    },
    {
      nomImage: "bataille_navale.jpg",
      nom: "bataille",
      titre: "Bataille navale",
      description:
        "Interface du jeux de la Bataille codé sur la console en C++",
      date: "Projet en semestre 1 de BUT 1 en Programmation bas niveau",
    },
    {
      nomImage: "roulette.jpg",
      nom: "roulette",
      titre: "Jeux de la roulette",
      description:
        "Programme C++ qui affiche dans la console le jeux de la roulette et qui permet de tenter automatiquement des méthodes sur de grands nombres de parties pour observer la tendance. On peut y jouer en naviguant avec les fleches puis en validant avec entrer. L'affichage est dynamique en fonction de ce que le joueur séléctionne.",
      date: "Projet personnel réalisé en semestre 2 de BUT 1",
    },
    {
      nomImage: "puissance4.jpg",
      nom: "puissance4",
      titre: "Puissance 4",
      description:
        "Codage du puissance 4 en assembleur sur simulateur à la suite d'une évaluation reprenant un bout de l'algorithme (affichage des jetons)",
      date: "Projet personnel de fin de BUT1",
    },
    {
      nomImage: "reseau.jpg",
      nom: "reseau",
      titre: "Adressage réseau d'une entreprise",
      description:
        "Architecture réseau d'une entreprise factice pensée et adressée depuis Marionnet",
      date: "Projet en semestre 2 de BUT 1 en Réseau",
    },
    {
      nomImage: "bruitage.jpg",
      nom: "bruitage",
      titre: "Bruitage d'image",
      description:
        "Programme python qui va bruiter une image plus ou moins .Il peut également transformer un pixel art avec beaucoup de pixels en un pixel art avec le strice minimum de pixels.",
    },
    {
      nomImage: "Hanoi.jpg",
      nom: "hanoi",
      titre: "Tours d'Hanoï",
      description:
        "Programme C++ qui permet de jouer aux tours d'Hanoï dans la console. Il suffit de cliquer sur la tour de base puis sa destination. On peut également retourner en arrière grace à un système de pile.",
      date: "Projet personnel basé sur un TP en semestre 2 de BUT 1 en programmation bas niveau",
    },
    {
      nomImage: "demineur.jpg",
      nom: "demineur",
      titre: "Démineur",
      description:
        "Programme C++ qui permet de jouer au démineur dans la console. Il suffit d'écrire l'instruction puis de valider et la console se met a jour.",
      date: "Projet personnel au semestre 1 du BUT 1",
    },
    {
      nomImage: "graphique_python.jpg",
      nom: "graphiques_rugby",
      titre: "Analyses équipe rugby",
      description:
        "Programme python affichant des graphiques divers et variés liés à différentes analyses sur des données csv d'une équipe de rugby.",
      date: "Projet en semestre 2 de BUT 1 en mathématiques",
    },
    {
      nomImage: "Chifoumi.jpg",
      nom: "chifoumi",
      titre: "Chifoumi",
      description:
        "Programme C++ utilisant un modèle MVP sur QT. Ce chifoumi est très complet : persalisation du temps et du pseudo, pause du temps, identification avec une base de donnée et bien plus encore.",
      date: "Projet en semestre 2 de BUT 1 en programmation IHM",
    },
  ];

  return (
    <section id="home">
      {/* <Link to="/personnalisation" className="lienPersonnalisation">Changer informations</Link> */}
      {/* <button onClick={() => TELECHARGER()} className="btnTelecharger">
        Telecharger PNG
      </button> */}
      <section id="portfolio">
        <header>
          <section id="titrePrincipal_portfolio">
            <h1>Nicolas DELAHAIE</h1>
            <hr className="trait traitMarron" />
            <p>
              Projets colaboratifs et personnels
              <br />
              ENGTRE EN MATIERE : Profil ce que je veux, qui je suis,
              compétences liens github domaines de compétences (avec projet type
              cliquable) systeme de tri pour voir les projets type trier par
              difficulte de projet
            </p>
            {/* <button><strong>VISIONNER MES PROJETS</strong></button> */}
          </section>
        </header>
        <main>
          {/* <article id="zoneBleue">
                    <h2>Grand fan de github</h2>
                    <hr className="trait" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, repellat sed doloribus, quidem commodi voluptatem labore est earum velit magni recusandae placeat. Voluptate id explicabo incidunt architecto omnis facere ratione?</p>
                    <button><strong>CONSULTER MON GITHUB</strong></button>
                </article>

                <article id="zoneIcones">
                    <section id="titreIcones">
                        <h2>Intérêts</h2>
                        <hr className="trait traitMarron" />
                    </section>

                    <section id="grilleIcones">
                        <section>
                            <img src={require("../datas/logos/logo1.svg")} className="icones" />
                            <h3>Compétences</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit Officiis</p>
                        </section>
                        <section>
                            <img src={require("../datas/logos/logo1.svg")} className="icones" />
                            <h3>Informations continus</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit Officiis</p>
                        </section>
                        <section>
                            <img src={require("../datas/logos/logo1.svg")} className="icones" />
                            <h3>Dîplomes</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit Officiis</p>
                        </section>
                        <section>
                            <img src={require("../datas/logos/logo1.svg")} className="icones" />
                            <h3>Qualités</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit Officiis</p>
                        </section>
                    </section>
                </article> */}

          <article id="projets">
            {/* <section id="titreProjet">
              <h2>Mes projets</h2>
              <hr className="trait traitMarron" />
            </section> */}

            <section id="zonePhotosProjets">
              {/* const projets = {
                  nomImage: "chemins_bus.jpg",
                  titre: "Itineraires de bus",
                  description:
                    "Codage de méthodes du plus court chemin en python appliqué sur le réseau de bus du bab",
                  date: "Projet en semestre 2 de BUT 1 en Mathématiques",
                }; */}

              {projets.map((projet) => (
                <article id={projet.nom}>
                  <img
                    src={require("../datas/photos_projets/" + projet.nomImage)}
                    className="photosProjets"
                  />
                  <section className="textePhotoProjet">
                    <h2>{projet.titre}</h2>
                    <p className="descriptionProjet">{projet.description}</p>
                    <p className="dateProjet">{projet.date}</p>
                  </section>
                </article>
              ))}
            </section>
          </article>
        </main>
        <footer>
          <section id="titreFooter">
            <h2>Me contacter</h2>
            <hr className="trait traitMarron" />
            <p>N'hésitez pas à prendre contact</p>
          </section>

          <section id="footerGrid">
            <section>
              <img src={require("../datas/logos/footerIcon1.jpg")} />
              <p>07-82-56-37-44</p>
            </section>

            <section>
              <img src={require("../datas/logos/footerIcon2.jpg")} />
              <p>nico601.delahaie@gmail.com</p>
            </section>
          </section>
        </footer>
      </section>
      <section id="cv">
        <header>
          <section id="titrePrincipal_cv">
            <h1>Nicolas DELAHAIE</h1>
            <h2>{datas.titrePrincipal.profession}</h2>
          </section>

          <article id="informationsPersonnelles">
            <section>
              <img src={localisation} />
              <p>{datas.informationsPersonnelles.adresse}</p>
            </section>
            <section>
              <img src={telephone} />
              <p>{datas.informationsPersonnelles.numero}</p>
            </section>
            <section>
              <img src={mail} />
              <a href={"mailto:" + datas.informationsPersonnelles.mail}>
                {datas.informationsPersonnelles.mail}
              </a>
            </section>
            <section>
              <img src={calendrier} />
              <p>{datas.informationsPersonnelles.date_de_naissance}</p>
            </section>
            <section>
              <img src={voiture} />
              <p>{datas.informationsPersonnelles.permis}</p>
            </section>
            <section>
              <img src={linkedin} />
              <a href={datas.informationsPersonnelles.linkedin.lien}>
                {datas.informationsPersonnelles.linkedin.nomProfil}
              </a>
            </section>
          </article>
        </header>
        <main>
          <article id="objectifs">
            <section id="separateur_objectif">
              <section className="ligneSeparatrice"></section>
              <h2 className="titre_separateur">OBJECTIF</h2>
              <section className="ligneSeparatrice"></section>
            </section>
            <p>{datas.objectifs.stage}</p>
          </article>

          <aside id="formations">
            <h2>{datas.formations.titre}</h2>

            {datas.formations.contenu.map((formation) => (
              <article>
                <h3>{formation.formation}</h3>
                <p>{formation.duree}</p>
                <ul>
                  {formation.details.map((elmt) =>
                    Array.isArray(elmt) ? (
                      <ul>
                        {elmt.map((ligne) => (
                          <li>{ligne}</li>
                        ))}
                      </ul>
                    ) : (
                      <li>{elmt}</li>
                    )
                  )}
                </ul>
              </article>
            ))}
          </aside>
          <article id="savoir_etre">
            <section className="separateur_savoirs">
              <h2 className="titre_separateur">SAVOIR-ÊTRE</h2>
              <section className="ligneSeparatrice"></section>
            </section>
            <ul>
              {datas.savoir_etre.map(
                (savoir) =>
                  savoir[0] &&
                  (Array.isArray(savoir[1]) ? (
                    <ul>
                      {savoir[1].map((elmt) => (
                        <li>{elmt}</li>
                      ))}
                    </ul>
                  ) : (
                    <li>
                      <strong>{savoir[1]}</strong>
                      {savoir[2]}
                    </li>
                  ))
              )}
            </ul>
          </article>

          <article id="savoir_faire">
            <section className="separateur_savoirs">
              <h2 className="titre_separateur">SAVOIR-FAIRE</h2>
              <section className="ligneSeparatrice"></section>
            </section>

            <ul>
              {datas.savoir_faire.map(
                (savoir) =>
                  savoir[0] &&
                  (Array.isArray(savoir[1]) ? (
                    <ul>
                      {savoir[1].map((elmt) => (
                        <li>{elmt}</li>
                      ))}
                    </ul>
                  ) : (
                    <li>
                      <strong>{savoir[1]}</strong>
                      {savoir[2]}
                    </li>
                  ))
              )}
            </ul>
          </article>

          {/* <article id="competences">
                    <section className="separateur_savoirs">
                        <h2 className="titre_separateur">COMPETENCES TECHNIQUES</h2>
                        <section className="ligneSeparatrice"></section>
                    </section>
                </article> */}
        </main>
      </section>
    </section>
  );
}
