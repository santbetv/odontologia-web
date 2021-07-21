import { browser, by, element } from 'protractor';

export class PersonaPage {

    private inputNombre = element(by.id('nombre'));
    private inputCelular = element(by.id('celular'));

    private listaPersonas = element.all(by.xpath('/html/body/app-root/app-persona/app-listar-persona/table/tbody/tr'));
    private buttonRegistrarPersona = element(by.xpath('//*[@id="buttonRegistrarPersona"]'));


    async ingresarNombre(nombre) {
        await this.inputNombre.sendKeys(nombre);
    }

    async ingresarCelular(celular) {
        await this.inputCelular.sendKeys(celular);
    }

    async contarCitas() {
        return this.listaPersonas.count();
    }

    async clickBotonRegistrarCita() {
        await this.buttonRegistrarPersona.click();
    }

    async navigateTo(s: string) {
        console.log(browser.baseUrl);
        return browser.get(browser.baseUrl + s) as Promise<any>;
    }
}