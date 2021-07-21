export class Persona {
  id: number;
  nombre: String;
  celular: String;

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
