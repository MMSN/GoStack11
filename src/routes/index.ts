import { Router } from 'express';
import appointmentRoutes from './appointments.routes'

const routes = Router();

routes.use('/appointments', appointmentRoutes);

routes.get('/', (request, response) =>
    response.json({ message: 'Hello World' })
);

export default routes;
