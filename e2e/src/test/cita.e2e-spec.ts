import { CitaPage } from '../page/cita/cita.po';

describe('workspace-project Cita', () => {


    let cita: CitaPage;

    beforeEach(() => {
        cita = new CitaPage();
    });


    it('Deberia listar citas actual', () => {
        cita.navigateTo('/cita/listar');
        expect(2).toBe(cita.contarCitas());
    });

    it('Deberia crear cita', async () => {
        const NOMBRE = 'Retenedores';
        const ODONTOLOGO = 'Julio';
        const VALOR = 95000;
        const FECHA_CREACION = '07-08-2021';

        cita.navigateTo('/cita/crear');
        cita.ingresarNombre(NOMBRE);
        cita.ingresarOdontologo(ODONTOLOGO);
        cita.ingresarValor(VALOR);
        cita.ingresarFechaCrecion(FECHA_CREACION);
        cita.clickBotonRegistrarCita();

        expect(3).toBe(cita.contarCitas());
    });

    it('Deberia listar citas registradas', () => {
        cita.navigateTo('/cita/listar');
        expect(3).toBe(cita.contarCitas());
    });

    it('Deberia eliminar citas', () => {
        cita.navigateTo('/cita/listar');
        cita.clickBotonEliminarCita();
        cita.navigateTo('/cita/listar');
        expect(2).toBe(cita.contarCitas());
    });

    it('Deberia listar citas actual', () => {
        cita.navigateTo('/cita/listar');
        expect(2).toBe(cita.contarCitas());
    });

    
});
