const lowerCaseWords = (mixedArray) =>
  new Promise((res, rej) => {
    if (mixedArray.length === 0 || !Array.isArray(mixedArray)) 
      rej("Invalid input array");
     res(mixedArray.filter((item) => 
     isNaN(item)).map((word) => word.toLowerCase()));
  });
  const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"]; 
  lowerCaseWords (mixedArray)
    .then((res) =>
      console.log(res) )
    .catch((error) =>
      console.log(error));