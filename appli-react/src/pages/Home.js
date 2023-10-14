import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

import localisation from "../datas/logos/localisation.jpg";
import telephone from "../datas/logos/telephone.jpg";
import mail from "../datas/logos/mail.jpg";
import calendrier from "../datas/logos/calendrier.jpg";
import voiture from "../datas/logos/voiture.jpg";
import linkedin from "../datas/logos/linkedin.png";

function Home() {
    // const [langue, setLangue] = useState("fr");

    const [datas, setDatas] = useState({
        "titrePrincipal": {
            "nom": "Nicolas DELAHAIE",
            "profession": "ETUDIANT INFORMATIQUE"
        },
        "informationsPersonnelles": {
            "adresse": "56 avenue Docteur Bernard Gaudeul, 64100 Bayonne",
            "numero": "07 82 56 37 44",
            "mail": "nico601.delahaie@gmail.com",
            "date_de_naissance": "6 janvier 2003",
            "permis": "Titulaire du permis B",
            "linkedin":
            {
                "lien": "https://www.linkedin.com/in/nicolas-delahaie-a02b38257/",
                "nomProfil": "Nicolas DELAHAIE"
            }
        },
        "objectifs": {
            "titre": "OBJECTIF",
            "contenu": "Je souhaiterais à la suite de mon BUT informatique entrer en école d’ingénieur. Au préalable, j’aimerais, à l’issue de mes stages, trouver la specialité qui me conviendrait le mieux parmi celles que j’étudie actuellement."
        },
        "formations": {
            "titre": "FORMATIONS",
            "contenu": [
                {
                    "formation": "BUT Informatique",
                    "duree": "(depuis 2021)",
                    "details": [
                        "Parcours A",
                        "IUT de Bayonne",
                        "Université de Pau et des Pays de l'Adour"
                    ]
                },
                {
                    "formation": "Lycee Alfred Kastler",
                    "duree": "(2018-2020)",
                    "details": [
                        "Spacialités",
                        "NSI", "Maths expertes", "(Physique)",
                        "Bac mention bien"
                    ]
                }
            ]
        },
        "savoir_faire": [
            [true, "Organiser", " mon temps de travail"],
            [true, "Manager", " une équipe de projet"],
            [true, "Vulgariser", " un projet"],
            [true, "Fabriquer", " des objets à partir de DAO"],
            [true, "Pratiquer :", ""],
            [true, ["Python / C++ / Java",
                "HTML / CSS / PHP / JavaScript",
                "SQL / DAO",
                "SHELL Unix"]
            ]
        ],
        "savoir_etre": [
            [true, "Discipliné", " alimentation et sports dont musculation"],
            [true, "Sociable :", " communication aisée lors de projets en équipe grâce aux différents projets passés"],
            [true, "Rigoureux :", " respecte méticuleusement les consignes"],
            [true, "Actif :", " pratique quotidienne du vélo (indépendant des transports en commun)"],
            [true, "Perseverant :", " ne lâche pas une tâche lorsqu'elle n'est pas completement achevée"],
            [true, "Partageur :", " enthousiaste à l'idée de transmettre mes connaissances"]
        ]
    });

    // async function test() {
    //     const data = await fetch("../datas/contenu_FR.json", {
    //         method: "GET",
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json',
    //         },
    //     })

    //     // data = await data.json();
    //     console.log(data);
    // }
    // test();

    return <section id="home">
        {/* <Link to="/personnalisation" className="lienPersonnalisation">Changer informations</Link> */}

        <section id="cv">
            <header>
                <section id="titrePrincipal_cv">
                    <h1>{datas.titrePrincipal.nom}</h1>
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
                        <a href={"mailto:" + datas.informationsPersonnelles.mail}>{datas.informationsPersonnelles.mail}</a>
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
                        <a href={datas.informationsPersonnelles.linkedin.lien}>{datas.informationsPersonnelles.linkedin.nomProfil}</a>
                    </section>
                </article>
            </header>
            <main>
                <article id="objectifs">
                    <section id="separateur_objectif">
                        <section className="ligneSeparatrice"></section>
                        <h2 className="titre_separateur">{datas.objectifs.titre}</h2>
                        <section className="ligneSeparatrice"></section>
                    </section>
                    <p>{datas.objectifs.contenu}</p>
                </article>

                <aside id="formations">
                    <h2>{datas.formations.titre}</h2>

                    <article>
                        <h3>{datas.formations.contenu[0].formation}</h3>
                        <p>{datas.formations.contenu[0].duree}</p>

                        <ul>
                            <li>{datas.formations.contenu[0].details[0]}</li>
                            <li>{datas.formations.contenu[0].details[1]}</li>
                            <li>{datas.formations.contenu[0].details[2]}</li>
                        </ul>
                    </article>

                    <article>
                        <h3>{datas.formations.contenu[1].formation}</h3>
                        <p>{datas.formations.contenu[1].duree}</p>

                        <ul>
                            <li>{datas.formations.contenu[1].details[0]}</li>
                            <ul>
                                <li>{datas.formations.contenu[1].details[1]}</li>
                                <li>{datas.formations.contenu[1].details[2]}</li>
                                <li>{datas.formations.contenu[1].details[3]}</li>
                            </ul>
                            <li>{datas.formations.contenu[1].details[4]}</li>
                        </ul>
                    </article>
                </aside>

                <article id="savoir_faire">
                    <section className="separateur_savoirs">
                        <h2 className="titre_separateur">{datas.savoir_faire.titre}</h2>
                        <section className="ligneSeparatrice"></section>
                    </section>

                    <ul>
                        {
                            datas.savoir_faire.map(savoir =>
                                savoir[0] && (Array.isArray(savoir[1]) ?
                                    <ul>
                                        {
                                            savoir[1].map(elmt => <li>{elmt}</li>)
                                        }
                                    </ul>
                                    :
                                    <li><strong>{savoir[1]}</strong>{savoir[2]}</li>
                                )
                            )
                        }
                    </ul>
                </article>

                <article id="savoir_etre">
                    <section className="separateur_savoirs">
                        <h2 className="titre_separateur">{datas.savoir_etre.titre}</h2>
                        <section className="ligneSeparatrice"></section>
                    </section>
                    <ul>
                        {
                            datas.savoir_etre.map(savoir =>
                                savoir[0] && (Array.isArray(savoir[1]) ?
                                    <ul>
                                        {
                                            savoir[1].map(elmt => <li>{elmt}</li>)
                                        }
                                    </ul>
                                    :
                                    <li><strong>{savoir[1]}</strong>{savoir[2]}</li>
                                )
                            )
                        }
                    </ul>
                </article>
            </main>
        </section>

        <section id="portfolio">
            <header>
                <section id="titrePrincipal_portfolio">
                    <h1>Voici mon Portfolio</h1>
                    <hr className="trait traitMarron" />
                    <p>Projets colaboratifs et personnels</p>
                    <button><strong>VISIONNER MES PROJETS</strong></button>
                </section>
            </header>
            <main>
                <article id="zoneBleue">
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
                            <img src="src/img/logos/logo1.svg" className="icones" />
                            <h3>Compétences</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit Officiis</p>
                        </section>
                        <section>
                            <img src="src/img/logos/logo1.svg" className="icones" />
                            <h3>Informations continus</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit Officiis</p>
                        </section>
                        <section>
                            <img src="src/img/logos/logo1.svg" className="icones" />
                            <h3>Dîplomes</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit Officiis</p>
                        </section>
                        <section>
                            <img src="src/img/logos/logo1.svg" className="icones" />
                            <h3>Qualités</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit Officiis</p>
                        </section>
                    </section>
                </article>

                <article id="projets">
                    <section id="titreProjet">
                        <h2>Mes projets</h2>
                        <hr className="trait traitMarron" />
                    </section>

                    <section id="zonePhotosProjets">
                        <article id="surfNow">
                            <img src="src/img/photos_projets/SurfNow.png" alt="" className="photosProjets" />
                            <section className="textePhotoProjet">
                                <h2>SurfNow</h2>
                                <p className="descriptionProjet">Application maquetée puis programmée en html et css</p>
                                <p className="dateProjet">Projet en semestre 1 de BUT 1 en Développement web</p>
                            </section>
                        </article>
                        <article id="bataille">
                            <img src="src/img/photos_projets/bataille_navale.jpg" alt="" className="photosProjets" />
                            <section className="textePhotoProjet">
                                <h2>Bataille navale</h2>
                                <p className="descriptionProjet">Interface du jeux de la Bataille codé sur la console en C++</p>
                                <p className="dateProjet">Projet en semestre 1 de BUT 1 en Programmation bas niveau</p>
                            </section>
                        </article>
                        <article id="roulette">
                            <img src="src/img/photos_projets/roulette.jpg" alt="" className="photosProjets" />
                            <section className="textePhotoProjet">
                                <h2>Jeux de la roulette</h2>
                                <p className="descriptionProjet">Programme C++ qui affiche dans la console le jeux de la roulette et qui permet de tenter automatiquement des méthodes sur de grands nombres de parties pour observer la tendance. On peut y jouer en naviguant avec les fleches puis en validant avec entrer. L'affichage est dynamique en fonction de ce que le joueur séléctionne.</p>
                                <p className="dateProjet">Projet personnel réalisé en semestre 2 de BUT 1</p>
                            </section>
                        </article>
                        <article id="carte_bus">
                            <img src="src/img/photos_projets/chemins_bus.jpg" alt="" className="photosProjets" />
                            <section className="textePhotoProjet">
                                <h2>Itineraires de bus</h2>
                                <p className="descriptionProjet">Codage de méthodes du plus court chemin en python appliqué sur le réseau de bus du bab</p>
                                <p className="dateProjet">Projet en semestre 2 de BUT 1 en Mathématiques</p>
                            </section>
                        </article>
                        <article id="puissance4">
                            <img src="src/img/photos_projets/puissance4.jpg" alt="" className="photosProjets" />
                            <section className="textePhotoProjet">
                                <h2>Puissance 4</h2>
                                <p className="descriptionProjet">Codage du puissance 4 en assembleur sur simulateur à la suite d'une évaluation reprenant un bout de l'algorithme (affichage des jetons)</p>
                                <p className="dateProjet">Projet personnel de fin de BUT1</p>
                            </section>
                        </article>
                        <article id="reseau">
                            <img src="src/img/photos_projets/reseau.jpg" alt="" className="photosProjets" />
                            <section className="textePhotoProjet">
                                <h2>Adressage réseau d'une entreprise</h2>
                                <p className="descriptionProjet">Architecture réseau d'une entreprise factice pensée et adressée depuis Marionnet</p>
                                <p className="dateProjet">Projet en semestre 2 de BUT 1 en Réseau</p>
                            </section>
                        </article>
                        <article id="bruitage">
                            <img src="src/img/photos_projets/bruitage.jpg" alt="" className="photosProjets" />
                            <section className="textePhotoProjet">
                                <h2>Bruitage d'image</h2>
                                <p className="descriptionProjet">Programme python qui va bruiter une image plus ou moins .Il peut également transformer un pixel art avec beaucoup de pixels en un pixel art avec le strice minimum de pixels.</p>
                                <p className="dateProjet">Projet en fin de trimestre de terminale en NSI</p>
                            </section>
                        </article>
                        <article id="hanoi">
                            <img src="src/img/photos_projets/Hanoi.jpg" alt="" className="photosProjets" />
                            <section className="textePhotoProjet">
                                <h2>Tours d'Hanoï</h2>
                                <p className="descriptionProjet">Programme C++ qui permet de jouer aux tours d'Hanoï dans la console. Il suffit de cliquer sur la tour de base puis sa destination. On peut également retourner en arrière grace à un système de pile.</p>
                                <p className="dateProjet">Projet personnel basé sur un TP en semestre 2 de BUT 1 en programmation bas niveau</p>
                            </section>
                        </article>
                        <article id="demineur">
                            <img src="src/img/photos_projets/demineur.jpg" alt="" className="photosProjets" />
                            <section className="textePhotoProjet">
                                <h2>Démineur</h2>
                                <p className="descriptionProjet">Programme C++ qui permet de jouer au démineur dans la console. Il suffit d'écrire l'instruction puis de valider et la console se met a jour.</p>
                                <p className="dateProjet">Projet personnel au semestre 1 du BUT 1</p>
                            </section>
                        </article>
                        <article id="graphiques_rugby">
                            <img src="src/img/photos_projets/graphique_python.jpg" alt="" className="photosProjets" />
                            <section className="textePhotoProjet">
                                <h2>Analyses équipe rugby</h2>
                                <p className="descriptionProjet">Programme python affichant des graphiques divers et variés liés à différentes analyses sur des données csv d'une équipe de rugby.</p>
                                <p className="dateProjet">Projet en semestre 2 de BUT 1 en mathématiques</p>
                            </section>
                        </article>
                        <article id="chifoumi">
                            <img src="src/img/photos_projets/Chifoumi.jpg" alt="" className="photosProjets" />
                            <section className="textePhotoProjet">
                                <h2>Chifoumi</h2>
                                <p className="descriptionProjet">Programme C++ utilisant un modèle MVP sur QT. Ce chifoumi est très complet : persalisation du temps et du pseudo, pause du temps, identification avec une base de donnée et bien plus encore.</p>
                                <p className="dateProjet">Projet en semestre 2 de BUT 1 en programmation IHM</p>
                            </section>
                        </article>
                        {/* <article id="">
                          <img src="src/img/photos_projets/.jpg" alt="" className="photosProjets"/>
                          <section className="textePhotoProjet">
                              <h2></h2>
                              <p className="descriptionProjet"></p>
                              <p className="dateProjet">Projet en semestre X de BUT X en X </p>
                          </section>
                      </article>
                      <article id="">
                          <img src="src/img/photos_projets/.jpg" alt="" className="photosProjets"/>
                          <section className="textePhotoProjet">
                              <h2></h2>
                              <p className="descriptionProjet"></p>
                              <p className="dateProjet">Projet en semestre X de BUT X en X </p>
                          </section>
                      </article> */}
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
                        <img src="src/img/logos/footerIcon1.jpg" />
                        <p>07-82-56-37-44</p>
                    </section>

                    <section>
                        <img src="src/img/logos/footerIcon2.jpg" />
                        <p>nico601.delahaie@gmail.com</p>
                    </section>
                </section>
            </footer>
        </section>
    </section>
}
export default Home;