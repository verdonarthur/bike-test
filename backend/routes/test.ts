import { Request, Response } from 'express';
import { findAllTests, createOneTest } from '../controllers/test';
import { HTTP_CODE } from '../libs/http-code';

export async function getAllTest(request: Request, response: Response) {
  try {
    response.send(await findAllTests());
    return;
  } catch (err) {
    console.error(err);
    response.sendStatus(HTTP_CODE.INTERNAL_SERVER_ERROR);
    return;
  }
}

export async function postOneTest(request: Request, response: Response) {
  let { startHourDate, endHourDate, feedback, edition, product } = request.body;

  if (!startHourDate && !edition && !product) {
    response.sendStatus(HTTP_CODE.BAD_REQUEST);
    return;
  }

  try {
    response
      .status(HTTP_CODE.OK)
      .send(
        await createOneTest(startHourDate, edition, product, endHourDate, feedback)
      );

    return;
  } catch (err) {
    console.error(err);
    response.status(HTTP_CODE.BAD_REQUEST).send(err.message);
    return;
  }
}
