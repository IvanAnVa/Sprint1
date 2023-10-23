Abstract Factory

=>Que es?
    ->Es un patron de diseño creacional, que proporciona una interfaz para crear familias de objetos relacionados, o dependientes, sin especificar sus clases concretas. Es usado por muchos frameworks y bibliotecas.
=>Cuando aplicarlo?
    ->Cuando el sistema debe ser independiente de como se crean sus objetos.
    ->Cuando en una familia de productos relacionados, estos estan diseñados para ser usados juntos.
=>Pros
    ->Se evita un acoplamiento fuerte entre productos concretos y el codigo cliente.
    ->Tener la certeza de que los productos que obtienes de una fabrica son compatibles entre si.
    ->Es facil introducir nuevas variantes de productos sin romper el codigo cliente existente.
    ->Es posible que el codigo sea mas facil de mantener.
=>Contras
    ->El codigo puede complicarse de mas debido a la introduccion de muchas clases e interfaces.
    ->Agregar nuevos productos implicaria modificar tanto las fabricas abstractas como las concretas.


Ejemplo:
Crearemos una Fabrica, que sera la Abstract Factory del sistema. Tendra dos metodos, uno para crear TV, y otro para crear Smartphone. Existen dos fabricas concretas que van a implementar esta abstract factory; por un lado una fabrica llamada fabrica Xiaomi, que al implementar la fabrica va a redefinir los metodos; en crear TV va a devolver TV Xiaomi, y en crear Smartphone va a devolver Smartphone Xiaomi. La otra fabrica concreta es una fabrica Samsung, va a redefinir los metodos devolviendo TV Samsung, y Smartphone Samsung.
Uno de los productos es TV, por tanto definimos su clase abstracta. De aqui se derivan dos productos concretos; uno que es TV Xiaomi, que implementa TV, y define otra vez la funcion TV, que va a devolver 'TV Xiaomi'. Ocurrira lo mismo con el TV Samsung, que de nuevo implementa y redefine la funcion TV devolviendo 'TV Samsung'.
El otro producto que tenemos es Smartphone, que repetira el mismo proceso que TV, dando como productos concretos 'Smartphone Xiaomi', y 'Smartphone Samsung'

// Clase abstracta para los productos de TV
abstract class TV {
  abstract show(): string;
}

// Clase abstracta para los productos de Smartphone
abstract class Smartphone {
  abstract display(): string;
}

// Fábrica abstracta
abstract class FabricaAbstracta {
  abstract crearTV(): TV;
  abstract crearSmartphone(): Smartphone;
}

// Fábrica concreta Xiaomi
class FabricaXiaomi extends FabricaAbstracta {
  crearTV(): TV {
    return new TVXiaomi();
  }

  crearSmartphone(): Smartphone {
    return new SmartphoneXiaomi();
  }
}

// Fábrica concreta Samsung
class FabricaSamsung extends FabricaAbstracta {
  crearTV(): TV {
    return new TVSamsung();
  }

  crearSmartphone(): Smartphone {
    return new SmartphoneSamsung();
  }
}

// Productos concretos
class TVXiaomi extends TV {
  show(): string {
    return 'TV Xiaomi';
  }
}

class TVSamsung extends TV {
  show(): string {
    return 'TV Samsung';
  }
}

class SmartphoneXiaomi extends Smartphone {
  display(): string {
    return 'Smartphone Xiaomi';
  }
}

class SmartphoneSamsung extends Smartphone {
  display(): string {
    return 'Smartphone Samsung';
  }
}

// Ejemplo de uso
function main() {
  const fabricaXiaomi = new FabricaXiaomi();
  const tvXiaomi = fabricaXiaomi.crearTV();
  const smartphoneXiaomi = fabricaXiaomi.crearSmartphone();

  const fabricaSamsung = new FabricaSamsung();
  const tvSamsung = fabricaSamsung.crearTV();
  const smartphoneSamsung = fabricaSamsung.crearSmartphone();

  console.log(tvXiaomi.show());
  console.log(smartphoneXiaomi.display());
  console.log(tvSamsung.show());
  console.log(smartphoneSamsung.display());
}

main();
