import { ApiResponse } from '../utils/ApiResponse.js';
import { asynchandler } from '../utils/asyncHandler.js';

const healthcheck = asynchandler( async (req, res) =>{
    return res
        .status(200)
        .json(new ApiResponse(200, "Ok", "health check passed"))
})

export {healthcheck}