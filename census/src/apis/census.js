import baseUrl from "./baseUrl";

export const addHouseListingApi = async (houseDetails) =>
  await baseUrl.post("/houseListing", houseDetails);

export const addPersonApi = async (personDetails) =>
  await baseUrl.post("/people", personDetails);

export const addCensusHouseNumberApi = async (number) =>
  await baseUrl.post("/censusHouseNumber", number);

export const getCensusHouseNumberApi = async () =>
  await baseUrl.get("/censusHouseNumber");
