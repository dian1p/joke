const express = require('express')

const app = express()

const page =  `<html>
<head>
  <title>Dian Prasantio</title>
</head>

<body>
  <h1>Why do comedians love !false?</h1>
  <p>It's funny because it's true.</p>
</body>
</html>`

app.get(
    '/',
    (request, response) => {
        response.send(page)
    }
)

const port = process.env.PORT || 3000

app.listen(
    port,
    () => {
        console.log(`Listening on: ${port}`)
    }
)