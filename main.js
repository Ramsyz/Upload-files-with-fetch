// select file input
const input = document.getElementById("avatar");

// add event listener
input.addEventListener("change", () => {
  uploadFile(input.files[0]);
});

const uploadFile = (file) => {
  // validate

  // check file type
  if (
    !["image/jpeg", "image/gif", "image/png", "image/svg+xml"].includes(
      file.type
    )
  ) {
    console.log("Only images are allowed.");
    return;
  }

  // check file size (< 2MB)
  if (file.size > 2 * 1024 * 1024) {
    console.log("File must be less than 2MB.");
    return;
  }

  // add file to FormData object
  const fd = new FormData();
  fd.append("avatar", file);

  // send `POST` request
  fetch("/upload-avatar", {
    method: "POST",
    body: fd,
  })
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error(err));
};
