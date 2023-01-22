import axios, { isAxiosError } from 'axios';

type ProfileResponse = {
  id: number;
  name: string;
  surName: string;
  contacts: {
    email: string;
    phoneNumber: string;
    city: string;
    university: string;
  };
  advantages: [];
};

async function getProfile() {
  try {
    const { data } = await axios.get<ProfileResponse>(
      'http://localhost:4000/profile',
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}

export { getProfile };
