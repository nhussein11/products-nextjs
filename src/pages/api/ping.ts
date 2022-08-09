import { NextApiRequest, NextApiResponse } from "next";
import { connection } from "../../utils/database";

type Data = {
  message: string,
  time:string,
}


export default async(req: NextApiRequest, res: NextApiResponse<Data>) =>{
  
  
  

  const query = await connection.query('SELECT NOW();')
  // console.log(query)
  

  return res.json({message:"pong", time: query.rows[0].now})
}