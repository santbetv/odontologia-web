import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CitaService } from './cita.service';
import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment';
import { Cita } from '../model/cita';
import { HttpResponse } from '@angular/common/http';

describe('CitaService', () => {
  let httpMock: HttpTestingController;
  let service: CitaService;
  const apiEndpointCitaConsulta = `${environment.endpoint}/citas`;
  const apiEndpointCitas = `${environment.endpoint}/citas`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CitaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(CitaService);
  });

  it('should be created', () => {
    const productService: CitaService = TestBed.inject(CitaService);
    expect(productService).toBeTruthy();
  });

  it('deberia listar citas', () => {
    const dummyCitas = [
      new Cita(1, 'Control', 'Juan', 56000, '2021-07-14', 1), new Cita(1, 'Odontonlogia', 'Tomas', 25000, '2021-07-14', 1)
    ];
    service.consultar().subscribe(citas => {
      expect(citas.length).toBe(2);
      expect(citas).toEqual(dummyCitas);
    });
    const req = httpMock.expectOne(apiEndpointCitaConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCitas);
  });

  it('deberia crear un cita', () => {
    const dummyCita = new Cita(1, 'Ortodoncia', 'Camilo', 95000, '2021-07-22', 1);
    service.guardar(dummyCita).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointCitas);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({ body: true }));
  });

  it('deberia eliminar un cita', () => {
    const dummyCita = new Cita(35, 'Blanqueamiento', 'Tomas', 95000, '2021-07-22', 1);
    service.eliminar(dummyCita.id).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointCitas}/35`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({ body: true }));
  });
});
