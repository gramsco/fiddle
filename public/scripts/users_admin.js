console.log("test")
document.addEventListener('click', delete_musician)

function delete_musician(e) {

    if (e.target.className == "delete-user-btn") {
        console.log(e.target)
        const btn = e.target
        const id = btn.parentNode.getAttribute("data-id")
        console.log(id)
        if (confirm("Are you sure you wanna delete this poor user ?")) {
            const to_erase = document.getElementById(id)
            to_erase.remove()
            axios
                .delete(`/admin/users/delete/${id}`)
                .then((dbres) => {
                    console.log(dbres)
                })
                .catch(err => console.log(err))
        }
    }
}
