
// 属性数据
const DATA = [
    { "name": "火", "火": 0, "水": 0.5, "草": 2, "光": 0, "恶": 0, "幽": 0, "普": 0, "地": 0.5, "冰": 2, "龙": 0, "电": 0, "毒": 0, "虫": 2, "武": 0, "翼": 0, "萌": 0, "机": 2, "幻": 0 },
    { "name": "水", "火": 2, "水": 0, "草": 0.5, "光": 0, "恶": 0, "幽": 0, "普": 0, "地": 2, "冰": 0.5, "龙": 0.5, "电": 0, "毒": 0, "虫": 0, "武": 0, "翼": 0, "萌": 0, "机": 2, "幻": 0 },
    { "name": "草", "火": 0.5, "水": 2, "草": 0, "光": 2, "恶": 0, "幽": 0, "普": 0, "地": 2, "冰": 0, "龙": 0.5, "电": 0, "毒": 0.5, "虫": 0.5, "武": 0, "翼": 0.5, "萌": 0, "机": 0.5, "幻": 0 },
    { "name": "光", "火": 0, "水": 0, "草": 0.5, "光": 0, "恶": 2, "幽": 2, "普": 0, "地": 0, "冰": 0.5, "龙": 0, "电": 0, "毒": 0, "虫": 0, "武": 0, "翼": 0, "萌": 0, "机": 0, "幻": 0 },
    { "name": "恶", "火": 0, "水": 0, "草": 0, "光": 0.5, "恶": 0.5, "幽": 2, "普": 0, "地": 0, "冰": 0, "龙": 0, "电": 0, "毒": 2, "虫": 0, "武": 0.5, "翼": 0, "萌": 2, "机": 0, "幻": 0 },
    { "name": "幽", "火": 0, "水": 0, "草": 0, "光": 2, "恶": 0.5, "幽": 2, "普": 0.5, "地": 0, "冰": 0, "龙": 0, "电": 0, "毒": 0, "虫": 0, "武": 0, "翼": 0, "萌": 0, "机": 0, "幻": 2 },
    { "name": "普", "火": 0, "水": 0, "草": 0, "光": 0, "恶": 0, "幽": 0.5, "普": 0, "地": 0.5, "冰": 0, "龙": 0, "电": 0, "毒": 0, "虫": 0, "武": 0, "翼": 0, "萌": 0, "机": 0.5, "幻": 0 },
    { "name": "地", "火": 2, "水": 0, "草": 0.5, "光": 0, "恶": 0, "幽": 0, "普": 0, "地": 0, "冰": 2, "龙": 0, "电": 2, "毒": 2, "虫": 0, "武": 0.5, "翼": 0, "萌": 0, "机": 0, "幻": 0 },
    { "name": "冰", "火": 0.5, "水": 0, "草": 2, "光": 0, "恶": 0, "幽": 0, "普": 0, "地": 2, "冰": 0.5, "龙": 2, "电": 0, "毒": 0, "虫": 0, "武": 0, "翼": 2, "萌": 0, "机": 0.5, "幻": 0 },
    { "name": "龙", "火": 0, "水": 0, "草": 0, "光": 0, "恶": 0, "幽": 0, "普": 0, "地": 0, "冰": 0, "龙": 2, "电": 0, "毒": 0, "虫": 0, "武": 0, "翼": 0, "萌": 0, "机": 0.5, "幻": 0 },
    { "name": "电", "火": 0, "水": 2, "草": 0.5, "光": 0, "恶": 0, "幽": 0, "普": 0, "地": 0.5, "冰": 0, "龙": 0.5, "电": 0.5, "毒": 0, "虫": 0, "武": 0, "翼": 2, "萌": 0, "机": 0, "幻": 0 },
    { "name": "毒", "火": 0, "水": 0, "草": 2, "光": 0, "恶": 0, "幽": 0.5, "普": 0, "地": 0.5, "冰": 0, "龙": 0, "电": 0, "毒": 0.5, "虫": 0, "武": 0, "翼": 0, "萌": 2, "机": 0.5, "幻": 0 },
    { "name": "虫", "火": 0.5, "水": 0, "草": 2, "光": 0, "恶": 2, "幽": 0.5, "普": 0, "地": 0, "冰": 0, "龙": 0, "电": 0, "毒": 0.5, "虫": 0, "武": 0.5, "翼": 0.5, "萌": 0.5, "机": 0.5, "幻": 2 },
    { "name": "武", "火": 0, "水": 0, "草": 0, "光": 0, "恶": 2, "幽": 0.5, "普": 2, "地": 2, "冰": 2, "龙": 0, "电": 0, "毒": 0.5, "虫": 0.5, "武": 0, "翼": 0.5, "萌": 0.5, "机": 2, "幻": 0.5 },
    { "name": "翼", "火": 0, "水": 0, "草": 2, "光": 0, "恶": 0, "幽": 0, "普": 0, "地": 0.5, "冰": 0, "龙": 0.5, "电": 0.5, "毒": 0, "虫": 2, "武": 2, "翼": 0, "萌": 0, "机": 0.5, "幻": 0 },
    { "name": "萌", "火": 0.5, "水": 0, "草": 0, "光": 0, "恶": 2, "幽": 0, "普": 0, "地": 0, "冰": 0, "龙": 2, "电": 0, "毒": 0.5, "虫": 0, "武": 2, "翼": 0, "萌": 0, "机": 0.5, "幻": 0 },
    { "name": "机", "火": 0.5, "水": 0.5, "草": 0, "光": 0, "恶": 0, "幽": 0, "普": 0, "地": 2, "冰": 2, "龙": 0, "电": 0.5, "毒": 0, "虫": 0, "武": 0, "翼": 0, "萌": 2, "机": 0.5, "幻": 0 },
    { "name": "幻", "火": 0, "水": 0, "草": 0, "光": 0.5, "恶": 0, "幽": 0, "普": 0, "地": 0, "冰": 0, "龙": 0, "电": 0, "毒": 2, "虫": 0, "武": 2, "翼": 0, "萌": 0, "机": 0.5, "幻": 0.5 }
];

// 扩展到6个（可自行补）
const ATTRS = ["普", "草", "火", "水", "光", "地", "冰", "龙", "电", "毒", "虫", "武", "翼", "萌", "幽", "恶", "机", "幻"];

const ICON_MAP = {
    "普": "asset/icon/1.png",
    "草": "asset/icon/2.png",
    "火": "asset/icon/3.png",
    "水": "asset/icon/4.png",
    "光": "asset/icon/5.png",
    "地": "asset/icon/6.png",
    "冰": "asset/icon/7.png",
    "龙": "asset/icon/8.png",
    "电": "asset/icon/9.png",
    "毒": "asset/icon/10.png",
    "虫": "asset/icon/11.png",
    "武": "asset/icon/12.png",
    "翼": "asset/icon/13.png",
    "萌": "asset/icon/14.png",
    "幽": "asset/icon/15.png",
    "恶": "asset/icon/16.png",
    "机": "asset/icon/17.png",
    "幻": "asset/icon/18.png"
};
let selected = [];

// 渲染属性
const grid = document.getElementById("grid");

ATTRS.forEach(name => {
    const div = document.createElement("div");
    div.className = "attr";
    div.innerHTML = `<img src="${ICON_MAP[name]}" alt="${name}" />`;
    div.onclick = () => toggleAttr(name, div);

    grid.appendChild(div);
});

// 选择逻辑
function toggleAttr(name, el) {
    if (selected.includes(name)) {
        selected = selected.filter(i => i !== name);
        el.classList.remove("active");
    } else {
        if (selected.length >= 2) return;

        selected.push(name);
        el.classList.add("active");
    }

    calculate();
}

// 清除
function clearSelection() {
    selected = [];
    document.querySelectorAll(".attr").forEach(el => el.classList.remove("active"));
    document.getElementById("result").innerHTML = "";
}

// 计算逻辑
function calculate() {
    const resultEl = document.getElementById("result");
    resultEl.innerHTML = "";

    if (selected.length === 0) return;

    let arr = [];

    DATA.forEach(attacker => {
        let hasAdvantage = false;
        let score = 0; // 👉 只用于评分规则
        let i = 1;
        let q1 = 0;
        let q2 = 0;
        let q3 = 0;
        let q4 = 0;
        let defScore = 0;
        let attScore = 0;
        selected.forEach(defAttr => {
            // 用于筛选（正向）
            const attackValue = attacker[defAttr];
            if (attackValue > 1) {
                hasAdvantage = true;
                score += 10000; // 克制
                attScore += 1;
                if (i === 1) q1 = 1;
                else if (i === 2) q2 = 1;
            } else if (attackValue == 0) {
                hasAdvantage = true;
                score += 1000; // 正常
                attScore += 0;
            } else {
                hasAdvantage = true;
                score += 100; // 被抵抗
                attScore += -1.5;
                if (i === 1) q1 = -1;
                else if (i === 2) q2 = -1;
            }

            // 👉 评分（反向）
            const defender = DATA.find(d => d.name === defAttr);
            const value = defender[attacker.name];

            if (value === 0.5) {
                score += 10000; // 抵抗
                defScore += 1;
                if (i === 1) q3 = 1;
                else if (i === 2) q4 = 1;
            } else if (value === 0) {
                score -= 1;// 正常
                defScore -= 0;
            } if (value === 2) {
                score -= 10; // 被克制
                defScore += -1.5;
                if (i === 1) q3 = -1;
                else if (i === 2) q4 = -1;
            }
            // 0 不加分
            i++;
        });

        // 👉 只筛选，不参与评分
        if (hasAdvantage) {
            arr.push({
                name: attacker.name,
                score, // 纯评分规则结果
                q1,
                q2,
                q3,
                q4,
                defScore,
                attScore
            });
        }
    });

    // 排序（一个属性不变, 两个属性按照评分排序)
    if (selected.length === 1) {
        arr.sort((a, b) => b.score - a.score);
    } else if (selected.length === 2) {
        arr.sort((a, b) => {
            // 先按 defScore 降序
            if (b.defScore !== a.defScore) {
                return b.defScore - a.defScore;
            }
            // 再按 attScore 降序
            return b.attScore - a.attScore;
        });

    }
    // 渲染（只展示评分规则分数）
    arr.forEach(item => {
        const div = document.createElement("div");
        div.className = "result-item";

        // 假设 calculate 已生成 item.q1 ~ item.q4 四个值
        div.innerHTML = `
    <div style="position:relative;width:100%;height:100%;border-radius:50%;overflow:hidden;">
        <div class="quadrant quad-tl" style="background:${item.q1 === 1 ? 'green' : item.q1 === -1 ? 'red' : 'white'}"></div>
        <div class="quadrant quad-tr" style="background:${item.q2 === 1 ? 'green' : item.q2 === -1 ? 'red' : 'white'}"></div>
        <div class="quadrant quad-bl" style="background:${item.q3 === 1 ? 'green' : item.q3 === -1 ? 'red' : 'white'}"></div>
        <div class="quadrant quad-br" style="background:${item.q4 === 1 ? 'green' : item.q4 === -1 ? 'red' : 'white'}"></div>
        <img src="${ICON_MAP[item.name]}" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;" />
    </div>
    
    `;

        resultEl.appendChild(div);
    });
}

const helpBtn = document.getElementById("helpBtn");
const helpModal = document.getElementById("helpModal");

// 打开弹窗
helpBtn.addEventListener("click", (e) => {
    helpModal.style.display = "flex";
    e.stopPropagation(); // 防止立即触发关闭
});

// 点击任意地方关闭
helpModal.addEventListener("click", () => {
    helpModal.style.display = "none";
});
// 打开弹窗
helpBtn.addEventListener("click", (e) => {
    helpModal.style.display = "flex";
    document.body.style.overflow = "hidden"; // 👈 禁止页面滚动
    e.stopPropagation();
});

// 关闭弹窗
helpModal.addEventListener("click", () => {
    helpModal.style.display = "none";
    document.body.style.overflow = ""; // 👈 恢复滚动
});

const helpContent = document.querySelector(".help-content");

helpContent.addEventListener("click", (e) => {
    e.stopPropagation(); // 👈 点击弹窗内部不关闭
});

// 判断是否移动端
const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);

// 点击遮罩关闭（仅桌面端）
helpModal.addEventListener("click", () => {
    if (!isMobile) {
        helpModal.style.display = "none";
        document.body.style.overflow = "";
    }
});

if (isMobile) {
    document.addEventListener("click", () => {
        if (helpModal.style.display === "flex") {
            helpModal.style.display = "none";
            document.body.style.overflow = "";
        }
    });
}