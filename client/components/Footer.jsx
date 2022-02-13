import { Container, Row, Col } from "react-bootstrap";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import ALink from "./ALink";
import Image from "next/Image";
export default function Footer() {
  return (
    <footer className="bg-dark py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Image
              src="/images/logo.png"
              alt="logo"
              className="logo-dark"
              height={35}
              width={230}
            />
            <p className="text-muted mt-4">
              Hyper makes it easier to build better websites with
              <br /> great speed. Save hundreds of hours of design
              <br /> and development by using it.
            </p>

            <ul className="social-list list-inline mt-3">
              <li className="list-inline-item text-center">
                <a
                  href="#!"
                  className="social-list-item border-primary text-primary"
                >
                  <i className="mdi mdi-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item text-center">
                <a
                  href="#!"
                  className="social-list-item border-danger text-danger"
                >
                  <i className="mdi mdi-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item text-center">
                <a href="#!" className="social-list-item border-info text-info">
                  <i className="mdi mdi-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item text-center">
                <a
                  href="#!"
                  className="social-list-item border-danger text-danger"
                >
                  <i className="mdi mdi-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-2 col-md-4 mt-3 mt-lg-0">
            <h5 className="text-light">Quick Links</h5>

            <ul className="list-unstyled ps-0 mb-0 mt-3">
              <li className="mt-2">
                <a href="#!" className="text-muted">
                  About Us
                </a>
              </li>
              <li className="mt-2">
                <a href="#!" className="text-muted">
                  Process
                </a>
              </li>
              <li className="mt-2">
                <a href="#!" className="text-muted">
                  Online Attendance
                </a>
              </li>
              <li className="mt-2">
                <a href="#!" className="text-muted">
                  User Dashboard
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2"></div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="mt-5">
              <p className="text-muted mt-4 text-center mb-0">
                © 2018 - 2022, Bhaktapur Driving Center.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
