import baseUrl from "./baseUrl";

export const registerVolunteerApi = async (volunteerDetails) =>
  await baseUrl.post("/volunteers", volunteerDetails);

export const getVolunteersApi = async () => await baseUrl.get("/volunteers");

export const editVolunteerApi = async (id, volunteerDetails) =>
  await baseUrl.patch(`/volunteers/${id}`, volunteerDetails);
