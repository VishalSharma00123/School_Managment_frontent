import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exam-setup',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-sm border border-slate-200 p-6">
      <h2 class="text-xl font-bold text-slate-800 mb-6">Create New Exam</h2>
      
      <form class="space-y-6">
        <!-- Row 1 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="label">Exam Name</label>
            <input type="text" class="input-field" placeholder="e.g. Half Yearly Examination 2023">
          </div>
          <div>
            <label class="label">Academic Session</label>
            <select class="input-field">
              <option>2023-2024</option>
              <option>2024-2025</option>
            </select>
          </div>
        </div>

        <!-- Row 2 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label class="label">Start Date</label>
            <input type="date" class="input-field">
          </div>
          <div>
            <label class="label">End Date</label>
            <input type="date" class="input-field">
          </div>
          <div>
            <label class="label">Result Date (Tentative)</label>
            <input type="date" class="input-field">
          </div>
        </div>

        <!-- Applicable Classes -->
        <div>
          <label class="label mb-2 block">Applicable Classes</label>
          <div class="flex flex-wrap gap-3">
            <label class="checkbox-card"><input type="checkbox"> Class 1</label>
            <label class="checkbox-card"><input type="checkbox"> Class 2</label>
            <label class="checkbox-card"><input type="checkbox"> Class 3</label>
            <label class="checkbox-card"><input type="checkbox" checked> Class 9</label>
            <label class="checkbox-card"><input type="checkbox" checked> Class 10</label>
            <label class="checkbox-card"><input type="checkbox"> Class 11</label>
            <label class="checkbox-card"><input type="checkbox"> Class 12</label>
          </div>
        </div>

        <!-- Footer -->
        <div class="pt-6 border-t border-slate-100 flex justify-end gap-3">
          <button type="button" class="px-6 py-2 border border-slate-300 rounded-lg text-slate-600 font-medium hover:bg-slate-50">Cancel</button>
          <button type="button" class="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">Create Exam Schedule</button>
        </div>
      </form>
    </div>
  `,
  styles: [`
    .label { @apply block text-sm font-medium text-slate-700 mb-1; }
    .input-field { @apply w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none; }
    .checkbox-card { @apply flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 select-none text-sm font-medium text-slate-700; }
  `]
})
export class ExamSetupComponent { }