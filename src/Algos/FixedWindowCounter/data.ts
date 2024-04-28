type WindowCounter ={
  count: number,
  startTime: number
}
  
  export const requestLimitPerWindow = 10
  export const rateLimitWindoeInMs = 60 * 1000 
  export const counters = new Map<string, WindowCounter>() 
  