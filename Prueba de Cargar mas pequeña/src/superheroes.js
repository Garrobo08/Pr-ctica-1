// Definiendo un Map para almacenar superhéroes y un contador de ID
const superheroes = new Map();
let id = 0;

// Función para agregar un superhéroe al Map
export function addSuperhero(superhero) {
    superheroes.set(id, superhero);
    superhero.id = id;
    id++;
}

// Función para obtener un superhéroe por su ID
export function getSuperhero(id) {
    return superheroes.get(id);
}

// Función para obtener superhéroes en un rango específico
export function getSuperheroes(from, to) {
    let values = [...superheroes.values()];
    if (from !== undefined) {
        return values.slice(from, to);
    } else {
        return values;
    }
}

// Función para cargar datos de ejemplo en el Map
export function loadSampleData() {

    //List obtained from https://comicvine.gamespot.com/profile/wrestlgurl/lists/top-25-superheroes/43101/
//Deportes de Ejemplo (la página se crea con ellos por defecto)
addSuperhero({ 
    nombre:"Hockey Patines",
    fecha:'1710-12', 
    descripcion:"Hockey patines es una de las muchas variantes del hockey. Su creacion fue a finales del siglo XIX y se le acredita al estadounidense Edward Crawford,quien buscó crear un variante del hockey sobre hielo que pudiese jugarse sobre madera. Su práctica se extendió muy rápido por Europa y a principios del siglo XX llegó también a Latinoamérica. En el caso de España, el deporte se introdujo en septiembre de 1936, cuando se federó el primer equipo en Sardañola del Vallés (Barcelona).Un partido de hockey patines se juega en una pista, ya sea o de parquet o terrazo, de dimeniones 40x20 metros. Alrededor de la pista debe gaber una valla que llegue a la altura de la cintura de los jugadores proximadamente. La pista se divide en dos campos y posee dos porterías, de 1,7x1 metros, situadas cada una a un extremo de la pista. A lo largo de un partido se enfrentarán dos equipos con el objetivo de marcar más goles que el rival. El equipo que más goles consiga al acabar el partido será el ganador.Actualmente es un deporte practicado especialmente en el norte de España destacando las zonas de Asturias y Cataluña. La Selección Española ha conseguido ser campeona del mundo más de 15 veces, destacando tanto la selección masculina como la femenina",
    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Tasha_Lee.jpg/1200px-Tasha_Lee.jpg",
    check:"Deporte de contacto",
    tipo:"en Equipo",
    reglamento:[{
        nombre: "Tarjeta Azul",
        info: "el árbitro recurre a ésta si algún miembro del equipo ha cometido una infracción grave. En el caso del jugador, saldrá de pista y no podrá jugar durante 2 minutos, dejando al equipo infractor con tres jugadores. El equipo no infractor, lanzará un Directo, en caso de gol el partido volverá a la normalidad. En caso contrario el equipo infractor jugará con tres jugadores hasta que pasen los dos minutos o haya un gol.",
        dir: "Jugador, Entrenador, Staff."
    }]
});

addSuperhero({ 
    nombre:"Atletismo",
    fecha:'776-01', 
    descripcion:"El atletismo es una de las disciplinas deportivas más antiguas y fundamentales en la historia de la humanidad. Tiene sus raícesen la antigua Grecia, donde los Juegos Olímpicos antiguos, que comenzaron alrededor del año 776 a.C., incluían competiciones atléticas. Los griegos celebraban eventos como la carrera a pie, lanzamiento de disco, lanzamiento de jabalina, salto de longitud y lucha libre, entre otros. Estos juegos se realizaban como parte de festivales religiosos en honor a los dioses. El atletismo se ha diversificado en varias disciplinas, que incluyen carreras de velocidad, carreras de resistencia, saltos, lanzamientos y pruebas combinadas, cada una con sus propias técnicas y  strategias específicas. Es un deporte que no solo requiere habilidad física, sino también una gran disciplina, entrenamiento constante y determinación.",
    img:"https://img.freepik.com/foto-gratis/vista-frontal-nina-pista-atletismo_23-2148268054.jpg?size=626&ext=jpg&ga=GA1.1.1016474677.1696723200&semt=ais",
    check:"Deporte de velocidad",
    tipo:"Individual",
    reglamento:[{
        nombre: "Salida",
        info: "Los atletas deben permanecer en sus respectivos carriles hasta que se dé la señal de partida. Cualquier salida temprana se considera una falta o una salida falsa.",
        dir: "Jugador."
    }]
});

addSuperhero({ 
    nombre:"Boxeo",
    fecha:'1743-08', 
    descripcion:"Se cree que el boxeo tiene sus orígenes en civilizaciones antiguas como Egipto, Grecia y Roma, donde se practicaban formas primitivas de lucha con los puños.En la antigua Grecia, el boxeo era parte de los Juegos Olímpicos y se llevaba a cabo sin guantes y con reglas menos estructuradas en comparación con el boxeo moderno. El boxeo moderno comenzó a tomar forma en el siglo XVIII en Inglaterra, donde se introdujeron reglas y se popularizó como un deporte organizado. En 867, se establecieron las Reglas de Queensberry, que incluían el uso de guantes, límites de tiempo y otros estándares que sentaron las bases del boxeo moderno.El boxeo no solo es un deporte de alto rendimiento físico y técnico, sino que también ha sido un vehículo para historias emocionantes y rivalidades legendarias, convirtiéndose en un elemento icónico en la cultura popular y deportiva.",
    img:"https://thumbs.dreamstime.com/b/golpear-boxeador-14504064.jpg",
    check:"Deporte de velocidad",
    tipo:"Individual",
    reglamento:[{
        nombre: "Protección y derribo:",
        info: "Cuando un púgil es derribado, dispone de 10 segundos para levantarse y volver a la pelea. Es lo que en las reglas del boxeo se denomina Conteo de Protección. Durante este tiempo, el contrincante debe estar en la esquina neutral más alejada del ring de boxeo y no puede golpear ni acechar hasta que el árbitro continúe la contienda.",
        dir: "Jugador."
    }]
});

addSuperhero({ 
    nombre:"Esgrima",
    fecha:'1190-01', 
    descripcion:"La esgrima, arte marcial y deporte de combate, se remonta a la antigüedad como habilidad fundamental en batallas y duelos. Surgió en civilizaciones antiguas como un medio de defensa personal y se desarrolló durante el Renacimiento como destreza esencial para la nobleza y la clase militar en Europa. Con el tiempo, evolucionó hacia un deporte competitivo, siendo parte de los Juegos Olímpicos desde 1896.Se practica en tres modalidades principales: florete, espada y able, destacando por su precisión, velocidad y estrategias tácticas. La esgrima moderna combina el arte del combate con armas blancas y mantiene su estatus como un deporte técnico y elegante, heredero de una rica historia marcial.",
    img:"https://img.freepik.com/fotos-premium/retrato-hombre-esgrimista-mascara-lamina-realizando-pelea_165383-463.jpg",
    check:"Deporte de contacto",
    tipo:"Individual",
    reglamento:[{
        nombre: "Combate",
        info: "El combate se lleva a cabo en una banda estrecha sobre una pista de material, en donde los tiradores deben realizar el combate y, dependiendo del arma utilizada, los esgrimistas deberán actuar de determinada forma",
        dir: "Jugador."
    }]
});

addSuperhero({ 
    nombre:"Gimnasia Artística",
    fecha:'1811-10', 
    descripcion:"La gimnasia artística tiene sus raíces en la antigua Grecia, donde era parte integral de la educación física. Durante el Renacimiento, resurgió en Europa como una disciplina artística y deportiva. En el siglo XIX,se formalizó como deporte competitivo con la fundación de la Federación Internacional de Gimnasia. En 1896, se incluyó en los primeros Juegos Olímpicos modernos. La gimnasia artística se caracteriza por rutinas que incluyen ejercicios de suelo, barras asimétricas, barra fija, viga de equilibrio y caballete con arcos. A lo largo del tiempo, ha evolucionado en técnica, precisión y complejidad, destacando la elegancia y destreza de los gimnastas.Es un deporte que combina habilidades acrobáticas y artísticas, siendo un pilar fundamental en competiciones internacionales como los Juegos Olímpicos.",
    img:"https://i.pinimg.com/736x/84/46/e2/8446e28a3b1ee1e1b2f46ff2d7099006.jpg",
    check:"Deporte acrobático",
    tipo:"Individual",
    reglamento:[{
        nombre: "Salida del área de competencia:",
        info: "si un gimnasta sale del área de competencia durante su rutina, ya sea por error o por perder el control, se considera una falta. Se puede penalizar con una deducción en la puntuación o incluso la descalificación, dependiendo de la situación.",
        dir: "Jugador."
    }]
});

addSuperhero({ 
    nombre:"Gimnasia Rítmica",
    fecha:'1940-01', 
    descripcion:"La gimnasia rítmica, surgida a finales del siglo XIX en Europa del Este, se centra en la ejecución de movimientos artísticos y coreografiados combinados con el manejo de aparatos como la cuerda, aro, pelota, mazas y cinta. A principios del siglo XX, se establecieron las bases de esta disciplina, que fusiona elementos de danza, ballet y gimnasia. En 1963, la Federación Internacional de Gimnasia (FIG) la reconoció como deporte independiente, y desde 1984 es parte de los Juegos Olímpicos. La gimnasia rítmica destaca por su expresión artística, flexibilidad, gracia y precisión en la ejecución de movimientos, siendo una disciplina que combina la destreza física con la creatividad coreográfica y musical.",
    img:"https://i.pinimg.com/236x/c6/e2/41/c6e24184d12a85418740ea7125728e33.jpg",
    check:"Deporte acrobático",
    tipo:"Individual",
    reglamento:[{
        nombre: "Área de Competencia:",
        info: " El área de competencia en la gimnasia rítmica se conoce como el “tapiz” o “manta” (“carpet” en inglés). Es una superficie rectangular y flexible, generalmente de 13 metros de longitud y un ancho de 13 metros.",
        dir: "Jugador."
    }]
});

addSuperhero({ 
    nombre:"Motocross",
    fecha:'1924-04', 
    descripcion:"El motocross, nacido en la década de 1920 en el Reino Unido, se consolidó como deporte en la década de 1950 en Europa. La competición de motocicletas off-road sobre terrenos accidentados evolucionó rápidamente, con el Campeonato Mundial de Motocross establecido en 1957. Su popularidad creció en los Estados Unidos en los años 60 y 70, diversificándose en diferentes categorías como supercross y endurocross. El deporte ha sido un campo de innovación tecnológica en la industria de las motocicletas. A lo largo de su historia, el motocross ha atraído a una base de fanáticos apasionados y continúa siendo una disciplina emocionante y desafiante en el mundo del deporte del motor.",
    img:"https://images.pexels.com/photos/140143/pexels-photo-140143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    check:"Deporte a motor",
    tipo:"Individual",
    reglamento:[{
        nombre: "Dimensiones:",
        info: "el circuito debe ser de 1200 metros, mínimo; la velocidad máxima es de 50km/h y utilizar el equipo de seguridad obligatorio (casco, guantes, gafas, botas adecuadas, peto, rodilleras y coderas).",
        dir: "Jugador."
    }]
});

addSuperhero({ 
    nombre:"Ciclismo",
    fecha:'1868-05', 
    descripcion:"Las distancias varían entre competencias, sin embargo, el máximo de distancia a recorrer es de 280 km para hombres y 160 km para mujeres. En los Juegos Olímpicos, la distancia es de 241.5 km para los hombres y 141 km para las mujeres.",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCRF3kN7E9OAol2tkFYRLShTgR_en6u-u2zPqc5E3k8B1wHbgt8zIYDKPpjzZFbuTI_Xo&usqp=CAU",
    check:"Deporte sobre ruedas",
    tipo:"Individual",
    reglamento:[{
        nombre: "Distancias:",
        info: "Las distancias varían entre competencias, sin embargo, el máximo de distancia a recorrer es de 280 km para hombres y 160 km para mujeres. En los Juegos Olímpicos, la distancia es de 241.5 km para los hombres y 141 km para las mujeres.",
        dir: "Jugador"
    }]
});

}

// Cargando datos de ejemplo al inicio
loadSampleData();