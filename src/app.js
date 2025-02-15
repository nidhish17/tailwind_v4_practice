const darkToggleBtn = document.querySelector("input[type='checkbox']");


if (darkToggleBtn.checked === true) {
    if (!document.body.classList.contains("dark")) {
        document.body.classList.add("dark");
    }
}

darkToggleBtn.addEventListener("click", () => {
    if (darkToggleBtn.checked === true) {
        document.body.classList.toggle("dark");
        return
    }
    document.body.classList.toggle("dark");
})

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add("dark");
}
