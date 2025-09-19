import { Request, Response, NextFunction } from "express";

export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
    res.status(404).json( {
        error: "Not found",
        message: `The requested URL ${req.originalUrl} was not found on this server.`
    })
}

export const badInputHandler = (req: Request, res: Response, next: NextFunction) => {
    res.status(400).json ({
        error: "Bad input",
        message: "Invalid JSON payload"
    })
}

export const conflictHanlder = (req: Request, res: Response, next: NextFunction) => {
    res.status(409).json ({
        error: "Conflict ",
        message: `${req.originalUrl} already exist on the server`
    })
}