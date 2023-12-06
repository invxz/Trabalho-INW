import Cabeca from "../Cabeca"
import Rodape from "../Rodape"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function Home() {
    return (
        <div className="forms">
            <Cabeca />
            <Form className="form">


                <Form.Group className="mb-3 form-css" controlId="formBasicEmail">
                    <Form.Label className="checkbox">Número nota</Form.Label>
                    <Form.Control type="text" className="form-control" placeholder="Número nota" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 form-css"  controlId="formBasicEmail">
                    <Form.Label className="checkbox">Data emissão</Form.Label>
                    <Form.Control type="date" className="form-control" placeholder="Data emissão" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 form-css" controlId="formBasicPassword">
                    <Form.Label className="checkbox">Descrição do item</Form.Label>
                    <Form.Control type="text" className="form-control" placeholder="Descrição do item" />
                </Form.Group>

                <Form.Group className="mb-3 form-css" controlId="formBasicPassword">
                    <Form.Label className="checkbox">Valor unitário</Form.Label>
                    <Form.Control type="text" className="form-control" placeholder="Valor unitário" />
                </Form.Group>

                <Form.Group className="mb-3 form-css" controlId="formBasicPassword">
                    <Form.Label className="checkbox">Quantidade</Form.Label>
                    <Form.Control type="number" className="form-control" placeholder="Quantidade" />
                </Form.Group>
                
                <Button className="form-css button" variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>
            <Rodape />

        </div>
    )
}

export default Home