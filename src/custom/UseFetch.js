const UseFetch = async (
  url,
  method,
  body,
  content = "application/json"
) => {
  const connect = await fetch(`${url}`, {
    method: `${method}`,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": `${content}`,
    },
  });
  const response = await connect.json()
  console.log('response.messages==>', response.messages)
  return response
};

export default UseFetch;
