const musicians = document.querySelector(".all-musicians")

console.log("connected!!!!!!!!!!!!")

musicians.onclick = delete_musician;

function delete_musician(e) {

    if (e.target.className == "delete-btn-admin") {
        console.log(e.target)
        const btn = e.target
        const id = btn.getAttribute("data-id")
        console.log(id)
        if (confirm("Are you sure you wanna delete this poor musician ?")) {
            const to_erase = document.getElementById(id)
            to_erase.remove()
            axios
                .delete(`/admin/musicians/delete/${id}`)
                .then((dbres) => {
                    console.log(dbres)
                })
                .catch(err => console.log(err))
        }
    }
}
