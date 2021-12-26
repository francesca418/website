import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>

    <section id="one" className="main-container">
				<div className="container">
					<div className="content">
						<header className="major">
							<h2>Selected Projects</h2>
						</header>
						<section>
							<h4>Publications</h4>
							<div className="row">
								<p>
									<strong>Building Low-Resource NER Models Using Non-Speaker Annotations</strong> | <a href="https://cogcomp.seas.upenn.edu/papers/TMMR21.pdf" target="_blank">Paper <i class="icon fa-link"></i></a> | <a href="https://github.com/francesca418/ns-annotation" target="_blank">Github <i class="icon fa-github"></i></a><br/>
									DaSH-LA Workshop, NAACL (2021)<br/>
									Best Paper Award
								</p>
							</div>
							<div className="row">
								<p>
									<strong>University of Pennsylvania LoReHLT 2019 Submission</strong> | <a href="https://cogcomp.seas.upenn.edu/papers/MTMWLYFSZYKHSSR19.pdf" target="_blank">Paper <i class="icon fa-link"></i></a><br/>
									LoReHLT Evaluations (2019)								
								</p>
							</div>
							<h4>Other Projects</h4>
							<div className="row">
								<p>
									<strong>Blog-App: A Reddit-like Web Application</strong> | <a href="https://github.com/francesca418/Blog-App/wiki" target="_blank">Project Wiki <i class="icon fa-link"></i></a> | <a href="https://github.com/francesca418/Blog-App" target="_blank">Github <i class="icon fa-github"></i></a><br/>
									Final Project for CIS 557: Programming for the Web (2021)								
								</p>
							</div>
							<div className="row">
								<p>
									<strong>Generating Place of Birth Crosswalk for the Census Numident</strong> | <a href="https://drive.google.com/file/d/1no3mbTpwG9eSFQwydoRIwdcwflmJFDQh/view?usp=sharing" target="_blank">Report Slides <i class="icon fa-link"></i></a><br/>
									Summer Data Science Project as Civic Digital Fellow at Bureau of the Census (2021)								
								</p>
							</div>
							<div className="row">
								<p>
									<strong>Low-Resource Machine Translation of Uyghur</strong> | <a href="https://drive.google.com/file/d/1zXaZeoKXZ7dKmhNjdrTAp3RDQ1vrulfm/view?usp=sharing" target="_blank">Paper <i class="icon fa-link"></i></a> | <a href="https://github.com/francesca418/uyghur-english-NMT" target="_blank">Github <i class="icon fa-github"></i></a><br/>
									Final Project for CIS 530: Computational Linguistics (2021)								
								</p>
							</div>
							<div className="row">
								<p>
									<strong>Semantic Role Labeling of Prepositions</strong> | <a href="https://drive.google.com/file/d/1zHq2wsmQ0pGui63PXHOvFdTBsMW-6fhb/view?usp=sharing" target="_blank">Paper <i class="icon fa-link"></i></a> | <a href="https://github.com/francesca418/preposition-SRL" target="_blank">Github <i class="icon fa-github"></i></a><br/>
									Independent Study under Professor Dan Roth (2020)								
								</p>
							</div>
							<div className="row">
								<p>
									<strong>Les Réseau Neuronal Vertes Incolores</strong> | <a href="https://drive.google.com/file/d/1ciP0lekNQ5Vn9luzpkjVvfX01VKRV1jX/view?usp=sharing" target="_blank">Paper <i class="icon fa-link"></i></a><br/>
									Final Project for LING 270: Language Acquisition (2020)								
								</p>
							</div>
							<div className="row">
								<p>
									<strong>ParkPal: Your Interactive Guide to US National Parks</strong> | <a href="https://drive.google.com/file/d/106n7nGZjSjTePgGEHmaUsOEju1cKfZxD/view?usp=sharing" target="_blank">Paper <i class="icon fa-link"></i></a> | <a href="https://github.com/francesca418/ParkPal" target="_blank">Github <i class="icon fa-github"></i></a><br/>
									Final Project for CIS 550: Database & Information Systems (2020)								
								</p>
							</div>
							<div className="row">
								<p>
									<strong>Classification in Political Twitter</strong> | <a href="https://drive.google.com/file/d/149Hj-E63eQsUQypyDkOeNtOrEe3CvidK/view?usp=sharing" target="_blank">Paper <i class="icon fa-link"></i></a><br/>
									Final Project for CIS 519: Applied Machine Learning (2020)								
								</p>
							</div>
						</section>
					</div>
					<ul className="actions">
							<li>
								<Link to="/#Projects" className="button primary large">
								Return Home
								</Link>
							</li>
							</ul>
				</div>
			</section>
  </Layout>
);

export default IndexPage;
