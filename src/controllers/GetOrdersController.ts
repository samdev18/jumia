import { Request, Response } from 'express'
import { GetOrdersService } from '../services/handleOrdersServices'

class GetOrdersController {
    async handle(req: Request, res: Response) {
        const { country, parcel_weight } = req.query
        
        const filters: any = {}
        if (country) {
            filters.country = country
        }
        if (parcel_weight) {
            filters.parcel_weight = parcel_weight
        }
        const page  = req.query.page  ? Number.parseInt(req.query.page.toString()) : 0
        const per_page = req.query.per_page  ? Number.parseInt(req.query.per_page.toString()) : 5

        const service = new GetOrdersService()

        const result = await service.execute(filters, page, per_page)

        return res.json(result)
    }
}

export { GetOrdersController }