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
    console.log('FICTION DATA:', json)
    return json
  }, 
  (err) => {
    console.log(err)
  }
)

fetch('https://openlibrary.org/search.json?q=history').then(
  (data) => {
    return data.json()
  }, 
  (err) => {
    console.log(err)
  }
  ).then(
  (json) => {
    console.log('HISTORY DATA:', json)
    return json
  },
  (err) => {
    console.log(err)
  }
)


fetch('https://openlibrary.org/search.json?q=romance%20novel').then(
  (data) => {
    return data.json()
  }, 
  (err) => {
    console.log(err)
  }
  ).then(
  (json) => {
    console.log('ROMANCE DATA:', json)
    return json
  },
  (err) => {
    console.log(err)
  }
)


fetch('https://openlibrary.org/search.json?q=biography').then(
  (data) => {
    return data.json()
  }, 
  (err) => {
    console.log(err)
  }
  ).then(
  (json) => {
    console.log('BIOGRAPHY DATA:', json)
    return json
  },
  (err) => {
    console.log(err)
  }
)



fetch('https://openlibrary.org/search.json?q=children').then(
  (data) => {
    return data.json()
  }, 
  (err) => {
    console.log(err)
  }
  ).then(
  (json) => {
    console.log('CHILDREN DATA:', json)
    return json
  },
  (err) => {
    console.log(err)
  }
)


fetch('https://openlibrary.org/search.json?q=novel').then(
  (data) => {
    return data.json()
  }, 
  (err) => {
    console.log(err)
  }
  ).then(
  (json) => {
    console.log('NOVEL DATA:', json)
    return json
  },
  (err) => {
    console.log(err)
  }
)


fetch('https://openlibrary.org/search.json?q=science%20fiction').then(
  (data) => {
    return data.json()
  }, 
  (err) => {
    console.log(err)
  }
  ).then(
  (json) => {
    console.log('SCIENCE FICTION DATA:', json)
    return json
  },
  (err) => {
    console.log(err)
  }
)


fetch('https://openlibrary.org/search.json?q=non-fiction').then(
  (data) => {
    return data.json()
  }, 
  (err) => {
    console.log(err)
  }
  ).then(
  (json) => {
    console.log('NON-FICTION DATA:', json)
    return json
  },
  (err) => {
    console.log(err)
  }
)


fetch('https://openlibrary.org/search.json?q=adventure').then(
  (data) => {
    return data.json()
  }, 
  (err) => {
    console.log(err)
  }
  ).then(
  (json) => {
    console.log('ADVENTURE DATA:', json)
    return json
  },
  (err) => {
    console.log(err)
  }
)

}