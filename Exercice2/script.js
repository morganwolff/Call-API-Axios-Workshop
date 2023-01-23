import axios from 'axios';

let url = 'http://localhost:3000/posts/';
const data = {
   title: 'My title',
   body: 'Premier Post de Morgan Wolff',
   userId: 1
};

async function postinfos() {
    axios.post(url, data)
    .then(() => {
        console.log("Successfully Posted");
    })
    .catch(error => {
        console.log(error);
    });
}
 async function launchScript() {
    await postinfos();
}

await launchScript();