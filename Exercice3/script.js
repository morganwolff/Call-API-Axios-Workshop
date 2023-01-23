import axios from 'axios';

let idtosupp = 1; //ID_TO_DELETE
let url = 'http://localhost:3000/posts/';
const data = {
   title: 'My title',
   body: 'Premier Post de Morgan Wolff',
   userId: 1
};

async function deleteinfos() {
    const url = 'http://localhost:3000/posts/' + idtosupp;
    axios.delete(url)
		.then(() => {
        console.log("Successfully Deleted");
    })
    .catch(error => {
        console.log(error);
    });
}

 async function launchScript() {
    await deleteinfos();
}

await launchScript();