/*
*TODO: Crea un iife que contenga la función contador privado con incrementso y decrementos encapsulados
*/
class Contador {
  constructor() {
    this.valor = 0;
  }
  incrementar() {
    this.valor++;
  
  }
  decrementar() {
    if (this.valor > 0) {

    }
  }
  gettingValor() {
    return this.valor--;
  }
  reset() {
    this.valor = 0;
  }
}
const contador = new Contador();

contador.incrementar();
contador.incrementar(); 
contador.incrementar();
contador.incrementar();
contador.decrementar();
contador.gettingValor();
contador.decrementar();
contador.gettingValor();

console.log(contador.gettingValor()); // 0
