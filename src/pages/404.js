import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <section id="one" className="main-container">
      <div className="container">
        <div className="content">
          <header className="major">
            <h2>NOT FOUND</h2>
          </header>
          <section>
            <ul className="actions">
							<li>
								<Link to="/" className="button primary large">
								Return Home
								</Link>
							</li>
							{/* <li>
								<a href="/#" className="button large">
								Learn More
								</a>
							</li> */}
							</ul>
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
