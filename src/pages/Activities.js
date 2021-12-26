import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>

    <section id="one" className="main-container">
				<div className="container">
					<div className="content">
						<header className="major">
							<h2>Activities & Accomplishments</h2>
						</header>
						<section>
							<h4>At the University Level</h4>
							<div className="row">
								<div className="col-6 col-12-medium">
									<h6>Activities</h6>
									<ul>
										<li><strong>UPenn Alumni Interviewer</strong>, admissions interviewer</li>
										<li><strong>UPenn Figure Skating Club</strong>, founding executive board member: Treasurer, Show Director</li>
										<li><strong>Women in Computer Science</strong>, executive board member: Director of Community</li>
										<li><strong>Penn Bioethics Journal</strong>, associate editor</li>
										<li><strong>Arts & Sciences Peer Advisor</strong>, senior peer advisor</li>
										<li><strong>Major Advising Program</strong>, cognitive science major advisor</li>
										<li><strong>Arts & Sciences Major Advisory Board</strong>, cognitive science major representative</li>
										<li><strong>Colleges Against Cancer</strong>, general body member</li>
									</ul>
								</div>
								<div className="col-6 col-12-medium">
									<h6>Accomplishments</h6>
									<ul>
									<li><strong>Best Paper Award Co-Recipient</strong>, 2nd Workshop on Data Science with Human-in-the-Loop, NAACL (2021)</li>
									<li><strong>Civic Digital Fellow</strong>, Coding It Forward (2021)</li>
									<li><strong>Summa Cum Laude</strong>, UPenn School of Arts & Sciences (2021)</li>
									<li><strong>Dean's List</strong>, UPenn School of Arts & Sciences (2017 - 2021)</li>
									<li><strong>Google CSR Research Fellow</strong>, UPenn (2019)</li>
									<li><strong>Summer Research Paleontology Stipend</strong>, UPenn (2018)</li>
									</ul>
								</div>
							</div>
						</section>
						<section>
							<h4>Earlier Endeavors</h4>
							<div className="row">
								<div className="col-6 col-12-medium">
									<h6>Activities</h6>
									<ul>
									<li><strong>Figure Skating</strong>, Falmouth Figure Skating Club</li>
									<li><strong>Theater on Ice</strong>, Bourne Skating Club</li>
									<li><strong>Visual Arts</strong>, Bishop Stang</li>
									<li><strong>Class Secretary</strong>, Bishop Stang (2015-2017)</li>
									<li><strong>Math Team Co-Captain</strong>, Bishop Stang (2015-2017)</li>
									<li><strong>National Honor Society Treasurer</strong>, Bishop Stang (2015-2017)</li>
									</ul>
								</div>
								<div className="col-6 col-12-medium">
									<h6>Accomplishments</h6>
									<ul>
										<li><strong>Valedictorian</strong>, Bishop Stang (2017)</li>
										<li><strong>President’s List</strong>, Bishop Stang (2013-2017)</li>
										<li><strong>National AP Scholar / with Distinction</strong>, (2016, 2017)</li>
										<li><strong>National Merit Commended Scholar</strong>, (2016)</li>
										<li><strong>Harvard Book Award</strong>, Bishop Stang (2016)</li>
										<li><strong>United States Figure Skating Gold Medalist in Moves in the Field</strong>, (2016)</li>
										<li><strong>Anthony Fernandes Sportsmanship Award</strong>, Falmouth Figure Skating Club (2016)</li>
										<li><strong>Scholastic Art Awards</strong>, (2013, 2015)</li>
										<li><strong>MA Regional Science Fair 3rd Place</strong>, (2014)</li>
									</ul>
								</div>
							</div>
						</section>
						<ul className="actions">
							<li>
								<Link to="/#Interests" className="button primary large">
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
