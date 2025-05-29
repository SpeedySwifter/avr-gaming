import { getCsrfToken } from "next-auth/react";

export default function Login({ csrfToken }: { csrfToken: string }) {
  return (
    <form method="post" action="/api/auth/callback/credentials" className="p-10 text-white max-w-md mx-auto">
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <h1 className="text-2xl mb-4">Admin Login</h1>
      <input name="username" type="text" placeholder="Benutzer" className="mb-4 p-2 w-full bg-gray-800 rounded" />
      <input name="password" type="password" placeholder="Passwort" className="mb-4 p-2 w-full bg-gray-800 rounded" />
      <button type="submit" className="bg-avrblue px-4 py-2 rounded">Login</button>
    </form>
  );
}

Login.getInitialProps = async (context: any) => {
  return {
    csrfToken: await getCsrfToken(context),
  };
};
