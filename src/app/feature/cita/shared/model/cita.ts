export class Cita {
  id: number;
  nombre: String;
  odontologo: String;
  valor: number;
  fechaCreacion: String;
  idPersona: number;

  constructor(
    id: number,
    nombre: String,
    odontologo: String,
    valor: number,
    fechaCreacion: String,
    idPersona: number
  ) {
    this.id = id;
    this.nombre = nombre;
    this.odontologo = odontologo;
    this.valor = valor;
    this.fechaCreacion = fechaCreacion;
    this.idPersona = idPersona;
  }
}
