export class Cita {
  id: number;
  nombre: string;
  odontologo: string;
  valor: number;
  fechaCreacion: string;
  idPersona: number;
  mensajeRespuesta: string;

  constructor(
    id: number,
    nombre: string,
    odontologo: string,
    valor: number,
    fechaCreacion: string,
    idPersona: number,
    mensajeRespuesta: string
  ) {
    this.id = id;
    this.nombre = nombre;
    this.odontologo = odontologo;
    this.valor = valor;
    this.fechaCreacion = fechaCreacion;
    this.idPersona = idPersona;
    this.mensajeRespuesta = mensajeRespuesta;
  }
}
