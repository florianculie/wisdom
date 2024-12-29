import { Component, HostListener, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import WisdomLogs from '../../assets/WisdomLogs.json';

@Component({
  selector: 'app-floating-log-button',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './floating-log-button.component.html',
  styleUrls: ['./floating-log-button.component.css']
})
export class FloatingLogButtonComponent {
  isLogModalOpen = false; // Suivi de l'état de la fenêtre modale
  wisdomLogs: any[] = [];

  constructor() {
    this.wisdomLogs = WisdomLogs;
  }

  // Basculer l'état de la fenêtre modale
  toggleLogModal() {
    this.isLogModalOpen = !this.isLogModalOpen;
  }

  // Fermer la fenêtre modale si on clique en dehors (avec un écouteur global)
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;

    // Si la fenêtre modale est ouverte et que le clic provient de l'extérieur de la fenêtre modale et du FAB
    if (this.isLogModalOpen && target && !target.closest('.log-modal-content') && !target.closest('.log-modal') && !target.closest('.fab')) {
      this.isLogModalOpen = false;
    }
  }
}
