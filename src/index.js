

// const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

// const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", () => {

    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then (r => r.json())
    .then (data =>{
        const imgObj = data.message
        imgObj.map(
            (objData) => {

            let image = document.createElement ("img")
            image.src = objData
            document.querySelector("#dog-image-container").appendChild(image)

            })
    });

    fetch('https://dog.ceo/api/breeds/list/all')
    .then (r => r.json ())
    .then (data => {
        const breedList = Object.keys(data.message)

         breedList.forEach(
            (objData) => {

            let list = document.createElement ("li")
            list.textContent = objData
            document.querySelector("#dog-breeds").append(list)

            list.addEventListener("click", (e) =>{
                e.target.style.color = "red"
            })
            })




        let dropDown = document.querySelector("#breed-dropdown")
        const newList = dropDown.addEventListener("change",()=>{
            document.querySelector("ul").removeChild
            let letter = dropDown.value
            const selectedBreeds = breedList.filter((objData) => {
                return objData.startsWith(letter)
                })

            breedList.forEach( () => {

                let list = document.createElement ("li")
                list.textContent = selectedBreeds
                document.querySelector("#dog-breeds").append(list)

                list.addEventListener("click", (e) =>{
                    e.target.style.color = "red"
                })
                })

          })

          newList



    })


 })
