const axios = require('axios');

const getTemperature = async(lat, lng) => {

    let temperature = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=dd756f31d5e279f57563a7d3102ab26c`);

    if (temperature.data.cod == 400) {
        throw new Error(`No se encontro una latitud y longitud `);
    }

    return {
        temperature: temperature.data.main.temp
    }
}
module.exports = {
    getTemperature
}