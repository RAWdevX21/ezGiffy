import path from "path";
import router from "../../source/router";

const inform = console.log;

let dir;
let root;
let base;
let name;
let ext;

function getFile(clientFile) {


  //props= dir,root,base,name,ext
  const { dir , root, base, name, ext } = path.parse(clientFile);

  return router({ dir , root, base, name, ext });
  
}
  inform(`This is the dir: ${dir}\nThis is the root: ${root}\nThis is the base: ${base}\nThis is the name: ${name}\nThis is the ext: ${ext}`);

export { getFile, dir , root, base, name, ext };