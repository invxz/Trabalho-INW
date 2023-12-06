import Cabeca from "../Cabeca"
import Rodape from "../Rodape"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

function Contato(){
    return(
        <div className="site">
            <Cabeca/>
            <div className="contc">
                <div className="formulario">
                    <h2>Fale conosco!</h2>
                    <Form>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Digite sua mensagem</Form.Label>
                        <Form.Control type="text" placeholder="Mensagem" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                    </Form>
                </div>

                <div className="redes">
                    <h2>Nossas redes sociais</h2>
                    <ListGroup variant="flush">
                         
                    <div className="iconteste">
                        <div className="iconessoltos">
                        <img className="icone" src="https://imagepng.org/wp-content/uploads/2017/08/whatsapp-icone-2.png" alt="" /> 
                        </div>

                        <div className="iconessoltos">
                        <img className="icone" src="https://cdn.icon-icons.com/icons2/91/PNG/512/facebook_16423.png" alt="" /> 
                        </div>

                        <div className="iconessoltos">
                        <img className="icone" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="" /> 
                        </div>
                        </div>

                    </ListGroup>
                </div>
            </div>

            <Rodape/>
        </div>
    )
}

export default Contato