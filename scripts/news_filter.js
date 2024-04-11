document.addEventListener("DOMContentLoaded", () => {
    const news = document.querySelectorAll(".news")
    const button = document.querySelector(".filter__button")
    const menu = document.querySelector(".filter__menu")
    let topics = [
        "jine",
        "jidlo",
        "pocasi",
        "medvedi"
    ]

    let filterNews = () => {
        console.log("j")
        for (let n of news) {
            n.classList.add("news--filtered")
            console.log(n)
        }
        
        for (const topic of topics) {
            if (document.forms["filtering"][topic].checked){
                fittingNews = document.querySelectorAll(`.${topic}`)
                for (let f of fittingNews) {
                    f.classList.remove("news--filtered")
                }
            }
        }
    }

    button.addEventListener("click", () => {
        if (menu.classList.contains("is-active")){
            filterNews()
        }
        menu.classList.toggle("is-active")
    })

})