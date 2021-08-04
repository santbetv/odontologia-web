export class Persona {
  id: number;
  nombre: string;
  celular: string;

  constructor(
    id: number,
    nombre: string,
    celular: string,
  ) {
    this.id = id;
    this.nombre = nombre;
    this.celular = celular;
  }
}
