import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const BarraDeNavegacao = () => {
  const location = useLocation();
  const { pathname: url } = location;

  const LinkDoMenu = ({ paraOnde }) => {
    let style = {}
    const texto = paraOnde.replace('exercicio', 'Exercício ')

    if (url === `/${paraOnde}`) {
      style = {
        backgroundColor: 'blue',
        fontWeight: 'bold'
      }
    }

    return (
      <NavDropdown.Item
        as={Link}
        to={`/${paraOnde}`}
        style={style}
      >
        {texto}
      </NavDropdown.Item>
    )
  }

  const QualPaginaEsta = () => {
    if (url === "/") {
      return null
    }

    return (
      <Nav.Link style={{ color: 'deepskyblue' }} disabled={true}>
        {url.replace('/exercicio', 'Exercício ')}
      </Nav.Link>
    )
  }

  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <i className="bi bi-house"></i>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title={`Exercícios`} id="basic-nav-dropdown">
              <LinkDoMenu paraOnde="exercicio1" />
              <LinkDoMenu paraOnde="exercicio2" />
              <LinkDoMenu paraOnde="exercicio3" />
              <LinkDoMenu paraOnde="exercicio4" />
              <LinkDoMenu paraOnde="exercicio5" />
              <LinkDoMenu paraOnde="exercicio6" />
              <LinkDoMenu paraOnde="exercicio7" />
              <LinkDoMenu paraOnde="exercicio8" />
              <LinkDoMenu paraOnde="exercicio9" />
              <LinkDoMenu paraOnde="exercicio10" />
            </NavDropdown>
            <QualPaginaEsta />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default BarraDeNavegacao