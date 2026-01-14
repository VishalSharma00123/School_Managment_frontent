import { Component } from '@angular/core';

@Component({
  selector: 'app-student-profile',
  template: `
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      <!-- Left Column: Identity Card Style -->
      <div class="col-span-1">
        <div class="card text-center">
          <div class="w-32 h-32 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
            👨‍🎓
          </div>
          <h2 class="text-xl font-bold text-slate-800">Rahul Sharma</h2>
          <p class="text-slate-500">Class 10 - Section B</p>
          <div class="mt-4 border-t pt-4 text-left space-y-2 text-sm">
            <div class="flex justify-between">
              <span class="text-slate-400">Roll No:</span>
              <span class="font-medium">24</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-400">Admission No:</span>
              <span class="font-medium">ADM/2020/452</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-400">DOB:</span>
              <span class="font-medium">14 Aug 2008</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-400">Guardian:</span>
              <span class="font-medium">Mr. Rajesh Sharma</span>
            </div>
          </div>
        </div>
        
        <div class="card mt-4">
          <h3 class="font-bold text-slate-700 mb-3">Attendance Summary</h3>
          <div class="flex justify-between items-end mb-1">
            <span class="text-3xl font-bold text-green-600">88.5%</span>
            <span class="text-xs text-slate-500">Target: 75%</span>
          </div>
          <div class="w-full bg-slate-100 rounded-full h-2">
            <div class="bg-green-500 h-2 rounded-full" style="width: 88.5%"></div>
          </div>
          <p class="text-xs text-slate-400 mt-2">Present: 142 / Working Days: 160</p>
        </div>
      </div>

      <!-- Right Column: Academic Report -->
      <div class="col-span-1 md:col-span-2 space-y-6">
        
        <!-- Latest Exam Result -->
        <div class="card">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-bold">Recent Results: Half Yearly</h3>
            <button class="text-blue-600 text-sm font-medium hover:underline">Download PDF</button>
          </div>
          
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
                <td>Mathematics</td>
                <td>84</td>
                <td>100</td>
                <td><span class="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">A2</span></td>
              </tr>
              <tr>
                <td>Science</td>
                <td>78</td>
                <td>100</td>
                <td><span class="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold">B1</span></td>
              </tr>
              <tr>
                <td>Social Science</td>
                <td>92</td>
                <td>100</td>
                <td><span class="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">A1</span></td>
              </tr>
              <tr>
                <td>English</td>
                <td>88</td>
                <td>100</td>
                <td><span class="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">A2</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Upcoming Schedule -->
        <div class="card">
          <h3 class="text-lg font-bold mb-4">Exam Schedule</h3>
          <div class="space-y-3">
            <div class="flex items-center p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded-r">
              <div class="mr-4 text-center">
                <div class="text-xs text-yellow-600 font-bold uppercase">Oct</div>
                <div class="text-xl font-bold text-slate-800">24</div>
              </div>
              <div>
                <h4 class="font-bold text-slate-800">Unit Test 3 Starts</h4>
                <p class="text-sm text-slate-600">Physics, 10:00 AM</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  `
})
export class StudentProfileComponent { }