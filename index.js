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

// MostrarEstado
function mostrarEstado() {
    // Inicio de programa
    console.log(chalk.blue('inicio del programa'));
    console.info(chalk.green('ejecutar tareas'));
    
    // Proceso de ejecución
    console.log(chalk.yellow('Procesando datos'));
    console.info(chalk.cyan('ejecutando las tareas principales'));

    // simular alguna operación
    let count = 0;
    for(let i = 0; i < 3; i++) {
        count++;
        if(count === 2){
            console.warn(chalk.yellow('⚠️ Warning: procesando paso crítico'));
        }
    }

    // finalización exitosa
    console.log(chalk.green('✅ Proceso "VIDA" Finalizado con Éxito. Puede descansar en paz...'));
}

// Ejecución de funciones
mostrarEstado();
