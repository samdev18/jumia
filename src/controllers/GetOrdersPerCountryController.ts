import { Request, Response } from 'express'
import { GetOrdersPerCountryService } from '../services/handleOrdersServices'

class GetOrdersPerCountryController {
    async handle(req: Request, res: Response) {
        const service = new GetOrdersPerCountryService()
        
        const result = await service.execute()

        return res.json(result)
    }
}

export { GetOrdersPerCountryController }