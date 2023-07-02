async function awaitGetData() {
  console.log("calling");
  try {
    const fetchedData = await getData();
    console.log(fetchedData);
  } catch (error) {
    alert(error);
  }
}

awaitGetData()
// // .then(x => console.log(x));

// (async () => {
//   console.log( await awaitGetData())
// })()
// // alert("Succes");
