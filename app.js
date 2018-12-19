const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion para obtener el clima'
    }
}).argv;

const getInfo = async(direccion) => {

    try {
        let resp = await lugar.getLatLng(direccion);
        let temp = await clima.getTemperature(resp.lat, resp.lng);
        return `El clima en ${direccion} es de ${temp.temperature}`;
    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));