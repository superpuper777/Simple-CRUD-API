import * as UserService from '../api/methods';
import { User } from '../types/user';
import { isValidUUID, checkRequiredField } from '../helpers';

type RequestUser = {
  body: User;
  params: any;
};

class PostController {
  async create(req: RequestUser, res: any) {
    const user: User = req.body;
    console.log(user.hasOwnProperty('username'));
    if (!checkRequiredField(user, 'username', 'age', 'hobbies')) {
      res
        .status(404)
        .json({ message: 'Body does not contain required fields' });
    }
    try {
      const post = await UserService.createUser(user);
      res.status(201).json(post);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async getAll(req: any, res: any) {
    try {
      const users = await UserService.getAllUsers();
      return res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async getById(req: any, res: any) {
    try {
      const { id } = req.params;
      if (!isValidUUID(id)) {
        res.status(400).json({ message: 'Invalid ID (not uuid)' });
      }
      const user = await UserService.getUserById(id);
      if (!user) {
        res.status(404).json({ message: "ID doesn't exist" });
      }
      return res.json(user);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async update(req: any, res: any) {
    try {
      const { id } = req.params;
      const user = req.body;
      if (!isValidUUID(id)) {
        res.status(400).json({ message: 'Invalid ID (not uuid)' });
      }
      const updatedUser = await UserService.update(id, user);
      if (!updatedUser) {
        res.status(404).json({ message: "ID doesn't exist" });
      }
      return res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async delete(req: any, res: any) {
    try {
      const { id } = req.params;
      if (id || !isValidUUID(id)) {
        return res.status(400).json({ message: 'Invalid ID (not uuid)' });
      }
      const user = await UserService.remove(id);
      if (user) {
        return res.status(204).json(user);
      }
      res.status(404).json({ message: "ID doesn't exist" });
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

export default new PostController();
