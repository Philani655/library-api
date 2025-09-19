import { Router, Request, Response } from "express";
import { body, param, validationResult } from "express-validator";
import { addBook, deleteById, getAllBooks, getBookById, listBooksByAuthor, updateBook } from "../controllers/books";

const router = Router()

router.get("/authors/:id", 
    [
        body("id").isInt().withMessage("Id must be an integer")
    ],
    (req: Request, res: Response) => {
        const errors = validationResult(req);

        if(!errors.isEmpty) {
            res.status(400).json( {errors: errors.array()} )
        }

        listBooksByAuthor(req, res);
    }
    
)

router.get("/", getAllBooks);

router.post("/", 
    [
        body("title").notEmpty().withMessage("Title is required"),
        body("authorId").isInt().withMessage("Author id must be a number"),
        body("year").isInt().withMessage("Author id must be a number"),
    ],
    (req: Request, res: Response) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            return res.status(400).json( {errors: errors.array()} );
        }

        addBook(req, res);
        
    }
);


router.get("/:id", 
    [
        body("id").isInt().withMessage("Id must be an Integer")
    ],
    (req: Request, res: Response) => {
        const errors = validationResult(req);


        if(!errors.isEmpty) {
            return res.status(400).json({ errors: errors.array() });
        }
        
        getBookById(req, res);
    }
);

router.delete("/:id",
    [
        // Use param() to validate the ID from the URL parameters
        param("id").isInt().withMessage("Id must be an Integer")
    ],
      (req: Request, res: Response) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        deleteById(req, res);
    }
);

router.put("/:id", 
    [
        param("id").isInt().withMessage("Id must be an Integer"),
        body("title").notEmpty().withMessage("Title is required"),
        body("authorId").notEmpty().withMessage("Author id is required").isInt().withMessage("Author id must be a number"),
        body("year").notEmpty().withMessage("Year is required").isInt().withMessage("Author id must be a number"),
    ], 
    (req: Request, res: Response) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        updateBook(req, res);
    }
)

export default router