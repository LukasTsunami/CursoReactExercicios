import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'

const Exercicio5 = ({ nome, mudaNome }) => {
  return (
    <Container>
      <Row style={{ marginTop: 16 }}>
        <Col></Col>
        <Col><h1>Exercício 5</h1></Col>
        <Col></Col>
      </Row>
      <Row>
        <p className="text-center">
          Faça o teste deste componente
        </p>
      </Row>
      <Row>
        Nome: {nome}
        <Button onClick={() => mudaNome('outro nome')}>
          Muda Nome
        </Button>
      </Row>
    </Container>
  )
}

export { Exercicio5 }