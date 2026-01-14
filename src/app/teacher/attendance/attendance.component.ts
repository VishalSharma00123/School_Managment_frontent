import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="card bg-white shadow-sm border border-slate-200 rounded-lg p-6 max-w-4xl mx-auto">
      <div class="flex justify-between items-center mb-6">
        <div>
          <h1 class="text-2xl font-bold text-slate-800">Attendance Entry</h1>
          <p class="text-slate-500 text-sm mt-1">Class 10-A • Mathematics • {{ todayDate | date:'mediumDate' }}</p>
        </div>
        <div class="flex gap-2">
          <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold">P: {{ getCount('P') }}</span>
          <span class="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-bold">A: {{ getCount('A') }}</span>
        </div>
      </div>

      <div class="overflow-x-auto border rounded-lg border-slate-200">
        <table class="w-full text-left border-collapse">
          <thead class="bg-slate-50 text-slate-600 text-sm uppercase font-semibold">
            <tr>
              <th class="p-3 border-b">Roll</th>
              <th class="p-3 border-b">Student Name</th>
              <th class="p-3 border-b w-48">Status</th>
              <th class="p-3 border-b">Remark</th>
            </tr>
          </thead>
          <tbody>
            @for (s of students; track s.roll) {
              <tr class="hover:bg-slate-50 border-b last:border-0 border-slate-100 transition-colors">
                <td class="p-3 text-slate-500 font-mono">{{ s.roll }}</td>
                <td class="p-3 font-medium text-slate-800">{{ s.name }}</td>
                <td class="p-3">
                  <div class="flex bg-slate-100 rounded-md p-1 w-max">
                    <button 
                      (click)="s.status = 'P'"
                      [class.bg-green-500]="s.status === 'P'"
                      [class.text-white]="s.status === 'P'"
                      [class.shadow-sm]="s.status === 'P'"
                      class="px-3 py-1 rounded text-sm font-bold text-slate-500 transition-all">P</button>
                    <button 
                      (click)="s.status = 'A'"
                      [class.bg-red-500]="s.status === 'A'"
                      [class.text-white]="s.status === 'A'"
                      [class.shadow-sm]="s.status === 'A'"
                      class="px-3 py-1 rounded text-sm font-bold text-slate-500 transition-all">A</button>
                    <button 
                      (click)="s.status = 'L'"
                      [class.bg-yellow-500]="s.status === 'L'"
                      [class.text-white]="s.status === 'L'"
                      [class.shadow-sm]="s.status === 'L'"
                      class="px-3 py-1 rounded text-sm font-bold text-slate-500 transition-all">L</button>
                  </div>
                </td>
                <td class="p-3">
                  <input type="text" [(ngModel)]="s.remark" class="w-full text-sm p-1.5 border border-slate-200 rounded focus:border-blue-500 outline-none" placeholder="Optional...">
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>

      <div class="mt-6 flex justify-end gap-3 sticky bottom-0 bg-white pt-4 border-t border-slate-100">
        <button class="px-4 py-2 border border-slate-300 rounded text-slate-600 font-medium hover:bg-slate-50">Cancel</button>
        <button class="px-6 py-2 bg-blue-600 text-white rounded font-medium hover:bg-blue-700 shadow-sm transition-colors">Save Attendance ✅</button>
      </div>
    </div>
  `
})
export class AttendanceComponent {
  todayDate = new Date();
  students = [
    { roll: 1, name: 'Aarav Patel', status: 'P', remark: '' },
    { roll: 2, name: 'Aditi Sharma', status: 'P', remark: '' },
    { roll: 3, name: 'Arjun Singh', status: 'A', remark: 'Sick Leave' },
    { roll: 4, name: 'Diya Gupta', status: 'P', remark: '' },
    { roll: 5, name: 'Ishaan Kumar', status: 'P', remark: '' },
    { roll: 6, name: 'Kavya Reddy', status: 'L', remark: 'Bus Late' },
  ];

  getCount(status: string) {
    return this.students.filter(s => s.status === status).length;
  }
}