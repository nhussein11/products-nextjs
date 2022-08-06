import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {

    const { method } = req;

    switch (method) {
        case 'GET':
            return res.send("Get unique product");
        case 'PUT':
            return res.send("Put unique product");
        case 'DELETE':
            return res.send("Delete unique product");
        default:
            return res.status(400).send("Invalid method");
    }
}