document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector(".btn");
    if (btn) {
        btn.addEventListener("click", function () {
            alert("歡迎來到我的個人網站！");
        });
    }
});

// ✅ 修正：記得取消註解！
let lastTime = { days: 0, hours: 0, minutes: 0, seconds: 0 };

const startDate = new Date("2025-03-18T00:00:00");

function updateRunningTime() {
    const now = new Date();
    let diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);

    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);

    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);

    const seconds = Math.floor(diff / 1000);

    updateTimeUnit("days", days);
    updateTimeUnit("hours", hours);
    updateTimeUnit("minutes", minutes);
    updateTimeUnit("seconds", seconds);
}

function updateTimeUnit(unit, newValue) {
    const element = document.getElementById(unit);
    if (!element) {
        console.error(`元素 ${unit} 不存在`);
        return;
    }

    if (newValue !== lastTime[unit]) {
        const oldElement = document.createElement("span");
        oldElement.textContent = lastTime[unit];
        oldElement.classList.add("running-time", "fade-out");

        const newElement = document.createElement("span");
        newElement.textContent = newValue;
        newElement.classList.add("running-time", "fade-in");
        newElement.id = unit;

        element.parentNode.replaceChild(newElement, element);
        element.parentNode.insertBefore(oldElement, newElement);

        setTimeout(() => {
            oldElement.remove();
        }, 500);
    }

    lastTime[unit] = newValue;
}

setInterval(updateRunningTime, 1000);
updateRunningTime();

