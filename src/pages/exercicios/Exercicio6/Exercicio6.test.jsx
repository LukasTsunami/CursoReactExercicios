import { render, screen, fireEvent } from '@testing-library/react'
import { Exercicio6 } from './Exercicio6'

describe('verificando se o useEffect funciona', () => {
  const originalLog = console.log;

  beforeEach(() => {
    console.log = jest.fn();
  });

  afterEach(() => {
    console.log = originalLog;
  });

  test('deve chamar a funcao só quando alterar um estado, não quando alterar o outro', () => {
    render(<Exercicio6 />)

    const botao_muda_estado = screen.getByTestId('botao-muda-estado')
    const botao_muda_outro_estado = screen.getByTestId('botao-muda-outro-estado')

    fireEvent.click(botao_muda_estado)

    expect(console.log).toHaveBeenCalledWith('chamou')
    expect(console.log).toHaveBeenCalledTimes(2);

    fireEvent.click(botao_muda_outro_estado)
    fireEvent.click(botao_muda_outro_estado)
    fireEvent.click(botao_muda_outro_estado)
    fireEvent.click(botao_muda_outro_estado)

    expect(console.log).toHaveBeenCalledTimes(2);

    fireEvent.click(botao_muda_estado)
    expect(console.log).toHaveBeenCalledTimes(3);
  })

  test('deve chamar apenas na renderizacao inicial se o botao muda-estado nao for clicado', () => {
    render(<Exercicio6 />)
    expect(console.log).toHaveBeenCalledWith('chamou');
    expect(console.log).toHaveBeenCalledTimes(1);
  })

})
