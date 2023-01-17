const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

const discover = [
	  {
		      userId: 1,
		      id: 1,
		      photos: [
			            'https://res.cloudinary.com/dixtgpaos/image/upload/v1673721427/cld-sample-5.jpg',
			            'https://res.cloudinary.com/dixtgpaos/image/upload/v1673721404/samples/animals/cat.jpg',
			            'https://res.cloudinary.com/dixtgpaos/image/upload/v1673721405/samples/food/dessert.jpg',
			            'https://res.cloudinary.com/dixtgpaos/image/upload/v1673721405/samples/animals/reindeer.jpg'
			          ],
		      name: 'Derek',
		      city: 'Greenville'
		    },
	  {
		      userId: 1,
		      id: 1,
		      photos: [
			            'https://res.cloudinary.com/dixtgpaos/image/upload/v1673721427/cld-sample-5.jpg',
			            'https://res.cloudinary.com/dixtgpaos/image/upload/v1673721404/samples/animals/cat.jpg',
			            'https://res.cloudinary.com/dixtgpaos/image/upload/v1673721405/samples/food/dessert.jpg',
			            'https://res.cloudinary.com/dixtgpaos/image/upload/v1673721405/samples/animals/reindeer.jpg'
			          ],
		      name: 'Larry',
		      city: 'Barktown'
		    }
]

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
	  res.send('Hello World!')
})

app.put('/users/:id/friends/*', (req, res) => {res.send(200)})

app.get('/users/:id/discover', (req, res) => {res.send(discover)})

app.listen(port, () => {
	  console.log(`Example app listening on port ${port}`)
})
