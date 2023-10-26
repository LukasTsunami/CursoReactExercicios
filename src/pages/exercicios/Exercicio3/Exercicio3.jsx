import { Col, Container, Row } from 'react-bootstrap'

const Exercicio3 = () => {
  return (
    <Container>
      <Row style={{ marginTop: 16 }}>
        <Col></Col>
        <Col><h1 className='text-center'>Exercício 3</h1></Col>
        <Col></Col>
      </Row>
      <Row>
        <p className="text-center">
          Faça um componente que tenha um estado: <b>statusDoPedido</b>
        </p>
      </Row>
      <Row>
        <span className="text-center">Sempre que você clicar no botão correspondente a mudar o status, ele deve mudar de um estado pro que o botão sinalizar:
        </span>
      </Row>
      <Row>
        <h2 className="text-center">Estados:</h2>
      </Row>
      <Row>
        <span className="text-center">aguardando pagamento</span>
      </Row>
      <Row>
        <span className="text-center">pago</span>
      </Row>
      <Row>
        <span className="text-center">pedido enviado para transportadora</span>
      </Row>
      <Row>
        <span className="text-center">finalizado</span>
      </Row>
      <Row>
        <span className="text-center">cancelado</span>
      </Row>
      <Row>
        <h2 className="text-center">Botões:</h2>
      </Row>
      <Row>
        <span className="text-center">comprar</span>
      </Row>
      <Row>
        <span className="text-center">pagar</span>
      </Row>
      <Row>
        <span className="text-center">enviar pra transportadora</span>
      </Row>
      <Row>
        <span className="text-center">finalizar</span>
      </Row>
      <Row>
        <span className="text-center">cancelar</span>
      </Row>
      <Row>
        <b className="text-center"> ou seja: se eu clicar no botão correspondente, o status da compra deve mudar pra ele</b>
      </Row>
      <br />
      <h2 className="text-center">Solução:</h2>
      {/* Coloque sua solução aqui:*/}
    </Container >
  )
}

export { Exercicio3 }