# CRUD-BLOG
El proyecto del CRUD-blog es una aplicación web que proporciona un conjunto de funcionalidades, varias de ellas son las siguientes:
Inicio del Proyecto:

1.- Modelo de Datos: Se define la interfaz para los objetos principales del proyecto, que son las publicaciones del blog. La interfaz se llama "Post" y tiene campos como ID, título y cuerpo.

2.- Servicio de Conexión a la Base de Datos: Se crea un servicio llamado "PostService" dentro de la carpeta "post" para manejar todas las operaciones CRUD.
El servicio utiliza la API del servicio web JSONPlaceholder como proveedor de datos. Proporciona métodos para obtener todas las publicaciones, crear una nueva publicación, buscar una publicación por ID, actualizar una publicación y eliminar una publicación.

3.- Desarrollo de Componentes: Se desarrollan cuatro componentes para cada acción del CRUD: listado, vista individual, creación y actualización de publicaciones.
Cada componente se implementa con las funcionalidades correspondientes y se engloba en una carpeta denominada "post".
Se configuran las rutas del proyecto en el archivo "app.routes.ts" para permitir la navegación entre los diferentes componentes.

4.- Componente de Listado de Publicaciones: Muestra un listado de todas las publicaciones del blog en una tabla. Cada fila de la tabla incluye el ID, título y cuerpo de la publicación, así como botones para ver, editar y eliminar la publicación.

5.- Componente de Creación de Publicaciones: Utiliza un formulario reactivo para crear nuevas publicaciones. Valida los campos del formulario y realiza la inserción de la nueva publicación en la base de datos.

6.- Componente de Edición de Publicaciones: Similar al componente de creación, pero incorpora un parámetro que viene a través de la URL para identificar la publicación que se quiere editar. Implementa la lógica para localizar la publicación a editar y presenta los datos en un formulario prellenado para su modificación.

7.- Componente de Visualización de Publicaciones: Muestra los detalles de una publicación específica en una vista individual. Permite al usuario ver el contenido completo de la publicación sin la opción de editarla.

Por lo tanto, proporciona un conjunto completo de funcionalidades para gestionar las publicaciones de un blog, incluyendo la creación, visualización, edición y eliminación de las mismas.