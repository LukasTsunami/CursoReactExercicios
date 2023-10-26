import React, { useState } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'

const SolucaoExercicio3 = () => {
  const [statusDoPedido, setStatusDoPedido] = useState()

  return (
    <Container>
      <h2 className="text-center">Solução:</h2>
      {statusDoPedido}
      <Row>
        <Col>
          <Button data-testid="botao-comprar" onClick={() => setStatusDoPedido('aguardando pagamento')}>comprar</Button>
        </Col>
        <Col>
          <Button data-testid="botao-pagar" onClick={() => setStatusDoPedido('pago')}>pagar</Button>
        </Col>
        <Col>
          <Button data-testid="botao-enviar-para-transportadora" onClick={() => setStatusDoPedido('pedido enviado para transportadora')}>enviar para transportadora</Button>
        </Col>
        <Col>
          <Button data-testid="botao-finalizar" onClick={() => setStatusDoPedido('finalizado')}>finalizar</Button>
        </Col>
        <Col>
          <Button data-testid="botao-cancelar" onClick={() => setStatusDoPedido('cancelado')}>cancelar</Button>
        </Col>
      </Row>
    </Container >
  )
}

export { Exercicio3 }