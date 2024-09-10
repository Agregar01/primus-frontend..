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
