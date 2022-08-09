import { NextApiRequest, NextApiResponse } from "next";
import { connection } from "../../utils/database";



export default async(req: NextApiRequest, res: NextApiResponse) =>{
  
  
  

  const query = await connection.query('SELECT NOW();')
  // console.log(query)
  

  return res.json({message:"pong", query})
}