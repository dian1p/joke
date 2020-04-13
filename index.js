const express = require('express')

const app = express()

function render(q, a) {
  const page =  `<html>
    <head>
      <title>Dian Prasantio</title>
    </head>

    <body>
      <h1>${q}</h1>
      <p>${a}</p>
    </body>
    </html>`
  return page
}
app.get(
    '/joke/:joke1',
    (request, response) => {
      const q = 'Why do comedians love !false?'
      const a = 'It\s funny because it\s true.'
      const pages = render(q, a)
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