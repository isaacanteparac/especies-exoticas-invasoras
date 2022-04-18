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
  const verificationToken= [];
  const url = `${baseUrl}/${endponit}`;
  const resp = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => {
      verificationToken(data);
    });
  console.log(verificationToken);
  return await resp.json();
}
