import { v4 as uuidv4 } from 'uuid';
import { User } from '../types/user';
import { users } from '../mockUsers';

export const findAll = async (): Promise<User[]> => Object.values(users);

export const find = async (id: number): Promise<User> => users[id];

export const create = async (newUser): Promise<User> => {
  const id = uuidv4();

  users[id] = {
    id,
    ...newUser,
  };

  return users[id];
};

export const update = async (id: number, updatedUser): Promise<User | null> => {
  const user = await find(id);

  if (!user) {
    return null;
  }

  users[id] = { id, ...updatedUser };

  return users[id];
};

export const remove = async (id: number): Promise<null | void> => {
  const user = await find(id);

  if (!user) {
    return null;
  }

  delete users[id];
};
