import Cabeca from "../Cabeca"
import Rodape from "../Rodape"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function Home() {
    return (
        <div className="forms">
            <Cabeca />
            <Form className="form">


                <Form.Group className="mb-3 form-css"  controlId="formBasicEmail">
                    <Form.Label className="checkbox">Nome</Form.Label>
                    <Form.Control type="text"  placeholder="Nome" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 form-css" controlId="formBasicEmail">
                    <Form.Label className="checkbox">Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 form-css" controlId="formBasicPassword">
                    <Form.Label className="checkbox">Senha</Form.Label>
                    <Form.Control type="password" placeholder="Senha" />
                </Form.Group>
                <Form.Group className="mb-3 " controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Lembrar credenciais" className="checkbox"/>
                </Form.Group>
                <Button variant="primary" className=" form-css" type="submit">
                    Entrar
                </Button>
            </Form>
            <Rodape />

        </div>
    )
}

export default Home