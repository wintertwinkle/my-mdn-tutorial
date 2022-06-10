window.addEventListener("load", () => {
    document.body.classList.remove("no-widget")
    document.body.classList.add("widget")
    NodeList.prototype.forEach = function (callback) {
        Array.prototype.forEach.call(this, callback)
    }
})

window.addEventListener("load", () => {
    const selectList = document.querySelectorAll(".select")

    selectList.forEach((select) => {
        const optionList = select.querySelectorAll(".option")

        optionList.forEach((option) => {
            option.addEventListener("mouseover", () => {
                highlightOption(select, option)
            })
        })

        select.addEventListener("click", (event) => {
            toggleOptList(select)
        })

        select.addEventListener("focus", (event) => {
            activateSelect(select, selectList)
        })

        select.addEventListener("blur", (event) => {
            deactivateSelect(select)
        })

        select.addEventListener("keyup", function (event) {
            // deactivate on keyup of `esc`
            if (event.keyCode === 27) {
                deactivateSelect(select)
            }
        })
    })
})

function deactivateSelect(select) {
    if (!select.classList.contains("active")) {
        return
    }

    const optList = select.querySelector(".optList")

    optList.classList.add("hidden")

    select.classList.remove("active")
}

function activateSelect(select, selectList) {
    if (select.classList.contains("active")) {
        return
    }
    selectList.forEach(deactivateSelect)
    select.classList.add("active")
}

function toggleOptList(select) {
    const optList = select.querySelector(".optList")
    optList.classList.toggle("hidden")
}

function highlightOption(select, option) {
    const optionList = select.querySelectorAll(".option")

    optionList.forEach((other) => {
        other.classList.remove("highlight")
    })
    option.classList.add("highlight")
}
