import express from 'express'

import { rateLimitMiddleware } from './middleware'

export const TokenBucketApp = express()
const port = 8080

TokenBucketApp.get('/unlimited', (req, res) => {
  res.send("You are on Unlimited tier!")
})

// middleware
TokenBucketApp.get('/limited', rateLimitMiddleware, (req, res) => {
  res.send("You are throttled")
})

//server start
TokenBucketApp.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`)
})
