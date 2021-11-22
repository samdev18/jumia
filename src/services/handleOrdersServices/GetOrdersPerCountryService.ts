
import { IOrder } from "../../@types/Order";
import prismaClient from "../../prisma"


class GetOrdersPerCountryService {
    async execute() {
        const orders = await prismaClient.order.groupBy({ by:['country'],_count:{country:true}})
        return orders;
    }

}

export { GetOrdersPerCountryService }