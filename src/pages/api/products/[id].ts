// import { prisma } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getProductById, updateProductById, deleteUserById } from "../../../../server/controllers/products/products.controller";

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const { method, body, query: { id } } = req;

    const idFromRequest = parseInt(id as string);

    switch (method) {
        case 'GET':
            try {
                const product = getProductById(idFromRequest);
                return res.status(200).send({ product })
            } catch (error) {
                return res.status(500).send({ error })
            }
        case 'PUT':
            const { name, price } = body;

            try {
                const updatedUser = updateProductById(idFromRequest, name, price);
                return res.status(200).send({ updatedUser })
            } catch (error) {
                return res.status(500).send({ error })
            }

        case 'DELETE':
            try {
                const deletedUser = deleteUserById(idFromRequest);
                return res.status(200).send({ deletedUser })
            } catch (error) {
                return res.status(500).send({ error })
            }
        default:
            return res.status(400).send("Invalid method");
    }
}