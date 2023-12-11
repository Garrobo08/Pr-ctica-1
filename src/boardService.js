const sports = new Map();
let nextId = 0;

addSport({ nombre: "Hockey Patines", fecha:'2004-12', descripcion: "Muy diver" });
addSport({ nombre: "Patinaje", fecha:'2004-11', descripcion: "Muy chupi" });

export function addSport(sport) {
    let id = nextId++;
    sport.id = id.toString();
    sports.set(sport.id, sport);   //La clave de este sport es la sport.id
}

export function deleteSport(id){
    sports.delete(id);           //Se borra la el sport con el id que se introduzca
}

export function getSports(){
    return [...sports.values()]; //Recorremos el mapa 
}

export function getSport(id){
    return sports.get(id);       //Devuelve el id del sport
}