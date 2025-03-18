document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector(".btn");
    
    btn.addEventListener("click", function() {
        alert("歡迎來到我的個人網站！");
    });
});
// 設定網站開始運行的日期（2025 年 3 月 18 日 00:00:00）
const startDate = new Date("2025-03-18T00:00:00");

// 建立時間顯示的元素
const timeContainer = document.getElementById("runningTime");
let lastTime = { days: 0, hours: 0, minutes: 0, seconds: 0 };

function updateRunningTime() {
    const now = new Date();
    let diff = now - startDate;

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);

    let hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);

    let minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);

    let seconds = Math.floor(diff / 1000);

    // 更新時間的數字
    updateTimeUnit("days", days);
    updateTimeUnit("hours", hours);
    updateTimeUnit("minutes", minutes);
    updateTimeUnit("seconds", seconds);
}

// 更新單一時間單位的數字
function updateTimeUnit(unit, newValue) {
    let element = document.getElementById(unit);
    if (!element) {
        element = document.createElement("span");
        element.id = unit;
        element.classList.add("running-time");
        timeContainer.appendChild(element);
    }

    if (newValue !== lastTime[unit]) {
        let oldElement = element.cloneNode(true);
        oldElement.textContent = lastTime[unit];
        oldElement.classList.add("fade-out");

        element.textContent = newValue;
        element.classList.add("fade-in");

        // 移除舊的數字
        timeContainer.insertBefore(oldElement, element);
        setTimeout(() => {
            oldElement.remove();
        }, 500);
    }

    lastTime[unit] = newValue;
}

// 每秒更新
setInterval(updateRunningTime, 1000);
updateRunningTime();
