import {Ratelimit} from "@upstash/ratelimit"
import {Redis} from "@upstash/redis"
import dotenv from "dotenv";
dotenv.config();
//limits the request to 100 per minute
const ratelimit=new Ratelimit({
    redis:Redis.fromEnv(),
    limiter:Ratelimit.slidingWindow(100,"20 s")
})

export default ratelimit