import { TestBed } from '@angular/core/testing';
import { ContenidoCintaService } from './contenido-cinta.service';

describe('ContenidoCintaService', () => {
  let service: ContenidoCintaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContenidoCintaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
