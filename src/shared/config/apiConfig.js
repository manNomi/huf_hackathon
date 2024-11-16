/*
******************* USAGE *******************

fetchRequest('METHOD', 'NETWROKING URL', 'BODY' = null, 'TOKEN' = null);

*********************************************
*/

const apiConfig = (method, body, token) => {
  const config = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (token !== null) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  if (body !== null) {
    config.body = JSON.stringify(body);
  }
  return config;
};

export const fetchRequest = async (method, url, body = null, token = null) => {
  const response = await fetch(url, apiConfig(method, body, token));

  let result = handleStatus(response);
  return result;
};

const handleStatus = async (response) => {
  switch (response.status) {
    case 200:
    case 201:
      return await response.json();
    default:
      console.log("API error"); // 상태 코드가 200이 아닌 경우 경고
      return null;
  }
};
