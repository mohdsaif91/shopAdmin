import routes from "../Routes";
import axiosCall from "../../util/AxiosCall";

function addShop(addRest) {
    const url = `${routes.shop.addShop}`;
    console.log(url);
    const method = "POST";
    const body = addRest;
    return axiosCall(url, method, body);
  }
  function editShop(editRest) {
    const url = `${routes.shop.editShop}`;
    const method = "PUT";
    const body = editRest;
    return axiosCall(url, method, body);
  }
  function getShop() {
    const url = `${routes.shop.getShop}/${localStorage.getItem('shop-id')}`;
    const method = "GET";
    // const body = editRest;
    return axiosCall(url, method, null);
  }

  export const Shop = {

    getShop,
    addShop,
    editShop
  };