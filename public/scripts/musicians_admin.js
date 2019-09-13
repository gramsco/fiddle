const musicians = document.querySelector(".all-musicians")

console.log("connected!!!!!!!!!!!!")

musicians.onclick = delete_musician;

function delete_musician(e) {

    if (e.target.className == "delete-btn") {
        console.log(e.target)
        const btn = e.target
        const id = btn.getAttribute("data-id")
        const to_erase = document.getElementById(id)
        console.log(id)
        to_erase.remove()
        axios
            .delete(`/admin/musicians/delete/${id}`)
            .then((dbres) => {
                console.log(dbres)
            })
            .catch(err => console.log(err))
    }
}
