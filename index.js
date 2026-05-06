// Importamos la librería chalk
import chalk from 'chalk';

// Mensajes iniciales
console.log(chalk.blue('👋 ¡Bienvenido a la Terminal Parlante!'));
console.info(chalk.green('ℹ️ Esta terminal está viva... y tiene estilo.'));
console.warn(chalk.yellow('⚠️ Atención: Esto puede ponerse colorido.'));
console.error(chalk.red('❌ Error simulado: algo salió demasiado bien.'));
console.log(chalk.magenta('💡 Recuerda: la práctica hace al programador.'));

// BONUS: función básica
function saludar(nombre) {
  console.log(chalk.cyan(`Hola ${nombre}, ¡bienvenido al mundo JavaScript! 🌍`));
}

// Prueba de función
saludar("Equipo JS");

// EQUIPO B

function simularError() {
    //mensaje de advertencia (amarillo)
    console.warn(chalk.yellow('⚠️ Atención: Esto puede ponerse colorido.'));

    //mensaje de error (rojo)
    console.error(chalk.red('❌ Error simulado: Algo salió demasiado bien.'));

    //mensaje final de recuperación (verde)
    console.log(chalk.green('✅ Recuperación: Si al inicio no te funcionó recuerda que la práctica hacer al maestro.'));
}
    //Ejecución
    simularError();