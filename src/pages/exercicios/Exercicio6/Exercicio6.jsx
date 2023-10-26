import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Exercicio6 = () => {
  const [estado, setEstado] = useState(0)
  const [outroEstado, setOutroEstado] = useState(0)

  useEffect(() => {
    console.log('chamou')
  }, [estado])

  return (
    <Container>
      <Row style={{ marginTop: 16 }}>
        <Col></Col>
        <Col><h1>Exercício 6</h1></Col>
        <Col></Col>
      </Row>
      <Row>Chamar funcao só quando mudar um estado especifico</Row>

      <Row><button data-testid="botao-muda-estado" onClick={() => setEstado(prev => prev + 1)}>estado {estado}</button></Row>
      <Row><button data-testid="botao-muda-outro-estado" onClick={() => setOutroEstado(prev => prev + 1)}>outroEstado {outroEstado}</button></Row>
    </Container>
  )
}

export { Exercicio6 }