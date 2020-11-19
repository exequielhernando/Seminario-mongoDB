# Seminario MongoDB (NoSQL)
### **Index**

- [Introduccion](#Introduccion)

- [Terminologia](#Terminologia)

- [Tipos de datos](#Tipo-datos)

- [Comandos Basicos](#Comandos-basicos)

- [CRUD en MongoDB](#CRUD)

- [Actividades](#Actividades)

   1. [Actividad 1](#Actividad-1)

   2. [Actividad 2](#Actividad-2)

   3. [Actividad 3](#Actividad-3)

   4. [Actividad 4](#Actividad-4)

- [Proyecto Final](#Proyecto-Final)

- [Resolucion Proyecto Final](#Resolucion-Proyecto-Final)


### **Introduccion**

- **. ¿Qué es MongoDB? .**

    Es una de las bases de datos NoSQL más famosas.

    MongoDB es una base de datos orientada a documentos. Esto quiere decir que en lugar de guardar los datos en registros, guarda los datos en documentos. Estos documentos son almacenados en BSON, que es una representación binaria de JSON.
    
    Una de las diferencias más importantes con respecto a las bases de datos relacionales, es que no es necesario seguir un esquema.
    Los documentos de una misma colección, concepto similar a una tabla de una base de datos relacional, pueden tener esquemas diferentes.

→ [index](#index)
- ### **Terminologia**

                                               ***_SQL                      NoSQL (MongoDB)_***

                                                  Table                     Collection

                                                  Row                       Document

                                                  Column                    Field

                                                  PK                        ObjectId

                                                  Stored Procedure          -

→ [index](#index)
- ### **Tipo-datos**

    - String: Cualquier cadena de caracteres codificada en utf-8. Debe ir entre comillas dobles.
    - Number: Valores numéricos formados por dígitos (con o sin punto decimal). No debe ir entre comillas dobles.
    - Boolean: true o false. Sin comillas.
    - Timestamp: Un dato de 64bits que representa una fecha con hora.
    - Date: Un dato de 32bits que representa una fecha.
    - null: Se refiere a un valor nulo o vacío.
    - undefined: Indica un dato que no ha sido definido.
    - Array: Agrupación de elementos a manera de lista a partir de la posición 0. En MongoDB se pueden usar los métodos de iteración de  arreglos disponibles en JS.

→ [index](#index)
- ### **Comandos-basicos**

    - Start MongoDB server
        - $ mongod
    - Connect to MongoDB using CLI
        - $ mongo
    - Help command
        - help
    - Show databases
        - show dbs
    - Connect or create a database
        - use <dbname>
    - Show collections in current database
        - show collections
    - Create new collection
        - db.createCollection(“countries”)
    - Insert a document
        - db.countries.insert({name: “Argentina”, rank: 10,_id: xxxxxxx})
    - Display all documents in collection
        - db.countries.find()

→ [index](#index)
- ### **CRUD**

    ***_CRUD es un acrónimo por Create, Read, Update y Delete._***

    - [Create](#Create)

    - [Read](#Read)
    
    - [Update](#Update)
    
    - [Delete](#Delete)

    ### **Create**

    - Create: Insert one document

        - db.countries.insert({name: “Brasil”}) 
            *Retorna un WriteResult object*

        - db.countries.insertOne({name: “Brasil”})
            *Retorna el documento creado*

    - Create: Insert multiple documents

        - db.countries.insert([{name: “Chile”}, {name: “Peru”},{name: “Uruguay”}])
            *Retorna un BulkWriteResult object*

        - db.countries.insertMany([{name: “Chile”}, {name: “Peru”},{name: “Uruguay”}])
            *Retorna ObjectIds de los documentos creados*

    ### **Read**

    - Read: Find all documents

        - db.countries.find()

        - db.countries.find({})

        - * > SELECT * FROM countries*

    - Read: Find documents with name “Argentina”

        - db.countries.find({name: “Argentina”,$or: { continente: “América”,poblacion: 100 },})

        - * > SELECT * FROM countries WHERE name = "Argentina" and (continente = “América” or poblacion = 100) *

    - Read: First document only

        - db.countries.find().limit(1)

        - db.countries.findOne()

        - * > SELECT * FROM countries LIMIT 1*

    - Read: Fetch only the “name” field

        - db.countries.find({}, {name: 1})

        - * > SELECT _id, name FROM countries*

        - db.countries.find({}, {name: 1, _id: 0})

        - * > SELECT name FROM countries*    
        
    - Read: Find documents with population > 30

        - db.countries.find({population: {$gt: 30}})

        - * > SELECT * FROM countries WHERE population > 30*
        
            $gt: greater than (>)

    ### **Update**


    - Update: Change food for all countries with name “Argentina”

        - db.countries.updateMany({ name: “Argentina” }, { $set: { food: “Asado” } })

        - * > UPDATE countries SET food = “Asado” WHERE name = “Argentina”*
    
    - Update: Change food for all countries with name “China”

        - db.countries.updateMany( { name: “China” }, { $set: { food: “Arróz” } })

    - Upsert: If doesn’t exist, create it

        - db.countries.updateMany({ name: “China” },{ $set: {food: “Arróz”} }, { upsert: true })
    ### **Delete**


    - Delete: Remove all countries with name “Uruguay”

        - db.countries.deleteMany({name: “Uruguay“})

        - * > DELETE FROM countries WHERE name = “Uruguay”*

    - Delete: Remove only first document with name “Uruguay”

        - db.countries.deleteOne({name: “Uruguay“})

        - * > DELETE FROM countries WHERE name = “Uruguay” LIMIT 1*

→ [index](#index)
### **Actividades**

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

### **Actividad 4**

**1. Utilizar la misma base de datos de películas e insertar varias películas (al menos 30) con distinto contenido.**

    db.movies.insertMany([
        {
            title: "La momia",
            year: 1999,
            rating: 4.2,
            genre: "Aventura",
            description: "Rick O´connel tiene que enterrar a Imhotep quien fue revivido por unos arqueologos",
            actors:["Brendan Fraser", "Rachel Weisz", "John Hannah"],
            country: "EEUU",
            income:84500000,
            duration: 124 
        },
        {
            title: "La momia regresa",
            year: 2001,
            rating: 4.7,
            genre: "Aventura",
            description: "Rick O´connel vuelve a enfrentar a Imhotepp, pero se suma el rey escorpion a la batalla",
            actors:["Brendan Fraser", "Rachel Weisz", "John Hannah", "Dwayne Johnson"],
            country: "EEUU",
            income:10500000,
            duration: 130 
        },
        {
            title: "La momia",
            year: 2017,
            rating: 3.8,
            genre: "Aventura",
            description: "Un equipo de arqueologos de londres descubre la tumba de los caballeros y un misterioso hombre el cual resulta ser una momia egipcia",
            actors:["Tom Cruise", "Annabelle Wallis", "Sofia Boutella", "Jake Johnson"],
            country: "EEUU",
            income:125000000,
            duration: 107 
        },
        {
            title: "Relatos Salvajes",
            year: 2014,
            rating: 4.9,
            genre: "Drama",
            description: "6 historias de momentos de ira de los cuales estamos expuestos dia a dia",
            actors:["Ricardo Darin", "Oscar Martinez", "Leonardo Sbaraglia", "Erica Rivas", "Rita Cortese"],
            country: "Argentina",
            income:4000000,
            duration: 122 
        },
        {
            title: "El clan",
            year: 2015,
            rating: 4.6,
            genre: "Drama",
            description: "Una familia típica, más que una familia, una secta",
            actors:["Guillermo Francella", "Peter Lanzani", "Gaston Cocchiarale"],
            country: "Argentina",
            income: 3500000,
            duration: 110 
        },
        {
            title: "Mi obra maestra",
            year: 2018,
            rating: 3.6,
            genre: "Comedia",
            description: "Un artista simula su muerte para revalorizar sus obras",
            actors:["Guillermo Francella", "Luis Brandoni"],
            country: "Argentina",
            income: 2500000,
            duration: 109 
        },
        {
            title: "La cordillera",
            year: 2017,
            rating: 3.8,
            genre: "Drama",
            description: "Hernán Blanco, el presidente de Argentina, atraviesa un drama político y familiar. Está implicado en un caso de corrupción a través de su yerno",
            actors:["Ricardo Darin", "Dolores Fonzi"],
            country: "Argentina",
            income: 6000000,
            duration: 114 
        },
    ])

**2. Crear índice en field rating y luego hacer búsquedas usando este campo.**

    db.movies.createIndex({ rating : 1 })

    db.movies.find({rating:3.8})
    
    db.movies.find({rating:3.8}).explain("executionStats")
 
**3. Crear índice en title y description, y después hacer búsquedas de texto en estos campos.**

    db.movies.createIndex({
        title: "text",
        description: "text"  
    },
    {
        weights: {
        title: 10,
        description: 5
        },
    })

    db.movies.find(
        {$text: { $search: "Harry" }, {_id:0, title:1}}
    )

    db.movies.find(
        {$text: { $search: "Rocky" }, {_id:0, title:1}}
    )
    
→ [index](#index)

### **Proyecto-Final**

**Trabajo Final**

1.	Construir una aplicación (sin interfaz) utilizando la tecnología que deseen (ej. Node.js, PHP, Java, Python, etc) integrada con MongoDB.


2.	La aplicación debería similar un pequeño eCommerce: manejo de productos y ventas. Puntualmente sería:

	- CRUD de Productos, donde cada uno tiene información como 	nombre, descripción, stock, precio.
	
    - Creación y listado de Ventas, donde cada una relaciona un conjunto de Productos, precio total y dirección de entrega.

3. 	La interface con el backend puede ser de una de las dos maneras:

	- RESTful APIs: Construir HTTP endpoints.

        HTTP POST /products

        HTTP GET /products

        HTTP POST /sales

    - Vía terminal: Poder invocar a la aplicación desde línea de comandos:
        $ node app.js --item=product --action=create --name=”camera” --price=100 --stock=550

        $ node app.js --item=product --action=list

        $ node app.js --item=sale --action=create --products=1,2,3 --totalPrice=250

4.	Entrega: Repositorio de git. Incluir un readme.md con:

    - Instrucciones para levantar el ambiente, 
    - Links con referencias a documentación/tutorial que siguieron
    - Cualquier información consideren relevante.

### **Resultado-Proyecto-Final**

1. La aplicacion fue desarrollada en Node js, express, mongoose

2. Se desarrollo un CRUD de Productos y uno de Ventas de dichos productos

3. Se creo una RESTful API con los siguientes endpoints

    - [API](https://tecnocompras.herokuapp.com)
        
        ## PRODUCTOS

        ### POST /products
        - /productos

        ### GET /products
        - /productos

        ### GET /products/:id
        - /productos/:id

        ### PUT /products
        - /productos/:id

        ### DELETE /products
        - /productos/:id

        ### POST /products
        - /productos

        ## VENTAS

        ### POST /ventas
        - /ventas

         ### GET /ventas
        - /ventas

         ### GET /ventas/:id
        - /ventas

→ [index](#index)
