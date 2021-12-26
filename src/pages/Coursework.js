import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <section id="one" className="main-container">
				<div className="container">
					<div className="content">
						<header className="major">
							<h2>Coursework</h2>
						</header>
						<section>
							<h4>At the Graduate Level</h4>
							<div className="row">
								<div className="col-6 col-12-medium">
									<ul>
										<li>CIS 502: Analysis of Algorithms</li>
										<li>CIS 511: Theory of Computation</li>
										<li>CIS 519: Applied Machine Learning</li>
										<li>CIS 523: Advanced Data Ethics</li>
										<li>CIS 530: Computational Linguistics</li>
										<li>CIS 550: Database & Information Systems</li>
									</ul>
								</div>
								<div className="col-6 col-12-medium">
									<ul>
										<li>CIS 557: Programming for the Web</li>
										<li>CIS 571: Computer Organization & Design</li>
										<li>EDUC 552: Videogames & Virtual Worlds as Teaching Tools</li>
										<li>ESE 544: Project Management</li>
										<li>LAW 577: Internet Law</li>
										<li>MATH 513: Computational Linear Algebra</li>
									</ul>
								</div>
							</div>
						</section>
						<section>
							<h4>At the Undergraduate Level</h4>
							<div className="row">
								<div className="col-6 col-12-medium">
									<ul>
										<li>CIS 099: Independent Study</li>
										<li>CIS 110: Intro to Computer Programming</li>
										<li>CIS 120: Computer Programming Techniques</li>
										<li>CIS 140: Intro to Cognitive Science</li>
										<li>CIS 160: Discrete Math</li>
										<li>CIS 121: Datastructures & Algorithms</li>
										<li>CIS 240: Intro to Computer Systems</li>
										<li>CIS 262: Automata, Computability, & Complexity</li>
										<li>CIS 320: Algorithms</li>
										<li>MATH 104: Calculus I</li>
										<li>MATH 116: Honors Calculus</li>
										<li>MATH 240: Linear Algebra & Differential Equations</li>
										<li>ESE 301: Engineering Probability & Statistics</li>
										<li>ECON 001: Intro to Microeconomics</li>
										<li>ECON 002: Intro to Macroeconomics</li>
										<li>OIDD 290: Decision Processes</li>
									</ul>
								</div>
								<div className="col-6 col-12-medium">
									<ul>
										<li>PSYC 001: Intro to Experimental Psych</li>
										<li>PSYC 170: Social Psychology</li>
										<li>LING 106: Formal Linguistics</li>
										<li>LING 151: Language & Thought</li>
										<li>LING 250: Syntax</li>
										<li>LING 270: Language Acquisition</li>
										<li>BIBB 030: Neurobiology of Brain Disorders</li>
										<li>BIBB 249: Intro to Cognitive Neuroscience</li>
										<li>PHIL 002: Philosophical Ethics</li>
										<li>CIMS 102: World Film History</li>
										<li>GSWS 001: Gender & Society</li>
										<li>HIST 135: Cold War: A Global History</li>
										<li>LATN 204: Intermediate Latin Poetry</li>
										<li>PHYS 101: General Physics with Lab</li>
										<li>ENVS 100: Intro to Environmental Science</li>
										<li>ASTR 006: Solarsystems & Exoplanets</li>
									</ul>
								</div>
							</div>
						</section>
						<ul className="actions">
							<li>
								<Link to="/#Education" className="button primary large">
								Return Home
								</Link>
							</li>
							</ul>
					</div>
				</div>
			</section>
  </Layout>
);

export default IndexPage;
