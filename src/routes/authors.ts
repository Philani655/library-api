import { Router, Request, Response } from "express";
import { body, param, validationResult } from "express-validator";
import { createAuthor, deleteAuthor, getAllAuthors, getAuthorById, updateAuthor } from "../controllers/authors";

const router = Router()

router.post("/", 
    [
        body("name").notEmpty().withMessage("Name is required")
    ],
    (req: Request, res: Response) => {
        const error = validationResult(req);

        if(!error.isEmpty()) {
            res.status(200).json( {error: error.array()} )
        }

        createAuthor(req, res);
    }
)

router.get("/", getAllAuthors);

router.get("/:id", 
    [
        body("id").isInt().withMessage("Id must be an integer")
    ],
    (req: Request, res: Response) => {
        const errors = validationResult(req);

        if(!errors.isEmpty) {
            res.status(400).json( {errors: errors.isEmpty()} );
        }

        getAuthorById(req, res);
    }
)

router.put("/:id", 
    [
        param("id").isInt().withMessage("Id must be an integer"),
        body("name").notEmpty().withMessage("Name is required")
    ],
    (req: Request, res: Response) => {
        const error = validationResult(req);

        if(!error.isEmpty()) {
            res.status(200).json( {error: error.isEmpty()} );
        }

        updateAuthor(req, res);
    }
)

router.delete("/:id", 
    [
        param("id").isInt().withMessage("Id must be an integer")
    ],
    (req: Request, res: Response) => {
        const error = validationResult(req);
        
        if(!error.isEmpty()) {
            res.status(200).json( {error: error.isEmpty()} );
        }

        deleteAuthor(req, res);

    }
)

export default router