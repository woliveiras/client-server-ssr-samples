import useAuth from "@/lib/hooks/auth";
import { useRouter } from "next/router";

export default function ProtectedRoute() {
  const router = useRouter();
  const { loading, error, loggedIn } = useAuth();

  if (!loading && !loggedIn) {
    router.push("/login");
  }

  return (
    <>
      {loading ? <p>Loading...</p> : null}
      {error ? <p>We have a problem, my friend</p> : null}
      {loggedIn ? (
        <>
          <h1>Protected Route</h1>
          <p>{`You can't see me if not logged-in!`}</p>
        </>
      ) : null}
    </>
  );
}
