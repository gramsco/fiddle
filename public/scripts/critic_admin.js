const critics = document.querySelector(".all-critics")


critics.onclick = see;

function see(e) {
    const parent = e.target.parentNode
    const id = parent.getAttribute("data-id")
    console.log(parent)
    parent.remove()
    if (e.target.className == "delete-btn") {
        axios
            .delete(`/admin/critiques/${id}`)
            .then((dbres) => {
                console.log(dbres)
            })
            .catch(err => console.log(err))
    }
    else if (e.target.className == "see-btn") {
        
    }
    else return 0
    
    
}