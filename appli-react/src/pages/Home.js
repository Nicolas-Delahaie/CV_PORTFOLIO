
function Home() {
    return <section id="home">
        <section id="zoneLangues">
            <a id="fr">Français</a>
            <a id="en">English</a>
            <a id="MODELE">Español</a>
        </section>
        <section id="cv">
            <header>
                <section id="titrePrincipal_cv">
                    <h1></h1>
                    <h2></h2>
                </section>

                <article id="informationsPersonnelles">
                    <section>
                        <img src="src/img/logos/localisation.jpg" />
                        <p></p>
                    </section>
                    <section>
                        <img src="src/img/logos/telephone.jpg" />
                        <p></p>
                    </section>
                    <section>
                        <img src="src/img/logos/mail.jpg" />
                        <a href="mailto:nico601.delahaie@gmail.com"></a>
                    </section>
                    <section>
                        <img src="src/img/logos/calendrier.jpg" />
                        <p></p>
                    </section>
                    <section>
                        <img src="src/img/logos/voiture.jpg" />
                        <p></p>
                    </section>
                    <section>
                        <img src="src/img/logos/linkedin.png" />
                        <a href="https://www.linkedin.com/in/nicolas-delahaie-a02b38257/"></a>
                    </section>
                </article>
            </header>
            <main>
                <article id="objectifs">
                    <section id="separateur_objectif">
                        <section class="ligneSeparatrice"></section>
                        <h2 class="titre_separateur"></h2>
                        <section class="ligneSeparatrice"></section>
                    </section>
                    <p></p>
                </article>

                <aside id="formations">
                    <h2></h2>

                    <article>
                        <h3></h3>
                        <p></p>

                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </article>

                    <article>
                        <h3></h3>
                        <p></p>

                        <ul>
                            <li></li>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <li></li>
                        </ul>
                    </article>
                </aside>

                <article id="savoir_faire">
                    <section class="separateur_savoirs">
                        <h2 class="titre_separateur"></h2>
                        <section class="ligneSeparatrice"></section>
                    </section>

                    <ul>
                        <li><strong></strong></li>
                        <li><strong></strong></li>
                        <li><strong></strong></li>
                        <li><strong></strong></li>
                        <li><strong> :</strong></li>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </ul>
                </article>

                <article id="savoir_etre">
                    <section class="separateur_savoirs">
                        <h2 class="titre_separateur"></h2>
                        <section class="ligneSeparatrice"></section>
                    </section>
                    <ul>
                        <li><strong></strong></li>
                        <li><strong></strong></li>
                        <li><strong></strong></li>
                        <li><strong></strong></li>
                    </ul>
                </article>
            </main>
        </section>
        <section id="portfolio">
            <header>
                <section id="titrePrincipal_portfolio">
                    <h1>Voici mon Portfolio</h1>
                    <hr class="trait traitMarron" />
                    <p>Projets colaboratifs et personnels</p>
                    <button onclick="window.location.href = '#zonePhotosProjets';"><strong>VISIONNER MES PROJETS</strong></button>
                </section>
            </header>
            <main>
                <article id="zoneBleue">
                    <h2>Grand fan de github</h2>
                    <hr class="trait" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, repellat sed doloribus, quidem commodi voluptatem labore est earum velit magni recusandae placeat. Voluptate id explicabo incidunt architecto omnis facere ratione?</p>
                    <button onclick="window.location.href = 'https://github.com/Nicolas-Delahaie'"><strong>CONSULTER MON GITHUB</strong></button>
                </article>

                <article id="zoneIcones">
                    <section id="titreIcones">
                        <h2>Intérêts</h2>
                        <hr class="trait traitMarron" />
                    </section>

                    <section id="grilleIcones">
                        <section>
                            <img src="src/img/logos/logo1.svg" class="icones" />
                            <h3>Compétences</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit Officiis</p>
                        </section>
                        <section>
                            <img src="src/img/logos/logo1.svg" class="icones" />
                            <h3>Informations continus</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit Officiis</p>
                        </section>
                        <section>
                            <img src="src/img/logos/logo1.svg" class="icones" />
                            <h3>Dîplomes</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit Officiis</p>
                        </section>
                        <section>
                            <img src="src/img/logos/logo1.svg" class="icones" />
                            <h3>Qualités</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit Officiis</p>
                        </section>
                    </section>
                </article>

                <article id="projets">
                    <section id="titreProjet">
                        <h2>Mes projets</h2>
                        <hr class="trait traitMarron" />
                    </section>

                    <section id="zonePhotosProjets">
                        <article id="surfNow">
                            <img src="src/img/photos_projets/SurfNow.png" alt="" class="photosProjets" />
                            <section class="textePhotoProjet">
                                <h2>SurfNow</h2>
                                <p class="descriptionProjet">Application maquetée puis programmée en html et css</p>
                                <p class="dateProjet">Projet en semestre 1 de BUT 1 en Développement web</p>
                            </section>
                        </article>
                        <article id="bataille">
                            <img src="src/img/photos_projets/bataille_navale.jpg" alt="" class="photosProjets" />
                            <section class="textePhotoProjet">
                                <h2>Bataille navale</h2>
                                <p class="descriptionProjet">Interface du jeux de la Bataille codé sur la console en C++</p>
                                <p class="dateProjet">Projet en semestre 1 de BUT 1 en Programmation bas niveau</p>
                            </section>
                        </article>
                        <article id="roulette">
                            <img src="src/img/photos_projets/roulette.jpg" alt="" class="photosProjets" />
                            <section class="textePhotoProjet">
                                <h2>Jeux de la roulette</h2>
                                <p class="descriptionProjet">Programme C++ qui affiche dans la console le jeux de la roulette et qui permet de tenter automatiquement des méthodes sur de grands nombres de parties pour observer la tendance. On peut y jouer en naviguant avec les fleches puis en validant avec entrer. L'affichage est dynamique en fonction de ce que le joueur séléctionne.</p>
                                <p class="dateProjet">Projet personnel réalisé en semestre 2 de BUT 1</p>
                            </section>
                        </article>
                        <article id="carte_bus">
                            <img src="src/img/photos_projets/chemins_bus.jpg" alt="" class="photosProjets" />
                            <section class="textePhotoProjet">
                                <h2>Itineraires de bus</h2>
                                <p class="descriptionProjet">Codage de méthodes du plus court chemin en python appliqué sur le réseau de bus du bab</p>
                                <p class="dateProjet">Projet en semestre 2 de BUT 1 en Mathématiques</p>
                            </section>
                        </article>
                        <article id="puissance4">
                            <img src="src/img/photos_projets/puissance4.jpg" alt="" class="photosProjets" />
                            <section class="textePhotoProjet">
                                <h2>Puissance 4</h2>
                                <p class="descriptionProjet">Codage du puissance 4 en assembleur sur simulateur à la suite d'une évaluation reprenant un bout de l'algorithme (affichage des jetons)</p>
                                <p class="dateProjet">Projet personnel de fin de BUT1</p>
                            </section>
                        </article>
                        <article id="reseau">
                            <img src="src/img/photos_projets/reseau.jpg" alt="" class="photosProjets" />
                            <section class="textePhotoProjet">
                                <h2>Adressage réseau d'une entreprise</h2>
                                <p class="descriptionProjet">Architecture réseau d'une entreprise factice pensée et adressée depuis Marionnet</p>
                                <p class="dateProjet">Projet en semestre 2 de BUT 1 en Réseau</p>
                            </section>
                        </article>
                        <article id="bruitage">
                            <img src="src/img/photos_projets/bruitage.jpg" alt="" class="photosProjets" />
                            <section class="textePhotoProjet">
                                <h2>Bruitage d'image</h2>
                                <p class="descriptionProjet">Programme python qui va bruiter une image plus ou moins .Il peut également transformer un pixel art avec beaucoup de pixels en un pixel art avec le strice minimum de pixels.</p>
                                <p class="dateProjet">Projet en fin de trimestre de terminale en NSI</p>
                            </section>
                        </article>
                        <article id="hanoi">
                            <img src="src/img/photos_projets/Hanoi.jpg" alt="" class="photosProjets" />
                            <section class="textePhotoProjet">
                                <h2>Tours d'Hanoï</h2>
                                <p class="descriptionProjet">Programme C++ qui permet de jouer aux tours d'Hanoï dans la console. Il suffit de cliquer sur la tour de base puis sa destination. On peut également retourner en arrière grace à un système de pile.</p>
                                <p class="dateProjet">Projet personnel basé sur un TP en semestre 2 de BUT 1 en programmation bas niveau</p>
                            </section>
                        </article>
                        <article id="demineur">
                            <img src="src/img/photos_projets/demineur.jpg" alt="" class="photosProjets" />
                            <section class="textePhotoProjet">
                                <h2>Démineur</h2>
                                <p class="descriptionProjet">Programme C++ qui permet de jouer au démineur dans la console. Il suffit d'écrire l'instruction puis de valider et la console se met a jour.</p>
                                <p class="dateProjet">Projet personnel au semestre 1 du BUT 1</p>
                            </section>
                        </article>
                        <article id="graphiques_rugby">
                            <img src="src/img/photos_projets/graphique_python.jpg" alt="" class="photosProjets" />
                            <section class="textePhotoProjet">
                                <h2>Analyses équipe rugby</h2>
                                <p class="descriptionProjet">Programme python affichant des graphiques divers et variés liés à différentes analyses sur des données csv d'une équipe de rugby.</p>
                                <p class="dateProjet">Projet en semestre 2 de BUT 1 en mathématiques</p>
                            </section>
                        </article>
                        <article id="chifoumi">
                            <img src="src/img/photos_projets/Chifoumi.jpg" alt="" class="photosProjets" />
                            <section class="textePhotoProjet">
                                <h2>Chifoumi</h2>
                                <p class="descriptionProjet">Programme C++ utilisant un modèle MVP sur QT. Ce chifoumi est très complet : persalisation du temps et du pseudo, pause du temps, identification avec une base de donnée et bien plus encore.</p>
                                <p class="dateProjet">Projet en semestre 2 de BUT 1 en programmation IHM</p>
                            </section>
                        </article>
                        {/* <article id="">
                          <img src="src/img/photos_projets/.jpg" alt="" class="photosProjets"/>
                          <section class="textePhotoProjet">
                              <h2></h2>
                              <p class="descriptionProjet"></p>
                              <p class="dateProjet">Projet en semestre X de BUT X en X </p>
                          </section>
                      </article>
                      <article id="">
                          <img src="src/img/photos_projets/.jpg" alt="" class="photosProjets"/>
                          <section class="textePhotoProjet">
                              <h2></h2>
                              <p class="descriptionProjet"></p>
                              <p class="dateProjet">Projet en semestre X de BUT X en X </p>
                          </section>
                      </article> */}
                    </section>
                </article>
            </main>
            <footer>
                <section id="titreFooter">
                    <h2>Me contacter</h2>
                    <hr class="trait traitMarron" />
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