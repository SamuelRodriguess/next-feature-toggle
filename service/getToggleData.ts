import axios from "axios";

export const fetchFeatures = async () => {
  try {
    const { data } = await axios.get<string[]>("/api/getFeatures");

    return data;
  } catch (e) {
    console.log("Something went wrong");
  }

  return [] as string[];
};
