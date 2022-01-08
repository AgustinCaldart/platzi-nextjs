import DB from '@database'
import { NextApiRequest, NextApiResponse } from 'next'

const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
  const db = new DB()
  const allEntries = await db.getAll()

  response.status(200).json(allEntries)
}

export default allAvos
