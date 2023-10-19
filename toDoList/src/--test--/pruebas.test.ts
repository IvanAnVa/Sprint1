
import { evento_tarea1 } from '../pruebas';

// Prueba 1: Verificar si se agrega una tarea a la lista correctamente
test('evento_tarea1 debe agregar una tarea', () => {
 
});

// Prueba 2: Verificar si se marca una tarea como "hecha" al hacer clic en ella
test('evento_tarea1 debe marcar una tarea como realizada al hacer click en ella', () => {
  
  document.body.innerHTML = `
    <input id="tareasUsuario" type="text" value="Nueva tarea">
    <ul id="listaTareas"></ul>
  `;
  evento_tarea1(); // Agregar la tarea

 
  const taskItem = document.querySelector('li');

  if (taskItem) {
    taskItem.click(); // Simular hacer clic en la tarea
  }

 
  expect(taskItem?.classList.contains('done')).toBe(true);
});

// Prueba 3: Eliminar una tarea concreta
test('evento_tarea1 debe eliminar una tarea concreta', () => {
  // Arrange
  document.body.innerHTML = `
    <input id="tareasUsuario" type="text" value="Tarea a eliminar">
    <ul id="listaTareas"></ul>
  `;
  evento_tarea1(); // Agregar la tarea

  // Act
  const deleteButton = document.querySelector('button');
  const taskItem = document.querySelector('li');

  if (deleteButton) {
    deleteButton.click(); // Simular hacer clic en el botón de eliminación
  }

  // Assert
  expect(taskItem).toBeNull(); // El elemento de la tarea no debe existir en la lista
});


