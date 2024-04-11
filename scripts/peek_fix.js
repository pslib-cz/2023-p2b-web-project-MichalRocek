document.addEventListener("DOMContentLoaded", () => {
    const peeks = document.querySelectorAll(".news__peek");
    if (window.innerWidth >= 768 ) {
        for (const peek of peeks) {
            peek.open = true;
        }
    }
    else {
        for (const peek of peeks) {
            peek.open = false;
        }
    }
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768 ) {
            for (const peek of peeks) {
                peek.open = true;
            }
        }
        else {
            for (const peek of peeks) {
                peek.open = false;
            }
        }
    })
})

