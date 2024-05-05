import pathabs from "../src/pathabs.mjs";


let path = "~/Documents";

console.log(path);

path = pathabs(path);

console.log(path);
