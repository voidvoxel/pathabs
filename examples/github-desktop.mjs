import pathabs from "../src/pathabs.mjs";


let path = "~/Documents/GitHub";

console.log(path);

path = pathabs(path);

console.log(path);
