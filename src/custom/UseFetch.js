const UseFetch = async (
  url,
  method,
  body,
  content = "application/json"
) => {
  var connect;
  if (body != null ) {
    connect = await fetch(`${url}`, {
      method: `${method}`,
      body: JSON.stringify(body),
      headers: content
    });
  } else {
    connect = await fetch(`${url}`, {
      method: `${method}`,
      headers: content
    });
  }
  const response = await connect.json();
  console.log("response.messages ==> ", response.messages);
  return response;
};

export default UseFetch;
