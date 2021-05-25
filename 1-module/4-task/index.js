function checkSpam(str) {
  let isSpam = str.toLowerCase().includes('1xbet') || str.toLowerCase().includes('xxx');

  if(isSpam) return true;
  
  return false;
}
