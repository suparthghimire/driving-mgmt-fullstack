import { Container, Row, Col } from "react-bootstrap";

import Head from "next/head";

export default function Confirmation() {
  return (
    <div>
      <Head>
        <title>Enrollment Confirmed</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className="py-5">
        <Row>
          <Col className="col-12 text-center">
            <h1>Your Enrollment has been confirmed</h1>
            <h4>
              Please visit our office at Kirtipur, Tyanglaphant to start your
              training.
            </h4>
            <p>Also, please bring your citizenship card along with you.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}