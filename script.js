let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

let turn0 = true;

const checkWinners = () => {
    for (let pattern of winpatterns) {
        let post1 = boxes[pattern[0]].innerText;
        let post2 = boxes[pattern[1]].innerText;
        let post3 = boxes[pattern[2]].innerText;

        if (post1 !== "" && post2 !== "" && post3 !== "") {
            if (post1 === post2 && post2 === post3) {
                alert("Winner: " + post1);
                return true;
            }
        }
    }
    return false;
};

const isTie = () => {
    for (let box of boxes) {
        if (box.innerText === "") {
            return false;
        }
    }
    return true;
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") {
            if (turn0) {
                box.innerText = "o";
                turn0 = false;
            } else {
                box.innerText = "x";
                turn0 = true;
            }
            box.disabled = true;

            if (checkWinners()) {
                boxes.forEach((b) => b.disabled = true);
            } else if (isTie()) {
                alert("It's a tie!");
            }
        }
    });
});

reset.addEventListener('click', function() {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    turn0 = true;
});
