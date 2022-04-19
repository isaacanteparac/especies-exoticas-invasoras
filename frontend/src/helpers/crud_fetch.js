const baseUrl = "http://localhost:6060/i";

export const notoken = async (endponit, data) => {
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

export const yesToken = async (endponit) => {
  const url = `${baseUrl}/${endponit}`;
  const token = localStorage.getItem("token") || "";
  const resp = await fetch(url, {
    method: "GET",
    headers: {"x-token":token }
  })
  return await resp.json();
}
