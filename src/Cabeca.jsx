import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Cabeca() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">CodeMaster |</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/sobre">Sobre nós</Nav.Link>
            <Nav.Link href="/Entrar">Entrar</Nav.Link>
            <Nav.Link href="/NotaFiscal">Nota Fiscal</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Cabeca;