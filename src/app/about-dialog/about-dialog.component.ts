// Vasilina Khvostikova
// 2024-10-28
import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-about-dialog',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './about-dialog.component.html',
  styleUrls: ['./about-dialog.component.css']
})
export class AboutDialogComponent {}

