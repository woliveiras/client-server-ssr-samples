import { useState } from "react";
import { useRouter } from "next/router";
import useAuth from "@/lib/hooks/auth";

async function handleLogin(email: string, password: string) {
  const res = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (data.success) {
    return;
  }

  throw new Error("Wrong password or email");
}

export default function Home() {
  const { loading, loggedIn } = useAuth();
  const router = useRouter();
  const [loginError, setLoginError] = useState(null);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    setLoginError(null);
    handleLogin(target.email.value, target.password.value)
      .then(() => router.push("/protected-route"))
      .catch((err) => setLoginError(err.message));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!loading && loggedIn) {
    router.push("/protected-route");
    return null;
  }

  return (
    <>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        <button type="submit">Login</button>
        {loginError ? (
          <>
            <p>{loginError}</p>
          </>
        ) : null}
      </form>
    </>
  );
}
