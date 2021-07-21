import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PersonaService } from './persona.service';
import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment';
import { Persona } from '../../shared/model/persona';
import { HttpResponse } from '@angular/common/http';

describe('PersonaService', () => {
  let httpMock: HttpTestingController;
  let service: PersonaService;
  const apiEndpointPersonaConsulta = `${environment.endpoint}/personas`;
  const apiEndpointPersonas = `${environment.endpoint}/personas`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PersonaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(PersonaService);
  });

  it('should be created', () => {
    const productService: PersonaService = TestBed.inject(PersonaService);
    expect(productService).toBeTruthy();
  });

  it('deberia listar personas', () => {
    const dummyPersonas = [
      new Persona(1, 'jose', '3117883083'), new Persona(2, 'Augusto', '3235468974')
    ];
    service.consultar().subscribe(personas => {
      expect(personas.length).toBe(2);
      expect(personas).toEqual(dummyPersonas);
    });
    const req = httpMock.expectOne(apiEndpointPersonaConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyPersonas);
  });

  it('deberia crear un persona', () => {
    const dummyPersona = new Persona(1, 'jose', '3117883083');
    service.guardar(dummyPersona).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointPersonas);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
