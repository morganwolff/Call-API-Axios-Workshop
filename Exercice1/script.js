import axios from 'axios';

const url = 'https://api.open-meteo.com/v1/forecast?latitude=43.70&longitude=7.27&hourly=temperature_2m';

async function getinfos() {
    axios.get(url)
        .then(response => {
            console.log("data: " + JSON.stringify(response.data));
        })
        .catch(error => {
            console.log("Error: " + error);
        });
}

async function launchScript() {
    await getinfos();
}

launchScript();