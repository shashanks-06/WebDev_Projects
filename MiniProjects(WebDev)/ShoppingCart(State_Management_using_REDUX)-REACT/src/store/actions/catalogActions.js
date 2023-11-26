import { getProducts } from "./catalogActions";
import { getDepartments } from "./catalogActions";

export { getDepartments, getProducts } from "../../services/catalog";

export const setFilter = (department) => {
  return {
    type: "SET_FILTER",
    filter: department,
  };
};

export const clearFilter = () => {
  return {
    type: "CLEAR_FILTER",
  };
};
export const initCatalog = () => (dispatch) => {
  // Fetch data from an external service
  Promise.all([getDepartments(), getProducts()])
    .then((data) => {
      dispatch({
        type: "INITIALIZE_CATALOG",
        departments: data[0],
        products: data[1],
      });
    })
    .catch(() => {
      dispatch({
        type: "INITIALIZE_CATALOG",
        departments: [],
        products: [],
      });
    });
};
