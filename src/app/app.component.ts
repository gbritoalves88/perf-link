import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfLinkComponent } from './components/perf-link/perf-link.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PerfLinkComponent],
  template: `<app-perf-link></app-perf-link>`
})
export class AppComponent {}
