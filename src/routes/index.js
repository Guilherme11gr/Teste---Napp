'use-strict'

import { Router } from 'express'

const indexRouter = Router();

indexRouter.get('/', (req, res) => res.status(201).send({ title: 'Node API', version: '1.0', }))

export default indexRouter
