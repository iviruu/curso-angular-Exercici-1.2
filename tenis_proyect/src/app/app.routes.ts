import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AlumnoComponent } from './alumno/alumno.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'teacher', component: TeacherComponent},
    {path: 'alumno', component: AlumnoComponent},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}


];
