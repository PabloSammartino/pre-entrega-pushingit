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
        productsPage.addToCart(data.productos[0].name);
        productsPage.closeModal();
        productsPage.addToCart(data.productos[0].name);
        productsPage.closeModal();
        productsPage.addToCart(data.productos[1].name);
        productsPage.closeModal();
        shoppingCartPage.goShoppingCart();
        shoppingCartPage.verificarProducto(data.productos[0].name);
        shoppingCartPage.verificarProducto(data.productos[1].name);
        shoppingCartPage.verificarCantidad(data.productos[0].cantidad);
        shoppingCartPage.verificarCantidad(data.productos[1].cantidad);
        shoppingCartPage.verificarPrecioUnitario(data.productos[0].name, data.productos[0].precioUnitario);
        shoppingCartPage.verificarPrecioUnitario(data.productos[1].name, data.productos[1].precioUnitario);
        shoppingCartPage.verificarPrecioTotalLinea(data.productos[1].name, data.productos[1].precioUnitario * data.productos[1].cantidad);
        shoppingCartPage.verificarPrecioTotalLinea(data.productos[0].name, data.productos[0].precioUnitario * data.productos[0].cantidad);
        data.totalPrice = data.productos[1].precioUnitario * data.productos[1].cantidad + data.productos[0].precioUnitario * data.productos[0].cantidad;
        shoppingCartPage.verificarPrecioTotal(data.totalPrice);
        });
    })