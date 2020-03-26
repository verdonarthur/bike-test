const API_URL = `//${window.location.host}/api/`;

export function JQuerySerializeArrayToJSON(serializedArray) {
  var data = {};

  serializedArray.forEach(obj => {
    data[obj.name] = obj.value;
  });

  return data;
}

export async function apiRequest(resource, method, payload) {
  let buildedURL = `${API_URL}${resource}`;

  switch (method) {
    case 'post':
      return await $.ajax(buildedURL, {
        data: JSON.stringify(payload),
        method: 'POST',
        contentType: 'application/json'
      });

    case 'get':
      return await $.getJSON(buildedURL);
  }
}

export async function getAllTests() {
  return await apiRequest('tests', 'get', null);
}

export async function postATest(test) {
  return await apiRequest('tests', 'post', test);
}
