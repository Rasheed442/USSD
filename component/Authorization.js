export const token =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;

export const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};
