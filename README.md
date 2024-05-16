<p align="center" >
  <a href="https://riwi.io/" target="blank"><img src="https://riwi.io/wp-content/uploads/2023/07/Fondo-claro-logo.png" width="500" alt="RIWI Logo" /></a>
</p>
  <h1 align="center"> Exercise TypeORM</h1>  


## Description

The goal is to solve the next US:

Como desarrollador, quiero crear una API con un CRUD para practicar el uso del ORM TypeORM con PostgreSQL.

Criterios de Aceptación:

1.  Configuración de la Base de Datos:

- Utilizar los datos de acceso de la base de datos del proyecto de books existente.

- Garantizar que no se expongan variables de entorno en Git.

2. Desarrollo de la API:

- Implementar un CRUD completo utilizando NestJS con Typescript, TypeORM y PostgreSQL.

- Definir un modelo básico de una tabla sobre un tema a elección personal. Ejemplo: Videojuegos favoritos (ID, Nombre del juego, Descripción, Calificación, Comentario).

3. Prácticas de Desarrollo:

- Seguir las mejores prácticas de desarrollo, incluido el uso de Gitflow.

4. Repositorio en GitHub:

- Subir el repositorio a GitHub.

- Compartir el enlace del repositorio con el correo electrónico del (TL): stiven.loaiza@riwi.io.

Notas adicionales:

1. Se espera un código limpio y legible, con comentarios descriptivos donde sea necesario.
2. Todos los cambios deben ser realizados en ramas de características y fusionados a la rama principal a través de solicitudes de extracción (pull requests).
3. Se debe incluir un archivo README.md con instrucciones claras sobre cómo ejecutar y probar la API localmente.


## Installation

To use this API on your local machine, please clone the repository and configure the necessary environment variables for the database and JWT.T

1. Clone the repository.

```bash
$ git clone https://github.com/manutorres93/orcas-club.git
$ cd orcas-club

```

2. Install the necessary dependencies.
```bash
$ npm install
# npm reads the package.json file in the project and looks for all the dependencies listed in it. Then, it downloads those dependencies from the npm registry.
```


## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Manuela Torres](https://github.com/manutorres93)

## License

Nest is [MIT licensed](LICENSE).