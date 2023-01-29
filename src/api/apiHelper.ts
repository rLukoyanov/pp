import axios, { isAxiosError } from 'axios';

export type ProfileResponse = {
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

export type CompanyRatingResponse = {
  pos: number;
  name: string;
  industry: string;
  studentsCount: number;
};

async function getCompanyRating() {
  try {
    const { data } = await axios.get<CompanyRatingResponse>(
      'http://localhost:4000/rating',
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    return data;
  } catch (error) {
    console.error(error);
  }
}

export type ResponsesResponse = {
  id: number;
  title: string;
  companyName: string;
  city: string;
  status: string;
};

async function getResponses() {
  try {
    const { data } = await axios.get<ResponsesResponse>(
      'http://localhost:4000/responses',
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    return data;
  } catch (error) {
    console.error(error);
  }
}

export { getProfile, getCompanyRating, getResponses };
