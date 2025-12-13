const mathInput = document.getElementById("math");
const engInput = document.getElementById("english");
const submitBtn = document.getElementById("submitBtn");
const tbody = document.querySelector("#gradeTable tbody");

submitBtn.addEventListener("click", function () {
    // 先用字串判斷空值（避免 Number("") 變 0 的問題）
    const mathStr = mathInput.value.trim();
    const engStr = engInput.value.trim();

    if (mathStr === "" || engStr === "") {
        alert("Please enter both Math and English grades.");
        return;
    }

    const math = Number(mathStr);
    const english = Number(engStr);

    if (Number.isNaN(math) || Number.isNaN(english)) {
        alert("Please enter valid numbers.");
        return;
    }

    const avg = ((math + english) / 2).toFixed(2);

    const row = tbody.insertRow();
    row.insertCell().innerText = tbody.rows.length; // #
    row.insertCell().innerText = math;              // Math
    row.insertCell().innerText = english;           // English
    row.insertCell().innerText = avg;               // Average

    updateColumnAverages();

    mathInput.value = "";
    engInput.value = "";
});

function updateColumnAverages() {
    const rows = tbody.rows;

    let mathSum = 0;
    let engSum = 0;
    let avgSum = 0;

    for (let i = 0; i < rows.length; i++) {
        mathSum += Number(rows[i].cells[1].innerText);
        engSum += Number(rows[i].cells[2].innerText);
        avgSum += Number(rows[i].cells[3].innerText);
    }

    const count = rows.length;
    if (count === 0) {
        document.getElementById("mathAvg").innerText = "0";
        document.getElementById("engAvg").innerText = "0";
        document.getElementById("overallAvg").innerText = "0";
        return;
    }

    document.getElementById("mathAvg").innerText = (mathSum / count).toFixed(2);
    document.getElementById("engAvg").innerText = (engSum / count).toFixed(2);
    document.getElementById("overallAvg").innerText = (avgSum / count).toFixed(2);
}
