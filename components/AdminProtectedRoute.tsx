import { useEffect } from "react";
import { useRouter } from "next/router";

export default function AdminProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  useEffect(() => {
    const loggedIn = true; // Beispiel: statisch erlaubt
    if (!loggedIn) router.push("/login");
  }, []);
  return <>{children}</>;
}
