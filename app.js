require("colors");
const { mostrarMenu } = require("./helpers/mensajes");
const{inquirerMenu, pausa, leerInput} = require('./helpers/inquirer');

const {guardarDB} = require('./helpers/guardarArchivo');

//console.log(`${'M'.red}${'e'.green}${'n'.yellow}${'u'.blue}`); se concatenn las letras de la palabra 'Menu' con un color diferente

//const {gurdarDB} = require('./helpers/guardarArchivo');

const Tareas = require('./models/tareas');

console.clear();



const main = async () =>{
    let opt = '';
    const tareas = new Tareas ();

    do{
        opt = await inquirerMenu();

        switch (opt){
            case '1':
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea(desc);
                break;
            case '2':
                console.log(tareas.listadoArr);
                break;
            default:
                break;
        }
        
        guardarDB(tareas.listadoArr);
        await pausa();

    }while(opt != '0')
    
}

main();