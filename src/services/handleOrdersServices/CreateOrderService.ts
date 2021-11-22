
import { IOrder } from "../../@types/Order";
import prismaClient from "../../prisma"


class CreateOrderService {
    async execute(data: Promise<IOrder[]>) {
        try {
            (await data).forEach(async (order: any) => {
                await prismaClient.$transaction([
                    prismaClient.order.create({
                        data: {
                            id: Number.parseInt(order.id),
                            email: order.email,
                            phone_number: order.phone_number,
                            parcel_weight: Number.parseFloat(order.parcel_weight),
                            country: order.country
                        },
                    })
                ])

            })
            return { success: true };
        } catch (err) {
            console.log(err);
            return { false: true }
        }
    }

}

export { CreateOrderService }