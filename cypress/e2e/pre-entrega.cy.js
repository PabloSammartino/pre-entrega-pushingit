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
        const productos = [data.productos];
        const precioTotalProductos = [data.productos]
        //const cantidades = [data.productos];
        //const precios = [data.productos];
        productsPage.clickProductsPage();
        productsPage.addToCart("Remera Negra");
        productsPage.closeModal();
        productsPage.addToCart("Remera Negra");
        productsPage.closeModal();
        productsPage.addToCart("Jean Azul");
        productsPage.closeModal();
        shoppingCartPage.goShoppingCart();
        productos.forEach((productos) => {
            shoppingCartPage.verificarProducto(data.productos);
            shoppingCartPage.verificarCantidad(data.productos);
            shoppingCartPage.verificarPrecio(data.productos);
        })
        shoppingCartPage.verificarPrecioTotal(data.productos);
        });
    })