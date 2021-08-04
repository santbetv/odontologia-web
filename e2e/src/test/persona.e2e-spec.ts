
import { PersonaPage } from '../page/persona/persona.po';

describe('workspace-project Persona', () => {

    let persona: PersonaPage;

    beforeEach(() => {
        persona = new PersonaPage();
    });

    it('Deberia listar personas actuales', () => {
        persona.navigateTo('/persona/listar');
        expect(persona.contarCitas());
    });

    it('Deberia crear persona', async () => {
        const NOMBRE = 'Ramon';
        const CELULAR = '3138529674';

        persona.navigateTo('/persona/crear');
        persona.ingresarNombre(NOMBRE);
        persona.ingresarCelular(CELULAR);
        persona.clickBotonRegistrarCita();
    });

    it('Deberia listar personas actuales ingresados', () => {
        persona.navigateTo('/persona/listar');
        expect(persona.contarCitas());
    });

});
