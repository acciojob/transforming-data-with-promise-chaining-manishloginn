//your JS code here. If required.

  const btn = document.getElementById("btn")

  const output = document.getElementById("output")

  btn.addEventListener("click", ()=> {
    const ip = document.getElementById("ip").value;
    const firstPromise = new Promise ((resolve, reject) => {
      setTimeout(()=> {
        resolve( `Result: ${ip}`)
      }, 2000)
    })
   
    const secondPromise = firstPromise.then(number => {
      return new Promise ((resolve, reject) => {
        setTimeout(() => {
          resolve( number * 2) 
        }, 1000);
      })
    }) 

    const thirdPromise = secondPromise.then (number => {
      return new Promise ((resolve, reject) => {
        setTimeout(() => {
          resolve( number - 3) 
        }, 1000)
      })
    })

    const fourthPromise = thirdPromise.then (number => {
      return new Promise ((resolve, reject) => {
        setTimeout(() => {
          resolve( number / 2) 
        }, 1000);
      })
    })

    const fifthPromise = fourthPromise.then (number => {
      return new Promise ((resolve, reject) => {
        setTimeout(() => {
          resolve( number + 10) 
        }, 1000);
      })
    })

    fifthPromise.then (finalResult => {
      output.innerText = `Final Result: ${finalResult}`
    })
  })