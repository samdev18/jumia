import { Request, Response } from 'express'
import { CreateOrderService } from '../services/handleOrdersServices'

class CreateOrderController {
    async handle(req: Request, res: Response) {
        const service = new CreateOrderService()

        const result = await service.execute(req.body)

        return res.json(result)
    }
}

export { CreateOrderController }