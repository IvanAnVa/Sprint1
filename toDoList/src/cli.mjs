import inquirer from 'inquirer';

// Arreglo para almacenar las tareas
const tareas = [];

async function iniciarCLI() {
  while (true) {
    const respuesta = await inquirer.prompt([
      {
        type: 'list',
        name: 'opcion',
        message: 'Selecciona una opción:',
        choices: [
          'Agregar tarea',
          'Listar tareas',
          'Marcar tarea como realizada',
          'Eliminar tarea',
          'Salir',
        ],
      },
    ]);

    const { opcion } = respuesta;

    switch (opcion) {
      case 'Agregar tarea':
        await agregarTarea();
        break;
      case 'Listar tareas':
        listarTareas();
        break;
      case 'Marcar tarea como realizada':
        await marcarTareaComoRealizada();
        break;
      case 'Eliminar tarea':
        await eliminarTarea();
        break;
      case 'Salir':
        console.log('¡Hasta luego!');
        return;
    }
  }
}

async function agregarTarea() {
  const respuesta = await inquirer.prompt([
    {
      type: 'input',
      name: 'tarea',
      message: 'Escribe la nueva tarea:',
      validate: (input) => (input.trim() ? true : 'La tarea no puede estar vacía'),
    },
  ]);

  const { tarea } = respuesta;
  tareas.push(tarea);
  console.log('Tarea agregada:', tarea);
}

function listarTareas() {
  console.log('Lista de tareas:');
  tareas.forEach((tarea, indice) => {
    console.log(`${indice + 1}. ${tarea}`);
  });
}

async function marcarTareaComoRealizada() {
  const respuesta = await inquirer.prompt([
    {
      type: 'number',
      name: 'tareaIndex',
      message: 'Ingresa el número de tarea a marcar como realizada:',
      validate: (input) => (input > 0 && input <= tareas.length ? true : 'Índice no válido'),
    },
  ]);

  const { tareaIndex } = respuesta;
  console.log('Tarea marcada como realizada:', tareas[tareaIndex - 1]);
  
}

async function eliminarTarea() {
  const respuesta = await inquirer.prompt([
    {
      type: 'number',
      name: 'tareaIndex',
      message: 'Ingresa el número de tarea a eliminar:',
      validate: (input) => (input > 0 && input <= tareas.length ? true : 'Índice no válido'),
    },
  ]);

  const { tareaIndex } = respuesta;
  const tareaEliminada = tareas.splice(tareaIndex - 1, 1);
  console.log('Tarea eliminada:', tareaEliminada[0]);
}

iniciarCLI();
