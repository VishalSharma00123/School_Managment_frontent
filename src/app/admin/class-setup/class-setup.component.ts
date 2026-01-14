import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-class-setup',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="mb-6 flex justify-between items-center">
      <h2 class="text-2xl font-bold text-slate-800">Class & Section Setup</h2>
      <button class="btn-primary">+ Add New Class</button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      @for (c of classes; track c.name) {
        <div class="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
          <div class="flex justify-between items-start mb-4">
            <div>
              <h3 class="font-bold text-lg text-slate-800">{{ c.name }}</h3>
              <p class="text-xs text-slate-500 uppercase font-bold tracking-wide">{{ c.stream }}</p>
            </div>
            <div class="w-8 h-8 rounded bg-slate-50 flex items-center justify-center text-slate-400 cursor-pointer hover:bg-slate-100">
              ✎
            </div>
          </div>
          
          <div class="space-y-2">
            <p class="text-sm text-slate-500 mb-2">Active Sections:</p>
            <div class="flex flex-wrap gap-2">
              @for (sec of c.sections; track sec) {
                <span class="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-100 rounded text-sm font-medium">
                  Section {{ sec }}
                </span>
              }
              <button class="px-2 py-1 border border-dashed border-slate-300 text-slate-400 rounded text-sm hover:border-blue-400 hover:text-blue-500">
                + Add
              </button>
            </div>
          </div>

          <div class="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-400 flex justify-between">
            <span>Total Students: {{ c.students }}</span>
            <span>Teacher: {{ c.teacher }}</span>
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    .btn-primary { @apply bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors; }
  `]
})
export class ClassSetupComponent {
  classes = [
    { name: 'Class 10', stream: 'General', sections: ['A', 'B', 'C'], students: 125, teacher: 'Mrs. Verma' },
    { name: 'Class 11', stream: 'Science', sections: ['A', 'B'], students: 84, teacher: 'Mr. Gupta' },
    { name: 'Class 11', stream: 'Commerce', sections: ['C', 'D'], students: 90, teacher: 'Ms. Alice' },
    { name: 'Class 12', stream: 'Science', sections: ['A'], students: 42, teacher: 'Mr. Khan' },
  ];
}