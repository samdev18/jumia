import { NextFunction, Request, Response } from "express";
import { IOrder } from "../@types/Order";
import { ProcessOrderService } from "../services/ProcessOrderService";

const CSVToJSON = require('csvtojson')

export const ProcessOrderController = {
    handle: async (req: any, res: Response,next:NextFunction) => {
        try {
            const orders: IOrder[] = await <IOrder[]>CSVToJSON().fromFile(req.file.path);
            const ordersResult = ProcessOrderService.execute(orders)
            req.body = ordersResult;
            next()

        } catch (err) {
            console.log(err);
        }

    }
}