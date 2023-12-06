import Cabeca from "../Cabeca"
import Rodape from "../Rodape"
import Carousel from 'react-bootstrap/Carousel';
import Produtos from "../Produtos";


function Home(){
    return(
        <div className="site">
            <Cabeca/>
            <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://happy.com.br/wp-content/uploads/2018/10/243273-descubra-aqui-porque-programacao-para-criancas-e-o-novo-ingles.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://ctrlplay.com.br/wp-content/uploads/2019/06/conheca-5-beneficios-da-programacao-para-criancas-jpeg-1.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.licdn.com/dms/image/C4D12AQEr36iJEYElew/article-cover_image-shrink_720_1280/0/1640091242597?e=2147483647&v=beta&t=BfrRi9pD-rWG7H-FIUskp7cm9X2JqlHiO0v-pMFQmDo"
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.mundorh.com.br/wp-content/uploads/2023/02/Ensino-de-programacao-e-tecnologia-para-criancas-Mundo-RH-860x502.webp"
          alt="Fourth slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <hr />
    <h2 className="text-center">Produtos</h2>
    <div className="produtocont">
      <Produtos image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" preco="29,99 Por Mês" curso="React"/>
      <Produtos image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" preco="49,99 Por Mês" curso="Python"/>
      <Produtos image="https://miro.medium.com/v2/resize:fit:1024/1*jkOCjQlkGZjbhWdvh7LfRA.png" preco="29,99 Por Mês" curso="Java"/>
      <Produtos image="https://jmvstream.com/wp-content/uploads/2023/07/HTML-CSS.jpeg" preco="24,99 Por Mês" curso="HTML/CSS"/>
    </div>
    <Rodape/>
        </div>
    )
}

export default Home