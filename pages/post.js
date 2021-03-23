import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { post } from '../profile';

const Post = () => {
  const router = useRouter();

  console.log(router.query.title);

  const currentPost = post.filter((post) => post.title === router.query.title)[0];
  console.log(currentPost);

  return (
    <Layout footer={false} title={currentPost.title}>
      <div className="text-center">
        <img src={currentPost.imgURL} alt="" className="img-fluid" style={{ width: '50%' }} />
      </div>
      <div className="text-justify">
        <p className="py-3">{currentPost.content}</p>
      </div>
    </Layout>
  );
};

export default Post;
