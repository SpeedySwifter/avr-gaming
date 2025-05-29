import { useEffect } from "react";
import { useRouter } from "next/router";

export default function NewsIndexRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/news/page/1");
  }, [router]);

  return null;
}