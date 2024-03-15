import Layout from "../../components/Layout";
import { useRouter } from "next/router"; // untuk ngeroute link secara dinamis gitu
import styles from "../../styles/Users.module.css";

interface UsersProps {
  dataUsers: Array<any>;
}
export default function Users(props: UsersProps) {
  const { dataUsers } = props;
  const router = useRouter(); // utk ngeroute link

  console.log(dataUsers);

  return (
    <Layout pageTitle="Users Page">
      {dataUsers.map((user) => {
        return (
          <>
            <div
              key={user.id}
              onClick={() => router.push(`/users/${user.id}`)}
              className={styles.card}
            >
              <p className="title">{user.name}</p>
              <p className="title">{user.email}</p>
            </div>
          </>
        );
      })}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers: dataUsers,
    },
  };
}
