const BTN_REINICIAR = 'btnREiniciar'
const ID_CONTADOR = 'contador'
const VALOR_CONTADOR = 100
const PERIODO_INTERVALO = 10

class ContadorComponent {
  constructor() {
    this.inicializar()
  }
  prepararContadorProxy() {
    const handler = {
      set: (currentContext, propertyKey, newValue) => {
        console.log({ currentContext, propertyKey, newValue })
        currentContext[propertyKey] = newValue
        return true
      }
    }
    const contador = new Proxy({
      valor: VALOR_CONTADOR,
      efetuarParada: () => {}
    }, handler)
    return contador
  }

  inicializar() {
    console.log('inicializou')
    const elementoContador = document.getElementById(ID_CONTADOR)
    const contador = this.prepararContadorProxy()
    contador.valor = 100
    contador.valor = 90
    contador.valor = 80


  }
}