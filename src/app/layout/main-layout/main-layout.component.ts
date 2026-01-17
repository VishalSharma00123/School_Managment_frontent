import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, RouterLink, RouterLinkActive, ActivationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="flex h-screen bg-slate-50 font-sans text-slate-700">
      
      <!-- Left Sidebar -->
      <aside class="w-72 bg-slate-900 text-white flex flex-col flex-shrink-0 transition-all duration-300 shadow-xl relative overflow-hidden">
        <!-- Abstract Background Pattern -->
        <div class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div class="absolute -top-24 -right-24 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          <div class="absolute bottom-12 -left-12 w-48 h-48 bg-indigo-500 rounded-full blur-3xl"></div>
        </div>

        <div class="p-6 border-b border-slate-800/50 backdrop-blur-sm relative z-10 flex items-center gap-3">
          <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-xl shadow-lg shadow-blue-500/20">
            🏫
          </div>
          <div>
            <h2 class="text-xl font-bold tracking-tight text-white leading-none">EduFlow</h2>
            <span class="inline-flex mt-1.5 items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-500/30">
              {{ currentRole }} Portal
            </span>
          </div>
        </div>

        <nav class="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto relative z-10 custom-scrollbar">
          <!-- Admin Menu -->
          @if (currentRole === 'Admin') {
            <a routerLink="/admin/dashboard" routerLinkActive="active-nav" class="nav-item group">
              <span class="w-6 text-center text-lg group-hover:scale-110 transition-transform duration-200">📊</span>
              <span class="font-medium">Dashboard</span>
            </a>
            <a routerLink="/admin/student-create" routerLinkActive="active-nav" class="nav-item group">
              <span class="w-6 text-center text-lg group-hover:scale-110 transition-transform duration-200">🎓</span>
              <span class="font-medium">Student Mgmt</span>
            </a>
            <a routerLink="/admin/teacher-mgmt" routerLinkActive="active-nav" class="nav-item group">
              <span class="w-6 text-center text-lg group-hover:scale-110 transition-transform duration-200">👨‍🏫</span>
              <span class="font-medium">Teacher Mgmt</span>
            </a>
            <a routerLink="/admin/class-setup" routerLinkActive="active-nav" class="nav-item group">
              <span class="w-6 text-center text-lg group-hover:scale-110 transition-transform duration-200">⚙️</span>
              <span class="font-medium">Class Setup</span>
            </a>
            <a routerLink="/admin/exam-setup" routerLinkActive="active-nav" class="nav-item group">
              <span class="w-6 text-center text-lg group-hover:scale-110 transition-transform duration-200">📝</span>
              <span class="font-medium">Exam Setup</span>
            </a>
          }

          <!-- Teacher Menu -->
          @if (currentRole === 'Teacher') {
            <a routerLink="/teacher/dashboard" routerLinkActive="active-nav" class="nav-item group">
              <span class="w-6 text-center text-lg group-hover:scale-110 transition-transform duration-200">🏠</span>
              <span class="font-medium">Dashboard</span>
            </a>
            <a routerLink="/teacher/attendance" routerLinkActive="active-nav" class="nav-item group">
              <span class="w-6 text-center text-lg group-hover:scale-110 transition-transform duration-200">📅</span>
              <span class="font-medium">Attendance</span>
            </a>
            <a routerLink="/teacher/marks" routerLinkActive="active-nav" class="nav-item group">
              <span class="w-6 text-center text-lg group-hover:scale-110 transition-transform duration-200">✍️</span>
              <span class="font-medium">Marks Entry</span>
            </a>
          }

          <!-- Student Menu -->
          @if (currentRole === 'Student') {
            <a routerLink="/student/profile" routerLinkActive="active-nav" class="nav-item group">
              <span class="w-6 text-center text-lg group-hover:scale-110 transition-transform duration-200">👤</span>
              <span class="font-medium">My Profile</span>
            </a>
          }
        </nav>

        <!-- Role Switcher -->
        <div class="p-4 bg-slate-900/50 backdrop-blur border-t border-slate-800/50 relative z-10">
          <p class="text-[10px] text-slate-400 mb-3 uppercase font-bold tracking-wider opacity-60">Demo: Switch Role</p>
          <div class="grid grid-cols-3 gap-2">
            <button (click)="switchRole('Admin')" 
              [class.bg-blue-600]="currentRole === 'Admin'" 
              [class.text-white]="currentRole === 'Admin'" 
              [class.bg-slate-800]="currentRole !== 'Admin'"
              [class.text-slate-400]="currentRole !== 'Admin'"
              class="text-xs font-semibold py-1.5 rounded transition-all duration-200 hover:bg-slate-700 hover:text-white border border-slate-700/50">
              Admin
            </button>
            <button (click)="switchRole('Teacher')" 
              [class.bg-blue-600]="currentRole === 'Teacher'" 
              [class.text-white]="currentRole === 'Teacher'" 
              [class.bg-slate-800]="currentRole !== 'Teacher'"
              [class.text-slate-400]="currentRole !== 'Teacher'"
              class="text-xs font-semibold py-1.5 rounded transition-all duration-200 hover:bg-slate-700 hover:text-white border border-slate-700/50">
              Teacher
            </button>
            <button (click)="switchRole('Student')" 
              [class.bg-blue-600]="currentRole === 'Student'" 
              [class.text-white]="currentRole === 'Student'" 
              [class.bg-slate-800]="currentRole !== 'Student'"
              [class.text-slate-400]="currentRole !== 'Student'"
              class="text-xs font-semibold py-1.5 rounded transition-all duration-200 hover:bg-slate-700 hover:text-white border border-slate-700/50">
              Student
            </button>
          </div>
        </div>
      </aside>

      <!-- Main Content Area -->
      <main class="flex-1 flex flex-col overflow-hidden bg-slate-50/50">
        <!-- Header -->
        <header class="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-8 shadow-sm z-20 sticky top-0">
          <div class="flex flex-col">
            <div class="text-xs font-medium text-slate-400 uppercase tracking-wide mb-0.5">Current Page</div>
            <div class="flex items-center text-slate-800 font-bold text-lg">
               <span class="mr-2 text-blue-500">/</span> {{ breadcrumb }}
            </div>
          </div>
          
          <div class="flex items-center gap-6">
            <button class="relative p-2 text-slate-400 hover:text-blue-600 transition-colors">
              <span class="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full shadow-sm ring-2 ring-white"></span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
            </button>

            <div class="h-8 w-px bg-slate-200"></div>

            <div class="flex items-center gap-3 pl-2 cursor-pointer group">
              <div class="text-right hidden sm:block">
                <div class="text-sm font-bold text-slate-800 group-hover:text-blue-700 transition-colors">Vishal Sharma</div>
                <div class="text-xs text-slate-500">{{ currentRole }}</div>
              </div>
              <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-100 to-indigo-100 flex items-center justify-center text-lg border-2 border-white shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-200 text-blue-600">
                VS
              </div>
            </div>
          </div>
        </header>

        <!-- Scrollable Content, child component get loaded here -->
        <div class="flex-1 overflow-y-auto p-8 scroll-smooth">
          <router-outlet></router-outlet> 
        </div>
      </main>
    </div>
  `,
  styles: [`
    .nav-item {
      @apply flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 transition-all duration-200 border border-transparent mx-2;
    }
    .nav-item:hover:not(.active-nav) {
      @apply bg-slate-800/50 text-slate-200 border-slate-700/50;
    }
    .active-nav {
      @apply bg-blue-600 text-white shadow-md shadow-blue-900/20 font-medium;
    }
    .custom-scrollbar::-webkit-scrollbar {
      width: 5px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: transparent;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #334155;
      border-radius: 10px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: #475569;
    }
  `]

})
export class MainLayoutComponent {
  currentRole: string = 'Admin';
  breadcrumb: string = 'Dashboard';

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof ActivationEnd)
    ).subscribe((event: any) => {
      const data = event.snapshot.data;
      if (data.role) this.currentRole = data.role;
      if (data.breadcrumb) this.breadcrumb = data.breadcrumb;
    });
  }

  switchRole(role: string) {
    this.currentRole = role;
    if (role === 'Admin') this.router.navigate(['/admin/dashboard']);
    if (role === 'Teacher') this.router.navigate(['/teacher/dashboard']);
    if (role === 'Student') this.router.navigate(['/student/profile']);
  }
}