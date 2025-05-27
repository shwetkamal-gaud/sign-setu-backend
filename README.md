```md
# Mini Sign Language Visual Dictionary - Backend

This is the backend for the Mini Sign Language Visual Dictionary app, built using Node.js, Express, TypeScript, and MongoDB (Mongoose). It handles all the CRUD operations for managing sign language words.

## Features

- Create, Read, Update, Delete (CRUD) operations
- MongoDB (with Mongoose) for storage
- Express REST API
- TypeScript for type safety
- Error handling and HTTP status codes

## API Endpoints

| Method | Endpoint              | Description              |
|--------|-----------------------|--------------------------|
| GET    | /words                | Fetch all words          |
| GET    | /words/:query         | Fetch single word by name|
| POST   | /words                | Add a new word           |
| PUT    | /words/:id            | Update word by ID        |
| DELETE | /words/:id            | Delete word by ID        |

## Installation

```bash
git clone https://github.com/your-username/sign-language-dictionary-backend
cd sign-language-dictionary-backend
npm install
npm run dev
```
