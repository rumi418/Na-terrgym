const db = firebase.firestore();
  db.collection("classes").get().then((snapshot)=> {
    //snapshot is array
    snapshot.forEach((item)=>{
      console.log(item.data());
    })
  })



