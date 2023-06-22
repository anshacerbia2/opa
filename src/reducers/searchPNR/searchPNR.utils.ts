import GdsApis from "../../redux/apis/gds/gds.api";

export const fetchOfficeIds = async () => {
  try {
    const response = await GdsApis.getOfficeIds();
    console.log(response);
    const officeIds = response.json().map((obj: any) => {
      return obj.officeId;
    });
    return officeIds;
    return null;
  } catch (error) {
    console.log("Error on actions initOfficeIds:", error);
    return error;
  }
};
