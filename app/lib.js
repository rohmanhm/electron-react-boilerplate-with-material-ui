import { mkdir, test, touch } from 'shelljs';

const makeDirs = (fullPath, fileName) => {
  if (!test('-d', fullPath)) {
    mkdir('-p', fullPath);
  }
  if (fileName && !test('-f', `${fullPath}${fileName}`)) {
    touch(`${fullPath}${fileName}`);
  }
};

export default {
  makeDirs
};
