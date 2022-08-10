// import { prisma } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export default async (req: NextApiRequest, res: NextApiResponse) => {

    const { method, body, query: { id } } = req;


    switch (method) {
        case 'GET':
            try {
                const product = await prisma.product.findUniqueOrThrow({
                    where: {
                        id: parseInt(id)
                    },
                })
                return res.status(200).send({ product })
            } catch (error) {
                return res.status(500).send({ error })
            }
        case 'PUT':
            const { name, price } = body;

            try {
                const productToUpdate = await prisma.product.findUniqueOrThrow({
                    where: {
                        id: parseInt(id)
                    }
                })
                if (name && price) {
                    const updatedUser = await prisma.product.update({
                        where: {
                            id: parseInt(id)
                        },
                        data: {
                            name,
                            price
                        }
                    })
                    return res.status(200).send({ updatedUser })
                }
                return res.status(500).send({ error: 'Name or Price missing' })
            } catch (error) {
                return res.status(500).send({ error })
            }
        case 'DELETE':
            try {
                const deletedUser = await prisma.product.delete({
                    where: {
                        id: parseInt(id)
                    }
                })
                return res.status(200).send({ deletedUser })
            } catch (error) {
                return res.status(500).send({ error })
            }
        default:
            return res.status(400).send("Invalid method");
    }
}