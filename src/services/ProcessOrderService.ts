import { IOrder } from "../@types/Order";


const fs = require('fs');
const path = require('path');

const countries = [
    { title: 'Cameron', regex: /\(237\)\ ?[2368]\d{7,8}$/g },
    { title: 'Ethiopia', regex: /\(251\)\ ?[1-59]\d{8}$/g },
    { title: 'Morocco', regex: /\(212\)\ ?[5-9]\d{8}$/g },
    { title: 'Mozambique', regex: /\(258\)\ ?[28]\d{7,8}$/g },
    { title: 'Uganda', regex: /\(256\)\ ?\d{9}$/g },
]

function getCountry(numero: string) {
    const country = countries.filter(el => el.regex.exec(numero))
    return country.length ? country[0].title : ''
}

function removeTempFile(): void {
    const directory = 'uploads';

    fs.readdir(directory, (err: any, files: any) => {
        if (err) throw err;

        for (const file of files) {
            fs.unlink(path.join(directory, file), (err: any) => {
                if (err) throw err;
            });
        }
    });
}

export const ProcessOrderService= {
    execute: async (orders: IOrder[]) => {
        try {
            await orders.map((order: IOrder) => {
                console.log(order)
                order.phone_number = `(${order.phone_number.substr(0, 3)})${order.phone_number.substr(3)}`

                order.country = getCountry(order.phone_number)
            })
            removeTempFile()
            return orders

        } catch (err) {
            console.log(err);
            return;
        }

    }
}