// const req = new XMLHttpRequest();
// let data;

// req.onload = function () {
//   data = JSON.parse(this.responseText);
//   console.log(data);
// };

// req.onerror = function () {
//   console.log('Error', this);
// };

// req.open('GET', 'https://swapi.dev/api/people/1', true);
// myReq.setRequestHeader('Accept', 'application/json');
// req.send();

// fetch('https://swapi.dev/api/people/1')
//   .then((res) => {
//     console.log('Request ke 1')
//     if (!res.ok) {
//       throw Error('Could not fetch the data for that resource');
//     }
//     return res.json();
//   })
//   .then((data) => {
//     console.log('json ke 1', data);
//     return fetch('https://swapi.dev/api/people/2');
//   })
//   .then((res) => {
//     console.log('Request ke 2');
//     if (!res.ok) {
//       throw Error('Could not fetch the data for that resource');
//     }
//     return res.json();
//   })
//   .then((data) => {
//     console.log('json ke 2', data);
//   })
//   .catch((err) => {
//     console.log('error', err);
//   });

// axios
//   .get('https://swapi.dev/api/people12345/1')
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((err) => {
//     console.log(err);
//     alert(err.message);
//   });

// const getPeople = async (id) => {
//   try {
//     const res = await axios.get(`https://swapi.dev/api/people/${id}`);
//     console.log(res.data);
//   } catch (error) {
//     console.log(error);
//     console.log(error.message);
//     console.log(error.response.status);
//     console.log(error.response.data);
//   }
// };

// const loadPeople = async () => {
//   try {
//     const rest = await fetch('https://swapi.dev/api/people/1');
//     const data = await rest.json();
//     console.log(data);
//     const rest2 = await fetch('https://swapi.dev/api/people/2');
//     const data2 = await rest2.json();
//     console.log(data2);
//   } catch (err) {
//     //proses lainnya untuk menampilkan error
//     console.log('error', err);
//   }
// };

// loadPeople();

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addJoke = async () => {
  const jokeText = await getJokes();
  const newLI = document.createElement('LI');
  newLI.append(jokeText);
  jokes.append(newLI);
};

const getJokes = async () => {
  try {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    };
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    return res.data.joke;
  } catch (error) {
    return 'No jokes available!';
  }
};

button.addEventListener('click', addJoke);
