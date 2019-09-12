const concerts = document.querySelector(".all-concerts")


concerts.onclick = delete_concert;

function delete_concert(e) {
    if (e.target.className != "delete-btn") return false
    const btn = e.target
    const id = btn.getAttribute("data-id")
    const to_erase = document.getElementById(id)
    console.log(id)
    to_erase.remove()
        axios
            .delete(`/admin/concert/delete/${id}`)
            .then((dbres) => {
                console.log(dbres)
            })
            .catch(err => console.log(err))
    return false
}