const express = require('express')

const app = express()

function render(jokes) {
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
app.get(
    '/joke/:joke1',
    (request, response) => {
      const jokes = {
        q = 'Why do comedians love !false?',
        a = 'It\s funny because it\s true.'
      }  
      const pages = render(jokes)
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