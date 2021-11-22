import { Request, Response } from 'express'
import { GetWeightsPerCountryService } from '../services/handleOrdersServices'

class GetWeightsPerCountryController {
    async handle(req: Request, res: Response) {
        const service = new GetWeightsPerCountryService()
        
        const result = await service.execute()

        return res.json(result)
    }
}

export { GetWeightsPerCountryController }