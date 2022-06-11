window.addEventListener("load", () => {
    // use custom select if javascript available
    document.body.classList.remove("no-widget")
    document.body.classList.add("widget")
    // add forEach function to NodeList
    NodeList.prototype.forEach = function (callback) {
        Array.prototype.forEach.call(this, callback)
    }
})

window.addEventListener("load", () => {
    const selectList = document.querySelectorAll(".select")

    // add functionalities to all custom selects
    selectList.forEach((select) => {
        const optionList = select.querySelectorAll(".option")

        select.tabIndex = 0

        // make the native select control no longer focusable
        select.nextElementSibling.tabIndex = -1

        // Acquire initial index from native select and
        // set the initial value of custom select
        const selectedIndex = getIndex(select)
        updateValue(select, selectedIndex)

        // add toggle function to custom select
        // when user clicks on the custom select
        select.addEventListener("click", (event) => {
            toggleOptList(select)
        })

        // activate custom select when custom select is foucsed
        select.addEventListener("focus", (event) => {
            activateSelect(select, selectList)
        })

        // deactivate custom select when custom select is blured
        select.addEventListener("blur", (event) => {
            deactivateSelect(select)
        })

        // deactivate custom select when custom select is blured
        // by pressing `esc` key
        select.addEventListener("keyup", function (event) {
            // deactivate on keyup of `esc`
            if (event.keyCode === 27) {
                deactivateSelect(select)
            }
        })

        // Each time a user uses their keyboard on a focused control,
        // we update the value accordingly
        select.addEventListener("keyup", (event) => {
            const length = optionList.length
            let index = getIndex(select)

            // keyCode 40 means arrow up
            if (event.keyCode === 40 && index < length - 1) {
                index++
            }
            // keyCode 38 means arrow down
            if (event.keyCode === 38 && index > 0) {
                index--
            }

            updateValue(select, index)
        })

        // add highlight function to options of custom select
        optionList.forEach((option, index) => {
            // Each time a user move mouse over an option,
            // highlight the option
            option.addEventListener("mouseover", () => {
                highlightOption(select, option)
            })
            // Each time a user clicks on an option,
            // update the value accordingly
            option.addEventListener("click", (event) => {
                updateValue(select, index)
            })
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

function updateValue(select, index) {
    const nativeSelect = select.nextElementSibling
    const value = select.querySelector(".value")
    const optionList = select.querySelectorAll(".option")

    // make sure all the options are not selected
    optionList.forEach((other) => {
        other.setAttribute("aria-selected", "false")
    })
    // make sure the chosen option is selected
    optionList[index].setAttribute("aria-selected", "true")

    nativeSelect.selectedIndex = index
    value.innerHTML = optionList[index].innerHTML
    highlightOption(select, optionList[index])
}

function getIndex(select) {
    const nativeSelect = select.nextElementSibling
    return nativeSelect.selectedIndex
}
