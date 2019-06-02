'use strict'

import { Router } from 'express';
import ProductModel from '../models/product';

const productRouter = Router();

productRouter.get('/', async (req, res) => { });

productRouter.post('/', async (req, res) => {
  try {
    const { body } = req;

    const response = await ProductModel.create(body);

    res.status(201).send({ data: response, message: 'Product Created' })

  } catch (error) {
    res.status(404).send({ error, });
  }
})

export default productRouter;