import { nanoid } from 'nanoid';

const delay = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

export const apiCall = {
  post: async (endpoint: string, data: Record<string, string>) => {
    console.info({ endpoint, data });
    await delay(2000);
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
