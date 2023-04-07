import { get } from "https://bukulapak.github.io/api/process.js";
import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "./table.js";
let urlAPI = "https://rizkyria.herokuapp.com/allprofile";
get(urlAPI, isiTableProfile);
function isiTableProfile(results) {
  results.forEach(isiRow);
}
function isiRow(value) {
  let content = isiTabel
    .replace("#USERNAME#", value.biodata.nama)
    .replace("#SEKOLAH#", value.biodata.pendidikan)
    .replace("#JABATAN#", value.biodata.pengalaman)
    .replace("#LULUSAN#", value.biodata.pengalaman)
    .replace("#TAHUNSELESAI#", value.biodata.pengalaman)
    .replace("#LEVEL#", value.biodata.skill)
    .replace("#WARNA#", getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("iniTabel", content);
}
