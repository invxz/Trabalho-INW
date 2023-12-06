// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import { useState, useEffect } from 'react'

function Produtos({preco, image, curso}) {

  const [products, setProducts] = useState([])

  useEffect(() => {
  async function fetchData(){
  //  const res = await fetch(url);
  const data = await res.json();
  setProducts(data);
  }
  fetchData();
  }, []);

  return (
    <div className="produto">
        <div className='prods'>
        <Card style={{ width: '20rem', }} >
        <Card.Img variant="top" className='imgcard' src={image} />
        <Card.Body>
            <Card.Text className='curso'>
            Curso: {curso}
            </Card.Text>
            <Card.Text className='preco'>
            R$: {preco}
            </Card.Text>
        </Card.Body>
        </Card>
        </div>
    </div>
  );
}

export default Produtos;