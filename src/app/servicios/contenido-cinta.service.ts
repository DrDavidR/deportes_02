// contenido-cinta-service.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContenidoCintaService {
  private selectedItems: string[] = [];
  private selectedItemsSubject = new Subject<string[]>();

  getSelectedItems(): string[] {
    return this.selectedItems;
  }

  getSelectedItemsSubject(): Subject<string[]> {
    return this.selectedItemsSubject;
  }

  setSelectedItems(items: string[]): void {
    this.selectedItems = items;
    this.selectedItemsSubject.next(this.selectedItems);
  }
}
