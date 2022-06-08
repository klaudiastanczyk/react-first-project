const strContains = (one, two) => {
  one = one.toLowerCase();
  two = two.toLowerCase();

  if(one.includes(two)){
    return true;
  } else {
    return false;
  }
}

export default strContains;
