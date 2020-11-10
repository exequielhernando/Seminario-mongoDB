# Seminario MongoDB (NoSQL)

### **Index**

1. [Actividad 1](#Actividad-1)

2. [Actividad 2](#Actividad-2)

3. [Actividad 3](#Actividad-3)

### **Actividad 1**


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

→ [index](#index)

### **Actividad 2**

**1 Crear una nueva base de datos de un sistema de streaming de video (ej. Netflix, Flow, Amazon Prime) que permita almacenar movies.**

    use Flow

**2 Para cada movie, se debería guardar información como título (String), year (Number), rating (Number, entre 1.0 y 5.0), genre (String), description (String), actors (Array<String>), country (String), income (Number), duration (Number).**

    db.createCollection("movies")

    db.movies.insert(
        {
            title: "Rocky 1",
            year: 1976,
            rating: 4.2,
            genre: "Accion",
            description: "Basada en la historia de un boxeador poco conocido al cual le dan la chance de pelear porel titulo mundial",
            actors:[
                {
                    name:"Silvester Stalone"
                },
                {
                    name:"Mickael Jackson"
                },
                {
                    name: "Sharon Stone"
                }
            ],
            country: "EEUU",
            income:505465,
            duration: 118
        }
    )

**3 Agregar películas usando insert(), insertOne() & insertMany().**

    db.movies.insertOne(
        {
            title: "Rocky 2",
            year: 1979,
            rating: 4.5,
            genre: "Accion",
            description: "La revancha de Rocky contra Apollo por el titulo",
            actors:["Silvester Stalone", "Mickael Jackson", "Sharon Stone"],
            country: "EEUU",
            income:798465,
            duration: 128 
        }
    )

    db.movies.insert([
        {
            title: "Rocky 3",
            year: 1983,
            rating: 4.0,
            genre: "Accion",
            description: "Rocky tiene un nuevo rival el cual mato a su amigo Apollo",
            actors:["Silvester Stalone", "Mickael Jackson", "Sharon Stone", "Mike Tyson"],
            country: "EEUU",
            income:1298465,
            duration: 108 
        },
        {
            title: "Rocky 4",
            year: 1987,
            rating: 4.8,
            genre: "Accion",
            description: "Rocky contra el tanque ruso",
            actors:["Silvester Stalone", "Mickael Jackson", "Sharon Stone", "Ruso Polaski"],
            country: "EEUU",
            income:1798465,
            duration: 138 
        },
        {
            title: "Rocky 5",
            year: 1993,
            rating: 4.1,
            genre: "Accion",
            description: "Rocky vuelve al barrio y se encuentra con un aprendiz, dispuesto a luchar por el titulo",
            actors:["Silvester Stalone", "Mickael Jackson", "Sharon Stone", "Tommy Gun"],
            country: "EEUU",
            income:1498465,
            duration: 112 
        }
    ])

    db.movies.insertMany([
        {
            title: "Harry Potter 1",
            year: 2001,
            rating: 4.9,
            genre: "Fantasia",
            description: "Harry descubre la verdad sobre sus origenes",
            actors:["Daniel Radclife", "Emma Watson", "Rupert Green"],
            country: "Reino Unido",
            income:1500000,
            duration: 130 
        },
        {
            title: "Harry Potter 2",
            year: 2002,
            rating: 4.4,
            genre: "Fantasia",
            description: "La camara de los secretos ha sido abierta",
            actors:["Daniel Radclife", "Emma Watson", "Rupert Green"],
            country: "Reino Unido",
            income:2340000,
            duration: 126 
        },
        {
            title: "Harry Potter 3",
            year: 2004,
            rating: 4.7,
            genre: "Fantasia",
            description: "Sirius Black se ha escapado de Azkaban",
            actors:["Daniel Radclife", "Emma Watson", "Rupert Green", "Sirius Black"],
            country: "Reino Unido",
            income:4300000,
            duration: 133 
        },
        {
            title: "Harry Potter 4",
            year: 2005,
            rating: 4.3,
            genre: "Fantasia",
            description: "El torneo de los tres magos comienza, quien ganará?",
            actors:["Daniel Radclife", "Emma Watson", "Rupert Green", "Robert Pattinson"],
            country: "Reino Unido",
            income:12500000,
            duration: 142 
        },{
            title: "Harry Potter 5",
            year: 2007,
            rating: 4.8,
            genre: "Fantasia",
            description: "La orden del fenix vuelve a formarse para combatir el mal",
            actors:["Daniel Radclife", "Emma Watson", "Rupert Green", "Luna Lovegood"],
            country: "Reino Unido",
            income:14500000,
            duration: 133 
        },
        {
            title: "Harry Potter 6",
            year: 2009,
            rating: 4.1,
            genre: "Fantasia",
            description: "El principe mestizo deslumbra a Harry con sus conocimientos",
            actors:[name:"Daniel Radclife", "Emma Watson", "Rupert Green", "Alan Rickman"],
            country: "Reino Unido",
            income:16500000,
            duration: 141 
        },
        {
            title: "Harry Potter 7",
            year: 2010,
            rating: 5.0,
            genre: "Fantasia",
            description: "La batalla final está por comenzar",
            actors:["Daniel Radclife", "Emma Watson", "Rupert Green", "Lord Voldemort"],
            country: "Reino Unido",
            income:23500000,
            duration: 180 
        }
    ])

**4 Actualizar películas agregando el field highlighted=true a aquellas con rating > 4.5.**

    db.movies.updateMany(
        {
            rating: { 
                    $gt:4.5 
            }
        },
        { 
            $set: { 
                highlighted: true 
            } 
        }
    )

**5. 	Actualizar películas cambiando el genre “drama” por “bored”.**

    db.movies.updateMany(
        {
            genre : "drama"
        },
        { 
            $set: { 
                genre: "bored" 
            } 
        }
    )
**6. 	Borrar todas las películas que tengan más de 30 años.**

    db.movies.deleteMany(
        {
            year: {$gt:1990}
        }
    )


**7. 	Buscar todas las películas argentinas.**

    db.movies.deleteMany(
        {
            country: "Argentina"
        }
    )

**8.	Buscar todas las películas de acción con un buen rating (ej. > 4.0) que hayan salido los últimos 2 años.**

    db.movies.find(
        {
            genre: "action",
            highlighted : true,
            year: {$gt:2018}
        },
        {
            title: 1
        }
    )

→ [index](#index)

### **Actividad 3**

**1. Utilizar la misma base de datos de películas e insertar varias películas con distinto contenido.**

    db.movies.insertMany([
        {
            title: "Rapido y Furioso",
            year: 2001,
            rating: 4.9,
            genre: "Accion",
            description: "Brian O´conner investiga a Toreto",
            actors:["Vin Diesel", "Paul Walker", "Jordana Brewster", "Michelle Rodriguez"],
            country: "EEUU",
            income:38000000,
            duration: 107 
        },
        {
            title: "Rapido y Furioso 2",
            year: 2003,
            rating: 4.3,
            genre: "Accion",
            description: "Brian O´conner investiga a un capo de la droga",
            actors:["Tyrese Gibson", "Paul Walker", "Chris Bridges", "Devon Aoki"],
            country: "EEUU",
            income:76000000,
            duration: 107 
        },
       {
            title: "Rapido y Furioso 3",
            year: 2006,
            rating: 4.1,
            genre: "Accion",
            description: "Sean se muda con su padre a tokio para que no lo metan en prision y comienza con las carreras de draf",
            actors:["Lucas Black", "Sung Kang", "Bow Wow", "Leonardo Nam"],
            country: "EEUU",
            income:85000000,
            duration: 104 
        },
        {
            title: "Rapidos y Furiosos",
            year: 2009,
            rating: 4.4,
            genre: "Accion",
            description: "Brian y Toreto se vuelven a encontrar para descubrir al asesino de Letty",
            actors:["Vin Diesel", "Paul Walker", "Michelle Rodriguez", "Jordana Brewster", "Gal Gadot", "Don Omar"],
            country: "EEUU",
            income:85000000,
            duration: 107 
        },
        {
            title: "Rapidos y Furiosos 5ntrol",
            year: 2011,
            rating: 4.8,
            genre: "Accion",
            description: "Brian y Toreto se reunen con Vince en brasil e intentar robarle al capo más grande de la droga",
            actors:["Vin Diesel", "Paul Walker", "Michelle Rodriguez", "Jordana Brewster", "Gal Gadot", "Don Omar", "Tego Calderon"],
            country: "EEUU",
            income:125000000,
            duration: 130 
        },
    ])

**2. Listar todas las películas del año 2018.**
 
    db.movies.find(
        {
            year:2018
        }
    )

**3. Listar las 10 primeras películas de Hollywood.**

    db.movies.find( { country: "Hollywood" } ).limit(10)

**4. Listar las 5 películas más taquilleras.**

    db.movies.find( { } ).sort( {rating:1} ).limit(5)

**5. Listar el 2do conjunto de 5 películas más taquilleras.**

    db.movies.find( { } ).sort( {rating:1} ).skip(5).limit(5)

**6. Repetir query 3 y 4 pero retornando sólo el título y genre.**

    db.movies.find( { country: "Hollywood" }, {title:1, genre:1, _id:0} ).limit(10)

    db.movies.find( { },{title:1, genre:1, _id:0} ).sort( {rating:1} ).limit(5)


**7. Mostrar los distintos países que existen en la base de datos.**

    db.movies.distinct("country")

→ [index](#index)