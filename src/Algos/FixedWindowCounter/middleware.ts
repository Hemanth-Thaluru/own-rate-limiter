import express from 'express'

import {counters, rateLimitWindoeInMs,requestLimitPerWindow } from './data'

export const rateLimiterMiddleWare=(  
  req: express.Request,
  res: express.Response,
  next:express.NextFunction
)=>{

  const ip=req.ip
  if (!ip){
    res.status(500).send('IP address not Found on the request')
    return
  }

  const currentTime= Date.now()

  if (!counters.has(ip)) {
    counters.set(ip, { count:1, startTime: currentTime })
    next()
    return
  }

  const windowCounter=counters.get(ip)

  if (windowCounter) {
    const difference = currentTime - windowCounter.startTime
    const isGreaterThanWindow = difference > rateLimitWindoeInMs

    if (isGreaterThanWindow) {
      // reset the counter
      windowCounter.count = 1
      windowCounter.startTime = currentTime
      next()
    } else if (windowCounter.count < requestLimitPerWindow) {
      // Increment the counter and allow the request
      windowCounter.count++
      next()
    } else {
      // Rate limit exceeded
      res.status(429).send('Too Many Requests')
    }
  }



}


