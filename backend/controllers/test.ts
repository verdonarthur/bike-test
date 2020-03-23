import { Test } from '../models/Test';
import { Edition } from '../models/Edition';
import { Product } from '../models/Prod';

export default class TestController {

  public async createOne(
    startHourDate: Date,
    editionId: number,
    productId: number,
    endHourDate?: Date,
    feedback?: string
  ): Promise<Test> {

    let edition = await Edition.findOne({ id: editionId });
    let product = await Product.findOne({ id: productId });

    let newTest = new Test();
    newTest.startHourDate = startHourDate;
    newTest.endHourDate = endHourDate || null;
    newTest.feedback = feedback || null;
    newTest.edition = edition;
    newTest.product = product;

    return await newTest.save();
  }

  public async getAll(): Promise<Test[]> {
    return await Test.find();
  }
}
