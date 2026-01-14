import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div class="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-slate-200">
        
        <!-- Logo Area -->
        <div class="text-center mb-8">
          <div class="w-16 h-16 bg-blue-600 rounded-lg mx-auto flex items-center justify-center text-3xl mb-4 shadow-blue-200 shadow-lg">
            🏫
          </div>
          <h1 class="text-2xl font-bold text-slate-800">EduFlow India</h1>
          <p class="text-slate-500">School Management System</p>
        </div>

        <!-- Login Form -->
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">Username / ID</label>
            <input type="text" class="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Enter ID">
          </div>
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input type="password" class="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="••••••••">
          </div>
          
          <button (click)="login('Admin')" class="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-md">
            Sign In
          </button>
        </div>

        <!-- Demo Quick Links (Remove in Production) -->
        <div class="mt-8 pt-6 border-t border-slate-100">
          <p class="text-xs text-center text-slate-400 font-bold uppercase mb-3">Demo Access (Click to Enter)</p>
          <div class="grid grid-cols-3 gap-2">
            <button (click)="login('Admin')" class="p-2 bg-slate-50 border hover:bg-slate-100 rounded text-xs text-slate-600 font-medium">
              Admin
            </button>
            <button (click)="login('Teacher')" class="p-2 bg-slate-50 border hover:bg-slate-100 rounded text-xs text-slate-600 font-medium">
              Teacher
            </button>
            <button (click)="login('Student')" class="p-2 bg-slate-50 border hover:bg-slate-100 rounded text-xs text-slate-600 font-medium">
              Student
            </button>
          </div>
        </div>

      </div>
    </div>
  `
})
export class LoginComponent {
  constructor(private router: Router) { }

  login(role: string) {
    if (role === 'Admin') this.router.navigate(['/admin/dashboard']);
    if (role === 'Teacher') this.router.navigate(['/teacher/dashboard']);
    if (role === 'Student') this.router.navigate(['/student/profile']);
  }
}