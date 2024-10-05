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
        productsPage.clickProductsPage();
        productsPage.addToCart("Remera Negra");
        productsPage.closeModal();
        productsPage.addToCart("Remera Negra");
        productsPage.closeModal();
        productsPage.addToCart("Chomba Amarilla");
        productsPage.closeModal();
        shoppingCartPage.goShoppingCart(data);
        shoppingCartPage.verificarProducto("Remera Negra");
        shoppingCartPage.verificarProducto("Chomba Amarilla");
        shoppingCartPage.verificarCantidad(data.productos[0].cantidad);
        shoppingCartPage.verificarCantidad(data.productos[1].cantidad);
        shoppingCartPage.verificarPrecioUnitario(data.productos.precioUnitario);
        shoppingCartPage.verificarPrecioTotal();
        });
    })