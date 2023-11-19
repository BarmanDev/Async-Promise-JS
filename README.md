# Ex JS - Asincronía & Promesas

## Investigación

### ¿Qué es un archivo JSON?
Es un formato de texto sencillo para el intercambio de datos entre el cliente,  servidor o en diferentes partes de una  aplicación. Se trata de un subconjunto de la notación literal de objetos de JavaScript siendo una alternativa a XML Si bien se considera a JSON como una alternativa a XML es habitual el uso de ambas en la misma aplicación.
Una de las grandes diferencias con XML es que resulta mucho más sencillo escribir un analizador sintáctico (pase).

### ¿Qué es la asincronía en Javascript?
Es la técnica que permite a tu programa iniciar una tarea de larga duración y seguir prespondiendo a otros eventos mientras esa tarea se ejecuta, en lugar de tener que esperar hasta que esa tarea haya terminado. Una vez que dicha tarea ha finalizado, el programa presesta el resultado.

### ¿Qué son las Promesas?
Como su nombre indica, una promesa es algo que en principio pensamos que se cumplirá. los 3 estados que pueden tener una promesa son :
- La promesa se cumple (promesa resuelta)
- La promesa no se cumple (promesa rechazada)
- La promesa se queda en un estado incierto indefinidamente (promesa pendiente)

La forma general de consumir una promesa es utilizando la palabra reservada .then() con un solo parametro ya que muchas veces lo único que nos interesa es realizar una acción cuando la promesa se cumpla.

### ¿Qué es y cómo se usa ‘Fetch’ en JS?
LaAPI Fetch en JavaScript proporciona una interfaz que sirve como una herramienta para facilitar la manipulación de componentes del protocolo HTTP, como solicitudes y respuestas. Esta interfaz permite gestionar la información de la web de manera más sencilla y moderna.
Anteriormente, los desarrolladores solían emplear XMLHttpRequest, pero Fetch es considerablemente más fácil de utilizar y presenta una mayor compatibilidad con otras tecnologías, como Service Workers. Además, Fetch ofrece un punto centralizado para la definición de conceptos relacionados con el protocolo HTTP, tales como CORS y extensiones para HTTP.

#### Ejemplo Fetch consumiendo la pokeapi
```javascript
function pokeName(pokemonId) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
    .then(result => {
      if (!result.ok) {
        throw new Error('No se pudo obtener la información');
      }
      return result.json();
    })
    .then(data => {
      const namePokemon= data.name;
      console.log(`Nombre del Pokémon: ${namePokemon}`);
    })
    .catch(error => {
      console.error('Error al obtener los datos:', error);
    });
}

pokeName(1);

```

### ¿Cómo se usa Async/Await?
Las Async/Await no es más que una forma de “sintatic sugar” para gestionar las promesas. Con async/await seguimos manejando promesas, sin embargo, tiene unos cambios importantes.

- No encadenamos mediante .then()
- Abandonamos el modelo no bloqueante y pasamos a un bloqueante.

#### Ejemplo usando Async/await
```javascript
async function pokeName(pokemonId) {
  try {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);

    if (!result.ok) {
      throw new Error('No se pudo obtener la información');
    }

    const data = await result.json();
    const namePokemon = data.name;

    console.log(`Nombre del Pokémon: ${namePokemon}`);
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  }
}

pokeName(1);

```

### ¿Cuándo deberíamos usar código asíncrono?
El código asíncrono debería usarse en situaciones en las que se espera que ciertas operaciones se ejecuten con el tiempo de nuestra aplicación, pero no queremos bloquear la ejecución de la aplicación web mientras esperamos a que se cumplan las operaciones. Algunas operaciones:

- Solicitudes a servidores.
- Operaciones E/S
- Espera de eventos
