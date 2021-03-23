import Link from 'next/link';
import Layout from '../components/Layout';
import { skills, experience, proyects } from '../profile.js';

const Index = () => (
  <Layout>
    {/** Header card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4">
              <img src="/Kary1.png" atl="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>Karina Portuguez</h1>
              <h3>Frontend Developer</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis bibendum lobortis. Vivamus vel erat at enim bibendum congue et sit amet nulla. Morbi porta cursus neque. Suspendisse eu viverra. </p>
              <a href="/hireme">Hire me</a>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/** Second Section */}
    <div className="row py-2">
      <div className="col-md-4">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Skills</h1>

            {
              skills.map(({ skill, percentage }, idx) => (
                <div className="py-3" key={idx}>
                  <h5>{skill}</h5>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${percentage}%` }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                </div>
              ))
            }

          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Experience</h1>
            <ul>
              {
                experience.map(({
                  title, description, from, to,
                }, idx) => (

                  <li key={idx}>
                    <h3>{title}</h3>
                    <h5>
                      {from}
                      {' '}
                      -
                      {' '}
                      {to}
                    </h5>
                    <p>{description}</p>
                  </li>

                ))
              }
            </ul>
            <Link href="/experiences">
              <a className="btn btn-light">Know More</a>
            </Link>

          </div>
        </div>
      </div>
    </div>

    {/** Portfolio */}
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-light">Portfolio</h1>
            </div>
            {
              proyects.map(({ name, description, image }, idx) => (

                <div className="col-md-4 py-2" key={idx}>
                  <div className="card h-100">
                    <div className="overflow">
                      <img src={`/${image}`} alt="" className="card-img-top" />
                    </div>
                    <div className="card-body">
                      <h3>{name}</h3>
                      <p>{description}</p>
                      <a href="#">Know more</a>
                    </div>
                  </div>
                </div>
              ))
            }

          </div>
          <div className="text-center mt-4">
            <Link href="/portfolio">
              <a className="btn btn-outline-light">More Proyects</a>
            </Link>
          </div>
        </div>

      </div>
    </div>

  </Layout>
);

export default Index;
