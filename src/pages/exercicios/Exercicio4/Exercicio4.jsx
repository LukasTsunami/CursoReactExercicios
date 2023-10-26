import React, { useState } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'

const Exercicio4 = ({ quantidadeInicial }) => {
  const [quantidade, setQuantidade] = useState(quantidadeInicial)

  return (
    <Container>
      <Row style={{ marginTop: 16 }}>
        <Col></Col>
        <Col><h1>Exercício 4</h1></Col>
        <Col></Col>
      </Row>
      <Row>
        <p className="text-center">
          Faça o teste deste componente
        </p>
      </Row>
      <Row>
        Quantidade: {quantidade}
        <Button onClick={() => setQuantidade(anterior => anterior + 1)}>
          Aumentar
        </Button>
      </Row>
    </Container>
  )
}

Exercicio4.defaultProps = {
  quantidade: 0
}

export { Exercicio4 }