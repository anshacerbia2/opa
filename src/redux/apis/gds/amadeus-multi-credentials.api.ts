const SERVER_API_URL = "http://localhost:8080/";
const url = SERVER_API_URL + "api/amadeus-multi-credentials/";
const urlAll = SERVER_API_URL + "api/amadeus-multi-credentials/all/";
const urlDownlaod = SERVER_API_URL + "api/amadeus-multi-credentials/download/";

const id_token =
  sessionStorage.getItem("id_token") || localStorage.getItem("id_token");

class AmadeusMultiCredentialsApis {
  public static getOfficeIds() {
    return fetch(`${url}office-ids`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${id_token}`,
      },
    })
      .then((response) => response.json())
      .catch((error) => error);
  }
}

export default AmadeusMultiCredentialsApis;
