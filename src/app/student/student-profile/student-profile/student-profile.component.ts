import { Component } from '@angular/core';

@Component({
  selector: 'app-student-profile',
  template: `
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      <!-- Left Column: Identity Card Style -->
      <div class="col-span-1 space-y-6">
        <div class="card text-center relative overflow-hidden group">
          <div class="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
          
          <div class="relative z-10 w-32 h-32 bg-white p-1 rounded-full mx-auto mb-4 -mt-16 flex items-center justify-center shadow-md">
            <div class="w-full h-full bg-slate-100 rounded-full flex items-center justify-center text-4xl">
              👨‍🎓
            </div>
          </div>
          
          <h2 class="text-xl font-bold text-slate-800">Rahul Sharma</h2>
          <p class="text-slate-500 font-medium">Class 10 - Section B</p>
          
          <div class="mt-6 border-t border-slate-100 pt-4 text-left space-y-3 text-sm">
            <div class="flex justify-between items-center group/item hover:bg-slate-50 p-1 rounded transition-colors">
              <span class="text-slate-400">Roll No</span>
              <span class="font-semibold text-slate-700">24</span>
            </div>
            <div class="flex justify-between items-center group/item hover:bg-slate-50 p-1 rounded transition-colors">
              <span class="text-slate-400">Admission No</span>
              <span class="font-semibold text-slate-700">ADM/2020/452</span>
            </div>
            <div class="flex justify-between items-center group/item hover:bg-slate-50 p-1 rounded transition-colors">
              <span class="text-slate-400">Date of Birth</span>
              <span class="font-semibold text-slate-700">14 Aug 2008</span>
            </div>
            <div class="flex justify-between items-center group/item hover:bg-slate-50 p-1 rounded transition-colors">
              <span class="text-slate-400">Guardian</span>
              <span class="font-semibold text-slate-700">Mr. Rajesh Sharma</span>
            </div>
          </div>
        </div>
        
        <div class="card">
          <h3 class="font-bold text-slate-800 mb-4 flex items-center gap-2">
            <span class="text-lg">📊</span> Attendance Summary
          </h3>
          <div class="flex justify-between items-end mb-2">
            <span class="text-4xl font-bold text-green-600 tracking-tight">88.5%</span>
            <span class="text-xs font-semibold text-slate-400 bg-slate-100 px-2 py-1 rounded">Target: 75%</span>
          </div>
          <div class="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
            <div class="bg-green-500 h-full rounded-full transition-all duration-1000 ease-out" style="width: 88.5%"></div>
          </div>
          <p class="text-xs text-slate-400 mt-3 font-medium">Present: 142 days <span class="mx-1">•</span> Working Days: 160</p>
        </div>
      </div>

      <!-- Right Column: Academic Report -->
      <div class="col-span-1 md:col-span-2 space-y-6">
        
        <!-- Latest Exam Result -->
        <div class="card">
          <div class="flex justify-between items-center mb-6">
            <div>
              <h3 class="text-lg font-bold text-slate-800">Recent Results</h3>
              <p class="text-sm text-slate-500">Half Yearly Examination 2023</p>
            </div>
            <button class="btn btn-outline text-xs py-1.5 px-3">
              <span>Download Report</span>
            </button>
          </div>
          
          <div class="table-container">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Marks Obtained</th>
                  <th>Max Marks</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="font-medium text-slate-700">Mathematics</td>
                  <td class="font-semibold text-slate-600">84</td>
                  <td class="text-slate-400">100</td>
                  <td><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700">A2</span></td>
                </tr>
                <tr>
                  <td class="font-medium text-slate-700">Science</td>
                  <td class="font-semibold text-slate-600">78</td>
                  <td class="text-slate-400">100</td>
                  <td><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-700">B1</span></td>
                </tr>
                <tr>
                  <td class="font-medium text-slate-700">Social Science</td>
                  <td class="font-semibold text-slate-600">92</td>
                  <td class="text-slate-400">100</td>
                  <td><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700">A1</span></td>
                </tr>
                <tr>
                  <td class="font-medium text-slate-700">English</td>
                  <td class="font-semibold text-slate-600">88</td>
                  <td class="text-slate-400">100</td>
                  <td><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700">A2</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Upcoming Schedule -->
        <div class="card">
          <h3 class="text-lg font-bold text-slate-800 mb-4">Exam Schedule</h3>
          <div class="space-y-3">
            <div class="flex items-center p-4 bg-yellow-50/50 border-l-4 border-yellow-400 rounded-r-lg hover:bg-yellow-50 transition-colors cursor-pointer">
              <div class="mr-6 text-center">
                <div class="text-xs text-yellow-600 font-bold uppercase tracking-wider">Oct</div>
                <div class="text-2xl font-bold text-slate-800">24</div>
              </div>
              <div>
                <h4 class="font-bold text-slate-800 text-lg">Unit Test 3 Starts</h4>
                <p class="text-sm text-slate-600 mt-0.5">Physical Class • 10:00 AM</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  `
})
export class StudentProfileComponent { }