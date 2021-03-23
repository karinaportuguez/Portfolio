import Link from 'next/link';
import Layout from '../components/Layout';

const custom404 = () => (
  <Layout footer={false}>
    <div className="text-center py-5">
      <h1>
        Error:
        <b>404</b>
      </h1>
      <p className="py-3">
        This page does exist. Please return to
        <Link href="/">
          <a> Home</a>
        </Link>
      </p>
    </div>
  </Layout>
);

export default custom404;
