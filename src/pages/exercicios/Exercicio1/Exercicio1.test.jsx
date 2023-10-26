import { render, screen } from '@testing-library/react'
import { Exercicio1 } from './Exercicio1'

test('deve retornar que as pessoas recebidas são amigas', () => {
  render(<Exercicio1 nome1="Luana" nome2="Joaquim" />)
  expect(screen.getByText('Luana é amiga de Joaquim')).toBeInTheDocument()
})