# Documentación del Servicio

En la siguiente URL se encontrará la documentación del servicio: [Documentación del Servicio](http://nest-beantalk-env.eba-7z7gyk2m.us-east-2.elasticbeanstalk.com/api).

Deberá usar la base de la misma para hacer las solicitudes desde Postman, ya que no se pueden agregar encabezados para la autenticación desde Swagger: [Base del Servicio](http://nest-beantalk-env.eba-7z7gyk2m.us-east-2.elasticbeanstalk.com).

Se les proporcionará un usuario administrador para interactuar con aquellos endpoints que fueron requeridos para ese rol. También se proporcionan las rutas `/users/register` y `/auth/login` para registrarse y autenticarse respectivamente. Todos los endpoints, excepto el de login y register, requieren autenticación con JWT. Por lo tanto, al hacer las solicitudes, debe incluir el token de autorización en el encabezado.

## Aclaraciones Respecto al Desarrollo

- Respecto a la consigna de "Construir un backend que tome información de la API pública de Star Wars y que sea utilizada en pos de crear una nueva aplicación de gestión de películas y series", se entendió que se debía usar el mismo esquema que se utilizaba en la API de Star Wars para las películas en la nueva aplicación, lo que permitiría una migración sencilla.
- Por cuestiones de tiempo, el testing está bastante escueto, ya que no se llegó a mockear la interacción entre los servicios de autenticación y películas, por lo que no hay pruebas basadas en roles.
- La autorización en base a roles pudo haber sido expandida en una subdivisión entre roles, autorizaciones y capacidades de cada autorización, pero debido al tamaño del proyecto, se dejaron solo los roles.
- Desde la API de register y login, por razones de simplificación para pruebas, se reciben las contraseñas en texto plano y luego se almacenan cifradas. En un entorno de producción, las contraseñas también deberían cifrarse cuando las envía el frontend que integra la aplicación.
