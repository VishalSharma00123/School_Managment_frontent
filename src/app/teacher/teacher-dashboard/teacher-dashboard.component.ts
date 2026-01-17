import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher-dashboard',
  template: `
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Main Feed -->
      <div class="lg:col-span-2 space-y-6">
        <!-- Attendance Alert -->
        <div class="card border-l-4 border-l-amber-500 bg-amber-50/50">
          <div class="flex items-center justify-between flex-wrap gap-4">
            <div class="flex items-center gap-3">
              <div class="p-2 bg-amber-100 rounded-lg text-amber-600 font-bold text-xl">⚠️</div>
              <div>
                <h2 class="text-amber-800 font-bold text-lg">Pending Attendance</h2>
                <p class="text-amber-700 text-sm">Class 10-A (Mathematics) - 09:00 AM Session</p>
              </div>
            </div>
            <button class="btn btn-primary bg-amber-600 hover:bg-amber-700 border-transparent shadow-amber-200" routerLink="/teacher/attendance">Mark Now</button>
          </div>
        </div>

        <!-- Schedule Section -->
        <div class="card">
          <div class="flex items-center justify-between mb-4">
             <h2 class="text-lg font-bold text-slate-800">Today's Schedule</h2>
             <span class="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded">Dec 14, 2023</span>
          </div>
          
          <div class="table-container">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Class</th>
                  <th>Subject</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="font-medium text-slate-600">09:00 AM</td>
                  <td><span class="font-bold text-slate-700">10-A</span></td>
                  <td>Mathematics</td>
                  <td><span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-100 text-green-700">Done</span></td>
                </tr>
                <tr>
                  <td class="font-medium text-slate-600">10:00 AM</td>
                  <td><span class="font-bold text-slate-700">09-B</span></td>
                  <td>Physics</td>
                  <td><span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-600">Upcoming</span></td>
                </tr>
                <tr>
                  <td class="font-medium text-slate-600">12:00 PM</td>
                  <td><span class="font-bold text-slate-700">10-C</span></td>
                  <td>Mathematics</td>
                  <td><span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-600">Upcoming</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Side Stats -->
      <div class="lg:col-span-1 space-y-6">
        <div class="card">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center text-xl">✍️</div>
            <h3 class="font-bold text-slate-800">Marks Entry</h3>
          </div>
          <div class="bg-slate-50 p-4 rounded-lg border border-slate-100 mb-4">
             <p class="text-sm font-semibold text-slate-700">Unit Test 2 (Physics)</p>
             <p class="text-xs text-slate-500 mt-1">Deadline: Tomorrow</p>
          </div>
          <button class="btn btn-outline w-full justify-center">Enter Marks</button>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class TeacherDashboardComponent { }