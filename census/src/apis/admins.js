import baseUrl from "./baseUrl";

export const getAdminsApi = async () => await baseUrl.get("/admins");
