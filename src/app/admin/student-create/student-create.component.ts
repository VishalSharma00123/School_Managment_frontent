import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="max-w-3xl mx-auto bg-white rounded-lg shadow-sm border border-slate-200">
      <div class="p-6 border-b border-slate-100">
        <h2 class="text-xl font-bold text-slate-800">New Student Admission</h2>
        <p class="text-slate-500 text-sm">Session: 2023-2024</p>
      </div>

      <div class="p-6 space-y-6">
        <!-- Personal Info -->
        <div>
          <h3 class="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Personal Details</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-1">First Name</label>
              <input type="text" class="input-base" placeholder="e.g. Rahul">
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
              <input type="text" class="input-base" placeholder="e.g. Verma">
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-1">Date of Birth</label>
              <input type="date" class="input-base">
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-1">Guardian Name</label>
              <input type="text" class="input-base" placeholder="Father/Mother Name">
            </div>
          </div>
        </div>

        <hr class="border-slate-100">

        <!-- Academic Info -->
        <div>
          <h3 class="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Academic Assignment</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-1">Class</label>
              <select class="input-base">
                <option>Class 9</option>
                <option>Class 10</option>
                <option>Class 11 (Sci)</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-1">Section</label>
              <select class="input-base">
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-1">Roll Number</label>
              <input type="number" class="input-base" placeholder="Auto-generated">
            </div>
          </div>
        </div>
      </div>

      <div class="p-6 bg-slate-50 border-t border-slate-100 flex justify-end gap-3 rounded-b-lg">
        <button class="px-4 py-2 text-slate-600 font-medium hover:bg-slate-200 rounded">Cancel</button>
        <button class="px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700">Save Record</button>
      </div>
    </div>
  `,
  styles: [`
    .input-base {
      @apply w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow;
    }
  `]
})
export class StudentCreateComponent { }