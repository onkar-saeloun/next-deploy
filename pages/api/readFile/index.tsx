import type { NextApiRequest, NextApiResponse } from 'next';
const fs = require('fs');
    
export default async function handler (  req: NextApiRequest,
    res: NextApiResponse
    ) {
        console.log('==============>');
//   const example = await fs.readFile('./example.json');
//   console.log('==============>', example);
  return res.status(200).json({});
}