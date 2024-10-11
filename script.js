const checkboxes = document.querySelectorAll(".check-box");
let lastcheck;

checkboxes.forEach((checkbox) => {

    checkbox.addEventListener("click", () => {
        const task = checkbox.nextElementSibling.querySelector(".task");

        checking(checkbox, task);

    });

});

function checking(check, tsk) {
    if (check.checked) {
        tsk.style.textDecoration = "line-through";

    } else {
        tsk.style.textDecoration = "none";

    }
}

checkboxes.forEach((ck) => ck.addEventListener("click", HandelCheck));
function HandelCheck(evt) {

    let isBetween = false;
    if (evt.shiftKey && this.checked) {
        checkboxes.forEach(ck => {
            if (ck === this || ck === lastcheck) {
                isBetween = !isBetween;
            }
            if (isBetween || ck === this || ck === lastcheck) {
                ck.checked = true;
                const task = ck.nextElementSibling.querySelector(".task");

                checking(ck, task);
            }
        });

    }
    lastcheck = this;
}


