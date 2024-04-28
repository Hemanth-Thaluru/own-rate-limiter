export type RequestLog = {
    timestamps: Array<number>
  }
  
  export const requestThreshold = 10
  export const slidingWindowInMs = 60 * 1000 
  export const requestLogs = new Map<string, RequestLog>() 
  