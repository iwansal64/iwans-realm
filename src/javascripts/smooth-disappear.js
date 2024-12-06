const observer_full = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry_element => {
        if (entry_element.isIntersecting) {
            entry_element.target.classList.add("smooth-active");
        }
        else {
            entry_element.target.classList.remove("smooth-active");
        }
    });
}, {
    rootMargin: "0px",
    threshold: 1,
});

const observer_half = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry_element => {
        if (entry_element.isIntersecting) {
            entry_element.target.classList.add("smooth-active");
        }
        else {
            entry_element.target.classList.remove("smooth-active");
        }
    });
}, {
    rootMargin: "0px",
    threshold: 0.5,
});


Array.from(document.getElementsByClassName("smooth-disappear-full")).forEach(element => {
    observer_full.observe(element);
});

Array.from(document.getElementsByClassName("smooth-disappear-half")).forEach(element => {
    observer_half.observe(element);
})

