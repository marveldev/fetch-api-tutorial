document.querySelector('#get-text').addEventListener('click', () => {
  fetch('sample.text').then( (response) => {
    return response.text();
  }).then ((data) => {
    document.querySelector('#output').innerHTML = data;
  })
})

document.querySelector('#get-json').addEventListener('click', () => {
  fetch('index.json').then( (response) => {
    return response.json();
  }).then ((datas) => {
    let output = `<h1>USERS</h1>`
    datas.forEach(data => {
      output += `
        <ul>
          <li>ID: ${data.id}</li>
          <li>NAME: ${data.name}</li>
        </ul>
      `
    });
    document.querySelector('#output').innerHTML = output;
  })
})

document.querySelector('#get-file').addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/posts').then( (response) => {
    return response.json(); //cuz it is a json file
  }).then ((datas) => {
    let output = `<h2>POSTS</h2>`
    datas.forEach(data => { //cuz it an array
      output += `
        <div>
          <h3>userId: ${data.userId}</h3>
          <p>Id: ${data.id}</p>
          <h3>Title: ${data.title}</h3>
          <p>Body: ${data.body}</p>
        </div>
      `
    });
    document.querySelector('#output').innerHTML = output;
  })
})

//fetch is used to get external data from a system.
//difference between fetch and ajax?
//what is promise.
//syntax fetch(url of external file, then, then get data.)
//fetch promise does not allow assignment to a constant variable.
//retrieving data from an external site must be in smallcaps if one word.

//posting data to an external file.

const form = document.querySelector('form');
form.addEventListener('submit', () => {
  event.preventDefault();

  let title = document.querySelector('#title').value;
  let body = document.querySelector('#body').value;

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'content-type': 'application/json' 
    },
    body: JSON.stringify({'title':title, 'body':body})
  })
  .then((response) => {
      return response.json();
  })
  .then ((data) => {
    console.log(data);
    console.log(data.body);
  })
})

//fetch get method gets external data from a server, while post methos sends file to an external server.
// the post method consist of headers and body and must be explicitly stated.

