import profile from '../assets/images/profile.jpg';
import React from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SideFooter from '../components/SideFooter';
import heroImage from '../assets/images/pic01.jpg';
import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <div id="wrapper">
      <section className="intro">
        <Header />
        <div className="content">
          <span className="image fill" data-position="center">
            <img src={heroImage} alt="" />
          </span>
        </div>
      </section>

      <section id="first">
        <header>
          <h2 id="Me">Who I Am</h2>
        </header>
        <div className="content">
        <span className="image main">
            <img src={profile} alt="" />
          </span>
        <ul className="actions">
            <li>
            <a href="https://drive.google.com/file/d/1j0WtWrjVNcb6BB3FGDErRMk9UCJM7GHx/view?usp=sharing" className="button primary" target="_blank">Download Resume</a>
            </li>
          </ul>
        </div>
      </section>

      <section id="first">
        <header>
          <h2 id="Education">Education</h2>
        </header>
        <div className="content">
          <p><strong>University of Pennsylvania</strong>, Philadelphia, PA<br/>
            Candidate for M.S.E. in Computer & Information Science<br/>
            School of Engineering & Applied Science<br/>
            January 2020 - May 2022<br/>
            GPA: 3.90 / 4.00
          </p>
          <p>
            <strong>University of Pennsylvania</strong>, Philadelphia, PA<br/>
            B.A. in Cognitive & Computer Science, Summa Cum Laude<br/>
            Minors in Math & Linguistics<br/>
            School of Arts & Sciences<br/>
            August 2017 - May 2021<br/>
            GPA: 3.94 / 4.00
          </p>
          <p>
            <strong>Bishop Stang High School</strong>, North Dartmouth, MA<br/>
            High School Diploma<br/>
            Valedictorian<br/>
            GPA: 4.25 / 4.00
          </p>
          <ul className="actions">
            <li>
              <Link to="/Coursework" className="button primary large">
                Coursework List
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <header>
          <h2 id="WorkExperience">Recent Work Experience</h2>
        </header>
        <div className="content">
          <p>
            <strong>Dept. of Computer Science @ UPenn</strong>, Philadelphia, PA<br/>
            Teaching Assistant<br/>
            August 2019 - present
          </p>
          <p>
            <strong>Cognitive Computation Group @ UPenn</strong>, Philadelphia, PA<br/>
            Research Programmer<br/>
            March 2019 - August 2021
          </p>
          <p>
            <strong>Bureau of the Census, Coding It Forward</strong>, Suitland, MD<br/>
            Data Science Intern, Civic Digital Fellowship (virtual)<br/>
            June 2021 - August 2021
          </p>
          <ul className="actions">
            <li>
              <Link to="/WorkExperience" className="button primary large">
                Detailed Job History
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <header>
          <h2>Skills</h2>
        </header>
        <div className="content">
          <ul className="feature-icons">
            <li className="icon fa-code">Python</li>
            <li className="icon fa-coffee">Java</li>
            <li className="icon fa-laptop">PyTorch / AllenNLP</li>
            <li className="icon fa-database">SQL / NoSQL</li>
            <li className="icon fa-terminal">Unix / Linux</li>
            <li className="icon fa-code-fork">JavaScript</li>
          </ul>
          <p>
            I also have experience with Git, LaTeX, C, OCaml, and Agile development / project management.
          </p>
        </div>
      </section>

      <section>
        <header>
          <h2 id="Interests">Interests</h2>
        </header>
        <div className="content">
          <p>
            <strong>Some More About Me</strong><br/><br/>
            Roller blader / figure skater, amateur artist, book / podcast nerd, knitter & crafter, beach-goer, indie music fan.<br/>
            <br/>I spend too much time on the internet :) 
          </p>
          <ul className="actions">
            <li>
              <Link to="/Activities" className="button primary large">
                Activities & Accomplishments
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <header>
          <h2 id="Projects">Selected Projects</h2>
        </header>
        <div className="content">
          <p>
            <strong>Building Low-Resource NER Models Using Non-Speaker Annotations</strong> <a href="https://cogcomp.seas.upenn.edu/papers/TMMR21.pdf" target="_blank"><i class="icon fa-link"></i></a><br/>
            DaSH-LA Workshop, NAACL (2021)<br/>
            Best Paper Award
          </p>
          <p>
            <strong>University of Pennsylvania LoReHLT 2019 Submission</strong> <a href="https://cogcomp.seas.upenn.edu/papers/MTMWLYFSZYKHSSR19.pdf" target="_blank"><i class="icon fa-link"></i></a><br/>
            LoReHLT Evaluations (2019)
          </p>
          <ul className="actions">
            <li>
              <Link to="/Projects" className="button primary large">
                More Selected Projects
              </Link>
            </li>
          </ul>
        </div>
      </section>
      
      <section>
        <SideFooter />
      </section>

      <Footer />
    </div>
  </Layout>
);

export default IndexPage;
