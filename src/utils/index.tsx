import { nanoid } from 'nanoid';

export const apiCall = {
  post: async (endpoint: string, data: Record<string, string>) => {
    console.info({ endpoint, data });
    const response = {
      data: {
        id: nanoid(),
        token: nanoid(),
        email: 'vale@gmail.com',
      },
    };
    return response;
  },
};
