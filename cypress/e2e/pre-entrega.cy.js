/// <reference types="cypress"/>

import { LoginPage } from '../support/loginPage/loginPage';
import { ProductsPage } from '../support/onlineShop/productsPage'
import { ShoppingCartPage } from '../support/onlineShop/shoppingCartPage'

describe('Pre-entrega PushingIT', () => {
    const loginPage = new LoginPage();
    const productsPage = new ProductsPage();
    const shoppingCartPage = new ShoppingCartPage();
    let data;

    before('Cargar data', () => {
        cy.fixture(`dataBase`).then(datosFixture => {
            data = datosFixture;
        })
    })

    beforeEach('Hacer login', () => {
        cy.visit('')
        cy.xpath(`//*[@id="registertoggle"]`).dblclick();
        loginPage.escribirUsuario().type(Cypress.env('username'));
        loginPage.escribirContraseña().type(Cypress.env('password'));
        loginPage.submitFormButton();
    })

    it('Test', () => {
        const productos = [data.producto1, data.producto2];
        const cantidades = [data.cantidad1, data.cantidad2];
        const precios = [data.precio1, data.precio2];
        productsPage.clickProductsPage();
        cy.wait(2000);
        productsPage.addToCart("Remera Negra");
        cy.wait(2000);
        productsPage.closeModal();
        cy.wait(2000);
        productsPage.addToCart("Remera Negra");
        cy.wait(2000);
        productsPage.closeModal();
        cy.wait(2000);
        productsPage.addToCart("Jean Azul");
        cy.wait(2000);
        productsPage.closeModal();
        shoppingCartPage.goShoppingCart();
        productos.forEach((producto, index) => {
            shoppingCartPage.verificarProducto(index, producto);
            shoppingCartPage.verificarCantidad(index, cantidades[index]);
            shoppingCartPage.verificarPrecio(index, precios[index]);
            const precioTotalEsperado = precios [index] * cantidades[index];
            shoppingCartPage.verificarPrecioTotal(index, precioTotalEsperado);
        })
        });
    })