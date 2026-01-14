import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { StudentCreateComponent } from './admin/student-create/student-create.component';
import { TeacherMgmtComponent } from './admin/teacher-mgmt/teacher-mgmt.component';
import { ClassSetupComponent } from './admin/class-setup/class-setup.component';
import { ExamSetupComponent } from './admin/exam-setup/exam-setup.component';
import { TeacherDashboardComponent } from './teacher/teacher-dashboard/teacher-dashboard.component';
import { AttendanceComponent } from './teacher/attendance/attendance.component';
import { StudentProfileComponent } from './student/student-profile/student-profile/student-profile.component';
import { MarksEntryComponent } from './teacher/marks-entry/marks-entry.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            { path: '', redirectTo: 'admin/dashboard', pathMatch: 'full' },

            // Admin Routes
            {
                path: 'admin/dashboard',
                component: AdminDashboardComponent,
                data: { role: 'Admin', breadcrumb: 'Dashboard' }
            },
            {
                path: 'admin/student-create',
                component: StudentCreateComponent,
                data: { role: 'Admin', breadcrumb: 'Student Management > Create' }
            },
            {
                path: 'admin/teacher-mgmt',
                component: TeacherMgmtComponent,
                data: { role: 'Admin', breadcrumb: 'Teacher Management' }
            },
            {
                path: 'admin/class-setup',
                component: ClassSetupComponent,
                data: { role: 'Admin', breadcrumb: 'Class & Section Setup' }
            },
            {
                path: 'admin/exam-setup',
                component: ExamSetupComponent,
                data: { role: 'Admin', breadcrumb: 'Examination Setup' }
            },

            // Teacher Routes
            {
                path: 'teacher/dashboard',
                component: TeacherDashboardComponent,
                data: { role: 'Teacher', breadcrumb: 'Dashboard' }
            },
            {
                path: 'teacher/attendance',
                component: AttendanceComponent,
                data: { role: 'Teacher', breadcrumb: 'My Classes > Attendance' }
            },
            {
                path: 'teacher/marks',
                component: MarksEntryComponent,
                data: { role: 'Teacher', breadcrumb: 'My Classes > Marks Entry' }
            },

            // Student/Parent Routes
            {
                path: 'student/profile',
                component: StudentProfileComponent,
                data: { role: 'Student', breadcrumb: 'My Profile' }
            },
        ]
    }
];