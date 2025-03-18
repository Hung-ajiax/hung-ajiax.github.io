document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector(".btn");
    
    btn.addEventListener("click", function() {
        alert("歡迎來到我的個人網站！");
    });
});
// 設定網站啟動日期（請修改為你的網站開始日期）
const startDate = new Date("2025-03-18T00:00:00");  // 20250318

function updateRunningTime() {
    const now = new Date();
    let diff = now - startDate; // 計算時間差（毫秒）

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);

    let hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);

    let minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);

    let seconds = Math.floor(diff / 1000);

    // 更新 HTML 內容
    document.getElementById("runningTime").textContent =
        `${days} 天 ${hours} 小時 ${minutes} 分鐘 ${seconds} 秒`;
}

// 每秒更新一次
setInterval(updateRunningTime, 1000);
updateRunningTime();
