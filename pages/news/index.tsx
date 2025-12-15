import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/news/page/1",
      permanent: false,
    },
  };
};

export default function RedirectToFirstPage() {
  return null;
}