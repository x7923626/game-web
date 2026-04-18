// 神通資料 - 每個神通對應可轉換的目標（依用戶最新規則）
const skillData = {
    // 劍系
    '斬虛・橫秋': ['五雷・虎鳴', '伏龍・決雲', '玉樞・黃龍', '熒惑・業火', '神霄・驅雷', '重光・六曜', '離火・炎舞', '天爐・流螢', '烈山・炎瀑', '青冥・鬥辰', '鈞天・鎮嶽'],
    '斬虛・分光': ['熒惑・銜陽', '天爐・熾炎', '玉樞・垂光', '五雷・驚蟄', '神霄・天鼓', '伏龍・掠影', '重光・鬥影', '離火・焰羽', '烈山・巡日', '青冥・嵐霆', '鈞天・貫日'],
    '伏龍・折花': ['斬虛・斷塵', '玉樞・霄鳴', '熒惑・劫焰', '五雷・天罡', '神霄・雲籙', '重光・龜蛇', '離火・風卷', '天爐・丹朱', '烈山・陽隕', '青冥・天怒', '鈞天・玄鋒'],
    '伏龍・掠影': ['熒惑・銜陽', '天爐・熾炎', '玉樞・垂光', '斬虛・分光', '五雷・驚蟄', '神霄・天鼓', '重光・鬥影', '離火・焰羽', '烈山・巡日', '青冥・嵐霆', '鈞天・貫日'],
    '伏龍・決雲': ['斬虛・橫秋', '五雷・虎鳴', '玉樞・黃龍', '熒惑・業火', '神霄・驅雷', '重光・六曜', '離火・炎舞', '天爐・流螢', '烈山・炎瀑', '青冥・鬥辰', '鈞天・鎮嶽'],
    '伏龍・摧巒': ['斬虛・霜寒', '玉樞・青蛇', '熒惑・攬星', '五雷・龍吟', '神霄・青索', '重光・星移', '離火・三昧', '天爐・隕火', '烈山・星燎', '青冥・崩雲', '鈞天・破月'],
    '重光・龜蛇': ['斬虛・斷塵', '玉樞・霄鳴', '熒惑・劫焰', '五雷・天罡', '神霄・雲籙', '伏龍・折花', '離火・風卷', '天爐・丹朱', '烈山・陽隕', '青冥・天怒', '鈞天・玄鋒'],
    '重光・鬥影': ['熒惑・銜陽', '天爐・熾炎', '玉樞・垂光', '斬虛・分光', '五雷・驚蟄', '神霄・天鼓', '伏龍・掠影', '離火・焰羽', '烈山・巡日', '青冥・嵐霆', '鈞天・貫日'],
    '重光・六曜': ['斬虛・橫秋', '五雷・虎鳴', '伏龍・決雲', '玉樞・黃龍', '熒惑・業火', '神霄・驅雷', '離火・炎舞', '天爐・流螢', '烈山・炎瀑', '青冥・鬥辰', '鈞天・鎮嶽'],
    '重光・星移': ['斬虛・霜寒', '玉樞・青蛇', '熒惑・攬星', '五雷・龍吟', '神霄・青索', '伏龍・摧巒', '離火・三昧', '天爐・隕火', '烈山・星燎', '青冥・崩雲', '鈞天・破月'],
    '斬虛・斷塵': ['伏龍・折花', '玉樞・霄鳴', '熒惑・劫焰', '五雷・天罡', '神霄・雲籙', '重光・龜蛇', '離火・風卷', '天爐・丹朱', '烈山・陽隕', '青冥・天怒', '鈞天・玄鋒'],
    '斬虛・霜寒': ['伏龍・摧巒', '玉樞・青蛇', '熒惑・攬星', '五雷・龍吟', '神霄・青索', '重光・星移', '離火・三昧', '天爐・隕火', '烈山・星燎', '青冥・崩雲', '鈞天・破月'],
    // 雷系
    '玉樞・黃龍': ['斬虛・橫秋', '五雷・虎鳴', '伏龍・決雲', '熒惑・業火', '神霄・驅雷', '重光・六曜', '離火・炎舞', '天爐・流螢', '烈山・炎瀑', '青冥・鬥辰', '鈞天・鎮嶽'],
    '玉樞・霄鳴': ['斬虛・斷塵', '伏龍・折花', '熒惑・劫焰', '五雷・天罡', '神霄・雲籙', '重光・龜蛇', '離火・風卷', '天爐・丹朱', '烈山・陽隕', '青冥・天怒', '鈞天・玄鋒'],
    '玉樞・青蛇': ['斬虛・霜寒', '伏龍・摧巒', '熒惑・攬星', '五雷・龍吟', '神霄・青索', '重光・星移', '離火・三昧', '天爐・隕火', '烈山・星燎', '青冥・崩雲', '鈞天・破月'],
    '玉樞・垂光': ['熒惑・銜陽', '天爐・熾炎', '斬虛・分光', '五雷・驚蟄', '神霄・天鼓', '伏龍・掠影', '重光・鬥影', '離火・焰羽', '烈山・巡日', '青冥・嵐霆', '鈞天・貫日'],
    '五雷・天罡': ['斬虛・斷塵', '玉樞・霄鳴', '熒惑・劫焰', '伏龍・折花', '神霄・雲籙', '重光・龜蛇', '離火・風卷', '天爐・丹朱', '烈山・陽隕', '青冥・天怒', '鈞天・玄鋒'],
    '五雷・驚蟄': ['熒惑・銜陽', '天爐・熾炎', '玉樞・垂光', '斬虛・分光', '神霄・天鼓', '伏龍・掠影', '重光・鬥影', '離火・焰羽', '烈山・巡日', '青冥・嵐霆', '鈞天・貫日'],
    '五雷・虎鳴': ['斬虛・橫秋', '伏龍・決雲', '玉樞・黃龍', '熒惑・業火', '神霄・驅雷', '重光・六曜', '離火・炎舞', '天爐・流螢', '烈山・炎瀑', '青冥・鬥辰', '鈞天・鎮嶽'],
    '五雷・龍吟': ['斬虛・霜寒', '玉樞・青蛇', '熒惑・攬星', '伏龍・摧巒', '神霄・青索', '重光・星移', '離火・三昧', '天爐・隕火', '烈山・星燎', '青冥・崩雲', '鈞天・破月'],
    '神霄・雲籙': ['斬虛・斷塵', '玉樞・霄鳴', '熒惑・劫焰', '五雷・天罡', '伏龍・折花', '重光・龜蛇', '離火・風卷', '天爐・丹朱', '烈山・陽隕', '青冥・天怒', '鈞天・玄鋒'],
    '神霄・天鼓': ['熒惑・銜陽', '天爐・熾炎', '玉樞・垂光', '五雷・驚蟄', '斬虛・分光', '伏龍・掠影', '重光・鬥影', '離火・焰羽', '烈山・巡日', '青冥・嵐霆', '鈞天・貫日'],
    '神霄・驅雷': ['五雷・虎鳴', '伏龍・決雲', '玉樞・黃龍', '熒惑・業火', '斬虛・橫秋', '重光・六曜', '離火・炎舞', '天爐・流螢', '烈山・炎瀑', '青冥・鬥辰', '鈞天・鎮嶽'],
    '神霄・青索': ['斬虛・霜寒', '玉樞・青蛇', '熒惑・攬星', '五雷・龍吟', '伏龍・摧巒', '重光・星移', '離火・三昧', '天爐・隕火', '烈山・星燎', '青冥・崩雲', '鈞天・破月'],
    // 火系
    '熒惑・業火': ['斬虛・橫秋', '五雷・虎鳴', '玉樞・黃龍', '伏龍・決雲', '神霄・驅雷', '重光・六曜', '離火・炎舞', '天爐・流螢', '烈山・炎瀑', '青冥・鬥辰', '鈞天・鎮嶽'],
    '熒惑・劫焰': ['斬虛・斷塵', '玉樞・霄鳴', '伏龍・折花', '五雷・天罡', '神霄・雲籙', '重光・龜蛇', '離火・風卷', '天爐・丹朱', '烈山・陽隕', '青冥・天怒', '鈞天・玄鋒'],
    '熒惑・攬星': ['斬虛・霜寒', '玉樞・青蛇', '伏龍・摧巒', '五雷・龍吟', '神霄・青索', '重光・星移', '離火・三昧', '天爐・隕火', '烈山・星燎', '青冥・崩雲', '鈞天・破月'],
    '熒惑・銜陽': ['伏龍・掠影', '天爐・熾炎', '玉樞・垂光', '斬虛・分光', '五雷・驚蟄', '神霄・天鼓', '重光・鬥影', '離火・焰羽', '烈山・巡日', '青冥・嵐霆', '鈞天・貫日'],
    '離火・風卷': ['斬虛・斷塵', '玉樞・霄鳴', '熒惑・劫焰', '五雷・天罡', '神霄・雲籙', '伏龍・折花', '重光・龜蛇', '天爐・丹朱', '烈山・陽隕', '青冥・天怒', '鈞天・玄鋒'],
    '離火・焰羽': ['熒惑・銜陽', '天爐・熾炎', '玉樞・垂光', '五雷・驚蟄', '神霄・天鼓', '伏龍・掠影', '重光・鬥影', '斬虛・分光', '烈山・巡日', '青冥・嵐霆', '鈞天・貫日'],
    '離火・炎舞': ['五雷・虎鳴', '伏龍・決雲', '玉樞・黃龍', '熒惑・業火', '神霄・驅雷', '重光・六曜', '斬虛・橫秋', '天爐・流螢', '烈山・炎瀑', '青冥・鬥辰', '鈞天・鎮嶽'],
    '離火・三昧': ['斬虛・霜寒', '玉樞・青蛇', '伏龍・摧巒', '五雷・龍吟', '神霄・青索', '重光・星移', '熒惑・攬星', '天爐・隕火', '烈山・星燎', '青冥・崩雲', '鈞天・破月'],
    '天爐・丹朱': ['斬虛・斷塵', '玉樞・霄鳴', '熒惑・劫焰', '五雷・天罡', '神霄・雲籙', '重光・龜蛇', '離火・風卷', '伏龍・折花', '烈山・陽隕', '青冥・天怒', '鈞天・玄鋒'],
    '天爐・熾炎': ['熒惑・銜陽', '斬虛・分光', '玉樞・垂光', '五雷・驚蟄', '神霄・天鼓', '伏龍・掠影', '重光・鬥影', '離火・焰羽', '烈山・巡日', '青冥・嵐霆', '鈞天・貫日'],
    '天爐・流螢': ['五雷・虎鳴', '伏龍・決雲', '玉樞・黃龍', '熒惑・業火', '神霄・驅雷', '重光・六曜', '離火・炎舞', '斬虛・橫秋', '烈山・炎瀑', '青冥・鬥辰', '鈞天・鎮嶽'],
    '天爐・隕火': ['斬虛・霜寒', '玉樞・青蛇', '熒惑・攬星', '五雷・龍吟', '神霄・青索', '重光・星移', '離火・三昧', '伏龍・摧巒', '烈山・星燎', '青冥・崩雲', '鈞天・破月'],
    // 新增 — 烈山/鈞天/青冥（與諸天商會同組互換）
    '烈山・炎瀑': ['熒惑・業火', '伏龍・決雲', '青冥・鬥辰', '鈞天・鎮嶽', '玉樞・黃龍', '斬虛・橫秋', '五雷・虎鳴', '神霄・驅雷', '重光・六曜', '離火・炎舞', '天爐・流螢'],
    '青冥・鬥辰': ['熒惑・業火', '伏龍・決雲', '烈山・炎瀑', '鈞天・鎮嶽', '玉樞・黃龍', '斬虛・橫秋', '五雷・虎鳴', '神霄・驅雷', '重光・六曜', '離火・炎舞', '天爐・流螢'],
    '鈞天・鎮嶽': ['熒惑・業火', '伏龍・決雲', '烈山・炎瀑', '青冥・鬥辰', '玉樞・黃龍', '斬虛・橫秋', '五雷・虎鳴', '神霄・驅雷', '重光・六曜', '離火・炎舞', '天爐・流螢'],
    // 新增 — 烈山/鈞天/青冥（與道蘊兌換同組互換）
    '烈山・陽隕': ['玉樞・霄鳴', '熒惑・劫焰', '五雷・天罡', '青冥・天怒', '鈞天・玄鋒', '斬虛・斷塵', '神霄・雲籙', '伏龍・折花', '重光・龜蛇', '離火・風卷', '天爐・丹朱'],
    '青冥・天怒': ['玉樞・霄鳴', '熒惑・劫焰', '五雷・天罡', '烈山・陽隕', '鈞天・玄鋒', '斬虛・斷塵', '神霄・雲籙', '伏龍・折花', '重光・龜蛇', '離火・風卷', '天爐・丹朱'],
    '鈞天・玄鋒': ['玉樞・霄鳴', '熒惑・劫焰', '五雷・天罡', '烈山・陽隕', '青冥・天怒', '斬虛・斷塵', '神霄・雲籙', '伏龍・折花', '重光・龜蛇', '離火・風卷', '天爐・丹朱'],
    // 新增 — 烈山/鈞天/青冥（與宗門寶庫同組互換）
    '烈山・星燎': ['玉樞・青蛇', '斬虛・霜寒', '重光・星移', '青冥・崩雲', '鈞天・破月', '熒惑・攬星', '五雷・龍吟', '神霄・青索', '伏龍・摧巒', '離火・三昧', '天爐・隕火'],
    '青冥・崩雲': ['玉樞・青蛇', '斬虛・霜寒', '重光・星移', '烈山・星燎', '鈞天・破月', '熒惑・攬星', '五雷・龍吟', '神霄・青索', '伏龍・摧巒', '離火・三昧', '天爐・隕火'],
    '鈞天・破月': ['玉樞・青蛇', '斬虛・霜寒', '重光・星移', '烈山・星燎', '青冥・崩雲', '熒惑・攬星', '五雷・龍吟', '神霄・青索', '伏龍・摧巒', '離火・三昧', '天爐・隕火'],
    // 新增 — 烈山/鈞天/青冥（與論劍臺同組互換）
    '烈山・巡日': ['斬虛・分光', '熒惑・銜陽', '天爐・熾炎', '青冥・嵐霆', '鈞天・貫日', '玉樞・垂光', '五雷・驚蟄', '神霄・天鼓', '伏龍・掠影', '重光・鬥影', '離火・焰羽'],
    '青冥・嵐霆': ['斬虛・分光', '熒惑・銜陽', '天爐・熾炎', '烈山・巡日', '鈞天・貫日', '玉樞・垂光', '五雷・驚蟄', '神霄・天鼓', '伏龍・掠影', '重光・鬥影', '離火・焰羽'],
    '鈞天・貫日': ['斬虛・分光', '熒惑・銜陽', '天爐・熾炎', '烈山・巡日', '青冥・嵐霆', '玉樞・垂光', '五雷・驚蟄', '神霄・天鼓', '伏龍・掠影', '重光・鬥影', '離火・焰羽'],
    // 百族 — 8招全部互相轉換
    '蠱靈・祭律': ['蠱靈・蛻蛇', '蠱靈・驚蟬', '蠱靈・幽蝕', '煞海・裂天', '煞海・烈雨', '煞海・業蓮', '煞海・冥火'],
    '蠱靈・蛻蛇': ['蠱靈・祭律', '蠱靈・驚蟬', '蠱靈・幽蝕', '煞海・裂天', '煞海・烈雨', '煞海・業蓮', '煞海・冥火'],
    '蠱靈・驚蟬': ['蠱靈・祭律', '蠱靈・蛻蛇', '蠱靈・幽蝕', '煞海・裂天', '煞海・烈雨', '煞海・業蓮', '煞海・冥火'],
    '蠱靈・幽蝕': ['蠱靈・祭律', '蠱靈・蛻蛇', '蠱靈・驚蟬', '煞海・裂天', '煞海・烈雨', '煞海・業蓮', '煞海・冥火'],
    '煞海・裂天': ['蠱靈・祭律', '蠱靈・蛻蛇', '蠱靈・驚蟬', '蠱靈・幽蝕', '煞海・烈雨', '煞海・業蓮', '煞海・冥火'],
    '煞海・烈雨': ['蠱靈・祭律', '蠱靈・蛻蛇', '蠱靈・驚蟬', '蠱靈・幽蝕', '煞海・裂天', '煞海・業蓮', '煞海・冥火'],
    '煞海・業蓮': ['蠱靈・祭律', '蠱靈・蛻蛇', '蠱靈・驚蟬', '蠱靈・幽蝕', '煞海・裂天', '煞海・烈雨', '煞海・冥火'],
    '煞海・冥火': ['蠱靈・祭律', '蠱靈・蛻蛇', '蠱靈・驚蟬', '蠱靈・幽蝕', '煞海・裂天', '煞海・烈雨', '煞海・業蓮']
};

// 當前選中的神通
let selectedSkill = null;

const sourceGroups = [
    {
        source: '諸天商會',
        skills: [
            '斬虛・橫秋', '熒惑・業火', '玉樞・黃龍', '天爐・流螢',
            '離火・炎舞', '伏龍・決雲', '神霄・驅雷', '五雷・虎鳴', '重光・六曜',
            '烈山・炎瀑', '青冥・鬥辰', '鈞天・鎮嶽'
        ]
    },
    {
        source: '論劍臺',
        skills: [
            '天爐・熾炎', '重光・鬥影', '神霄・天鼓', '離火・焰羽',
            '伏龍・掠影', '五雷・驚蟄', '熒惑・銜陽', '斬虛・分光', '玉樞・垂光',
            '烈山・巡日', '青冥・嵐霆', '鈞天・貫日'
        ]
    },
    {
        source: '道蘊兌換',
        skills: [
            '熒惑・劫焰', '玉樞・霄鳴', '天爐・丹朱', '離火・風卷',
            '重光・龜蛇', '伏龍・折花', '神霄・雲籙', '斬虛・斷塵', '五雷・天罡',
            '烈山・陽隕', '青冥・天怒', '鈞天・玄鋒'
        ]
    },
    {
        source: '宗門寶庫',
        skills: [
            '天爐・隕火', '離火・三昧', '重光・星移', '伏龍・摧巒',
            '神霄・青索', '五雷・龍吟', '熒惑・攬星', '玉樞・青蛇', '斬虛・霜寒',
            '烈山・星燎', '青冥・崩雲', '鈞天・破月'
        ]
    },
    {
        source: '百族轉換',
        skills: [
            '蠱靈・祭律', '蠱靈・蛻蛇', '蠱靈・驚蟬', '蠱靈・幽蝕',
            '煞海・裂天', '煞海・烈雨', '煞海・業蓮', '煞海・冥火'
        ]
    }
];

// ── 升級費用資料（每步驟升到該階所需） ──
// 本體殘卷 = 各技能自己的殘卷，其餘為共用材料
const upgradeCostData = {
    // 一般技能：最高天3（共11步，每步費用）
    normal: [
        { to: '2階(1星)',  本體: 40,  仙品: 0,   極品: 0,   上品: 0   },
        { to: '3階(2星)',  本體: 40,  仙品: 0,   極品: 30,  上品: 100 },
        { to: '4階(玄1)', 本體: 40,  仙品: 0,   極品: 60,  上品: 150 },
        { to: '5階(玄2)', 本體: 40,  仙品: 40,  極品: 60,  上品: 150 },
        { to: '6階(玄3)', 本體: 40,  仙品: 40,  極品: 90,  上品: 220 },
        { to: '7階(地1)', 本體: 40,  仙品: 40,  極品: 90,  上品: 220 },
        { to: '8階(地2)', 本體: 40,  仙品: 40,  極品: 90,  上品: 220 },
        { to: '9階(地3)', 本體: 80,  仙品: 80,  極品: 200, 上品: 500 },
        { to: '10階(天1)',本體: 80,  仙品: 80,  極品: 200, 上品: 500 },
        { to: '11階(天2)',本體: 120, 仙品: 120, 極品: 300, 上品: 750 },
        { to: '12階(天3)',本體: 120, 仙品: 120, 極品: 300, 上品: 750 },
    ],
    // 魔族技能（斬虛/熒惑/玉樞）：最高天3（每步費用，由累計數反推）
    demon: [
        { to: '2階(1星)',  本體: 0,   仙品: 80,  極品: 100,  上品: 200  },
        { to: '3階(2星)',  本體: 0,   仙品: 80,  極品: 100,  上品: 200  },
        { to: '4階(玄1)', 本體: 40,  仙品: 80,  極品: 150,  上品: 350  },
        { to: '5階(玄2)', 本體: 80,  仙品: 80,  極品: 200,  上品: 500  },
        { to: '6階(玄3)', 本體: 80,  仙品: 120, 極品: 250,  上品: 650  },
        { to: '7階(地1)', 本體: 80,  仙品: 160, 極品: 350,  上品: 900  },
        { to: '8階(地2)', 本體: 120, 仙品: 200, 極品: 500,  上品: 1200 },
        { to: '9階(地3)', 本體: 160, 仙品: 240, 極品: 600,  上品: 1500 },
        { to: '10階(天1)',本體: 200, 仙品: 320, 極品: 700,  上品: 1800 },
        { to: '11階(天2)',本體: 240, 仙品: 400, 極品: 800,  上品: 2100 },
        { to: '12階(天3)',本體: 280, 仙品: 480, 極品: 1000, 上品: 2400 },
    ],
    // 巫族技能（鈞天/烈山/青冥）：最高天5（共13步）
    witch: [
        { to: '2階(1星)',  本體: 0,   仙品: 120, 極品: 100,  上品: 200  },
        { to: '3階(2星)',  本體: 0,   仙品: 120, 極品: 100,  上品: 200  },
        { to: '4階(玄1)', 本體: 40,  仙品: 120, 極品: 150,  上品: 350  },
        { to: '5階(玄2)', 本體: 80,  仙品: 120, 極品: 200,  上品: 500  },
        { to: '6階(玄3)', 本體: 80,  仙品: 160, 極品: 250,  上品: 650  },
        { to: '7階(地1)', 本體: 120, 仙品: 200, 極品: 350,  上品: 900  },
        { to: '8階(地2)', 本體: 120, 仙品: 240, 極品: 500,  上品: 1200 },
        { to: '9階(地3)', 本體: 160, 仙品: 280, 極品: 600,  上品: 1500 },
        { to: '10階(天1)',本體: 200, 仙品: 360, 極品: 700,  上品: 1800 },
        { to: '11階(天2)',本體: 240, 仙品: 440, 極品: 800,  上品: 2100 },
        { to: '12階(天3)',本體: 280, 仙品: 520, 極品: 1000, 上品: 2400 },
        { to: '13階(天4)',本體: 320, 仙品: 600, 極品: 1000, 上品: 2400 },
        { to: '14階(天5)',本體: 360, 仙品: 680, 極品: 1000, 上品: 2400 },
    ],
    // 百族魔族技能（煞海・）：最高天3（共11步，由累計數反推）
    hundred_demon: [
        { to: '2階(1星)',  本體: 0,   仙品: 120, 極品: 100,  上品: 300  },
        { to: '3階(2星)',  本體: 0,   仙品: 120, 極品: 150,  上品: 350  },
        { to: '4階(玄1)', 本體: 40,  仙品: 160, 極品: 250,  上品: 600  },
        { to: '5階(玄2)', 本體: 80,  仙品: 160, 極品: 300,  上品: 800  },
        { to: '6階(玄3)', 本體: 80,  仙品: 240, 極品: 450,  上品: 1100 },
        { to: '7階(地1)', 本體: 80,  仙品: 320, 極品: 500,  上品: 1300 },
        { to: '8階(地2)', 本體: 120, 仙品: 400, 極品: 600,  上品: 1600 },
        { to: '9階(地3)', 本體: 160, 仙品: 480, 極品: 750,  上品: 1900 },
        { to: '10階(天1)',本體: 200, 仙品: 560, 極品: 900,  上品: 2200 },
        { to: '11階(天2)',本體: 240, 仙品: 640, 極品: 1000, 上品: 2500 },
        { to: '12階(天3)',本體: 280, 仙品: 720, 極品: 1200, 上品: 2800 },
    ]
};

function getSkillUpgradeType(skill) {
    if (skill.startsWith('鈞天・') || skill.startsWith('烈山・') || skill.startsWith('青冥・') || skill.startsWith('蠱靈・')) return 'witch';
    if (skill.startsWith('斬虛・') || skill.startsWith('熒惑・') || skill.startsWith('玉樞・')) return 'demon';
    if (skill.startsWith('煞海・')) return 'hundred_demon';
    return 'normal';
}

function getUpgradeTypeName(skill) {
    if (skill.startsWith('斬虛・') || skill.startsWith('熒惑・') || skill.startsWith('玉樞・')) return '魔族';
    if (skill.startsWith('煞海・')) return '百族魔';
    if (skill.startsWith('鈞天・') || skill.startsWith('烈山・') || skill.startsWith('青冥・')) return '巫族';
    if (skill.startsWith('蠱靈・')) return '百族巫';
    return '一般';
}

function getUpgradeMaxLevel(skill) {
    return (getSkillUpgradeType(skill) === 'witch') ? '天5' : '天3';
}

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
        '重光・龜蛇', '重光・鬥影', '重光・六曜', '重光・星移',
        '鈞天・鎮嶽', '鈞天・玄鋒', '鈞天・破月', '鈞天・貫日'
    ],
    '火系': [
        '熒惑・業火', '熒惑・劫焰', '熒惑・攬星', '熒惑・銜陽',
        '離火・風卷', '離火・焰羽', '離火・炎舞', '離火・三昧',
        '天爐・丹朱', '天爐・熾炎', '天爐・流螢', '天爐・隕火',
        '烈山・炎瀑', '烈山・陽隕', '烈山・星燎', '烈山・巡日'
    ],
    '雷系': [
        '玉樞・黃龍', '玉樞・霄鳴', '玉樞・青蛇', '玉樞・垂光',
        '五雷・天罡', '五雷・驚蟄', '五雷・虎鳴', '五雷・龍吟',
        '神霄・雲籙', '神霄・天鼓', '神霄・驅雷', '神霄・青索',
        '青冥・鬥辰', '青冥・天怒', '青冥・崩雲', '青冥・嵐霆'
    ],
    '百族': [
        '蠱靈・祭律', '蠱靈・蛻蛇', '蠱靈・驚蟬', '蠱靈・幽蝕',
        '煞海・裂天', '煞海・烈雨', '煞海・業蓮', '煞海・冥火'
    ]
};

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initializeSkills();
    initializeTabs();
    initializeUpgrade();
});

// Tab 切換
function initializeTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
        });
    });
}

// ── 升級所需：等級清單 ──
const allLevelNames = ['1星','2星','3星','玄1','玄2','玄3','地1','地2','地3','天1','天2','天3','天4','天5'];

function getMaxLevelIndex(skill) {
    return getSkillUpgradeType(skill) === 'witch' ? 13 : 11;
}

function calcCostBetween(skill, fromIdx, toIdx) {
    if (fromIdx >= toIdx) return { 本體: 0, 仙品: 0, 極品: 0, 上品: 0 };
    const costs = upgradeCostData[getSkillUpgradeType(skill)];
    const result = { 本體: 0, 仙品: 0, 極品: 0, 上品: 0 };
    for (let i = fromIdx; i < toIdx; i++) {
        result.本體 += costs[i].本體;
        result.仙品 += costs[i].仙品;
        result.極品 += costs[i].極品;
        result.上品 += costs[i].上品;
    }
    return result;
}

function populateLevelSelects(slot, skill) {
    const maxIdx = getMaxLevelIndex(skill);
    const levels = allLevelNames.slice(0, maxIdx + 1);
    const fromSel = slot.querySelector('.level-from');
    const toSel   = slot.querySelector('.level-to');

    fromSel.innerHTML = levels.map((l, i) => `<option value="${i}">${l}</option>`).join('');
    fromSel.value = '0';

    function refreshTo() {
        const from = parseInt(fromSel.value);
        toSel.innerHTML = levels
            .map((l, i) => i > from ? `<option value="${i}">${l}</option>` : '')
            .join('');
        if (toSel.options.length > 0) toSel.selectedIndex = toSel.options.length - 1;
    }
    fromSel.onchange = refreshTo;
    refreshTo();

    slot.querySelector('.slot-levels').classList.add('visible');
}

// ── 自動完成 ──
function getAllSkills() {
    return Object.values(skillsByCategory).flat().filter(s => s);
}

function getSkillClass(skill) {
    if (skill.startsWith('熒惑・') || skill.startsWith('離火・') || skill.startsWith('天爐・') || skill.startsWith('烈山・')) return 'fire';
    if (skill.startsWith('斬虛・') || skill.startsWith('伏龍・') || skill.startsWith('重光・') || skill.startsWith('鈞天・')) return 'sword';
    if (skill.startsWith('玉樞・') || skill.startsWith('五雷・') || skill.startsWith('神霄・') || skill.startsWith('青冥・')) return 'thunder';
    if (skill.startsWith('蠱靈・') || skill.startsWith('煞海・')) return 'hundred';
    return '';
}

function initializeUpgrade() {
    const allSkills = getAllSkills();

    document.querySelectorAll('.skill-slot').forEach(slot => {
        const input    = slot.querySelector('.slot-input');
        const wrap     = slot.querySelector('.slot-input-wrap');
        const dropdown = slot.querySelector('.slot-dropdown');

        input.addEventListener('input', () => {
            const val = input.value.replace(/\([魔巫]\)$/, '').trim();
            const matched = val ? allSkills.filter(s => s.includes(val)) : allSkills;
            renderDropdown(dropdown, matched, input, slot);
        });

        function showDropdown() {
            input.value = '';
            renderDropdown(dropdown, allSkills, input, slot);
        }

        input.addEventListener('focus', showDropdown);
        input.addEventListener('click', showDropdown);

        document.addEventListener('click', (e) => {
            if (!wrap.contains(e.target)) dropdown.classList.remove('open');
        });
    });

    // 清除
    document.getElementById('btnClearSlots').addEventListener('click', () => {
        document.querySelectorAll('.skill-slot').forEach(slot => {
            slot.querySelector('.slot-input').value = '';
            slot.querySelector('.slot-input').dataset.selectedSkill = '';
            slot.querySelector('.slot-levels').classList.remove('visible');
            slot.querySelector('.level-from').innerHTML = '<option value="">-</option>';
            slot.querySelector('.level-to').innerHTML   = '<option value="">-</option>';
            slot.className = 'skill-slot';
        });
        document.getElementById('upgradeResult').classList.add('upgrade-result-hidden');
    });

    // 查詢
    document.getElementById('btnCalcUpgrade').addEventListener('click', () => {
        const entries = [];
        document.querySelectorAll('.skill-slot').forEach(slot => {
            const skill = slot.querySelector('.slot-input').dataset.selectedSkill;
            if (!skill) return;
            const fromIdx = parseInt(slot.querySelector('.level-from').value);
            const toIdx   = parseInt(slot.querySelector('.level-to').value);
            if (isNaN(fromIdx) || isNaN(toIdx) || fromIdx >= toIdx) return;
            entries.push({ skill, fromIdx, toIdx });
        });

        const result = document.getElementById('upgradeResult');
        result.classList.remove('upgrade-result-hidden');

        if (entries.length === 0) {
            result.innerHTML = '<p style="text-align:center;color:#999;">請先選擇神通並設定等級範圍</p>';
            return;
        }

        function typeColor(t) {
            if (t === '魔族') return '#d32f2f';
            if (t === '巫族') return '#7b1fa2';
            return '#555';
        }
        function typeBg(t) {
            if (t === '魔族') return '#fde8e8';
            if (t === '巫族') return '#f3e5f5';
            return '#f0f0f0';
        }

        let grand = { 仙品: 0, 極品: 0, 上品: 0 };
        let selfScrolls = {};
        let cards = entries.map(({ skill, fromIdx, toIdx }) => {
            const cost = calcCostBetween(skill, fromIdx, toIdx);
            const typeName = getUpgradeTypeName(skill);
            selfScrolls[skill] = (selfScrolls[skill] || 0) + cost.本體;
            grand.仙品 += cost.仙品;
            grand.極品 += cost.極品;
            grand.上品 += cost.上品;
            return { skill, typeName, fromLv: allLevelNames[fromIdx], toLv: allLevelNames[toIdx], cost };
        });

        // 同轉化組衝突檢查（用所有已選技能，不管有沒有設等級）
        const allSelectedSkills = [];
        document.querySelectorAll('.skill-slot').forEach(slot => {
            const skill = slot.querySelector('.slot-input').dataset.selectedSkill;
            if (skill) allSelectedSkills.push(skill);
        });
        const groupConflicts = [];
        const groupMap = {};
        allSelectedSkills.forEach(skill => {
            const src = skillSourceMap[skill];
            if (!src) return;
            if (!groupMap[src]) groupMap[src] = [];
            groupMap[src].push(skill);
        });
        Object.entries(groupMap).forEach(([group, skills]) => {
            if (skills.length > 1) groupConflicts.push({ group, skills });
        });

        const warningHtml = groupConflicts.length > 0 ? `
            <div class="upgrade-warning">
                <div class="warning-title">⚠️ 本體殘卷衝突提醒</div>
                ${groupConflicts.map(c => {
                    // 找出該組所有技能
                    const fullGroup = sourceGroups.find(g => g.source === c.group);
                    const allInGroup = fullGroup ? fullGroup.skills : c.skills;
                    return `
                    <div class="warning-item">
                        <div class="warning-header">
                            <span class="warning-group">【${c.group}】</span>
                            你選的技能：${c.skills.map(s => `<span class="warning-skill warning-selected">${getSkillDisplayName(s)}</span>`).join(' + ')}
                        </div>
                        <div class="warning-desc">
                            這 <b>${c.skills.length} 招</b>同屬一個轉化組，升級時需要仙品神通殘卷，而<b>同組所有技能的本體殘卷都可以充當仙品材料</b>。<br>
                            ⛔ 請避免使用以下任何技能的本體殘卷作為仙品消耗：
                        </div>
                        <div class="warning-all-skills">
                            ${allInGroup.map(s => `<span class="warning-skill ${c.skills.includes(s) ? 'warning-selected' : ''}">${getSkillDisplayName(s)}</span>`).join('')}
                        </div>
                    </div>`;
                }).join('')}
            </div>
        ` : '';

        result.innerHTML = warningHtml + `
            <h3 style="margin-bottom:18px;color:#444;font-size:1.2rem;">📦 所需材料明細</h3>
            <div class="upgrade-skill-cards">
                ${cards.map(c => `
                    <div class="upgrade-skill-card">
                        <div class="usc-header">
                            <span class="usc-name">${getSkillDisplayName(c.skill)}</span>
                            <span class="usc-type" style="color:${typeColor(c.typeName)};background:${typeBg(c.typeName)}">${c.typeName}</span>
                        </div>
                        <div class="usc-max">${c.fromLv} → ${c.toLv}</div>
                        <div class="usc-cost">
                            <span class="mat-item mat-self">${getSkillDisplayName(c.skill)}殘卷 <b>${c.cost.本體}</b></span>
                            <span class="mat-item mat-fairy2">仙品 <b>${c.cost.仙品}</b></span>
                            <span class="mat-item mat-sup2">極品 <b>${c.cost.極品}</b></span>
                            <span class="mat-item mat-hi2">上品 <b>${c.cost.上品}</b></span>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="upgrade-shared-total">
                <h4>🔗 全部加總（${cards.length} 招）</h4>
                <div class="self-scroll-list">
                    ${Object.entries(selfScrolls).map(([sk, qty]) =>
                        `<div class="mat-row"><span class="mat-label mat-self-label">${getSkillDisplayName(sk)} 殘卷</span><span class="mat-val">${qty}</span></div>`
                    ).join('')}
                </div>
                <div class="shared-mats">
                    <div class="mat-row"><span class="mat-label mat-gold"><img src="images/mat_gold.png" class="mat-icon">仙品神通殘卷</span><span class="mat-val">${grand.仙品}</span></div>
                    <div class="mat-row"><span class="mat-label mat-purple"><img src="images/mat_purple.png" class="mat-icon">極品神通殘卷</span><span class="mat-val">${grand.極品}</span></div>
                    <div class="mat-row"><span class="mat-label mat-blue"><img src="images/mat_blue.png" class="mat-icon">上品神通殘卷</span><span class="mat-val">${grand.上品}</span></div>
                </div>
            </div>
        `;
    });
}

function renderDropdown(dropdown, skills, input, slot) {
    if (skills.length === 0) { dropdown.classList.remove('open'); return; }
    dropdown.innerHTML = skills.slice(0, 60).map(s => {
        const cls = getSkillClass(s);
        return `<div class="dropdown-item ${cls}" data-skill="${s}">${getSkillDisplayName(s)}</div>`;
    }).join('');
    dropdown.classList.add('open');

    dropdown.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('mousedown', (e) => {
            e.preventDefault();
            const skill = item.dataset.skill;
            input.value = getSkillDisplayName(skill);
            input.dataset.selectedSkill = skill;
            dropdown.classList.remove('open');
            const cls = getSkillClass(skill);
            slot.className = 'skill-slot filled' + (cls ? ' filled-' + cls : '');
            populateLevelSelects(slot, skill);
        });
    });
}

// 初始化神通按鈕
function initializeSkills() {
    Object.keys(skillsByCategory).forEach(category => {
        const containerId = category === '劍系' ? 'categoryC' :
                           category === '火系' ? 'categoryFire' :
                           category === '雷系' ? 'categoryThunder' :
                           category === '百族' ? 'categoryHundred' : 'categoryOther';
        const container = document.getElementById(containerId);
        if (container && skillsByCategory[category].length > 0) {
            skillsByCategory[category].forEach(skill => {
                const button = document.createElement('button');
                button.className = 'skill-button';
                button.textContent = getSkillDisplayName(skill);
                button.onclick = () => selectSkill(skill);
                container.appendChild(button);
            });
        }
    });

    // 預設全部收起，點標題切換展開/收起
    document.querySelectorAll('.skill-categories .category').forEach(cat => {
        cat.classList.add('collapsed');
        const h3 = cat.querySelector('h3');
        h3.addEventListener('click', () => {
            cat.classList.toggle('collapsed');
        });
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

// 族別顯示標籤（僅影響顯示，不影響資料 key）
function getSkillDisplayName(skill) {
    if (skill.startsWith('斬虛・') || skill.startsWith('熒惑・') || skill.startsWith('玉樞・') || skill.startsWith('煞海・')) {
        return skill + '(魔)';
    }
    if (skill.startsWith('鈞天・') || skill.startsWith('烈山・') || skill.startsWith('青冥・') || skill.startsWith('蠱靈・')) {
        return skill + '(巫)';
    }
    return skill;
}

function getSkillCategoryClass(skill) {
    if (skill.startsWith('熒惑・') || skill.startsWith('離火・') || skill.startsWith('天爐・') || skill.startsWith('烈山・')) {
        return 'skill-fire';
    }
    if (skill.startsWith('斬虛・') || skill.startsWith('伏龍・') || skill.startsWith('重光・') || skill.startsWith('鈞天・')) {
        return 'skill-sword';
    }
    if (skill.startsWith('玉樞・') || skill.startsWith('五雷・') || skill.startsWith('神霄・') || skill.startsWith('青冥・')) {
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
    selectedSkillSpan.textContent = getSkillDisplayName(skill);
    
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
            skillDiv.innerHTML = `<span class="skill-name ${categoryClass}">${getSkillDisplayName(convertSkill)}</span><br><span class="skill-source ${sourceClass}">(來源:${source})</span>`;
        } else {
            skillDiv.innerHTML = `<span class="skill-name ${categoryClass}">${getSkillDisplayName(convertSkill)}</span>`;
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
