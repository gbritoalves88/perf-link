import { Routes } from '@angular/router';
import { PerfLinkNatComponent } from './components/perf-link-nat/perf-link-nat.component';
import { PerfLinkNgComponent } from './components/perf-link-ng/perf-link-ng.component';

export const routes: Routes = [
  { path: 'nat', component: PerfLinkNatComponent },
  { path: 'ng', component: PerfLinkNgComponent },
  { path: '', redirectTo: '/nat', pathMatch: 'full' }, // página padrão
  { path: '**', redirectTo: '/nat' } // redireciona rotas inválidas
];
