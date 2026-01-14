import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teacher-mgmt',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white rounded-lg shadow-sm border border-slate-200">
      
      <!-- Toolbar -->
      <div class="p-6 border-b border-slate-100 flex justify-between items-center">
        <div>
          <h2 class="text-xl font-bold text-slate-800">Teacher Management</h2>
          <p class="text-sm text-slate-500">Total Staff: {{ teachers.length }}</p>
        </div>
        <button class="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 flex items-center gap-2">
          <span>+</span> Add New Teacher
        </button>
      </div>

      <!-- List -->
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead class="bg-slate-50 text-slate-600 text-xs uppercase font-bold">
            <tr>
              <th class="p-4 border-b">ID</th>
              <th class="p-4 border-b">Teacher Name</th>
              <th class="p-4 border-b">Department</th>
              <th class="p-4 border-b">Assigned Class</th>
              <th class="p-4 border-b">Phone</th>
              <th class="p-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            @for (t of teachers; track t.id) {
              <tr class="hover:bg-slate-50 border-b border-slate-100 last:border-0">
                <td class="p-4 text-slate-500 font-mono text-sm">{{ t.id }}</td>
                <td class="p-4 font-medium text-slate-800 flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">
                    {{ t.name.charAt(0) }}
                  </div>
                  {{ t.name }}
                </td>
                <td class="p-4 text-slate-600">
                  <span class="px-2 py-1 bg-slate-100 rounded text-xs font-medium">{{ t.dept }}</span>
                </td>
                <td class="p-4 text-slate-600">{{ t.class }}</td>
                <td class="p-4 text-slate-600 text-sm">{{ t.phone }}</td>
                <td class="p-4">
                  <button class="text-blue-600 hover:underline text-sm font-medium">Edit</button>
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  `
})
export class TeacherMgmtComponent {
  teachers = [
    { id: 'T-101', name: 'Mrs. Anjali Verma', dept: 'Science', class: '10-A', phone: '98765-XXXXX' },
    { id: 'T-102', name: 'Mr. Rajesh Kumar', dept: 'Mathematics', class: '9-B', phone: '99887-XXXXX' },
    { id: 'T-103', name: 'Ms. Priya Singh', dept: 'English', class: '11-Arts', phone: '91234-XXXXX' },
    { id: 'T-104', name: 'Mr. Amit Shah', dept: 'Sports', class: 'All', phone: '88776-XXXXX' },
  ];
}