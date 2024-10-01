import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
  const data = await response.json();

  res.status(200).json(data);
}
