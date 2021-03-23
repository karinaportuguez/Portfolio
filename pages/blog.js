import Link from 'next/link';
import Layout from '../components/Layout';
import { post } from '../profile';

const PostCard = ({ post }) => (
  <div className="col-md-4 py-2">
    <div className="card h-100">
      <div className="overflow">
        <img src={post.imgURL} className="card-img-top" />
      </div>
      <div className="card-body">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <Link href={`/post?title=${post.title}`} as={`/post/${post.title}`}>
          <button className="btn btn-light">Read </button>
        </Link>
      </div>
    </div>
  </div>
);

const Blog = () => (
  <Layout footer={false} title="My blog" dark>
    <div className="row">
      {
        post.map((post, idx) => (
          <PostCard post={post} key={idx} />
        ))
      }
    </div>
  </Layout>
);

export default Blog;
