# Seminario MongoDB (NoSQL)

## Actividad

**1. Instalar MongoDB en ambiente local.**

**2. Conectarse a MongoDB vía CLI.**

    $ mongo

**3. Crear una nueva base de datos llamada futbolfifa.**

    use futbolfifa

**4. Crear una nueva collection llamada players.**

    db.createCollection("players")

**5. Insertar 5 documentos en la collection players con datos básicos (nombre, apellido, posición, fecha de nacimiento, etc).**

    db.players.insert([
        {
            name:"Lionel", 
            apellido: "Messi", 
            posicion: "Delantero", 
            fechaNacimiento: ISODate("1980-07-14T22:23:21.210Z"), 
            nacionalidad: "Argentino" 
        },
        {
            name:"Diego Armando", 
            apellido: "Maradona", 
            posicion: "Delantero", 
            fechaNacimiento: ISODate("1960-07-14T22:23:21.210Z"), 
            nacionalidad: "Argentino" 
        },
        {
            name:"Cristiano", 
            apellido: "Ronaldo", 
            posicion: "Delantero", 
            fechaNacimiento: ISODate("1977-02-05T22:23:21.210Z"), 
            nacionalidad: "Portugues" 
        },
        {       
            name:"Juan Fernando", 
            apellido: "Quinteros", 
            posicion: "Mediocampista", 
            fechaNacimiento: ISODate("1990-03-14T22:23:21.210Z"), 
            nacionalidad: "Colombiano" 
        },
        {
            name:"Luis", 
            apellido: "Suarez", 
            posicion: "Delantero", 
            fechaNacimiento: ISODate("1982-07-14T22:23:21.210Z"), 
            nacionalidad: "Uruguayo" 
        }

    ])


**6. Listar todos los documentos de la collection players.**

    $db.players.find()

**7. Crear otras collections con documentos (ej. teams, games, etc).**

    $db.createCollections("teams")
    {
            name:"Barcelona", 
            liga: "La liga", 
            pais: "España", 
        },
    $db.teams.insert([
        {
            name:"River Plate", 
            liga: "Superliga Argentina", 
            pais: "Argentina", 
        },
        {
            name:"Santos", 
            liga: "Brasileirao", 
            pais: "Brasil", 
        },
        {
            name:"Liverpool", 
            liga: "Premier Ligue", 
            pais: "Inglaterra", 
        },
        {
            name:"Bayer Munich", 
            liga: "Bundesliga", 
            pais: "Alemania" 
        }

    ])