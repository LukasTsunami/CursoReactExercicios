import { Col, Container, Row } from 'react-bootstrap'

const Exercicio2 = () => {
  return (
    <Container>
      <Row style={{ marginTop: 16 }}>
        <Col></Col>
        <Col><h1 className='text-center'>Exercício 2</h1></Col>
        <Col></Col>
      </Row>
      <Row>
        <p className="text-center">
          Faça um componente que receba quatro propriedades:
          nome, idade, nacionalidade, estadoCivil
        </p>
      </Row>
      <Row>
        <span className="text-center">e escreva na tela esses dados:       (Mostre o valor das props)
        </span>
      </Row>
      <Row>
        <span className="text-center" style={{ backgroundColor: 'lightgrey' }}>nome: nome</span>
      </Row>
      <Row>
        <span className="text-center" style={{ backgroundColor: 'lightgrey' }}>idade: idade</span>
      </Row>
      <Row>
        <span className="text-center" style={{ backgroundColor: 'lightgrey' }}>nacionalidade: nacionalidade</span>
      </Row>
      <Row>
        <span className="text-center" style={{ backgroundColor: 'lightgrey' }}>estado-civil: estadoCivil</span>
      </Row>
      <Row>
        <b className="text-center">Dê uma valor padrão para nacionalidade, sendo 'brasileiro' e estado civil como 'solteiro'</b>
      </Row>
      <br />
      <h2 className="text-center">Solução:</h2>
      {/* Coloque sua solução aqui:*/}
    </Container >
  )
}

export { Exercicio2 }