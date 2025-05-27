import express from 'express';
import { getWordsList, getSingleWord, createWord, updateWord, deleteWord } from '../controllers/wordController';

const router = express.Router();

router.get('/', getWordsList);
router.get('/:query', getSingleWord);
router.post('/', createWord)
router.put('/:id', updateWord)
router.delete('/:id', deleteWord)

export default router;