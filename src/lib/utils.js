import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const request = async (requestOptions) => {
  let response;
  try {
    const { data } = await axios({
      ...requestOptions,
    });
    response = { data };
  } catch (error) {
    response = { error };
  }
  return response;
};
