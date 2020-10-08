import { Router } from 'express';

const routes = Router();

routes.post('/users', (request, response) => {
    return response.json({message: 'Hello World'})
})

app.listen(3333, () => {
    console.log('✅ Server started on port 3333')
})