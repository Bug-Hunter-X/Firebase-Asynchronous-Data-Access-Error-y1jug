```javascript
// Incorrect - Accessing data before it's loaded
db.collection('myCollection').doc('myDoc').get().then((doc) => {
  console.log(doc.data().myField); // Error: myField might be undefined
});

// Correct - Using async/await
async function getData() {
  const docRef = db.collection('myCollection').doc('myDoc');
  const doc = await docRef.get();
  if (doc.exists) {
    console.log(doc.data().myField); // Access after data is loaded
  } else {
    console.log('No such document!');
  }
}
getData();

// Correct - Using .then()
db.collection('myCollection').doc('myDoc').get().then((doc) => {
  if (doc.exists) {
    console.log(doc.data().myField); // Access after data is loaded
  } else {
    console.log('No such document!');
  }
});
```