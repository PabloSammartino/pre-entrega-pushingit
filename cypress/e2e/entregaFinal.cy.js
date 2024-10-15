/// <reference types="cypress"/>

import { ProductsPage } from '../support/pages/productsPage'
import { ShoppingCartPage } from '../support/pages/shoppingCartPage'
import { CheckoutPage } from '../support/pages/checkoutPage';

describe('Pre-entrega PushingIT', () => {
    const productsPage = new ProductsPage();
    const shoppingCartPage = new ShoppingCartPage();
    const checkoutPage = new CheckoutPage();
    let data;

    before('Cargar data', () => {
        cy.fixture(`dataBase`).then(datosFixture => {
            data = datosFixture;
        })
    })

    beforeEach('Hacer login mediante API', () => {
        cy.loginWithAPI(Cypress.env().username, Cypress.env().password);
        Cypress.env().token = window.localStorage.getItem('token');
        Cypress.env().username = window.localStorage.getItem('user');
    })

    it('Test', () => {
        cy.visit('')
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
        checkoutPage.goToBillingSummary();
        checkoutPage.goToCheckOut();
        checkoutPage.checkOutFirstName(data.checkOut.firstName);
        checkoutPage.checkOutLastName(data.checkOut.lastName);
        checkoutPage.checkOutCardNumber(data.checkOut.cardNumber);
        checkoutPage.purchaseButton();
        checkoutPage.verificarFirstName(data.checkOut.firstName);
        checkoutPage.verificarLastName(data.checkOut.lastName);
        checkoutPage.verificarCardNumber(data.checkOut.cardNumber);
        checkoutPage.verificarProducto1(data.productos[0].name);
        checkoutPage.verificarProducto2(data.productos[1].name);
        checkoutPage.verificarPrecioTotal(data.totalPrice);
        });
    })