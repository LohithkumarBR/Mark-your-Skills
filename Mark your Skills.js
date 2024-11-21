let skillList = [{
        skillName: "HTML",
        uniqueNo: 1,
    },
    {
        skillName: "CSS",
        uniqueNo: 2,
    },
    {
        skillName: "JavaScript",
        uniqueNo: 3,
    }
];

let skillListContainerEl = document.getElementById("skillListContainer");

function onMarkSkill(labelId) {
    let labelEl = document.getElementById(labelId);
    labelEl.classList.toggle("selected");
}

function createAndAppendSkill(skills) {
    let checkboxId = "checkbox" + skills.uniqueNo;
    let labelId = "label" + skills.uniqueNo;

    let skillEl = document.createElement("li");
    skillEl.classList.add("p-1");
    skillListContainerEl.appendChild(skillEl);

    let checkboxEl = document.createElement("input");
    checkboxEl.type = "checkbox";
    checkboxEl.id = checkboxId;

    checkboxEl.onclick = function() {
        onMarkSkill(labelId);
    };
    skillEl.appendChild(checkboxEl);

    let labelEl = document.createElement("label");
    labelEl.setAttribute("for", checkboxId);
    labelEl.classList.add("checkbox-label");
    labelEl.id = labelId;
    labelEl.textContent = skills.skillName;
    skillEl.appendChild(labelEl);
}

for (let skills of skillList) {
    createAndAppendSkill(skills);
}