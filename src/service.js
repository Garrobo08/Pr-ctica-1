const sports = new Map();
let nextId = 0;
//Deportes de Ejemplo (la página se crea con ellos por defecto)
addSport({ 
    nombre: "Hockey Patines",
    fecha:'2004-12', 
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
addSport({
    nombre: "Patinaje",
    fecha:'2004-11',
    descripcion: "Muy chupi",
    img:"https://images-eu.ssl-images-amazon.com/images/I/81fmr6cplSL._AC_UL600_SR600,600_.jpg",
    check:"Deporte sorbre ruedas",
    tipo:"Individual",
    reglamento:[{
        
    }]
     });





//FUNCIONES
//Añadir nuevo elemento
export function addSport(sport) {
    let id = nextId++;
    sport.id = id.toString();
    sports.set(sport.id, sport);   //La clave de este sport es la sport.id
}
//Eliminar elemento, como los elementos pertenecen a un mapa borramos la clave y su valor asociado
export function deleteSport(id){
    sports.delete(id);            //Se borra el elemento sport de sports que tenga una clave con ese id 
}

export function getSports(){
    return [...sports.values()]; //Recorremos el mapa y se muestra
}

export function getSport(id){
    return sports.get(id);       //Devuelve el id del sport
}

//Añadir subelemento
export function addRule(id,{nombre, info, dir}) {
    const modificado = sports.get(id);   //La id del elemento es un parámetro que se mantiene inmutable ante las operaciones del subelemento
    if (!modificado.reglamento) {        //Para evitar que esté Undefined y de problemas
        modificado.reglamento = [];
    }
    let regla = {nombre, info, dir};        
    modificado.reglamento.push(regla);   //Reglamento es un array de reglas, las reglas son objetos con tres propiedades
}
//Función para editar un elemento de mapa (necesitamos su clave, modificamos sus parámetros)
export function editSport(id, {nombre, fecha, descripcion, img, tipo, check}){
    const modificado = sports.get(id);
    modificado.nombre = nombre !== undefined ? nombre : modificado.nombre;      //Si nombre no es undefined entonces nombre:modficado.nombre
    modificado.fecha = fecha !== undefined ? fecha : modificado.fecha;
    modificado.descripcion = descripcion !== undefined ? descripcion : modificado.descripcion;
    modificado.img = img !== undefined ? img : modificado.img;
    modificado.tipo = tipo !== undefined ? tipo : modificado.tipo;
    modificado.check = check !== undefined ? check : modificado.check;
    sports.set(id, modificado); //Los elementos del mapa se actualizan de acuerdo con su id.
}

