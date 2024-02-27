window.onload = () => {
    
  document.querySelector('form').addEventListener('click', (e) => {
  e.preventDefault()

  const bookSelect1 = document.querySelector('#book-list1')
  

  fetch('https://openlibrary.org/search.json?q=fiction').then(
    (data) => {
      return data.json()
    }, 
    (err) => {
      console.log("Error:", err)
    }
  ).then(
    (json) => {
    console.log('FICTION DATA:', json)
    const data = json.docs
    data.forEach(item => {
      const option = document.createElement('option')
      option.innerText = item.title            
      bookSelect1.appendChild(option)
      document.querySelector('.output1').innerText = `Author Name:${item.author_name}`
      document.querySelector('.output2').innerText = `First publish year:${item.first_publish_year}`
      document.querySelector('.output3').innerText = `Time of story:${item.time}`
      document.querySelector('.output4').innerText = `Type:${item.type}`
      document.querySelector('.output5').innerText = `Average Ratings:${item.ratings_average}`
      
    }
    )     
  }
  )
        
  },
    (err) => console.log('Error loading books:', err))
      
          
 
  const link1 = document.querySelector('#myLink1')
  const modal_container1 = document.querySelector('#modal_container1')
  const closeBtn1 = document.querySelector('#closeBtn1')

  const link2 = document.querySelector('#myLink2')
  const modal_container2 = document.querySelector('#modal_container2')
  const closeBtn2 = document.querySelector('#closeBtn2')

  const link3 = document.querySelector('#myLink3')
  const modal_container3 = document.querySelector('#modal_container3')
  const closeBtn3 = document.querySelector('#closeBtn3')

  const link4 = document.querySelector('#myLink4')
  const modal_container4 = document.querySelector('#modal_container4')
  const closeBtn4 = document.querySelector('#closeBtn4')

  const link5 = document.querySelector('#myLink5')
  const modal_container5 = document.querySelector('#modal_container5')
  const closeBtn5 = document.querySelector('#closeBtn5')

  const link6 = document.querySelector('#myLink6')
  const modal_container6 = document.querySelector('#modal_container6')
  const closeBtn6 = document.querySelector('#closeBtn6')

  const link7 = document.querySelector('#myLink7')
  const modal_container7 = document.querySelector('#modal_container7')
  const closeBtn7 = document.querySelector('#closeBtn7')

  const link8 = document.querySelector('#myLink8')
  const modal_container8 = document.querySelector('#modal_container8')
  const closeBtn8 = document.querySelector('#closeBtn8')

  const link9 = document.querySelector('#myLink9')
  const modal_container9 = document.querySelector('#modal_container9')
  const closeBtn9 = document.querySelector('#closeBtn9')

  
    link1.addEventListener('click', function() {
      modal_container1.classList.add('show')
            
    })
  
    
    closeBtn1.addEventListener('click', function() {
      modal_container1.classList.remove('show')
    } )
  
  document.querySelector('form').addEventListener('click', (e) => {
  e.preventDefault()
    
  const bookSelect2 = document.querySelector('#book-list2')

  fetch('https://openlibrary.org/search.json?q=history').then(
  (data) => {
    return data.json()
  }, 
  (err) => {
    console.log("Error:", err)
  }
  ).then(
  (json) => {
    console.log('HISTORY DATA:', json)
    const data = json.docs
    data.forEach(item => {
      const option = document.createElement('option')
      option.innerText = item.title            
      bookSelect2.appendChild(option)
      document.querySelector('.output6').innerText = `Author Name:${item.author_name}`
      document.querySelector('.output7').innerText = `First publish year:${item.first_publish_year}`
      document.querySelector('.output8').innerText = `Time of story:${item.time}`
      document.querySelector('.output9').innerText = `Type:${item.type}`
      document.querySelector('.output10').innerText = `Average Ratings:${item.ratings_average}`
      
    }
    )     
  }
  )
        
  },
    (err) => console.log('Error loading books:', err))
  
    link2.addEventListener('click', function() {
      modal_container2.classList.add('show')
    })
  
    closeBtn2.addEventListener('click', function() {
      modal_container2.classList.remove('show')
    } )

document.querySelector('form').addEventListener('click', (e) => {
e.preventDefault()
    
  const bookSelect3 = document.querySelector('#book-list3')


fetch('https://openlibrary.org/search.json?q=romance%20novel').then(
  (data) => {
    return data.json()
  }, 
  (err) => {
    console.log("Error:", err)
  }
  ).then(
  (json) => {
    console.log('ROMANCE NOVEL DATA:', json)
    const data = json.docs
    data.forEach(item => {
      const option = document.createElement('option')
      option.innerText = item.title            
      bookSelect3.appendChild(option)
      document.querySelector('.output11').innerText = `Author Name:${item.author_name}`
      document.querySelector('.output12').innerText = `First publish year:${item.first_publish_year}`
      document.querySelector('.output13').innerText = `Time of story:${item.time}`
      document.querySelector('.output14').innerText = `Type:${item.type}`
      document.querySelector('.output15').innerText = `Average Ratings:${item.ratings_average}`
      
    }
    )     
  }
  )
        
  },
    (err) => console.log('Error loading books:', err))

  
    link3.addEventListener('click', function() {
      modal_container3.classList.add('show')
    })
  
    closeBtn3.addEventListener('click', function() {
      modal_container3.classList.remove('show')
    } )

document.querySelector('form').addEventListener('click', (e) => {
e.preventDefault()
    
  const bookSelect4 = document.querySelector('#book-list4')


fetch('https://openlibrary.org/search.json?q=biography').then(
  (data) => {
    return data.json()
  }, 
  (err) => {
    console.log("Error:", err)
  }
  ).then(
  (json) => {
    console.log('BIOGRAPHY DATA:', json)
    const data = json.docs
    data.forEach(item => {
      const option = document.createElement('option')
      option.innerText = item.title            
      bookSelect4.appendChild(option)
      document.querySelector('.output16').innerText = `Author Name:${item.author_name}`
      document.querySelector('.output17').innerText = `First publish year:${item.first_publish_year}`
      document.querySelector('.output18').innerText = `Time of story:${item.time}`
      document.querySelector('.output19').innerText = `Type:${item.type}`
      document.querySelector('.output20').innerText = `Average Ratings:${item.ratings_average}`
      
    }
    )     
  }
  )
        
  },
    (err) => console.log('Error loading books:', err))


  
    link4.addEventListener('click', function() {
      modal_container4.classList.add('show')
    })
  
    closeBtn4.addEventListener('click', function() {
      modal_container4.classList.remove('show')
    } )


document.querySelector('form').addEventListener('click', (e) => {
e.preventDefault()
    
  const bookSelect5 = document.querySelector('#book-list5')

fetch('https://openlibrary.org/search.json?q=children').then(
  (data) => {
    return data.json()
  }, 
  (err) => {
    console.log("Error:", err)
  }
  ).then(
  (json) => {
    console.log('CHILDREN DATA:', json)
    const data = json.docs
    data.forEach(item => {
      const option = document.createElement('option')
      option.innerText = item.title            
      bookSelect5.appendChild(option)
      document.querySelector('.output21').innerText = `Author Name:${item.author_name}`
      document.querySelector('.output22').innerText = `First publish year:${item.first_publish_year}`
      document.querySelector('.output23').innerText = `Time of story:${item.time}`
      document.querySelector('.output24').innerText = `Type:${item.type}`
      document.querySelector('.output25').innerText = `Average Ratings:${item.ratings_average}`
      
    }
    )     
  }
  )
        
  },
    (err) => console.log('Error loading books:', err))


  
    link5.addEventListener('click', function() {
      modal_container5.classList.add('show')
    })
  
    closeBtn5.addEventListener('click', function() {
      modal_container5.classList.remove('show')
    } )


document.querySelector('form').addEventListener('click', (e) => {
e.preventDefault()
    
  const bookSelect6 = document.querySelector('#book-list6')


fetch('https://openlibrary.org/search.json?q=novel').then(
  (data) => {
    return data.json()
  }, 
  (err) => {
    console.log("Error:", err)
  }
  ).then(
  (json) => {
    console.log('NOVEL DATA:', json)
    const data = json.docs
    data.forEach(item => {
      const option = document.createElement('option')
      option.innerText = item.title            
      bookSelect6.appendChild(option)
      document.querySelector('.output26').innerText = `Author Name:${item.author_name}`
      document.querySelector('.output27').innerText = `First publish year:${item.first_publish_year}`
      document.querySelector('.output28').innerText = `Time of story:${item.time}`
      document.querySelector('.output29').innerText = `Type:${item.type}`
      document.querySelector('.output30').innerText = `Average Ratings:${item.ratings_average}`
      
    }
    )     
  }
  )
        
  },
    (err) => console.log('Error loading books:', err))

  
    link6.addEventListener('click', function() {
      modal_container6.classList.add('show')
    })
  
    closeBtn6.addEventListener('click', function() {
      modal_container6.classList.remove('show')
    } )


document.querySelector('form').addEventListener('click', (e) => {
e.preventDefault()
    
  const bookSelect7 = document.querySelector('#book-list7')

fetch('https://openlibrary.org/search.json?q=science%20fiction').then(
  (data) => {
    return data.json()
  }, 
  (err) => {
    console.log("Error:", err)
  }
  ).then(
  (json) => {
    console.log('SCIENCE FICTION DATA:', json)
    const data = json.docs
    data.forEach(item => {
      const option = document.createElement('option')
      option.innerText = item.title            
      bookSelect7.appendChild(option)
      document.querySelector('.output31').innerText = `Author Name:${item.author_name}`
      document.querySelector('.output32').innerText = `First publish year:${item.first_publish_year}`
      document.querySelector('.output33').innerText = `Time of story:${item.time}`
      document.querySelector('.output34').innerText = `Type:${item.type}`
      document.querySelector('.output35').innerText = `Average Ratings:${item.ratings_average}`
      
    }
    )     
  }
  )
        
  },
    (err) => console.log('Error loading books:', err))

  
    link7.addEventListener('click', function() {
      modal_container7.classList.add('show')
    })
  
    closeBtn7.addEventListener('click', function() {
      modal_container7.classList.remove('show')
    } )



document.querySelector('form').addEventListener('click', (e) => {
e.preventDefault()
    
  const bookSelect8 = document.querySelector('#book-list8')

fetch('https://openlibrary.org/search.json?q=non-fiction').then(
  (data) => {
    return data.json()
  }, 
  (err) => {
    console.log("Error:", err)
  }
  ).then(
  (json) => {
    console.log('NON-FICTION DATA:', json)
    const data = json.docs
    data.forEach(item => {
      const option = document.createElement('option')
      option.innerText = item.title            
      bookSelect8.appendChild(option)
      document.querySelector('.output36').innerText = `Author Name:${item.author_name}`
      document.querySelector('.output37').innerText = `First publish year:${item.first_publish_year}`
      document.querySelector('.output38').innerText = `Time of story:${item.time}`
      document.querySelector('.output39').innerText = `Type:${item.type}`
      document.querySelector('.output40').innerText = `Average Ratings:${item.ratings_average}`
      
    }
    )     
  }
  )
        
  },
    (err) => console.log('Error loading books:', err))

  
    link8.addEventListener('click', function() {
      modal_container8.classList.add('show')
    })
  
    closeBtn8.addEventListener('click', function() {
      modal_container8.classList.remove('show')
    } )


document.querySelector('form').addEventListener('click', (e) => {
e.preventDefault()
    
  const bookSelect9 = document.querySelector('#book-list9')


fetch('https://openlibrary.org/search.json?q=adventure').then(
  (data) => {
    return data.json()
  }, 
  (err) => {
    console.log("Error:", err)
  }
  ).then(
  (json) => {
    console.log('ADVENTURE DATA:', json)
    const data = json.docs
    data.forEach(item => {
      const option = document.createElement('option')
      option.innerText = item.title            
      bookSelect9.appendChild(option)
      document.querySelector('.output41').innerText = `Author Name:${item.author_name}`
      document.querySelector('.output42').innerText = `First publish year:${item.first_publish_year}`
      document.querySelector('.output43').innerText = `Time of story:${item.time}`
      document.querySelector('.output44').innerText = `Type:${item.type}`
      document.querySelector('.output45').innerText = `Average Ratings:${item.ratings_average}`
      
    }
    )     
  }
  )
        
  },
    (err) => console.log('Error loading books:', err))

  
    link9.addEventListener('click', function() {
      modal_container9.classList.add('show')
    })
  
    closeBtn9.addEventListener('click', function() {
      modal_container9.classList.remove('show')
    } )



}
