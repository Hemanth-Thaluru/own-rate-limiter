import express from 'express'

import { rateLimitMiddleware } from './middleware'

export const TokenBucketApp = express()
const port = 8080

TokenBucketApp.get('/unlimited', (req, res) => {
  res.send("Unlimited! Let's Go!")
})

// middleware
TokenBucketApp.get('/limited', rateLimitMiddleware, (req, res) => {
  res.send("Limited, don't overuse me!")
})

//server start
TokenBucketApp.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`)
})
