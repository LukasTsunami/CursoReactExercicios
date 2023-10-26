import { render, screen, fireEvent } from '@testing-library/react'
import { Exercicio3 } from './Exercicio3'

test('deve retornar dados e usar valores padrao', () => {
  render(<Exercicio3 />)

  const botao_comprar = screen.getByTestId('botao-comprar')
  const botao_pagar = screen.getByTestId('botao-pagar')
  const botao_enviar_para_transportadora = screen.getByTestId('botao-enviar-para-transportadora')
  const botao_finalizar = screen.getByTestId('botao-finalizar')
  const botao_cancelar = screen.getByTestId('botao-cancelar')

  fireEvent.click(botao_comprar)
  expect(screen.getByText('aguardando pagamento')).toBeInTheDocument()

  fireEvent.click(botao_pagar)
  expect(screen.getByText('pago')).toBeInTheDocument()

  fireEvent.click(botao_enviar_para_transportadora)
  expect(screen.getByText('pedido enviado para transportadora')).toBeInTheDocument()

  fireEvent.click(botao_finalizar)
  expect(screen.getByText('finalizado')).toBeInTheDocument()

  fireEvent.click(botao_cancelar)
  expect(screen.getByText('cancelado')).toBeInTheDocument()
})