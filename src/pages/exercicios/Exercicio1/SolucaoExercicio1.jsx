import { Col, Container, Row } from 'react-bootstrap'

const SolucaoExercicio1 = ({ nome1, nome2 }) => {
  return (
    <Container>
      <h2 className="text-center">Solução:</h2>
      <Row>
        <p className="text-center">
          {/* Coloque o código do componente aqui:*/}
          {nome1} é amiga de {nome2}
        </p>
      </Row>
    </Container>
  )
}

export { Exercicio1 }
