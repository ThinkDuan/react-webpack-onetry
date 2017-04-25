'use strict'
import createComponent from 'helpers/shallowRenderHelper';
import Login from 'components/Login';
const expect = require('chai').expect;
describe('LoginComponent',function(){
    beforeEach(function(){
        this.LoginComponent = createComponent(Login); 
    });
    it('should have its components name as default classname',function(){
        expect(this.LoginComponent).props.className.to.equal('Login');
    });
    it();
});