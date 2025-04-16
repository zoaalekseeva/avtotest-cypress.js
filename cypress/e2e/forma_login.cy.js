import * as data from '../helpers/default_data.json'
import * as main_page from '../locators/main_page.json'
import * as result_page from '../locators/result_page.json'
import * as recovery_password_page from '../locators/recovery_password_page.json'


describe('Позитивная проверка авторизации', function () {
        beforeEach('Начало теста', function () {
              cy.visit('/');
              cy.get(main_page.fogot_pass_btn).should('have.css', 'color', 'rgb(0, 85, 152)');
                });

        afterEach('Конец теста', function () {
             cy.get(result_page.close).should('be.visible');
                });

    it('Верный пароль и верный логин', function () {
        cy.get(main_page.email).type(data.login); //нашла инпуд логин и ввела верный 
        cy.get(main_page.password).type(data.password); //нашла инпуд пароль и ввела верный
        cy.get(main_page.login_button).click(); //нажала кнопку войти
        cy.get(result_page.title).contains('Авторизация прошла успешно'); //проверяю, что после авторизации есть нужный текст
        cy.get(result_page.title).should('be.visible'); //текст виден пользователю
     })
     it('Востановление пароля', function () {
        cy.get(main_page.fogot_pass_btn).click(); //нашла забыли пароль и нажала
        cy.get(recovery_password_page.email).type(data.login); //нашла инпуд логин и ввела верный 
        cy.get(recovery_password_page.send_button).click(); //нажала кнопку отправить код
        cy.get(result_page.title).contains('Успешно отправили пароль на e-mail'); //проверяю, что после авторизации есть нужный текст
        cy.get(result_page.title).should('be.visible'); //текст виден пользователю
    })  
     it('Неверный пароль и верный логин', function () {
        cy.get(main_page.email).type(data.login); //нашла инпуд логин и ввела верный 
        cy.get(main_page.password).type('iLoveqastudio10'); //нашла инпуд пароль и ввела неверный
        cy.get(main_page.login_button).click(); //нажала кнопку войти
        cy.get(result_page.title).contains('Такого логина или пароля нет'); //проверяю, что после авторизации есть нужный текст
        cy.get(result_page.title).should('be.visible'); //текст виден пользователю
     })
     it('Неверный пароль и верный логин', function () {
        cy.get(main_page.email).type('german@dolnikov00.ru'); //нашла инпуд логин и ввела неверный 
        cy.get(main_page.password).type(data.password); //нашла инпуд пароль и ввела верный
        cy.get(main_page.login_button).click(); //нажала кнопку войти
        cy.get(result_page.title).contains('Такого логина или пароля нет'); //проверяю, что после авторизации есть нужный текст
        cy.get(result_page.title).should('be.visible'); //текст виден пользователю
     })
    it('Логин без @', function () {
       cy.get(main_page.email).type('germandolnikov.ru'); //нашла инпуд логин и ввела без @ 
       cy.get(main_page.password).type(data.password); //нашла инпуд пароль и ввела верный
       cy.get(main_page.login_button).click(); //нажала кнопку войти
       cy.get(result_page.title).contains('Нужно исправить проблему валидации'); //проверяю, что после авторизации есть нужный текст
       cy.get(result_page.title).should('be.visible'); //текст виден пользователю
    })
    it('Верный пароль и логин строчными буквами', function () {
        cy.get(main_page.email).type('GerMan@Dolnikov.ru'); //нашла инпуд логин и ввелаc с строчными буквами 
        cy.get(main_page.password).type(data.password); //нашла инпуд пароль и ввела верный
        cy.get(main_page.login_button).click(); //нажала кнопку войти
        cy.get(result_page.title).contains('Авторизация прошла успешно'); //проверяю, что после авторизации есть нужный текст
        cy.get(result_page.title).should('be.visible'); //текст виден пользователю
    })
})