import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-marks-entry',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
      <h2 class="text-xl font-bold text-slate-800 mb-6">Marks Entry</h2>
      <table class="w-full text-left border-collapse">
        <thead class="bg-slate-50 border-b">
          <tr><th class="p-3">Name</th><th class="p-3">Theory</th><th class="p-3">Total</th></tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-3">Rahul Sharma</td>
            <td class="p-3"><input type="number" class="border p-1 rounded w-20"></td>
            <td class="p-3 font-bold">--</td>
          </tr>
        </tbody>
      </table>
    </div>
  `
})
export class MarksEntryComponent { }