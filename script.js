document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector(".btn");
    
    btn.addEventListener("click", function() {
        alert("歡迎來到我的個人網站！");
    });
});
// 設定網站開始運行的日期
const startDate = new Date("2025-03-18T00:00:00");

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

    let runningTimeContainer = document.getElementById("runningTime");

    // 讓舊的數字淡出
    if (runningTimeContainer.children.length > 0) {
        let oldTime = runningTimeContainer.children[0];
        oldTime.classList.add("fade-out");
        
        // 移除舊的元素
        setTimeout(() => {
            runningTimeContainer.removeChild(oldTime);
        }, 500);
    }

    // 建立新的數字
    let newTime = document.createElement("span");
    newTime.classList.add("running-time");
    newTime.textContent = `${days} 天 ${hours} 小時 ${minutes} 分鐘 ${seconds} 秒`;

    runningTimeContainer.appendChild(newTime);
}

// 每秒更新一次
setInterval(updateRunningTime, 1000);
updateRunningTime();
