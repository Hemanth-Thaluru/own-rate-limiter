import express from 'express'

import { rateLimiterMiddleWare } from './middleware'

export const TokenBucketApp = express()
const port = 8081

TokenBucketApp.get('/unlimited', (req, res) => {
  res.send("You are on Unlimited tier!")
})

// middleware
TokenBucketApp.get('/limited', rateLimiterMiddleWare, (req, res) => {
  res.send("You are being throtled!")
})

//server start
TokenBucketApp.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`)
})
