import { Request, Response } from 'express';
import TestController from '../controllers/test';

export async function getAllTest(request: Request, response: Response) {
  let testController = new TestController();
  response.send(await testController.getAll());
}
