import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import routes from "../constants/routes";

export default function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand to={routes.home}>CIS</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Item>
                            <Link className="nav-link" to={routes.home}>Random Quotes</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="nav-link" to={routes.author}>Albert Einstein</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="nav-link" to={routes.shipper}>Shippers</Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}