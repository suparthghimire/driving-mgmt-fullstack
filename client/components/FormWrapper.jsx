import { Card, Container, Row, Col } from "react-bootstrap";
import ALink from "./ALink";
import Image from "next/Image";
export default function ({
  form_title,
  form_subtext,
  card_footer_title,
  card_footer_link_text,
  card_footer_link,
  children,
}) {
  return (
    <Container className="mt-2">
      <Row className="justify-content-center">
        <Col className="col-xxl-4 col-lg-5">
          <Card>
            <Card.Header className="pt-4 pb-4 text-center bg-primary">
              <ALink href="/">
                <span>
                  <Image
                    src="/images/logo.png"
                    alt="logo"
                    width={230}
                    height={35}
                  />
                </span>
              </ALink>
            </Card.Header>
            <Card.Body className="pb-4">
              <div className="text-center w-75 m-auto">
                <h4 className="text-dark-50 text-center mt-0 fw-bold">
                  {form_title}
                </h4>
                <p className="text-muted mb-4">{form_subtext}</p>
              </div>
              <hr />
              {children}
            </Card.Body>
          </Card>
          <Row className="mt-3">
            <Col className="text-center">
              <p className="text-muted">
                {card_footer_title}
                <ALink className="text-muted ms-1" href={card_footer_link}>
                  <b>{card_footer_link_text}</b>
                </ALink>
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
