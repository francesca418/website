import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>

    <section id="one" className="main-container">
				<div className="container">
					<div className="content">
						<header className="major">
							<h2>Work Experience</h2>
						</header>
						<section>
							<div className="row">
								<p>
									<strong>Teaching Assistant, Dept. of Computer Science, University of Pennsylvania</strong>, Philadelphia, PA<br/>
									<i>MCIT 592: Discrete Math -- August - December 2019; May 2021 - Present</i><br/>
									<i>CIS 262: Automata, Computability, & Complexity -- August - December 2020</i><br/>
									<i>CIS 120: Programming Languages & Techniques -- August - December 2019</i><br/>
									Teach weekly recitation, conduct office hours, grade assignments / exams; answer questions on Piazza message board
								</p>
							</div>
							<div className="row">
								<p>
									<strong>Researcher, Cognitive Computation Group, University of Pennsylvania</strong>, Philadelphia, PA<br/>
									<i>March 2019 - August 2021</i><br/>
									Conduct independent and group research in Prof. Dan Roth’s lab, specializing in Natural Language Processing (NLP); projects involve building AllenNLP (PyTorch) models; topics include Named Entity Recognition (NER), Semantic Role Labeling (SRL)
								</p>
							</div>
							<div className="row">
								<p>
									<strong>Data Science Fellow, Bureau of the Census, Coding It Forward</strong>, Suitland, MD (virtual)<br/>
									<i>June 2021 - August 2021</i><br/>
									Employ NLP and data linkage methods to build a standardized person to place-of-birth crosswalk for use with the Census Numident dataset
								</p>
							</div>
							<div className="row">
								<p>
									<strong>Research Assistant, Brain Behavior Lab, Hospital of the University of Pennsylvania</strong>, Philadelphia, PA<br/>
									<i>August 2018 - December 2018</i><br/>
									Assist database programmer with improving the database interface for the research lab
								</p>
							</div>
							<div className="row">
								<p>
									<strong>Research Assistant, Sallan Lab, University of Pennsylvania</strong>, Philadelphia, PA<br/>
									<i>May 2018 - August 2018</i><br/>
									Help construct a reliable fossil fish database to be used for future research analysis in the field of paleobiology
								</p>
							</div>
							<div className="row">
								<p>
									<strong>Sales Associate, GH Bass Outlets</strong>, Sagamore, MA<br/>
									<i>September 2016 - August 2017</i><br/>
									Work the register and the sales floor, stock merchandise, and provide customer service
								</p>
							</div>
						</section>
					</div>
					<ul className="actions">
							<li>
								<Link to="/#WorkExperience" className="button primary large">
								Return Home
								</Link>
							</li>
							{/* <li>
								<a href="/#" className="button large">
								Learn More
								</a>
							</li> */}
							</ul>
				</div>
			</section>
  </Layout>
);

export default IndexPage;
