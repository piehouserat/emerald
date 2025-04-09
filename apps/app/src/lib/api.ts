import ky, { type Options } from "ky";
import { cookies as getCookies } from "next/headers";

export const getApiOptions = async () => {
  const cookies = await getCookies();
  const accessToken = cookies.get("access_token");

  const options: Options = {
    headers: {
      authorization: `Bearer ${accessToken?.value}`,
    },
  };

  return options;
};

export type User = {
  id: string;
  name: string;
  email: string;
};

export type CreateUser = {
  name: string;
  email: string;
};

export async function getUsers() {
  const apiUrl = `${process.env.API_URL}/users`;
  const apiOptions = await getApiOptions();

  const users = await ky.get<User[]>(apiUrl, apiOptions).json();

  return users;
}

export async function createUser(user: CreateUser) {
  const apiUrl = `${process.env.API_URL}/users`;
  const apiOptions = await getApiOptions();

  const created = await ky
    .post(apiUrl, {
      ...apiOptions,
      json: user,
    })
    .json();

  return created;
}

export async function deleteUser(id: string) {
  const apiUrl = `${process.env.API_URL}/users/${id}`;
  const apiOptions = await getApiOptions();

  await ky.delete(apiUrl, apiOptions);
}
