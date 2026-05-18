export type ToolType = 'Gem' | 'App' | 'Doc';
export type Audience = '學生' | '教師';
export type Category = '自主學習引導與回饋' | '學習歷程檔案撰寫與回饋';

export interface Tool {
  id: string;
  category: Category;
  title: string;
  type: ToolType;
  audience: Audience;
  description: string;
  link: string;
  hasTeacherRef?: boolean;
  teacherRefLink?: string;
}

export const toolsData: Tool[] = [
  // --- 自主學習引導與回饋 ---
  {
    id: 'sdl1',
    category: '自主學習引導與回饋',
    title: '💥 引爆你的學習之窗',
    type: 'Gem',
    audience: '學生',
    description: '針對自主學習「階段二：發想主題」所設計的發散思考工具。化身為學生的「情感啦啦隊」與「夢想織匠」，協助突破心理障礙，從四個象限發想主題。',
    link: 'https://gemini.google.com/gem/1hHsVHM5YXbGe9hzvD-GcCqGeJeuv5WJ3?usp=sharing',
    hasTeacherRef: true,
    teacherRefLink: 'https://docs.google.com/document/d/13CcnR2pAU4J3c7wXfj0r5k-ykoyiwQYc03qF_mRV0Bk/edit?usp=sharing',
  },
  {
    id: 'sdl2',
    category: '自主學習引導與回饋',
    title: '✨ 主題漏斗：篩選與整合',
    type: 'Gem',
    audience: '學生',
    description: '幫助學生「收斂」發想的點子。運用三個核心問句過濾。避免好高騖遠，將「決策權」歸還給學生。',
    link: 'https://gemini.google.com/gem/1xkGqUpQ6Z-4tA9zMkn84RQ-j3IdVNQuT?usp=sharing',
    hasTeacherRef: true,
    teacherRefLink: 'https://docs.google.com/document/d/1Cfww6DZl51o6uHJ4rNtuqpvgX5KQ2mqje_UgpCXW4AQ/edit?usp=sharing',
  },
  {
    id: 'sdl3',
    category: '自主學習引導與回饋',
    title: '🧭 IPOF 學習導航教練',
    type: 'Gem',
    audience: '學生',
    description: '幫助學生找齊學習四大要素：資源、方法、成果與回饋。採用「由終為始」邏輯。引導篩選網路資源，降低認知負荷。',
    link: 'https://gemini.google.com/gem/1-xE_uffKI7lT6qJLwD4Ae154CGTgr1l7?usp=sharing',
    hasTeacherRef: true,
    teacherRefLink: 'https://docs.google.com/document/d/1f9JGjaCPhmNBedeXIPEMR4p8_rDbpqg8Lsrt3y7EoJ4/edit?usp=sharing',
  },
  {
    id: 'sdl4',
    category: '自主學習引導與回饋',
    title: '🛠️ 大拆特拆：任務拆解教練',
    type: 'Gem',
    audience: '學生',
    description: '協助將 IPOF 具象化為三層次「學習樹狀圖」。強制引導學生寫得更具體，嚴格檢核是否符合「動詞開頭原則」。',
    link: 'https://gemini.google.com/gem/1JYtTT4_HUkWKUlc53mWav0U6m2SFR2KE?usp=sharing',
    hasTeacherRef: true,
    teacherRefLink: 'https://docs.google.com/document/d/1MIk3bI_H9r-LBlA4Hc1qdcvsHRCN8fGhr5ltW9lDwjI/edit?usp=sharing',
  },
  {
    id: 'sdl5',
    category: '自主學習引導與回饋',
    title: '📅 18 週計畫書健檢導師',
    type: 'Gem',
    audience: '學生',
    description: '提交計畫書前最後防線。檢核結構與時程合理性。提供鷹架式回饋，確保計畫具體、可行與時間管理的彈性。',
    link: 'https://gemini.google.com/gem/1zdPSCc4deCTiM65PBqRJ5yanTn6isqSH?usp=sharing',
    hasTeacherRef: true,
    teacherRefLink: 'https://docs.google.com/document/d/1O2CbKNAH6Tb4fHj5xa_y5CetJjWxZDjwPn5yKPuCFE8/edit?usp=sharing',
  },
  {
    id: 'sdl-ipof-app',
    category: '自主學習引導與回饋',
    title: 'SDL-IPOF 分析報告產生器',
    type: 'App',
    audience: '教師',
    description: '專為教育工作者打造的開源批次診斷工具。匯入全班 IPOF 紀錄表，一鍵轉換為精美的 A4 PDF 雙頁分析報告，解放行政時間。',
    link: 'https://avatarbiology.github.io/SDL-IPOF/',
    hasTeacherRef: false,
  },
  {
    id: 'doc-da-chai',
    category: '自主學習引導與回饋',
    title: '大拆特拆 實戰學習單',
    type: 'Doc',
    audience: '學生',
    description: '銜接 IPOF 分析與 18 週計畫表的紙本/數位鷹架。要求遵守動詞開頭原則，畫出專屬三層次學習階層圖。',
    link: 'https://docs.google.com/document/d/1M4M0CzTz4LozsW2wL7KE9UEKY5tJXLtZ/edit?usp=sharing&ouid=117691857834698382511&rtpof=true&sd=true',
    hasTeacherRef: false,
  },
  {
    id: 'doc-18-weeks',
    category: '自主學習引導與回饋',
    title: '18週計畫 實戰學習單',
    type: 'Doc',
    audience: '學生',
    description: '幫助學生具體化每週任務目標，為最終的評量與歷程記錄打好基礎的實戰紀錄表模版。',
    link: 'https://docs.google.com/document/d/1uy6dT5RXkuYg3kjcSVXB7Ojda2NP-bwn/edit?usp=sharing&ouid=117691857834698382511&rtpof=true&sd=true',
    hasTeacherRef: false,
  },

  // --- 學習歷程檔案撰寫與回饋 ---
  {
    id: 'portfolio-gem',
    category: '學習歷程檔案撰寫與回饋',
    title: '學習歷程檔案專屬教練',
    type: 'Gem',
    audience: '學生',
    description: '引導學生梳理學習脈絡，給予撰寫學習歷程檔案時的鷹架引導與文字潤飾建議，幫助呈現更完整的學習反思。',
    link: 'https://gemini.google.com/gem/1k_awawWHliFUH8A_ombBLACUcneWGVP6?usp=sharing',
    hasTeacherRef: false,
  },
  {
    id: 'portfolio-app',
    category: '學習歷程檔案撰寫與回饋',
    title: '學習歷程檔案製作模板',
    type: 'App',
    audience: '學生',
    description: '互動式檔案製作平台，使用「去骨、切塊、擺盤」引導流。內建 AI 即時教練協助潤飾，一鍵生成精美 PDF 成果。',
    link: 'https://ai.studio/apps/95fae268-80b1-4b6a-b1ff-2247b4c794b7?fullscreenApplet=true',
    hasTeacherRef: true,
    teacherRefLink: 'https://avatarbiology.github.io/meta-lab/',
  },
  {
    id: 'portfolio-teacher-app',
    category: '學習歷程檔案撰寫與回饋',
    title: '自主學習評量助手',
    type: 'App',
    audience: '教師',
    description: '開源批次診斷工具，上傳學生檔案或紀錄表，自動串接 AI 進行批次智慧回饋，提供更具引導性與溫度的個別化評語。',
    link: 'https://ai.studio/apps/6efe2140-b0ee-40a5-a8a5-a7f411ebd93b?fullscreenApplet=true',
    hasTeacherRef: true,
    teacherRefLink: 'https://avatarbiology.github.io/sdl-helper/',
  },
  {
    id: 'portfolio-plus',
    category: '學習歷程檔案撰寫與回饋',
    title: 'P+ (Portfolio Plus)｜AI 亮點捕捉器',
    type: 'App',
    audience: '學生',
    description: '自動捕捉專案、實驗或學習文本中的亮點，將隱性學習成果轉化為顯性經歷的強大 AI 輔助工具。',
    link: 'https://ai.studio/apps/drive/1pbGAWCgM5dIbkxXeFxJoiuTmi15UTUeU?fullscreenApplet=true',
    hasTeacherRef: true,
    teacherRefLink: 'https://avatarbiology.github.io/pplus/',
  },
];
