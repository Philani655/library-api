import { Request, Response } from "express";
import { Author } from "../models/author";

let authors: Author[] = [];

export const createAuthor = (req: Request, res: Response) => {
    console.log(req.body);

    const {name} = req.body;

    const newAuthor = {id: authors.length + 1, name};

    authors.push(newAuthor);

    res.status(201).json(newAuthor);
    
}

export const getAllAuthors = (req: Request, res: Response) => {
    res.status(200).json(authors);
}

export const getAuthorById = (req: Request, res: Response) => {
    const { id } = req.params;
    const user = authors.find((author) => author.id === parseInt(id));

    if(!user) {
        res.status(404).json("User id not found.");
    }

    res.status(200).json(user);
}

export const updateAuthor = (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedData = req.body;
    const authorIndex = authors.findIndex((author) => author.id === parseInt(id));

    if(updatedData === -1) {
        res.status(404).json("Author not found");
    }

    const updatedAuthor = {...authors[authorIndex], ...updatedData};
    authors[authorIndex] = updatedAuthor;
    res.status(200).json(updatedAuthor);
}

export const deleteAuthor = (req: Request, res: Response) => {
    const { id } = req.params;
    const initialLength = authors.length;
    authors = authors.filter((author) => author.id !== parseInt(id));
    
    if(authors.length === initialLength) {
        res.status(404).json("Author not found");
    }

    res.status(204).end();
}

