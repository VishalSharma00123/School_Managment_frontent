import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <!-- Metric Cards -->
      @for (stat of stats; track stat.label) {
        <div class="card relative overflow-hidden group">
          <!-- Decorative Background Icon -->
          <div class="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
             <span class="text-8xl select-none text-slate-900">{{ stat.icon }}</span>
          </div>

          <div class="relative z-10">
            <div class="flex items-start justify-between">
              <div>
                <p class="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">{{ stat.label }}</p>
                <div class="text-3xl font-bold text-slate-800 tracking-tight">{{ stat.value }}</div>
              </div>
              <div class="p-2 rounded-lg" [ngClass]="stat.bgClass">
                <span class="text-xl">{{ stat.icon }}</span>
              </div>
            </div>
            
            <div class="flex items-center mt-4 text-xs font-medium">
              <span [class.text-green-600]="stat.trend === 'up'" 
                    [class.bg-green-50]="stat.trend === 'up'"
                    [class.text-slate-500]="stat.trend === 'neutral'"
                    [class.bg-slate-50]="stat.trend === 'neutral'"
                    class="px-2 py-1 rounded-md flex items-center gap-1">
                @if(stat.trend === 'up') { <span>↑</span> }
                @if(stat.trend === 'neutral') { <span>•</span> }
                {{ stat.subtext }}
              </span>
            </div>
          </div>
        </div>
      }
    </div>

    <!-- Quick Actions -->
    <div class="flex items-center justify-between mb-6">
      <h3 class="text-xl font-bold text-slate-800">Quick Management</h3>
      <button class="text-blue-600 text-sm font-semibold hover:underline">View All Actions</button>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div routerLink="/admin/student-create" class="card hover:border-blue-400 cursor-pointer group transition-all duration-300 hover:-translate-y-1">
        <div class="flex items-center gap-4">
          <div class="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-sm border border-blue-100">
            🎓
          </div>
          <div>
            <h4 class="font-bold text-slate-800 text-lg group-hover:text-blue-600 transition-colors">New Admission</h4>
            <p class="text-sm text-slate-500 mt-0.5">Register new student</p>
          </div>
        </div>
      </div>

      <div class="card hover:border-purple-400 cursor-pointer group transition-all duration-300 hover:-translate-y-1">
        <div class="flex items-center gap-4">
          <div class="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-sm border border-purple-100">
            📢
          </div>
          <div>
            <h4 class="font-bold text-slate-800 text-lg group-hover:text-purple-600 transition-colors">Create Notice</h4>
            <p class="text-sm text-slate-500 mt-0.5">Send SMS/Email alerts</p>
          </div>
        </div>
      </div>
      
      <div class="card hover:border-orange-400 cursor-pointer group transition-all duration-300 hover:-translate-y-1">
        <div class="flex items-center gap-4">
          <div class="w-14 h-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-sm border border-orange-100">
            ⚙️
          </div>
          <div>
            <h4 class="font-bold text-slate-800 text-lg group-hover:text-orange-600 transition-colors">Academic Setup</h4>
            <p class="text-sm text-slate-500 mt-0.5">Classes & Subjects</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AdminDashboardComponent {
  stats = [
    { label: 'Total Students', value: '1,250', subtext: '+15 this week', trend: 'up', icon: '👨‍🎓', bgClass: 'bg-blue-50 text-blue-600' },
    { label: 'Total Teachers', value: '45', subtext: 'Full Time Staff', trend: 'neutral', icon: '👨‍🏫', bgClass: 'bg-indigo-50 text-indigo-600' },
    { label: 'Attendance', value: '94%', subtext: 'Today\'s average', trend: 'up', icon: '📊', bgClass: 'bg-green-50 text-green-600' },
    { label: 'Collections', value: '₹ 8.5L', subtext: '₹ 1.2L Pending', trend: 'neutral', icon: '💰', bgClass: 'bg-amber-50 text-amber-600' },
  ];
}