import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import {
  AppWindow,
  ArrowUpRight,
  Bot,
  FileText,
  FilterX,
  GraduationCap,
  Info,
  Presentation,
} from 'lucide-react';
import { toolsData, ToolType, Audience, Category } from './data';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [activeAudience, setActiveAudience] = useState<Audience | 'All'>('All');
  const [activeType, setActiveType] = useState<ToolType | 'All'>('All');

  const filteredTools = toolsData.filter((tool) => {
    if (activeCategory !== 'All' && tool.category !== activeCategory) return false;
    if (activeAudience !== 'All' && tool.audience !== activeAudience) return false;
    if (activeType !== 'All' && tool.type !== activeType) return false;
    return true;
  });

  const clearFilters = () => {
    setActiveCategory('All');
    setActiveAudience('All');
    setActiveType('All');
  };

  return (
    <div className="flex flex-col h-screen bg-sky-50 font-sans overflow-hidden">
      {/* Header Section */}
      <header className="bg-white px-6 md:px-8 py-5 shadow-md border-b-4 border-yellow-400 shrink-0 z-10">
        <div className="flex justify-between items-center max-w-7xl mx-auto w-full">
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight">
              HKHS <span className="text-blue-600">自主學習</span> & <span className="text-purple-600">學習歷程檔案</span>
            </h1>
            <p className="text-slate-500 font-medium mt-1 text-sm md:text-base">教學引導、評量回饋工具集</p>
          </div>
          <div className="hidden md:flex flex-col items-end gap-1">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-white shadow-inner italic text-xl md:text-2xl">A+</div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden max-w-7xl mx-auto w-full">
        {/* Sidebar / Filter Panel */}
        <aside className="w-full md:w-64 lg:w-72 bg-white/60 backdrop-blur-md p-5 md:p-6 border-b md:border-b-0 md:border-r border-sky-100 shrink-0 md:overflow-y-auto max-h-[35vh] md:max-h-full overflow-y-auto">
          <div className="space-y-6 md:space-y-8">
            {/* 學習階段 (Category) */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-3 md:mb-4">主要階段</h3>
              <div className="flex flex-col sm:flex-row md:flex-col gap-2">
                <VerticalFilterButton
                  label="全部"
                  isActive={activeCategory === 'All'}
                  onClick={() => setActiveCategory('All')}
                />
                <VerticalFilterButton
                  label="自主學習"
                  isActive={activeCategory === '自主學習引導與回饋'}
                  onClick={() => setActiveCategory('自主學習引導與回饋')}
                />
                <VerticalFilterButton
                  label="學習歷程檔案"
                  isActive={activeCategory === '學習歷程檔案撰寫與回饋'}
                  onClick={() => setActiveCategory('學習歷程檔案撰寫與回饋')}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-1 gap-6 md:gap-8">
              {/* 對象篩選 (Audience) */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-3 md:mb-4">對象篩選</h3>
                <div className="flex flex-wrap gap-2">
                  <PillFilterButton
                    label="All"
                    isActive={activeAudience === 'All'}
                    onClick={() => setActiveAudience('All')}
                    baseColor="slate"
                  />
                  <PillFilterButton
                    label="教師"
                    isActive={activeAudience === '教師'}
                    onClick={() => setActiveAudience('教師')}
                    baseColor="fuchsia"
                  />
                  <PillFilterButton
                    label="學生"
                    isActive={activeAudience === '學生'}
                    onClick={() => setActiveAudience('學生')}
                    baseColor="sky"
                  />
                </div>
              </div>

              {/* 連結類型 (Type) */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-3 md:mb-4">工具類型</h3>
                <div className="flex flex-wrap gap-2">
                  <PillFilterButton
                    label="All"
                    isActive={activeType === 'All'}
                    onClick={() => setActiveType('All')}
                    baseColor="slate"
                  />
                  <PillFilterButton
                    label="Gem"
                    isActive={activeType === 'Gem'}
                    onClick={() => setActiveType('Gem')}
                    baseColor="purple"
                  />
                  <PillFilterButton
                    label="App"
                    isActive={activeType === 'App'}
                    onClick={() => setActiveType('App')}
                    baseColor="blue"
                  />
                  <PillFilterButton
                    label="Doc"
                    isActive={activeType === 'Doc'}
                    onClick={() => setActiveType('Doc')}
                    baseColor="green"
                  />
                </div>
              </div>
            </div>
            
            {(activeCategory !== 'All' || activeAudience !== 'All' || activeType !== 'All') && (
              <div className="pt-2 md:pt-4 border-t border-slate-200">
                <button
                  onClick={clearFilters}
                  className="flex items-center justify-center gap-2 w-full py-2 rounded-xl text-sm font-bold text-rose-600 bg-rose-50 hover:bg-rose-100 transition-colors"
                >
                  <FilterX className="w-4 h-4" />
                  清除篩選
                </button>
              </div>
            )}
          </div>
        </aside>

        {/* Cards Grid */}
        <main className="flex-1 p-5 md:p-8 overflow-y-auto">
          <div className="mb-4 md:mb-6 flex justify-between items-center text-slate-500 text-sm">
            <p className="font-medium">共找到 <span className="font-bold text-blue-600 px-1 text-base">{filteredTools.length}</span> 個工具</p>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 pb-20"
          >
            <AnimatePresence mode="popLayout">
              {filteredTools.map((tool) => (
                <ThemeToolCard key={tool.id} tool={tool} />
              ))}
            </AnimatePresence>
            {filteredTools.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full py-20 flex flex-col items-center justify-center text-slate-400"
              >
                <FilterX className="w-12 h-12 mb-4 text-slate-300" />
                <p className="text-lg font-bold">沒有符合條件的工具</p>
                <p className="text-sm mt-1">請嘗試放寬篩選條件</p>
              </motion.div>
            )}
          </motion.div>
        </main>
      </div>

      {/* Footer Section */}
      <footer className="bg-slate-800 text-slate-400 py-3 px-6 md:px-8 flex flex-col sm:flex-row justify-between items-center shrink-0 z-10 w-full">
        <div className="text-xs md:text-sm font-medium mb-1 sm:mb-0">
          Designed by <span className="text-yellow-400">Avatar Biology</span> | 供湖口高中自主學習授課教師使用
        </div>
        <div className="text-xs md:text-sm">
          Developed with <span className="text-rose-500">❤️</span> for Education
        </div>
      </footer>
    </div>
  );
}

// Subcomponents

function VerticalFilterButton({ label, isActive, onClick }: { label: string, isActive: boolean, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-2 md:py-2.5 rounded-xl transition-all duration-200 text-sm md:text-base ${
        isActive
          ? 'bg-white border-2 border-blue-500 text-blue-600 font-bold shadow-sm'
          : 'bg-white/40 border-2 border-transparent text-slate-600 hover:border-blue-300 hover:bg-white'
      }`}
    >
      {label}
    </button>
  );
}

function PillFilterButton({ label, isActive, onClick, baseColor }: { label: string, isActive: boolean, onClick: () => void, baseColor: 'slate' | 'purple' | 'blue' | 'green' | 'fuchsia' | 'sky' }) {
  const getColors = () => {
    switch (baseColor) {
      case 'purple':
        return isActive ? 'bg-purple-100 text-purple-700 border-purple-200 shadow-sm' : 'bg-white text-slate-500 border-slate-200 hover:border-purple-300';
      case 'blue':
        return isActive ? 'bg-blue-100 text-blue-700 border-blue-200 shadow-sm' : 'bg-white text-slate-500 border-slate-200 hover:border-blue-300';
      case 'green':
        return isActive ? 'bg-green-100 text-green-700 border-green-200 shadow-sm' : 'bg-white text-slate-500 border-slate-200 hover:border-green-300';
      case 'fuchsia':
        return isActive ? 'bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200 shadow-sm' : 'bg-white text-slate-500 border-slate-200 hover:border-fuchsia-300';
      case 'sky':
        return isActive ? 'bg-sky-100 text-sky-700 border-sky-200 shadow-sm' : 'bg-white text-slate-500 border-slate-200 hover:border-sky-300';
      default:
        return isActive ? 'bg-slate-800 text-white border-slate-800 shadow-sm' : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300';
    }
  };

  return (
    <button
      onClick={onClick}
      className={`px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-bold border transition-all ${getColors()}`}
    >
      {label}
    </button>
  );
}

function ThemeToolCard({ tool }: { tool: typeof toolsData[0] }) {
  const getBadgeConfig = (type: ToolType) => {
    switch (type) {
      case 'Gem': return { color: 'border-purple-400', badgeClass: 'bg-purple-100 text-purple-700', mainBtnClass: 'bg-purple-600 hover:bg-purple-700' };
      case 'App': return { color: 'border-orange-400', badgeClass: 'bg-orange-100 text-orange-700', mainBtnClass: 'bg-orange-500 hover:bg-orange-600' };
      case 'Doc': return { color: 'border-green-400', badgeClass: 'bg-green-100 text-green-700', mainBtnClass: 'bg-green-600 hover:bg-green-700' };
    }
  };

  const config = getBadgeConfig(tool.type);
  const isDoc = tool.type === 'Doc';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={`bg-white p-5 md:p-6 rounded-3xl shadow-sm border-2 border-transparent hover:${config.color} hover:shadow-md transition-all flex flex-col h-full`}
    >
      <div className="flex justify-between items-start mb-3 md:mb-4">
        <div className="flex flex-wrap gap-2">
          <span className={`px-2.5 py-1 text-[10px] sm:text-xs font-black rounded border uppercase tracking-wider ${
            tool.audience === '學生' ? 'bg-sky-100 text-sky-700 border-sky-200' : 'bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200'
          }`}>
            {tool.audience}
          </span>
          <span className={`px-2.5 py-1 text-[10px] sm:text-xs border font-black rounded uppercase tracking-wider ${config.badgeClass} ${config.color}`}>
            {tool.type}
          </span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider text-right">
            {tool.category.replace('引導與回饋', '').replace('撰寫與回饋', '')}
          </span>
        </div>
      </div>
      
      <h4 className="text-lg md:text-xl font-bold text-slate-800 mb-2 md:mb-3 leading-tight">{tool.title}</h4>
      <p className="text-sm md:text-base text-slate-500 leading-relaxed mb-5 flex-1">
        {tool.description}
      </p>
      
      <div className="flex gap-2 mt-auto">
        <a
          href={tool.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex-1 py-2.5 md:py-3 text-white rounded-xl text-center text-sm md:text-base font-bold shadow-sm transition-colors flex justify-center items-center gap-1.5 ${config.mainBtnClass}`}
        >
          {isDoc ? '查看文件' : '前往工具'}
          <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
        </a>
        
        {tool.hasTeacherRef && tool.teacherRefLink && (
          <a 
            href={tool.teacherRefLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 md:px-4 py-2.5 md:py-3 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl flex items-center justify-center transition-colors flex-shrink-0 text-xs md:text-sm font-bold gap-1.5 border border-slate-200"
            title={tool.type === 'Gem' ? '教師參考SI' : '教師參考說明'}
          >
            <Info className="w-4 h-4" />
            <span className="hidden sm:inline">{tool.type === 'Gem' ? '教師參考SI' : '教師參考說明'}</span>
            <span className="sm:hidden">{tool.type === 'Gem' ? '參考SI' : '說明'}</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}
