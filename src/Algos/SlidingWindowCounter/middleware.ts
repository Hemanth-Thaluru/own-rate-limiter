import express from 'express'

import {requestLogs,requestThreshold,slidingWindowInMs} from './data'

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

  if (!requestLogs.has(ip)) {
    requestLogs.set(ip, { timestamps: [Date.now()] })
    next()
    return
  }

  const currentTime= Date.now()
  const log= requestLogs.get(ip)

  if (log) {
    log.timestamps = log.timestamps.filter((timestamp) => {
      const difference = currentTime - timestamp // check with in timeframe
      const isWithinWindow = difference <= slidingWindowInMs

      return isWithinWindow
    })

    if (log.timestamps.length < requestThreshold) {
      log.timestamps.push(currentTime)
      next()
    }
    else {
      res.status(429).send('Too Many Requests')
    }
  }



}


