import { browser, by, element } from 'protractor';

export class CitaPage {
    private inputNombre = element(by.id('nombre'));
    private inputOdontologo = element(by.id('odontologo'));
    private inputValor = element(by.id('valor'));
    private inputFechaCreacion = element(by.id('fechaCreacion'));
    private listaCitas = element.all(by.xpath('/html/body/app-root/app-cita/app-listar-cita/table/tbody/tr'));
    private buttonEliminarCita = element(by.xpath('/html/body/app-root/app-cita/app-listar-cita/table/tbody/tr[3]/td[6]/button[1]'));
    private buttonRegistrarCita = element(by.xpath('//*[@id="buttonRegistrarCita"]'));

    async ingresarNombre(nombre) {
        await this.inputNombre.sendKeys(nombre);
    }

    async ingresarOdontologo(odontologo) {
        await this.inputOdontologo.sendKeys(odontologo);
    }

    async ingresarValor(valor) {
        await this.inputValor.sendKeys(valor);
    }
    async ingresarFechaCrecion(fechaCreacion) {
        await this.inputFechaCreacion.sendKeys(fechaCreacion);
    }

    async contarCitas() {
        return this.listaCitas.count();
    }

    async clickBotonRegistrarCita() {
        await this.buttonRegistrarCita.click();
    }

    async clickBotonEliminarCita() {
        await this.buttonEliminarCita.click();
    }

    async navigateTo(s: string) {
        console.log(browser.baseUrl);
        return browser.get(browser.baseUrl + s) as Promise<any>;
    }
}
