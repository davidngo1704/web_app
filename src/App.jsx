
import './App.css'
import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  Code, 
  Layers, 
  Rocket, 
  ArrowRight 
} from 'lucide-react';

function App() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        
        {/* 1. LOGO */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-500/20 transition-transform group-hover:scale-105">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-slate-900 to-indigo-900 bg-clip-text text-transparent">
            DevCraft
          </span>
        </a>

        {/* 2. DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-1">
          <a href="#" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-indigo-600 rounded-lg hover:bg-slate-50 transition-colors">
            Trang chủ
          </a>

          {/* DROPDOWN MENU */}
          <div 
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-700 hover:text-indigo-600 rounded-lg hover:bg-slate-50 transition-colors">
              <span>Sản phẩm</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-indigo-600' : 'text-slate-400'}`} />
            </button>

            {/* Dropdown Content */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-64 rounded-2xl bg-white p-2 shadow-xl ring-1 ring-slate-900/5 transition-all animate-in fade-in slide-in-from-top-2">
                <a href="#" className="flex items-start gap-3 rounded-xl p-2.5 hover:bg-slate-50 transition-colors">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                    <Code className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Web Component</p>
                    <p className="text-xs text-slate-500">Thư viện UI có sẵn</p>
                  </div>
                </a>
                
                <a href="#" className="flex items-start gap-3 rounded-xl p-2.5 hover:bg-slate-50 transition-colors">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <Layers className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">System Design</p>
                    <p className="text-xs text-slate-500">Mẫu chuẩn kiến trúc</p>
                  </div>
                </a>
              </div>
            )}
          </div>

          <a href="#" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-indigo-600 rounded-lg hover:bg-slate-50 transition-colors">
            Dịch vụ
          </a>
          <a href="#" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-indigo-600 rounded-lg hover:bg-slate-50 transition-colors">
            Bảng giá
          </a>
        </nav>

        {/* 3. DESKTOP ACTION BUTTONS */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm font-medium text-slate-700 hover:text-indigo-600 px-3 py-2 transition-colors">
            Đăng nhập
          </a>
          <a href="#" className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-indigo-500/20 hover:bg-indigo-700 active:scale-95 transition-all">
            <span>Dùng thử miễn phí</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* 4. MOBILE HAMBURGER BUTTON */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-xl p-2 text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

      </div>

      {/* 5. MOBILE MENU PANEL */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-lg px-4 pt-2 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4">
          <div className="space-y-1">
            <a href="#" className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-indigo-600">
              Trang chủ
            </a>
            
            <div className="px-3 py-2.5 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Sản phẩm</span>
              <div className="pl-2 space-y-1">
                <a href="#" className="flex items-center gap-2 py-2 text-sm font-medium text-slate-700 hover:text-indigo-600">
                  <Code className="h-4 w-4 text-indigo-600" />
                  Web Component
                </a>
                <a href="#" className="flex items-center gap-2 py-2 text-sm font-medium text-slate-700 hover:text-indigo-600">
                  <Layers className="h-4 w-4 text-emerald-600" />
                  System Design
                </a>
              </div>
            </div>

            <a href="#" className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-indigo-600">
              Dịch vụ
            </a>
            <a href="#" className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-indigo-600">
              Bảng giá
            </a>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            <a href="#" className="w-full text-center py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-xl">
              Đăng nhập
            </a>
            <a href="#" className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white bg-indigo-600 rounded-xl shadow-md shadow-indigo-500/20 active:scale-[0.98] transition-all">
              <span>Dùng thử miễn phí</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default App
