import axios from "axios";

export const fetchToggleData = async () => {
  try {
    const { data } = await axios.get<string[]>("/api/toggle");

    return data;
  } catch (e) {
    console.error("Something went wrong");
  }

  return [] as string[];
};
