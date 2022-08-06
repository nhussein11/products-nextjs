import { NextApiRequest, NextApiResponse } from "next";

export default function products(req: NextApiRequest, res: NextApiResponse) {

    const { method } = req;


    switch (method) {
        case 'GET':
            return res.send("[GET] productssss")
        case 'POST':
            return res.send("[POST] productssss")
        case 'PATCH':
            return res.send("[PATCH] productssss")
        case 'PUT':
            return res.send("[PUT] productssss")
        case 'DELETE':
            return res.send("[DELETE] productssss")
        default:
            return res.status(400).send("Invalid request")
    }


}