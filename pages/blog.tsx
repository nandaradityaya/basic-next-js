import Layout from "../components/Layout";
import styles from "../styles/Blog.module.css";

interface Post {
  id: number;
  title: string;
  body: string;
} // bikin interface Post yg memiliki id, title, body

interface BlogProps {
  dataBlog: Post[];
} // bikin interface BlogProps yg memiliki dataBlog yg udah di bikin dari props yg di bawah, dan datBlog menggunakan Post array kosong

export default function Blog(props: BlogProps) {
  const { dataBlog } = props;
  return (
    <Layout pageTitle="Blog Page">
      {dataBlog.map((blog) => {
        return (
          <div key={blog.id} className={styles.card}>
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
          </div>
        );
      })}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const dataBlog = await res.json();
  return {
    props: {
      dataBlog: dataBlog,
    },
  };
}
