import { Schema, model, Document } from 'mongoose';

const BookSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    deleted_at: { type: Date, default: null },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export interface IBook extends Document {
  name: string;
  description: string;
  deleted_at: Date;
}

export const Book = model<IBook>('Book', BookSchema);
