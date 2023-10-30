import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContenidoCintaService } from 'src/app/servicios/contenido-cinta.service';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {
  items: any[] = []; // Eliminado el decorador @Input
  selectedItems: string[] = [];

  constructor(
    private http: HttpClient,
    private contenidoCintaService: ContenidoCintaService
  ) {}

  ngOnInit() {
    // Cargar el archivo JSON desde la carpeta "assets"
    this.http.get<any[]>('assets/data.json').subscribe((data) => {
      this.items = data;
      console.log('Items cargados:', this.items);
    });

    // Suscripción a cambios en los elementos seleccionados
    this.contenidoCintaService.getSelectedItemsSubject().subscribe(selectedItems => {
      console.log('Contenidos seleccionados actualizados:', selectedItems);
    });
  }

  onItemClick(title: string) {
    const index = this.selectedItems.indexOf(title);
    if (index !== -1) {
      this.selectedItems.splice(index, 1);
    } else {
      this.selectedItems.unshift(title);
    }

    console.log('Contenidos seleccionados:', this.selectedItems);
    this.contenidoCintaService.setSelectedItems(this.selectedItems);
  }
}
