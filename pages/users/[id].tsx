import Layout from "../../components/Layout";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

interface UserDetailProps {
  user: User;
}

export default function UserDetail(props: UserDetailProps) {
  // const router = useRouter(); // untuk ngeroute link gitu
  // const { id } = router.query; // ini sesuai dengan url yg kita masukkan
  const { user } = props;
  return (
    <Layout pageTitle="User Detail">
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();

  // untuk dapetin list idnya jalanin ini
  const paths = dataUsers.map((user: User) => ({
    params: {
      id: `${user.id}`, // ini yg di return ke dalam path
    },
  }));
  return {
    paths,
    fallback: false, // false agar klo ada url yg tidak di temukan dia bakal lari ke 404 page
  };
}

interface GetStaticProps {
  params: {
    id: string;
  };
}
// ini utk memberikan data dari per masing2 usernya
export async function getStaticProps(context: GetStaticProps) {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
}
