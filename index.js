const express = require('express')

const app = express()

function render() {
  const page =  `<html>
    <head>
      <title>Dian Prasantio</title>
    </head>

    <body>
      <h1>Why do comedians love !false?</h1>
      <p>It's funny because it's true.</p>
    </body>
    </html>`
  return page
}
app.get(
    '/joke',
    (request, response) => {
      const pages = render()
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