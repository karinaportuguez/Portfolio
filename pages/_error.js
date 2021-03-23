import Link from 'next/link';
import Layout from '../components/Layout';

const _error = ({ statusCode }) => (
  <Layout footer={false}>
    <div className="text-center py-5">

      {
          statusCode ? (
            <>
              <h1>
                <b>
                  Status Code:
                  {statusCode}
                </b>
              </h1>
              <p>
                Could not load your page
                <Link href="/">
                  <a> Home</a>
                </Link>
              </p>
            </>
          ) : (
            <p>Could not get this page</p>
          )
        }

    </div>
  </Layout>
);

export default _error;
