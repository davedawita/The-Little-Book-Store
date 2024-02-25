window.onload = () => {
fetch('https://openlibrary.org/search.json?q=fiction').then(
  (data) => {
    return data.json()
  }, 
  (err) => {
    console.log(err)
  }
).then(
  (json) => {
    console.log(json)
    return json
  }, 
  (err) => {
    console.log(err)
  }
)

















}