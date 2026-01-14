import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher-dashboard',
  template: `
    <div class="flex-row gap-4" style="align-items: flex-start;">
      <!-- Main Feed -->
      <div class="flex-col gap-4" style="flex: 2;">
        <div class="card warning-border">
          <div class="flex-row justify-between items-center">
            <div>
              <h2 style="color: #d97706">⚠️ Pending Attendance</h2>
              <p>Class 10-A (Mathematics) - 09:00 AM Session</p>
            </div>
            <button class="btn btn-primary" routerLink="/teacher/attendance">Mark Now</button>
          </div>
        </div>

        <div class="card">
          <h2>Today's Schedule</h2>
          <table class="data-table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Class</th>
                <th>Subject</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>09:00 AM</td>
                <td>10-A</td>
                <td>Mathematics</td>
                <td><span class="badge-done">Done</span></td>
              </tr>
              <tr>
                <td>10:00 AM</td>
                <td>09-B</td>
                <td>Physics</td>
                <td><span class="badge-pending">Upcoming</span></td>
              </tr>
              <tr>
                <td>12:00 PM</td>
                <td>10-C</td>
                <td>Mathematics</td>
                <td><span class="badge-pending">Upcoming</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Side Stats -->
      <div class="flex-col gap-4" style="flex: 1;">
        <div class="card">
          <h3>Pending Marks Entry</h3>
          <p>Unit Test 2 (Physics)</p>
          <button class="btn btn-outline" style="width: 100%; margin-top: 1rem;">Enter Marks</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .warning-border { border-left: 5px solid #d97706; }
    .badge-done { background: #dcfce7; color: #166534; padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; }
    .badge-pending { background: #f1f5f9; color: #475569; padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; }
  `]
})
export class TeacherDashboardComponent { }