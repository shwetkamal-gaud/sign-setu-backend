import { Word } from "../models/Word";
import { Request, Response } from 'express';

export const getWordsList = async (req: Request, res: Response) => {
    const words = await Word.find();
    res.status(200).json({ words });
}

export const getSingleWord = async (req: Request, res: Response) => {
    const word = await Word.findOne({ word: new RegExp(req.params.query, 'i') });
    if (!word) res.status(404).json({ message: 'Word not found' });
    res.json(word);
}

export const createWord = async (req: Request, res: Response) => {
    const newWord = new Word(req.body);
    await newWord.save();
    res.status(201).json(newWord);
}

export const updateWord = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        console.log(id)
        const updatedWord = await Word.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );
        if (!updatedWord) {
            res.status(404).json({ message: 'Word not found' });
        }
        res.json(updatedWord);
    } catch (err) {
        res.status(400).json({ error: err });
    }
};


export const deleteWord = async (req: Request, res: Response) => {
    try {
        await Word.findByIdAndDelete(req.params.id);
        res.json({ message: 'Word deleted' });
    } catch (err) {
        res.status(400).json({ error: err });
    }
}