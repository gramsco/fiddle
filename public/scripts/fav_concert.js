let btn = document.getElementById("add_to_fav")
let hidden = document.getElementById("very-hidden")

btn.onclick = addToFav

function addToFav() {
    let id = btn.getAttribute("data-id")
    axios
        .post(`/concert/${id}`)
        .then(res => {
            hidden.style.visibility = "visible"
            
        })
        .catch(err => console.log(err))
    

}