import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { MdOutlineLogin } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import Image from "next/Image";
import { useAuth, useSetAuth } from "../context/authContext";
import { toast } from "react-toastify";
import { LOGOUT } from "../utils/queries";
import { useRouter } from "next/router";
export default function NavBar() {
  const auth = useAuth();
  const setAuth = useSetAuth();
  const router = useRouter();
  const handleLogout = async () => {
    const logout_promise = new Promise(async (res, rej) => {
      try {
        const logout = await LOGOUT();
        if (logout.status === "error") throw logout;
        setAuth({
          isAuth: false,
          user: null,
        });
        res();
        router.push("/");
      } catch (error) {
        console.error(error);
        rej();
        setAuth({
          isAuth: false,
          user: null,
        });
      }
    });
    toast.promise(logout_promise, {
      pending: "Logging you Out",
      success: "Logged Out Successfully",
      error: "There Was an Error.",
    });
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Image src="/images/logo.png" width={230} alt="logo" height={35} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/packages">Packages</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
          {auth.isAuth === false && (
            <Nav>
              <Nav.Link href="/auth/login" className="d-lg-none">
                Login
              </Nav.Link>

              <Nav.Link
                href="/auth/login"
                className="btn-light d-flex align-items-center gap-2 rounded-pill text-black d-none d-lg-inline-flex"
              >
                <MdOutlineLogin />
                Login
              </Nav.Link>

              <Nav.Link href="/auth/register" className="d-lg-none">
                Register
              </Nav.Link>
              <Nav.Link
                href="/auth/register"
                className="btn-light ms-2 d-flex align-items-center gap-2 rounded-pill text-black d-none d-lg-inline-flex"
              >
                <FaUserPlus />
                Register
              </Nav.Link>
            </Nav>
          )}
          {auth.isAuth === true && (
            <Nav>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
