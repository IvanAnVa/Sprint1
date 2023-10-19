export function evento_tarea1() {
    const tareas1: string[] = [];
    const tareasUsuario: string = (document.getElementById('tareasUsuario') as HTMLInputElement).value.trim();
    const tareasLista: HTMLElement | null = document.getElementById('listaTareas');
  
    if (tareasUsuario === '') {
      return;
    }
  
    tareas1.push(tareasUsuario);
  
    const listaTareas: HTMLLIElement = document.createElement('li');
    listaTareas.textContent = tareasUsuario;
  
    listaTareas.addEventListener('click', () => {
      listaTareas.classList.toggle('done');
    });
  
    if (tareasLista) {
      const borrarTareas: HTMLButtonElement = document.createElement('button');
      borrarTareas.textContent = 'Eliminar tarea';
  
      borrarTareas.addEventListener('click', () => {
        if (tareasLista.contains(listaTareas)) {
          tareasLista.removeChild(listaTareas); 
        }
      });
  
      listaTareas.appendChild(borrarTareas);
      if (tareasLista) {
        tareasLista.appendChild(listaTareas);
      }
    }
  }
  

  