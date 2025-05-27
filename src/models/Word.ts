import mongoose, { Document, Schema } from 'mongoose';
export interface WordInterface extends Document {
    word: string;
    definition: string;
    imageUrl: string;
    videoUrl: string
}

const wordSchema = new Schema<WordInterface>({
    word: String,
    definition: String,
    imageUrl: String,
    videoUrl: String
});

export const Word = mongoose.model<WordInterface>('Word', wordSchema);