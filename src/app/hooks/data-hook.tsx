import { useQuery } from "react-query";
import services from "../services";

export const useAllProducts = () => {
  return useQuery(["products"], services.getAllProducts);
};

