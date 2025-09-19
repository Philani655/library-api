import { Request, Response } from "express";
import { Book } from "../models/books";
import { Author } from "../models/author";

let books: Book[] = [];
let authors: Author[] = [];

export const listBooksByAuthor = (req: Request, res: Response) => {
    const { id } = req.params;

    const author = authors.find((a) => a.id === parseInt(id));

    if(!author) {
        return res.status(404).json("Author not found");
    }

    const authorBook = books.filter((book) => book.authorId === parseInt(id));

    res.status(200).json(authorBook);
}

export const getAllBooks = (req: Request, res: Response) => {
    const joinedBook = books.map(book => {
        const author = authors.find((a) => a.id === book.authorId);
        return {...book, author}
    })
    res.status(200).json(joinedBook);
}

export const addBook = (req: Request, res: Response) => {
    
    const {title, authorId, year} = req.body;

    const authorExist = authors.some((author) => author.id === authorId);

    if(!authorExist) {
        return res.status(400).json("Invalid author Id");
    }

    const newBook = { id: books.length + 1, title, authorId, year };

    books.push(newBook);

    res.status(201).json(newBook);
}

export const getBookById = (req: Request, res: Response) => {
    const { id } = req.params;
    const book = books.find((book) => book.id === parseInt(id));

    if(!book) {
        return res.status(404).json("User id not found");
    }

    const author = authors.find((a) => a.id === book.authorId);
    const joinedBook = {...book, author};
    res.status(200).json(joinedBook);
}

export const deleteById = (req: Request, res: Response) => {
    const { id } = req.params;
    const initialLength = books.length;
    books = books.filter((book) => book.id !== parseInt(id));

    if(books.length === initialLength) {
        return res.status(404).json("User id not found");
    }

    res.status(204).end();
}

export const updateBook = (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedData = req.body;
    const bookIndex = books.findIndex((book) => book.id === parseInt(id));

    if(updatedData === -1) {
        res.status(404).json("Book not found");
    }

    const updatedBook = {...books[bookIndex], ...updatedData};
    books[bookIndex] = updatedBook;
    res.status(200).json(updatedBook);
}