const critics = document.querySelector(".all-critics");

critics.onclick = see;

function see(e) {
  const parent = e.target.parentNode;
  const id = parent.getAttribute("data-id");
  console.log(parent);
  if (e.target.className == "delete-btn") {
    parent.remove();
    axios
      .delete(`/admin/critiques/${id}`)
      .then(dbres => {
        console.log(dbres);
      })
      .catch(err => console.log(err));
  }
  return;
}
