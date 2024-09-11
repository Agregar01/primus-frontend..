import type { LoginRequest, LoginResponse } from './payloads';

export const loginService = async (
  form: LoginRequest
): Promise<{ status: number; response: LoginResponse | null }> => {
  try {
    let statusCode = 0;
    let responseData: LoginResponse | null = null;
    const basicAuth = 'Basic ' + btoa('user:user');
    const { data, error } = await useFetch<LoginResponse>(
      `${BASEURL}/users/auth`,
      {
        method: 'POST',
        body: form,
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
          Authorization: basicAuth,
        },
        onResponse({ response }) {
          statusCode = response.status;
        },
        onResponseError({ response }) {
          statusCode = response.status;
        },
      }
    );

    if (error.value) {
      responseData = null;
    } else {
      responseData = data.value as LoginResponse;
    }

    return { status: statusCode, response: responseData };
  } catch (err) {
    return { status: 500, response: null };
  }
};

export const forgetPasswordService = async (email: string): Promise<any> => {
  try {
    let statusCode = 0;
    let responseData: LoginResponse | null = null;
    const basicAuth = 'Basic ' + btoa('user:user');
    const { data, error } = await useFetch<LoginResponse>(
      `${BASEURL}/users/auth/reset-send-otp?email=${email}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
          Authorization: basicAuth,
        },
        onResponse({ response }) {
          statusCode = response.status;
        },
        onResponseError({ response }) {
          statusCode = response.status;
        },
      }
    );

    if (error.value) {
      responseData = null;
    } else {
      responseData = data.value;
    }

    return { status: statusCode, response: responseData };
  } catch (err) {
    return { status: 500, response: null };
  }
};

export const resetPasswordService = async (
  email: string,
  password: string
): Promise<any> => {
  try {
    let statusCode = 0;
    let responseData: LoginResponse | null = null;
    const basicAuth = 'Basic ' + btoa('user:user');
    const { data, error } = await useFetch<LoginResponse>(
      `${BASEURL}/users/reset`,
      {
        method: 'POST',
        body: { email, password, client: 'PRIMUS' },
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
          Authorization: basicAuth,
        },
        onResponse({ response }) {
          statusCode = response.status;
        },
        onResponseError({ response }) {
          statusCode = response.status;
        },
      }
    );

    if (error.value) {
      responseData = null;
    } else {
      responseData = data.value;
    }

    return { status: statusCode, response: responseData };
  } catch (err) {
    return { status: 500, response: null };
  }
};

export const getDashboardStats = async (): Promise<any> => {
  try {
    let statusCode = 0;
    let responseData: LoginResponse | null = null;
    const basicAuth = 'Basic ' + btoa('user:user');
    const { data, error } = await useFetch<LoginResponse>(
      `${BASEURL}/primus/stats/cases`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
          Authorization: basicAuth,
        },
        onResponse({ response }) {
          statusCode = response.status;
        },
        onResponseError({ response }) {
          statusCode = response.status;
        },
      }
    );

    if (error.value) {
      responseData = null;
    } else {
      responseData = data.value;
    }

    return { status: statusCode, response: responseData };
  } catch (err) {
    return { status: 500, response: null };
  }
};
