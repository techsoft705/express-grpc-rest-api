import { Request, Response } from 'express'

export const updateStudent = (req: Request, res: Response): Response<any, Record<string, any>> => {
	return res.status(200).send('hello wordl')
}
