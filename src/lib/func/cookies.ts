import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const setCookie = (name: string, value: string | number) => {
  return cookies.set(name, value, { path: '/' });
};

export const getCookie = (name: string) => {
  return cookies.get(name);
};

export const deleteCookie = (name: string) => {
  return cookies.remove(name, {
    path: '/',
    domain: process.env.NEXT_PUBLIC_DOMAIN,
  });
};
