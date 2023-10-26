import { Container, Row } from 'react-bootstrap'

const SolucaoExercicio2 = ({ nome, idade, nacionalidade, estadoCivil }) => {
  return (
    <Container>
      <h2 className="text-center">Solução:</h2>
      {/* Coloque sua solução aqui:*/}
      <Row><span className="text-center">nome: {nome}</span></Row>
      <Row><span className="text-center">idade: {idade}</span></Row>
      <Row><span className="text-center">nacionalidade: {nacionalidade}</span></Row>
      <Row><span className="text-center">estado-civil: {estadoCivil}</span></Row>
    </Container >
  )
}

SolucaoExercicio2.defaultProps = {
  nacionalidade: 'brasileiro',
  estadoCivil: 'solteiro'
}
