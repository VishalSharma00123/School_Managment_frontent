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
        <div class="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <div class="text-slate-500 text-sm font-medium uppercase tracking-wide mb-2">{{ stat.label }}</div>
          <div class="text-3xl font-bold text-slate-800">{{ stat.value }}</div>
          <div class="text-xs font-medium mt-2" [class.text-green-600]="stat.trend === 'up'" [class.text-slate-400]="stat.trend === 'neutral'">
            {{ stat.subtext }}
          </div>
        </div>
      }
    </div>

    <!-- Quick Actions -->
    <h3 class="text-lg font-bold text-slate-800 mb-4">Quick Management</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div routerLink="/admin/student-create" class="bg-white p-6 rounded-lg border border-slate-200 hover:border-blue-400 cursor-pointer transition-all group">
        <div class="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
          🎓
        </div>
        <h4 class="font-bold text-slate-800">New Admission</h4>
        <p class="text-sm text-slate-500 mt-1">Register new student for 2023-24</p>
      </div>

      <div class="bg-white p-6 rounded-lg border border-slate-200 hover:border-blue-400 cursor-pointer transition-all group">
        <div class="w-12 h-12 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
          📢
        </div>
        <h4 class="font-bold text-slate-800">Create Notice</h4>
        <p class="text-sm text-slate-500 mt-1">Send SMS/Email to parents</p>
      </div>
      
      <div class="bg-white p-6 rounded-lg border border-slate-200 hover:border-blue-400 cursor-pointer transition-all group">
        <div class="w-12 h-12 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
          ⚙️
        </div>
        <h4 class="font-bold text-slate-800">Academic Setup</h4>
        <p class="text-sm text-slate-500 mt-1">Manage classes and subjects</p>
      </div>
    </div>
  `
})
export class AdminDashboardComponent {
  stats = [
    { label: 'Total Students', value: '1,250', subtext: '+15 New Admissions', trend: 'up' },
    { label: 'Total Teachers', value: '45', subtext: 'Full Time Staff', trend: 'neutral' },
    { label: 'Today Attendance', value: '94%', subtext: 'Above Average', trend: 'up' },
    { label: 'Fee Collection', value: '₹ 8.5L', subtext: 'Pending: ₹ 1.2L', trend: 'neutral' },
  ];
}