import React from "react";
import './Resume.css';


export default function Resume(props) {
    return (
        <div className='resume-color'>
        <main className='resume' >
            <div id="cv" className="instaFade">
                <div className="mainDetails">
                    <div id="headshot" className="quickFade">
                        <img src={`https://images-for-portfolio.s3.us-east-2.amazonaws.com/other+screens/KasiaMirowska.jpg`} alt="Kasia Mirowska" />
                    </div>
                    <div id="name">
                        <h1 className="quickFade delayTwo resume-h1 ">Kasia Mirowska</h1>
                        <h2 className="quickFade delayThree resume-h2">Software Developer</h2>
                    </div>
                    <div id="contactDetails" className="quickFade delayFour">
                        <ul>
                            <li><i className="fas fa-envelope fa-1x icon"></i><a href="mailto:amirokasia@gmail.com" target="_blank" rel='noopener noreferrer'> &nbsp;amirokasia@gmail.com</a></li>
                            <li><i className="fas fa-at fa-1x"></i><a href="http://www.kasiamirowska.com" target="_blank" rel='noopener noreferrer'> &nbsp;www.kasiamirowska.com</a></li>
                            <li><i className="fab fa-linkedin-in fa-1x icon"></i><a href="https://www.linkedin.com/in/kasiamirowska//" target="_blank" rel='noopener noreferrer'> &nbsp;linkedin.com/in/kasiamirowska</a></li>
                            <li><i className="fab fa-github fa-1x icon"></i><a href="http://www.github.com/kasiamirowska" target="_blank" rel='noopener noreferrer'> &nbsp;github.com/KasiaMirowska</a></li>
                            <li><i className="fas fa-phone fa-1x"></i> &nbsp;781-307-6258</li>
                        </ul>
                    </div>
                    <div className="clear"></div>
                </div>
                <div id="mainArea" className="quickFade delayFive">
                    <section className='section'>
                        <article>
                            <div className="sectionTitle">
                                <h1 className='resume-h1'>Professional Summary</h1>
                            </div>
                            <div className="sectionContent">
                                <p className='resume-p'>Full Stack Javascript/Typescript Web Developer experienced in designing, developing, testing, debugging mobile and web applications.  Experienced small business owner, taking ownership of my work and a natural leader.  Developed dynamic interactive applications using React, React Hooks, Node, Express. Experience with PostgreSQL.  Built RESTful API servers using NodeJS runtime environment. Experience using Jest, Enzyme, Mocha and Chai unit and integration testing.</p>
                            </div>
                        </article>
                        <div className="clear"></div>
                    </section>
                    <section className='section'>
                        <div className="sectionTitleSkills">
                            <h1 className='resume-h1'>Main Skills</h1>
                        </div>
                        <div className="sectionContentSkills">
                            <ul className="keySkills">
                                <li><i className="fas fa-circle fa-sm"></i> &nbsp;JavaScript ES6</li>
                                <li><i className="fas fa-circle fa-sm"></i> &nbsp;React</li>
                                <li><i className="fas fa-circle fa-sm"></i> &nbsp;NodeJS</li>
                                <li><i className="fas fa-circle fa-sm"></i> &nbsp;Express</li>
                                <li><i className="fas fa-circle fa-sm"></i> &nbsp;HTML5</li>
                                <li><i className="fas fa-circle fa-sm"></i> &nbsp;CSS3</li>
                                <li><i className="fas fa-circle fa-sm"></i> &nbsp;jQuery</li>
                                <li><i className="fas fa-circle fa-sm"></i> &nbsp;Git + Github</li>
                                <li><i className="fas fa-circle fa-sm"></i> &nbsp;SQL</li>
                                <li><i className="fas fa-circle fa-sm"></i> &nbsp;PostgreSQL</li>
                                <li><i className="fas fa-circle fa-sm"></i> &nbsp;Jest, Enzyme, Mocha</li>
                                <li><i className="fas fa-circle fa-sm"></i> &nbsp;NPM</li>
                                <li><i className="fas fa-circle fa-sm"></i> &nbsp;Heroku, Zeit</li>
                                <li><i className="fas fa-circle fa-sm"></i> &nbsp;Photoshop</li>
                                <li><i className="fas fa-circle fa-sm"></i> &nbsp;Ilustrator</li>
                            </ul>
                        </div>
                        <div className="clear"></div>
                    </section>
                    <section className='section'>
                        <div className="sectionTitle">
                            <h1 className='resume-h1'>Recent Projects</h1>
                        </div>
                        <article className='resume-projects'>
                            <p className='resume-p'><strong><a href="yogi-track.now.sh">Yoga-Track</a></strong>&nbsp;- (Web App) - A Full-Stack mobile first responsive designed app for yoga teachers and enthusiasts, helping a user to explore and learn a variety of poses, providing an english and sanskrit name, photo and video.  Users can create an accounts where he/she can save poses into yoga-flows as inspirations for a class or personal practice with notes and attributes.</p>
                        </article>
                        <article className='resume-projects'>
                            <p className='resume-p, p'><strong><a href="noteful-app-client.now.sh">Noteful</a></strong>- (Web App)- A CRUD app that allows users to keep an online notebook. Using Rest Programming techniques this app was built with a PostgreSQL db, Node and Express server and a React Client.  </p>
                        </article>
                        <div className="clear"></div>
                    </section>
                    <section className='section'>
                        <div className="sectionTitle">
                            <h1 className='resume-h1'>Education</h1>
                        </div>
                        <div className="sectionContent education">
                            <article>
                                <h2 className='resume-h2'>Thinkful</h2>
                                <p className="subDetails resume-p">Full Stack Software Engineering  -   April 2019 to February 2020</p>
                            </article>
                            <div className="clear"></div>
                            <ul className='education-list'>
                                <li>Over 1600 hrs hand on coding experience, mentored by senior developers, agile</li>
                                <li>JavaScript and ES6 - Build interactive client-side web apps with JavaScript and jQuery</li>
                                <li>Server Side Programming with NodeJS and ExpressJS- Built modern RESTful APIs with PostgreSQL DB backends. Learn modern JWT-based auth flows and test apps with the Mocha and Chai frameworks, and deploy to Heroku and Zeit.</li>
                                <li>Learned to design, build, test, and deploy complex apps using React, Reack Context, React Router. Testing with Enzyme,Chai and Mocha, and deployment using Zeit and Heroku.</li>
                                <li>Computer Science Foundations - Learn foundations of CS, data structures, and the analysis of algorithms</li>
                            </ul>
                            <article>
                                <h2 className='resume-h2'>Academy of Fine Arts in Poznan Poland </h2>
                                <p className="subDetails resume-p">Master of Fine Arts 			  2003</p>
                            </article>
                            <div className="clear"></div>
                            <ul className='education-list'>
                                <li>Specializing in Drawing and Painting; expert in Intaglio Printing, Art History and Color Theory</li>
                            </ul>
                            <article>
                                <h2 className='resume-h2'>Massachusetts Institute of Surface Design </h2>
                                <p className="subDetails resume-p">Cerified Decorative Surface Designer			  2007</p>
                            </article>
                            <div className="clear"></div>
                            <ul className='education-list'>
                                <li>Expert in Old World Plaster Design, Wall Glazing Finishes, Woodgraining, Marbleizing, Color and Design Principles. </li>
                            </ul>
                        </div>
                    <div className="clear"></div>
                    </section>
                <section className='section'>
                    <div className="sectionTitle work-experience-title">
                        <h1 className='resume-h1'>Work Experience</h1>
                    </div>
                    <div className="sectionContent work-experience">
                        <article>
                            <h2 className='resume-h2'>Student at Thinkful</h2>
                            <p className="subDetails resume-p">May 2018 to February 2020</p>
                        </article>
                        <div className='clear'>
                            <ul className='work-experience-list'>
                                <li>Deployed mobile first responsive web apps using the SERN Stack SQL db with PostgreSQL and Knex, Node and Express RESTFUL API, React.js and Context for state management. </li>
                                <li>Used JavaScript and ES6 to build interactive client-side web apps, advanced frontend designs, build, test, and deploy complex apps using React, React Context, React Router, and front end testing with Enzyme.</li>
                                <li>Built Server Side Programming with NodeJS and ExpressJS- Built modern RESTful APIs with Postgres backend. Learn modern JWT-based auth flows and test apps with the Mocha and Chai frameworks and deploying with Zeit and Heroku.</li>
                                <li>Used Computer Science, data structures, algorithms and Big O notation to produce clean optimal code.</li>
                            </ul>
                        </div>
                        <article>
                            <h2 className='resume-h2'>Operations Manager at E-Prime Sourcing Inc.</h2>
                            <p className="subDetails resume-p">2016 to 2018</p>
                        </article>
                        <div className='clear'>
                            <ul className='work-experience-list'>
                                <li>Oversee office operations: inventory management, pricing, purchase ordering, cloud based accounting, customer invoicing, shipping and receiving</li>
                            </ul>
                        </div>
                        <article>
                            <h2 className='resume-h2'>Founder Miro Art Design Decorative Artist</h2>
                            <p className="subDetails resume-p">2005 to 2019</p>
                        </article>
                        <div className='clear'>
                            <ul className='work-experience-list'>
                                <li>Designed and executed a variety of visual solutions for interiors such as murals, custom designed finishes, hand painted furniture and decorative objects</li>
                                <li>Created art work on commision with consideration of color and style requirements</li>
                                <li>Assisted and cooperated with interior designers with color and finishes selections</li>
                                <li>Small business owner experience including: planning, marketing, estimating, invoicing, accounting, supply ordering and more</li>
                            </ul>
                        </div>
                    </div>
                    <div className="clear"></div>
                </section>

            </div>
            </div>
        <script type="text/javascript">
            var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
            document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
      </script>
        <script type="text/javascript">
            var pageTracker = _gat._getTracker("UA-3753241-1");
            pageTracker._initData();
            pageTracker._trackPageview();
      </script>
        </main >
        </div>
    );
};