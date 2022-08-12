import { NextApiRequest, NextApiResponse } from "next";
import { getProducts, createProduct } from "../../../../server/controllers/products/products.controller";

export default async function products(req: NextApiRequest, res: NextApiResponse) {

    const { method, body } = req;

    switch (method) {
        case 'GET':
            try {
                const products = getProducts();
                return res.status(200).send({ products })
            } catch (error) {
                return res.status(500).send({ error })
            }

        case 'POST':
            try {
                const { name, price } = body;
                const productCreated = createProduct(name, price);
                return res.status(201).send({ productCreated })
            } catch (error) {
                return res.status(500).send({ error })
            }
        // case 'PATCH':
        //     return res.send("[PATCH] productssss")
        // case 'PUT':
        //     return res.send("[PUT] productssss")
        // case 'DELETE':
        //     return res.send("[DELETE] productssss")
        default:
            return res.status(400).send("Invalid request")
    }


}