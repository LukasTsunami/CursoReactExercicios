import { render, screen } from '@testing-library/react'
import { Exercicio2 } from './Exercicio2'

test('deve retornar dados e usar valores padrao', () => {
  render(<Exercicio2 nome="João" idade={22} />)
  expect(screen.getByText('nome: João')).toBeInTheDocument()
  expect(screen.getByText('idade: 22')).toBeInTheDocument()
  expect(screen.getByText('nacionalidade: brasileiro')).toBeInTheDocument()
  expect(screen.getByText('estado-civil: solteiro')).toBeInTheDocument()
})