# HKHS 自主學習 & 學習歷程檔案 教學引導、評量回饋工具集

這是一個專屬湖口高中（HKHS）自主學習與學習歷程檔案的教學工具匯總平台。以「爆學力」教材為核心骨幹，結合最新 AI 科技，幫助教師減輕陪伴與檢核的負擔，同時引發學生的學習動機。

## 專案特色

*   **資源統合**：整合了 AI 教練（Gem）、網頁工具（App）以及實戰學習單（Doc）。
*   **標籤篩選**：直覺的使用者介面，可依「全部階段 / 自主學習引導與回饋 / 學習歷程檔案撰寫與回饋」、「教師 / 學生」、「工具形式（Gem / App / Doc）」快速過濾所需資源。
*   **響應式設計**：支援桌機、平板與手機最佳化瀏覽，配色活潑且具現代感（Vibrant Palette 視覺風格）。
*   **教師專屬說明**：附帶教務老師專用的學習與評量參考基準 (SI) 提示按鈕。

## 開發技術

*   **前端框架**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
*   **樣式與介面**: [Tailwind CSS v4](https://tailwindcss.com/)
*   **動畫效果**: [Motion (Framer Motion)](https://motion.dev/)
*   **圖示**: [Lucide React](https://lucide.dev/)

## 如何在本地端執行與開發

1.  確認您已安裝 Node.js (建議 v18 以上版本)。
2.  下載或複製此專案到本地端。
3.  進入資料夾並安裝依賴套件：
    ```bash
    npm install
    # 或使用 npm ci
    ```
4.  啟動本地開發伺服器：
    ```bash
    npm run dev
    ```
5.  若要自訂工具連結或說明內容，請編輯 `/src/data.ts` 中的資料陣列。

## 如何部署到 GitHub Pages (透過 GitHub Actions)

此專案已內建 GitHub Actions 的設定檔 (`.github/workflows/deploy.yml`)，且 `vite.config.ts` 中的 `base` 已經設定為 `'./'` 以支援相對路徑部署。只要您將專案推送到 GitHub，就能夠利用 GitHub Actions 自動部署，步驟如下：

1.  在 GitHub 上建立一個全新的 Repo (儲存庫)。
2.  將本專案的程式碼推送到該 Repo：
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/您的帳號/您的Repo名稱.git
    git push -u origin main
    ```
3.  進入 GitHub Repo 頁面，點選 **Settings** > 左側選單的 **Pages**。
4.  在 **Build and deployment** 區塊中：
    *   **Source** 選擇 `GitHub Actions`。
5.  GitHub 會自動抓取儲存庫裡的 `.github/workflows/deploy.yml` 開始進行建置與部署。
6.  部署完成後，即可在 Actions 頁面確認進度，或在 Pages 設定頁面看到公開的網址！

---

*Designed by Avatar Biology | Developed with ❤️ for Education*
