import { v4 as uuidv4 } from 'uuid';
import { User } from '../types/user';
import { users } from '../mockUsers';

export const getAllUsers = async (): Promise<User[]> => {
  return users;
};

export const getUserById = async (id: string): Promise<User | void> => {
  return users.find((user) => user.id === id);
};

export const createUser = async (newUser: User): Promise<User | null> => {
  const id = uuidv4();
  const createdUser = {
    id,
    ...newUser,
  };
  users.push(createdUser);
  return createdUser;
};

export const update = async (
  id: string,
  updatedUser: User
): Promise<User | null> => {
  const user = await getUserById(id);
  return user ? { id, ...updatedUser } : null;
};

export const remove = async (id: string): Promise<boolean | null> => {
  const user = await getUserById(id);
  if (!user) {
    return null;
  }
  let index = users.findIndex((user) => user.id == id);
  if (index > 0 || index == 0) users.splice(index, 1);
  return true;
};
