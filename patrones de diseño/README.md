<!-- ->Patron creacional Abstract Factory


=>Patron de diseño que provee una interficie para crear familias
de objetos relacionados o dependientes sin especificar su clase concreta.
=>Patron creacional objetos relacionados por temas, por ejemplo. No se especifica su clase concreta; se sigue trabajando con abstracciones. No dependes de una clase concreta, se usa la abstracción. Conseguimos trabajar de forma independiente (factory) a las implementaciones concretas de cada clase. Nos permite crear relaciones entre objetos de forma que no se puedan utilizar de forma indiscriminada. Te protege de utilizar sin querer objetos que no deberian utilizar juntos.
=>En este ejemplo, tenemos una fabrica de Enemigos -->

interface EnemyFactory{
    createNormalEnemy(): Enemy;
    createBossEnemy(): Enemy;
}

<!-- =>Definimos el Enemy, con una clase abstracta, por lo que se va a tener que redefinir, al menos uno de
sus metodos en una implementacion real: -->

abstract class Enemy {
    abstract attack(): void;
}

<!-- =>Implementacion de la clase abstracta: -->

class NormalEnemy extends Enemy {
    attack(): void {
        console.log('Enemigo nivel normal ataca!');
    }
}

class BossEnemy extends Enemy {
    attack(): void{
        console.log('Enemigo nivel boss ataca!');
    }
}

<!-- =>Creamos la fabrica: -->

class FactoriaEnemigos implements EnemyFactory {
    public crearNormalEnemy(): Enemy {
        return new NormalEnemy();
    }
    public crearBossEnemy(): Enemy {
        return new BossEnemy();
    }
}

<!-- Estos enemigos, NormalEnemy y BossEnemy no tienen una clase definida. Implementamos en una funcion con EnemyFactory como parametro para conseguir abstraccion.
En la creacion del enemigo, podemos llamar al metodo de creacion implementdo en la fabrica. De la misma manera, podemos crear un enemigo tipo Boss. La clase abstracta nos permite acceder a sus propios metodos (se indica en la funcion). -->



function creacionEnemies(factory: EnemyFactory): void {
    const normalEnemy = factory.crearNormalEnemy();
    normalEnemy.attack();
    
    const bossEnemy = factory.crearBossEnemy();
    bossEnemy.attack();

}
