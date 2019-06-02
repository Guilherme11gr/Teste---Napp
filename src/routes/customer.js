'use strict'

import { Router } from 'express';
import CustomerModel from '../models/customer'

const custumerRouter = Router();

custumerRouter.get('/', async (req, res) => {
  try {
    const response = await CustomerModel.getCustomers();

    res.status(200).send({ data: response });
  } catch (error) {
    res.status(404).send({ error, });
  }
});

custumerRouter.post('/', async (req, res) => {
  try {
    const { body } = req;

    const response = await CustomerModel.create(body);

    res.status(201).send({ data: response, message: 'Customer Created' })

  } catch (error) {
    res.status(404).send({ error, });
  }
})

export default custumerRouter;
