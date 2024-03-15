import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/"); // setelah 2 detik push atau pindahkan dia ke home page
    }, 2000);
  }, []);
  return (
    <div>
      <h1 className="title-not-found">Ooops....</h1>
      <h1 className="title-not-found">
        Halaman yang anda cari tidak ditemikan
      </h1>
    </div>
  );
}
