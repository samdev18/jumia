import prismaClient from "../../prisma"

class GetOrdersService {
    async execute(filters:any,page:number,per_page:number) {
        const orders = await prismaClient.order.findMany({
            where: filters,
            skip:page > 1 ? (page * per_page) -1 : 0,
            take:per_page,
        })

        return orders;
    }

}

export { GetOrdersService }