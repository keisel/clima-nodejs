const axios = require('axios');

const getLatLng = async(direccion) => {

    let url = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${url}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`);

    if (resp.data.status == 'ZERO_RESULTS') {
        throw new Error(`No se encontro una direccion `);
    }
    let lugar = resp.data.results[0].geometry.location;
    let lat = lugar.lat;
    let lng = lugar.lng;

    return {
        lat: lat,
        lng: lng
    }
}
module.exports = {
    getLatLng
}