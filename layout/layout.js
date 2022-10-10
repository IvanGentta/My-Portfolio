import { useRouter } from "next/router";
import Navbar from "../components/Navbar";

const layout = ({ children }) => {
  const router = useRouter();
  const { asPath } = router;

  const noNavbar = ["/ProjectOne", "/ProjectTwo"];

  return (
    <>
      {noNavbar.includes(asPath) ? null : <Navbar />}
      {children}
    </>
  );
};

export default layout;
