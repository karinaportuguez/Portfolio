import Layout from '../components/Layout';
import Error from './_error';

const Github = ({ user, status }) => {
  if (status) {
    return <Error statusCode={status} />;
  }

  return (
    <Layout footer={false} dark>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card card-body text-center">
            <h1>{user.name}</h1>
            <img src={user.avatar_url} alt="Photo Karina Portuguez" />
            <p className="my-3">{user.bio}</p>
            <a href={user.blog} target="_blank" className="btn btn-outline-secondary my-2">My blog</a>
            <a href={user.html_url} target="_blank" className="btn btn-outline-secondary my-2"> Go to Github</a>
          </div>

        </div>
      </div>

    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch('https://api.github.com/users/karinaportuguez');
  const data = await res.json();

  const statusCode = res.status > 200 ? res.status : false;

  return {
    props: {
      user: data,
      status: statusCode,
    },
  };
}

export default Github;