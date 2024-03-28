import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import React from "react";
import html2canvas from "html2canvas";
import personnalDatasJson from "./../datas/personnal_datas.json";
import projectsJson from "./../datas/projects.json";
import { isNumberObject, isStringObject } from "util/types";

const localisation = require("../datas/logos/localisation.jpg");
const telephone = require("../datas/logos/telephone.jpg");
const mail = require("../datas/logos/mail.jpg");
const calendrier = require("../datas/logos/calendrier.jpg");
const voiture = require("../datas/logos/voiture.jpg");
const linkedin = require("../datas/logos/linkedin.png");

export function Home() {
  // const [langue, setLangue] = useState("fr");

  enum T_type_projets {
    back,
    front,
    reseau,
  }

  const [datas, setDatas] = useState<any>(personnalDatasJson);

  type T_projet = {
    nomImage: string;
    nom: string;
    titre: string;
    description: string;
    date: string;
    type: T_type_projets[];
  };

  const allProjects = projectsJson as T_projet[];
  const [projetsFiltres, setProjetsFiltres] = useState<T_projet[]>();
  const [filtres, setFiltres] = useState<T_type_projets | null>(null);

  useEffect(() => {
    console.log("Application du filtre : ", filtres);
    setProjetsFiltres(
      filtres === null
        ? allProjects
        : allProjects.filter((projet) => projet.type.includes(filtres))
    );
  }, [filtres]);

  return (
    <section id="home">
      {/* <Link to="/personnalisation" className="lienPersonnalisation">
        Changer informations
      </Link> */}
      <section id="portfolio">
        <header>
          <section id="titrePrincipal_portfolio">
            <h1>Nicolas DELAHAIE</h1>
            {/* <hr className="trait traitMarron" />
            <p>
              Projets colaboratifs et personnels
              <br />
              ENGTRE EN MATIERE : Profil ce que je veux, qui je suis,
              compétences liens github domaines de compétences (avec projet type
              cliquable) systeme de tri pour voir les projets type trier par
              difficulte de projet
            </p> */}
            <button
              onClick={() => {
                // document.getElementById("cv")?.scrollIntoView({ behavior: "smooth" })
                alert("Curriculum Vitae bientôt disponible");
              }}
            >
              <strong>Curriculum Vitae</strong>
            </button>
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
            <section id="titreProjet">
              <h2>Mes projets</h2>
              <hr className="trait traitMarron" />
              <p>
                Projets colaboratifs et personnels
                <br />
                {/* ENGTRE EN MATIERE : Profil ce que je veux, qui je suis, compétences liens github
              domaines de compétences (avec projet type cliquable) systeme de tri pour voir les
              projets type trier par difficulte de projet */}
              </p>
            </section>

            <section className="criteres">
              <h3>Filtres</h3>
              <p>Type de projet</p>
              <select
                id="maListeDeroulante"
                onChange={(e) =>
                  setFiltres(
                    isNaN(+e.target.value) ? null : +e.target.value // Pas un nombre
                  )
                }
              >
                <option>Tous</option>
                <option value={T_type_projets.back}>Back-end</option>
                <option value={T_type_projets.front}>Front-end</option>
                <option value={T_type_projets.reseau}>Réseau</option>
              </select>
            </section>
            <section id="zonePhotosProjets">
              {projetsFiltres &&
                projetsFiltres.map((projet) => (
                  <article id={projet.nom}>
                    <img
                      src={require("../datas/photos_projets/" +
                        projet.nomImage)}
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
      {/* <section id="cv">
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
        </main>
      </section> */}
    </section>
  );
}
