import type { NextApiRequest, NextApiResponse } from 'next';
const fs = require('fs');

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method === 'POST'){
        fs.writeFileSync('./example.json', '{"Hello": "World"}')
      }
  res.status(200).json({'message': 'success'});
};
