import { useState } from 'react';

export function useCalculator() {
  const [display, setDisplay] = useState('0');
  const [history, setHistory] = useState<string[]>([]);

  const escribir = (valor: string) => {
    if (display === '0' && !isNaN(Number(valor))) {
      setDisplay(valor);
    } else {
      setDisplay(display + valor);
    }
  };

  const borrar = () => {
    setDisplay(display.length > 1 ? display.slice(0, -1) : '0');
  };

  const limpiar = () => {
    setDisplay('0');
  };

  const calcular = () => {
    try {
      let operacion = display
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/π/g, 'Math.PI');

      let resultado = eval(operacion);
      let resultadoFormateado = String(Number(resultado.toFixed(6)));

      setHistory([`${display} = ${resultadoFormateado}`, ...history.slice(0, 4)]);
      setDisplay(resultadoFormateado);
    } catch (error) {
      setDisplay('Error');
    }
  };

  const potenciaCuadrado = () => {
    try {
      let res = Math.pow(parseFloat(display) || 0, 2);
      setDisplay(String(Number(res.toFixed(6))));
    } catch {
      setDisplay('Error');
    }
  };

  const raizCuadrada = () => {
    try {
      let res = Math.sqrt(parseFloat(display) || 0);
      setDisplay(String(Number(res.toFixed(6))));
    } catch {
      setDisplay('Error');
    }
  };

  const raizCubica = () => {
    try {
      let res = Math.cbrt(parseFloat(display) || 0);
      setDisplay(String(Number(res.toFixed(6))));
    } catch {
      setDisplay('Error');
    }
  };

  const porcentaje = () => {
    try {
      let res = (parseFloat(display) || 0) / 100;
      setDisplay(String(Number(res.toFixed(6))));
    } catch {
      setDisplay('Error');
    }
  };

  return {
    display,
    history,
    escribir,
    borrar,
    limpiar,
    calcular,
    potenciaCuadrado,
    raizCuadrada,
    raizCubica,
    porcentaje,
  };
}