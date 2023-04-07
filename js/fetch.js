import { get } from "https://bukulapak.github.io/api/process.js";
let urlAPI = "https://rizkyria.herokuapp.com/allprofile";
get(urlAPI, isiTableProfile);
function isiTableProfile(results) {
  console.log(results);
}
