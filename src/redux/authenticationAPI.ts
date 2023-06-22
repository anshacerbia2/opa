export interface ICredentials {
  username: string;
  password: string;
}

export const authenticateAPI = (credentials: ICredentials) => {
  return fetch("http://localhost:8080/api/authenticate", {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      return error;
    });
};

export const accountAPI = (id_token: string) => {
  return fetch("http://localhost:8080/api/account", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${id_token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      return error;
    });
};

// accountAPI response:
// {
//     "id": 321,
//     "login": "juantest",
//     "firstName": "juan",
//     "lastName": "test",
//     "email": "adian.rhamadhan@atibusinessgroup.com",
//     "imageUrl": null,
//     "activated": true,
//     "langKey": "en",
//     "createdBy": "admin",
//     "createdDate": "2023-05-25T02:32:07Z",
//     "lastModifiedBy": "anonymousUser",
//     "lastModifiedDate": "2023-05-25T02:34:55Z",
//     "authorities": [
//         "PAGE_MANUAL_DEPOSIT",
//         "ROLE_USER"
//     ],
//     "paymentMethod": "got",
//     "responsibleAgents": "",
//     "agent": {
//         "id": 17,
//         "name": "GERAI PANGKEPTONASA",
//         "npwp": "123",
//         "city": "Tangerang",
//         "country": "indonesia",
//         "address": "Tangerang",
//         "type": "Travel Agent",
//         "phone": "0211234567",
//         "emailDomain": "ryan.poernama@atibusinessgroup.com",
//         "specialOpenUserId": 21,
//         "routingPayment": "MULTI_ROUTE",
//         "createdBy": null,
//         "createdDateTime": "2023-03-01T08:14:36Z",
//         "updatedBy": "upgga0304",
//         "updatedDateTime": "2023-06-21T05:04:54Z",
//         "isLog": true
//     },
//     "vips": [
//         "admin",
//         "admin.ati",
//         "anne.s"
//     ],
//     "agentName": null,
//     "locked": false,
//     "suspended": false,
//     "lastLoginDateTime": null,
//     "admin": false
// }
