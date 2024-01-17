//Importa las funciones necesarias de los módulos 'url' y 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
//Estas funciones se utilizan para trabajar con rutas de archivos y directorios.

// Exportando la constante __dirname que contiene la ruta al directorio actual
export const __dirname = dirname(fileURLToPath(import.meta.url));

/*Se exporta la constante __dirname, que contiene la ruta al directorio actual. 
  Se utiliza fileURLToPath para convertir la URL del módulo actual (import.meta.url) 
  en una ruta de sistema de archivos, y luego dirname para obtener el directorio correspondiente.*/