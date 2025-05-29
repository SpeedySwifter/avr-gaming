import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/blog/page/1",
      permanent: false,
    },
  };
};

export default function RedirectToFirstPage() {
  return null;
}
