import { homedir } from 'os';
import {
    join,
    resolve
} from 'path';


function replaceHomeDir (path) {
    return path.replaceAll(
        '~',
        homedir()
    );
}


export default function pathabs (...paths) {
    paths = paths.map(
        (path) => replaceHomeDir(path)
    );

    return resolve(
        join(...paths)
    );
}
