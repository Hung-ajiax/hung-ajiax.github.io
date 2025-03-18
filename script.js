document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector(".btn");
    
    btn.addEventListener("click", function() {
        alert("歡迎來到我的個人網站！");
    });
});
// 設定網站開始運行的時間
const startDate = new Date("2025-03-18T00:00:00");

// 記錄最後顯示的時間數據
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

    // 更新時間單位
    updateTimeUnit("days", days);
    updateTimeUnit("hours", hours);
    updateTimeUnit("minutes", minutes);
    updateTimeUnit("seconds", seconds);
}

// 獨立更新每個時間單位
function updateTimeUnit(unit, newValue) {
    let element = document.getElementById(unit);
    
    // 確保數值變更時才觸發動畫
    if (newValue !== lastTime[unit]) {
        let oldElement = element.cloneNode(true);
        oldElement.textContent = lastTime[unit];
        oldElement.classList.add("fade-out");

        let newElement = document.createElement("span");
        newElement.textContent = newValue;
        newElement.classList.add("running-time", "fade-in");
        newElement.id = unit;

        // 替換舊的數字
        element.parentNode.replaceChild(newElement, element);
        element.parentNode.insertBefore(oldElement, newElement);

        // 移除舊的數字
        setTimeout(() => {
            oldElement.remove();
        }, 500);
    }

    lastTime[unit] = newValue;
}

// 每秒更新
setInterval(updateRunningTime, 1000);
updateRunningTime();
function updateTimeUnit(unit, newValue) {
    let element = document.getElementById(unit);
    
    if (!element) {
        console.error(`元素 ${unit} 不存在，請檢查 HTML！`);
        return; // 避免繼續執行
    }

    // 確保數值變更時才觸發動畫
    if (newValue !== lastTime[unit]) {
        let oldElement = document.createElement("span");
        oldElement.textContent = lastTime[unit];
        oldElement.classList.add("running-time", "fade-out");

        let newElement = document.createElement("span");
        newElement.textContent = newValue;
        newElement.classList.add("running-time", "fade-in");
        newElement.id = unit;

        element.parentNode.replaceChild(newElement, element);
        element.parentNode.insertBefore(oldElement, newElement);

        // 移除舊的數字
        setTimeout(() => {
            oldElement.remove();
        }, 500);
    }

    lastTime[unit] = newValue;
}


