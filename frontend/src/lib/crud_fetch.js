const baseUrl = "http://localhost:6060/i";

export const postFetch = async (endponit, data) => {
  const url = `${baseUrl}/${endponit}`;
  const resp = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await resp.json();
};
