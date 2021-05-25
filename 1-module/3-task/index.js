function ucFirst(str) {
  if(!str) return str;
  if(str.lengt < 2) return str.toUpperCase();

  let res = str[0].toUpperCase() + str.slice(1).toLowerCase();

  return res;
}
