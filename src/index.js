const header = document.querySelector("h1")
header.innerText = "Good morning!"

const para = document.querySelector("#container > p")
const container = document.querySelector("#container")

para.remove()
// Create an image tag 
const image = document.createElement('img')
// set the attribute of src 
image.setAttribute('src', memes[0])
// image.src = memes[0]
// append it to the DOM 
container.appendChild(image)


//clear something 
container.innerHTML = ''


// memes.forEach( (m) => {
//     // create the image tag
//     const image = document.createElement('img')
//     // set the image src
//     image.src = m 
//     // append image
//     container.appendChild(image)
//  })

memes.forEach( (m) => createImage(m))
// memes.forEach(createImage)


 function createImage(srcInfo){
        // create the image tag
    const image = document.createElement('img')
    // set the image src
    image.src = srcInfo
    // append image
    container.appendChild(image)
 }
