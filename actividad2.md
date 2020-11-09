# Actividad 2 

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
            actors:[
                {
                    name:"Silvester Stalone"
                },
                {
                    name:"Mickael Jackson"
                },
                {
                    name: "Sharon Stone"
                },
                {
                    name: "Mike Tyson"
                }
            ],
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
            actors:[
                {
                    name:"Silvester Stalone"
                },
                {
                    name:"Mickael Jackson"
                },
                {
                    name: "Sharon Stone"
                },
                {
                    name: "Ruso Polaski"
                }
            ],
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
            actors:[
                {
                    name:"Silvester Stalone"
                },
                {
                    name:"Mickael Jackson"
                },
                {
                    name: "Sharon Stone"
                },
                {
                    name: "Tommy Gun"
                }
            ],
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
            actors:[
                {
                    name:"Daniel Radclife"
                },
                {
                    name:"Emma Watson"
                },
                {
                    name: "Rupert Green"
                }
            ],
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
            actors:[
                {
                    name:"Daniel Radclife"
                },
                {
                    name:"Emma Watson"
                },
                {
                    name: "Rupert Green"
                }
            ],
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
            actors:[
                {
                    name:"Daniel Radclife"
                },
                {
                    name:"Emma Watson"
                },
                {
                    name: "Rupert Green"
                },
                {
                    name: "Sirius Black"
                }
            ],
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
            actors:[
                {
                    name:"Daniel Radclife"
                },
                {
                    name:"Emma Watson"
                },
                {
                    name: "Rupert Green"
                },
                {
                    name: "Robert Pattinson"
                }
            ],
            country: "Reino Unido",
            income:12500000,
            duration: 142 
        },{
            title: "Harry Potter 5",
            year: 2007,
            rating: 4.8,
            genre: "Fantasia",
            description: "La orden del fenix vuelve a formarse para combatir el mal",
            actors:[
                {
                    name:"Daniel Radclife"
                },
                {
                    name:"Emma Watson"
                },
                {
                    name: "Rupert Green"
                },
                {
                    name: "Luna Lovegood"
                }
            ],
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
            actors:[
                {
                    name:"Daniel Radclife"
                },
                {
                    name:"Emma Watson"
                },
                {
                    name: "Rupert Green"
                },
                {
                    name: "Alan Rickman"
                }
            ],
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
            actors:[
                {
                    name:"Daniel Radclife"
                },
                {
                    name:"Emma Watson"
                },
                {
                    name: "Rupert Green"
                },
                {
                    name: "Lord Voldemort"
                }
            ],
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