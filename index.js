const express = require('express')

const app = express()

function renderOne(jokes) {
  const page =  `<html>
    <head>
      <title>Dian Prasantio</title>
    </head>

    <body>
      <h1>${jokes.q}</h1>
      <p>${jokes.a}</p>
    </body>
    </html>`
  return page
}

function renderTwo(jokes) {
  const page =  `<html>
    <head>
      <title>Dian Prasantio</title>
    </head>

    <body>
      <h1>${jokes.j1}</h1>
      <h1>${jokes.j2}</h1>
    </body>
    </html>`
  return page
}

function renderThree(jokes) {
  const page =  `<html>
    <head>
      <title>Dian Prasantio</title>
    </head>

    <body>
      <h1>${jokes.q2}</h1>
      <h2>${jokes.a2}</h2>
    </body>
    </html>`
  return page
}

function renderFour(jokes) {
  const page =  `<html>
    <head>
      <title>Dian Prasantio</title>
    </head>

    <body>
      <h2>${jokes.j3}</h2>
      <h2>${jokes.j4}</h2>
    </body>
    </html>`
  return page
}

function renderFive(jokes) {
  const page =  `<html>
    <head>
      <title>Dian Prasantio</title>
    </head>

    <body>
      <p>${jokes.j5}</p>
    </body>
    </html>`
  return page
}
app.get(
    '/joke/:?',
    (request, response) => {
      const jokes = {
        q1:'Why do comedians love !false?',
        a1: 'It\s funny because it\s true.',
        j1: 'Parallel lines have so much in common.',
        j2: 'Is\s a shame they\ll never meet',
        q2: 'Did you hear about the monkyes who shared an Amazon account?',
        a2: 'They were Prime mates',
        j3: 'A wife and husband was setting up their computer and the husband makes the password my dick,',
        j4: 'but the wife fell on the floor laughing because the computer said the password was too short.', 
        j5: 'The programmer got stuck in the shower because the instructions on the shampoo bottle said: Lather, Rinse, Repeat.'
      }  
      const pages = renderFour(jokes)
        response.send(pages)
    }
)

const port = process.env.PORT || 3000

app.listen(
    port,
    () => {
        console.log(`Listening on: ${port}`)
    }
)