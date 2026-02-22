// 神通資料 - 每個神通對應可轉換的目標（依用戶最新規則）
const skillData = {
    // 劍系
    '斬虛・橫秋': ['五雷・虎鳴', '伏龍・決雲', '玉樞・黃龍', '熒惑・業火', '神霄・驅雷', '重光・六曜', '離火・炎舞', '天爐・流螢'],
    '斬虛・分光': ['熒惑・銜陽', '天爐・熾炎', '玉樞・垂光', '五雷・驚蟄', '神霄・天鼓', '伏龍・掠影', '重光・鬥影', '離火・焰羽'],
    '伏龍・折花': ['斬虛・斷塵', '玉樞・霄鳴', '熒惑・劫焰', '五雷・天罡', '神霄・雲籙', '重光・龜蛇', '離火・風卷', '天爐・丹朱'],
    '伏龍・掠影': ['熒惑・銜陽', '天爐・熾炎', '玉樞・垂光', '斬虛・分光', '五雷・驚蟄', '神霄・天鼓', '重光・鬥影', '離火・焰羽'],
    '伏龍・決雲': ['斬虛・橫秋', '五雷・虎鳴', '玉樞・黃龍', '熒惑・業火', '神霄・驅雷', '重光・六曜', '離火・炎舞', '天爐・流螢'],
    '伏龍・摧巒': ['斬虛・霜寒', '玉樞・青蛇', '熒惑・攬星', '五雷・龍吟', '神霄・青索', '重光・星移', '離火・三昧', '天爐・隕火'],
    '重光・龜蛇': ['斬虛・斷塵', '玉樞・霄鳴', '熒惑・劫焰', '五雷・天罡', '神霄・雲籙', '伏龍・折花', '離火・風卷', '天爐・丹朱'],
    '重光・鬥影': ['熒惑・銜陽', '天爐・熾炎', '玉樞・垂光', '斬虛・分光', '五雷・驚蟄', '神霄・天鼓', '伏龍・掠影', '離火・焰羽'],
    '重光・六曜': ['斬虛・橫秋', '五雷・虎鳴', '伏龍・決雲', '玉樞・黃龍', '熒惑・業火', '神霄・驅雷', '離火・炎舞', '天爐・流螢'],
    '重光・星移': ['斬虛・霜寒', '玉樞・青蛇', '熒惑・攬星', '五雷・龍吟', '神霄・青索', '伏龍・摧巒', '離火・三昧', '天爐・隕火'],
    '斬虛・斷塵': ['伏龍・折花', '玉樞・霄鳴', '熒惑・劫焰', '五雷・天罡', '神霄・雲籙', '重光・龜蛇', '離火・風卷', '天爐・丹朱'],
    '斬虛・霜寒': ['伏龍・摧巒', '玉樞・青蛇', '熒惑・攬星', '五雷・龍吟', '神霄・青索', '重光・星移', '離火・三昧', '天爐・隕火'],
    // 雷系
    '玉樞・黃龍': ['斬虛・橫秋', '五雷・虎鳴', '伏龍・決雲', '熒惑・業火', '神霄・驅雷', '重光・六曜', '離火・炎舞', '天爐・流螢'],
    '玉樞・霄鳴': ['斬虛・斷塵', '伏龍・折花', '熒惑・劫焰', '五雷・天罡', '神霄・雲籙', '重光・龜蛇', '離火・風卷', '天爐・丹朱'],
    '玉樞・青蛇': ['斬虛・霜寒', '伏龍・摧巒', '熒惑・攬星', '五雷・龍吟', '神霄・青索', '重光・星移', '離火・三昧', '天爐・隕火'],
    '玉樞・垂光': ['熒惑・銜陽', '天爐・熾炎', '斬虛・分光', '五雷・驚蟄', '神霄・天鼓', '伏龍・掠影', '重光・鬥影', '離火・焰羽'],
    '五雷・天罡': ['斬虛・斷塵', '玉樞・霄鳴', '熒惑・劫焰', '伏龍・折花', '神霄・雲籙', '重光・龜蛇', '離火・風卷', '天爐・丹朱'],
    '五雷・驚蟄': ['熒惑・銜陽', '天爐・熾炎', '玉樞・垂光', '斬虛・分光', '神霄・天鼓', '伏龍・掠影', '重光・鬥影', '離火・焰羽'],
    '五雷・虎鳴': ['斬虛・橫秋', '伏龍・決雲', '玉樞・黃龍', '熒惑・業火', '神霄・驅雷', '重光・六曜', '離火・炎舞', '天爐・流螢'],
    '五雷・龍吟': ['斬虛・霜寒', '玉樞・青蛇', '熒惑・攬星', '伏龍・摧巒', '神霄・青索', '重光・星移', '離火・三昧', '天爐・隕火'],
    '神霄・雲籙': ['斬虛・斷塵', '玉樞・霄鳴', '熒惑・劫焰', '五雷・天罡', '伏龍・折花', '重光・龜蛇', '離火・風卷', '天爐・丹朱'],
    '神霄・天鼓': ['熒惑・銜陽', '天爐・熾炎', '玉樞・垂光', '五雷・驚蟄', '斬虛・分光', '伏龍・掠影', '重光・鬥影', '離火・焰羽'],
    '神霄・驅雷': ['五雷・虎鳴', '伏龍・決雲', '玉樞・黃龍', '熒惑・業火', '斬虛・橫秋', '重光・六曜', '離火・炎舞', '天爐・流螢'],
    '神霄・青索': ['斬虛・霜寒', '玉樞・青蛇', '熒惑・攬星', '五雷・龍吟', '伏龍・摧巒', '重光・星移', '離火・三昧', '天爐・隕火'],
    // 火系
    '熒惑・業火': ['斬虛・橫秋', '五雷・虎鳴', '玉樞・黃龍', '伏龍・決雲', '神霄・驅雷', '重光・六曜', '離火・炎舞', '天爐・流螢'],
    '熒惑・劫焰': ['斬虛・斷塵', '玉樞・霄鳴', '伏龍・折花', '五雷・天罡', '神霄・雲籙', '重光・龜蛇', '離火・風卷', '天爐・丹朱'],
    '熒惑・攬星': ['斬虛・霜寒', '玉樞・青蛇', '伏龍・摧巒', '五雷・龍吟', '神霄・青索', '重光・星移', '離火・三昧', '天爐・隕火'],
    '熒惑・銜陽': ['伏龍・掠影', '天爐・熾炎', '玉樞・垂光', '斬虛・分光', '五雷・驚蟄', '神霄・天鼓', '重光・鬥影', '離火・焰羽'],
    '離火・風卷': ['斬虛・斷塵', '玉樞・霄鳴', '熒惑・劫焰', '五雷・天罡', '神霄・雲籙', '伏龍・折花', '重光・龜蛇', '天爐・丹朱'],
    '離火・焰羽': ['熒惑・銜陽', '天爐・熾炎', '玉樞・垂光', '五雷・驚蟄', '神霄・天鼓', '伏龍・掠影', '重光・鬥影', '斬虛・分光'],
    '離火・炎舞': ['五雷・虎鳴', '伏龍・決雲', '玉樞・黃龍', '熒惑・業火', '神霄・驅雷', '重光・六曜', '斬虛・橫秋', '天爐・流螢'],
    '離火・三昧': ['斬虛・霜寒', '玉樞・青蛇', '伏龍・摧巒', '五雷・龍吟', '神霄・青索', '重光・星移', '熒惑・攬星', '天爐・隕火'],
    '天爐・丹朱': ['斬虛・斷塵', '玉樞・霄鳴', '熒惑・劫焰', '五雷・天罡', '神霄・雲籙', '重光・龜蛇', '離火・風卷', '伏龍・折花'],
    '天爐・熾炎': ['熒惑・銜陽', '斬虛・分光', '玉樞・垂光', '五雷・驚蟄', '神霄・天鼓', '伏龍・掠影', '重光・鬥影', '離火・焰羽'],
    '天爐・流螢': ['五雷・虎鳴', '伏龍・決雲', '玉樞・黃龍', '熒惑・業火', '神霄・驅雷', '重光・六曜', '離火・炎舞', '斬虛・橫秋'],
    '天爐・隕火': ['斬虛・霜寒', '玉樞・青蛇', '熒惑・攬星', '五雷・龍吟', '神霄・青索', '重光・星移', '離火・三昧', '伏龍・摧巒']
};

// 當前選中的神通
let selectedSkill = null;

const sourceGroups = [
    {
        source: '諸天商會',
        skills: [
            '斬虛・橫秋', '熒惑・業火', '玉樞・黃龍', '天爐・流螢',
            '離火・炎舞', '伏龍・決雲', '神霄・驅雷', '五雷・虎鳴', '重光・六曜'
        ]
    },
    {
        source: '論劍臺',
        skills: [
            '天爐・熾炎', '重光・鬥影', '神霄・天鼓', '離火・焰羽',
            '伏龍・掠影', '五雷・驚蟄', '熒惑・銜陽', '斬虛・分光', '玉樞・垂光'
        ]
    },
    {
        source: '道蘊兌換',
        skills: [
            '熒惑・劫焰', '玉樞・霄鳴', '天爐・丹朱', '離火・風卷',
            '重光・龜蛇', '伏龍・折花', '神霄・雲籙', '斬虛・斷塵', '五雷・天罡'
        ]
    },
    {
        source: '宗門寶庫',
        skills: [
            '天爐・隕火', '離火・三昧', '重光・星移', '伏龍・摧巒',
            '神霄・青索', '五雷・龍吟', '熒惑・攬星', '玉樞・青蛇', '斬虛・霜寒'
        ]
    }
];

const skillSourceMap = sourceGroups.reduce((map, group) => {
    group.skills.forEach(skill => {
        map[skill] = group.source;
    });
    return map;
}, {});

// 獲取所有神通名稱（按系列分類）
const skillsByCategory = {
    '劍系': [
        '斬虛・橫秋', '斬虛・分光', '斬虛・斷塵', '斬虛・霜寒',
        '伏龍・折花', '伏龍・決雲', '伏龍・掠影', '伏龍・摧巒',
        '重光・龜蛇', '重光・鬥影', '重光・六曜', '重光・星移'
    ],
    '火系': [
        '熒惑・業火', '熒惑・劫焰', '熒惑・攬星', '熒惑・銜陽',
        '離火・風卷', '離火・焰羽', '離火・炎舞', '離火・三昧',
        '天爐・丹朱', '天爐・熾炎', '天爐・流螢', '天爐・隕火'
    ],
    '雷系': [
        '玉樞・黃龍', '玉樞・霄鳴', '玉樞・青蛇', '玉樞・垂光',
        '五雷・天罡', '五雷・驚蟄', '五雷・虎鳴', '五雷・龍吟',
        '神霄・雲籙', '神霄・天鼓', '神霄・驅雷', '神霄・青索'
    ],
    '百族': []
};

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initializeSkills();
    initializeViewCount();
});

async function initializeViewCount() {
    const viewCountElement = document.getElementById('viewCount');
    if (!viewCountElement) {
        return;
    }

    try {
        const namespace = 'wjcs-game-web';
        const key = 'skill-converter-page';
        const response = await fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`);
        if (!response.ok) {
            throw new Error('Counter request failed');
        }
        const data = await response.json();
        viewCountElement.textContent = Number(data.value || 0).toLocaleString('zh-TW');
    } catch (error) {
        viewCountElement.textContent = '暫時無法載入';
    }
}

// 初始化神通按鈕
function initializeSkills() {
    Object.keys(skillsByCategory).forEach(category => {
        const containerId = category === '劍系' ? 'categoryC' : 
                           category === '火系' ? 'categoryFire' :
                           category === '雷系' ? 'categoryThunder' : 'categoryOther';
        const container = document.getElementById(containerId);
        if (container && skillsByCategory[category].length > 0) {
            skillsByCategory[category].forEach(skill => {
                const button = document.createElement('button');
                button.className = 'skill-button';
                button.textContent = skill;
                button.onclick = () => selectSkill(skill);
                container.appendChild(button);
            });
        }
    });
}

// 選擇神通
function selectSkill(skill) {
    selectedSkill = skill;
    
    // 更新按鈕狀態
    document.querySelectorAll('.skill-button').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent === skill) {
            btn.classList.add('active');
        }
    });
    
    // 顯示可轉化的神通
    showConvertibleSkills(skill);
}

function getSkillCategoryClass(skill) {
    if (skill.startsWith('熒惑・') || skill.startsWith('離火・') || skill.startsWith('天爐・')) {
        return 'skill-fire';
    }
    if (skill.startsWith('斬虛・') || skill.startsWith('伏龍・') || skill.startsWith('重光・')) {
        return 'skill-sword';
    }
    if (skill.startsWith('玉樞・') || skill.startsWith('五雷・') || skill.startsWith('神霄・')) {
        return 'skill-thunder';
    }
    return '';
}

function getSourceClass(source) {
    if (source === '諸天商會') {
        return 'source-merchant';
    }
    if (source === '論劍臺') {
        return 'source-sword-arena';
    }
    if (source === '道蘊兌換') {
        return 'source-dao-yun';
    }
    if (source === '宗門寶庫') {
        return 'source-sect-treasure';
    }
    return '';
}

// 顯示可轉化的神通
function showConvertibleSkills(skill) {
    const resultContainer = document.getElementById('resultContainer');
    const placeholder = document.getElementById('placeholder');
    const selectedSkillSpan = document.getElementById('selectedSkill');
    const convertibleSkillsDiv = document.getElementById('convertibleSkills');
    
    // 隱藏佔位符，顯示結果
    placeholder.style.display = 'none';
    resultContainer.classList.remove('result-hidden');
    
    // 設定選中的神通
    const selectedCategoryClass = getSkillCategoryClass(skill);
    selectedSkillSpan.className = selectedCategoryClass ? `selected-skill-name ${selectedCategoryClass}` : 'selected-skill-name';
    selectedSkillSpan.textContent = skill;
    
    // 清空之前的結果
    convertibleSkillsDiv.innerHTML = '';
    
    // 獲取可轉換的神通列表
    const convertibleList = skillData[skill] || [];
    
    if (convertibleList.length === 0) {
        convertibleSkillsDiv.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: #999;">此神通暫無轉化資料</p>';
        return;
    }
    
    // 創建可轉化神通列表
    convertibleList.forEach(convertSkill => {
        const skillDiv = document.createElement('div');
        skillDiv.className = 'convertible-skill';
        const categoryClass = getSkillCategoryClass(convertSkill);
        const source = skillSourceMap[convertSkill];
        if (source) {
            const sourceClass = getSourceClass(source);
            skillDiv.innerHTML = `<span class="skill-name ${categoryClass}">${convertSkill}</span><br><span class="skill-source ${sourceClass}">(來源:${source})</span>`;
        } else {
            skillDiv.innerHTML = `<span class="skill-name ${categoryClass}">${convertSkill}</span>`;
        }
        skillDiv.onclick = () => {
            if (skillData[convertSkill]) {
                selectSkill(convertSkill);
            }
        };
        convertibleSkillsDiv.appendChild(skillDiv);
    });
    
    // 添加計數資訊
    const countInfo = document.createElement('p');
    countInfo.style.gridColumn = '1 / -1';
    countInfo.style.textAlign = 'center';
    countInfo.style.color = '#666';
    countInfo.style.marginTop = '15px';
    countInfo.innerHTML = `<strong>共 ${convertibleList.length} 個可轉化神通</strong>`;
    convertibleSkillsDiv.appendChild(countInfo);
}

// 添加鍵盤支持
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // 清除選擇
        selectedSkill = null;
        document.querySelectorAll('.skill-button').forEach(btn => {
            btn.classList.remove('active');
        });
        document.getElementById('resultContainer').classList.add('result-hidden');
        document.getElementById('placeholder').style.display = 'block';
    }
});
