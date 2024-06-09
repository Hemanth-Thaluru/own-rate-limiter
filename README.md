# Building Rate Limiter From Scratch

## Wanna Try it
Clone and install node packages `npm install`
Here we have 3 different types of rate limiters to try!
1.  Fixed Window -> `npm run fixed-window-counter`
2.  Token Bucket -> `npm run token-bucket`
3.  Sliding Window -> `npm run sliding-window-counter`

## What and Why -> Rate-Limiter
Rate limiting is a popular distributed system pattern. It is an integral part of all modern large-scale applications.
It's a tool that monitors the number of requests per unit of time that a client IP can send to an API endpoint. If the number of requests exceeds a certain threshold, the rate limiter will block the client IP from sending further requests for a certain period of time.
Benefits:
-   Prevent Resource Starvation
-   Prevent Sources from being overloaded
-   Reduce cost

### Things to do
- [X] Implement different method of rate limiters
- [ ] write details about each algorithm
- [ ] Explain how its working in readme.md
- [ ] Write tests to validate

