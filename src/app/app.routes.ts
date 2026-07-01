import { Routes } from '@angular/router';
import { PerfLinkNatComponent } from './components/perf-link-nat/perf-link-nat.component';
import { PerfLinkNgComponent } from './components/perf-link-ng/perf-link-ng.component';
import { PerfLinkBlitecaComponent } from './components/perf-link-bliteca/perf-link-bliteca.component';

export const routes: Routes = [
  { path: 'nat', component: PerfLinkNatComponent },
  { path: 'ng', component: PerfLinkNgComponent },
  { path: 'bliteca', component: PerfLinkBlitecaComponent },
  { path: '', redirectTo: '/nat', pathMatch: 'full' },
  { path: '**', redirectTo: '/nat' }
];
