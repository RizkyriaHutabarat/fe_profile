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
    .replace("#USERNAME#", value.nama_user)
    // .replace("#EMAIL#", value.biodata.email)
    .replace("#SEKOLAH#", value.data_pendidikan.sekolah)
    .replace("#JABATAN#", value.data_pengalaman.jabatan)
    .replace("#LULUSAN#", value.data_pendidikan.lulusan)
    // .replace("#TAHUNSELESAI#", value.biodata.pengalaman)
    .replace("#SKILL#", value.skills.nama)
    .replace("#LEVEL#", value.skills.level)
    .replace("#WARNA#", getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("iniTabel", content);
}
