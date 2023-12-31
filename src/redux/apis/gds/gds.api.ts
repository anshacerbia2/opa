const SERVER_API_URL = "http://localhost:8080/";
const url = SERVER_API_URL + "api/gds/";

const id_token =
  sessionStorage.getItem("id_token") || localStorage.getItem("id_token");

class GdsApis {
  public static retrievePNR(gds: string, pnr: string, officeId: string) {
    return fetch(`${url}retrieve/${gds}/${pnr}/${officeId}`, {
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

export default GdsApis;
