import { Col, Container, Row } from 'react-bootstrap'

const Exercicio1 = () => {
  return (
    <Container>
      <Row style={{ marginTop: 16 }}>
        <Col></Col>
        <Col><h1 className='text-center'>Exercício 1</h1></Col>
        <Col></Col>
      </Row>
      <Row>
        <p className="text-center">
          Faça um componente que receba duas propriedades:
          nome1 e nome2
          <br />
          e escreva na tela: (Mostre o valor das props)
          <br />
          <span style={{ backgroundColor: 'lightgrey' }}>nome1 é amiga de nome2</span>
        </p>
      </Row>

      <h2 className="text-center">Solução:</h2>
      <Row>
        <p className="text-center">
          {/* Coloque sua solução aqui:*/}
        </p>
      </Row>
    </Container>
  )
}

export { Exercicio1 }