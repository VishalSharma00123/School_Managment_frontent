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
      <aside class="w-64 bg-slate-800 text-white flex flex-col flex-shrink-0 transition-all duration-300">
        <div class="p-6 border-b border-slate-700">
          <h2 class="text-xl font-bold tracking-tight">🏫 EduFlow</h2>
          <span class="inline-block mt-1 text-xs font-semibold px-2 py-0.5 rounded bg-blue-600 text-white">
            {{ currentRole }} Portal
          </span>
        </div>

        <nav class="flex-1 p-4 space-y-1 overflow-y-auto">
          <!-- Admin Menu -->
          @if (currentRole === 'Admin') {
            <a routerLink="/admin/dashboard" routerLinkActive="bg-blue-600 text-white" class="nav-item">📊 Dashboard</a>
            <a routerLink="/admin/student-create" routerLinkActive="bg-blue-600 text-white" class="nav-item">🎓 Student Mgmt</a>
            <a routerLink="/admin/teacher-mgmt" routerLinkActive="bg-blue-600 text-white" class="nav-item">👨‍🏫 Teacher Mgmt</a>
            <a routerLink="/admin/class-setup" routerLinkActive="bg-blue-600 text-white" class="nav-item">⚙️ Class Setup</a>
            <a routerLink="/admin/exam-setup" routerLinkActive="bg-blue-600 text-white" class="nav-item">📝 Exam Setup</a>
          }

          <!-- Teacher Menu -->
          @if (currentRole === 'Teacher') {
            <a routerLink="/teacher/dashboard" routerLinkActive="bg-blue-600 text-white" class="nav-item">🏠 Dashboard</a>
            <a routerLink="/teacher/attendance" routerLinkActive="bg-blue-600 text-white" class="nav-item">📅 Attendance</a>
            <a routerLink="/teacher/marks" routerLinkActive="bg-blue-600 text-white" class="nav-item">✍️ Marks Entry</a>
          }

          <!-- Student Menu -->
          @if (currentRole === 'Student') {
            <a routerLink="/student/profile" routerLinkActive="bg-blue-600 text-white" class="nav-item">👤 My Profile</a>
          }
        </nav>

        <!-- Role Switcher -->
        <div class="p-4 bg-slate-900 border-t border-slate-700">
          <p class="text-xs text-slate-400 mb-2 uppercase font-bold">Demo: Switch Role</p>
          <div class="flex gap-2">
            <button (click)="switchRole('Admin')" class="text-xs bg-slate-700 hover:bg-slate-600 px-2 py-1 rounded">Admin</button>
            <button (click)="switchRole('Teacher')" class="text-xs bg-slate-700 hover:bg-slate-600 px-2 py-1 rounded">Teacher</button>
            <button (click)="switchRole('Student')" class="text-xs bg-slate-700 hover:bg-slate-600 px-2 py-1 rounded">Student</button>
          </div>
        </div>
      </aside>

      <!-- Main Content Area -->
      <main class="flex-1 flex flex-col overflow-hidden">
        <!-- Header -->
        <header class="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shadow-sm z-10">
          <div class="text-sm breadcrumbs text-slate-500">
            <span class="hover:text-blue-600 cursor-pointer">Home</span> 
            <span class="mx-2">/</span> 
            <span class="font-medium text-slate-800">{{ breadcrumb }}</span>
          </div>
          <div class="flex items-center gap-3">
            <div class="text-right hidden sm:block">
              <div class="text-sm font-bold text-slate-800">User Profile</div>
              <div class="text-xs text-slate-400">{{ currentRole }}</div>
            </div>
            <div class="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-xl border border-slate-300">👤</div>
          </div>
        </header>

        <!-- Scrollable Content -->
        <div class="flex-1 overflow-y-auto p-6">
          <router-outlet></router-outlet>
        </div>
      </main>
    </div>
  `,
  styles: [`
    .nav-item {
      display: block; padding: 0.75rem 1rem; border-radius: 0.375rem; color: #94a3b8; text-decoration: none; transition: all 0.2s; margin-bottom: 0.25rem;
    }
    .nav-item:hover:not(.active) { background-color: #334155; color: white; }
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