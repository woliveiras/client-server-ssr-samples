import { useRouter } from "next/router";

// Example: http://localhost:3000/github?user=woliveiras

const GitHub = ({ userData }) => {
  const router = useRouter();
  const { user } = router.query;

  return (
    <>
      <strong>Query: {user}</strong>
      <p>User from GitHub: {userData.name}</p>
    </>
  );
};

export default GitHub;

export async function getServerSideProps({ query }) {
  const { user } = query;

  const userData = await (
    await fetch(`https://api.github.com/users/${user}`)
  ).json();

  return {
    props: {
      userData,
    },
  };
}
