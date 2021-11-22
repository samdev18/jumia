import express, { Router} from 'express';
import { ProcessOrderController } from './controllers/ProcessOrderController';
import { CreateOrderController } from './controllers/CreateOrderController';

import { GetOrdersPerCountryController } from './controllers/GetOrdersPerCountryController';
import { GetWeightsPerCountryController } from './controllers/GetWeightsPerCountryController';
import { GetOrdersController } from './controllers/GetOrdersController';
const app = express();

const route = Router()

var multer = require('multer');
var upload = multer({ dest: './uploads' });

app.use(express.json())

route.post('/orders/process', upload.single('csv'), ProcessOrderController.handle,
    (new CreateOrderController().handle)
)

.get('/orders/country/', new GetOrdersPerCountryController().handle)
.get('/orders/weight/', new GetWeightsPerCountryController().handle)
.get('/orders', new GetOrdersController().handle)

app.use(route)

app.listen(3333, () => 'server running on port 3333')