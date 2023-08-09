import User from '../models/user.model.js';
import { Request, Response } from 'express';

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error', details: error });
  }
};

export const addUser = async (req: Request, res: Response) => {
  const newUserData = req.body;

  try {
    const validatedUser = new User(newUserData);

    await validatedUser.save();

    res.status(201).json({ message: 'Vartotojas sėkmingai sukurtas' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', details: error });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedFields = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(id, updatedFields, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'An error occurred while updating the user' });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const deletedUser = await User.findByIdAndDelete(id);

    if (deletedUser) {
      res.status(200).json({ message: 'Vartotojas sėkmingai pašalintas' });
    } else {
      res.status(404).json({ message: 'Tokio vartotojo nėra' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', details: error });
  }
};
