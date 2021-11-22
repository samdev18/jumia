
import prismaClient from "../../prisma"


class GetWeightsPerCountryService {
    async execute() {
        const orders = await prismaClient.order.groupBy({ by:['country'],_sum:{parcel_weight:true}})
        return orders;
    }

}

export { GetWeightsPerCountryService }