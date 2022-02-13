import { Container } from "react-bootstrap";
import NavBar from "./Navbar";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "../context/authContext";
export default function Layout({ children }) {
  return (
    <>
      <AuthProvider>
        <NavBar />
        <Container>{children}</Container>
        <Footer />
        <ToastContainer />
      </AuthProvider>
    </>
  );
}
