import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
const fs = require('fs');

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    console.log('__dirname', process.env.ROOT)
    if (req.method === 'POST'){
        fs.writeFileSync(`/public/example.json`, '{"Hello": "World"}'.toString());
      }
  res.status(200).json({'message': 'success'});
};
