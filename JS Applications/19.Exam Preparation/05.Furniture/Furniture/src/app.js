// import * as api from './api/data.js';


// window.api = api;


import {render} from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

import {logout as apiLogout} from './api/data.js';

import {getUserData} from './utility.js';
import { loginPage, registerPage } from './views/auth.js';
// import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { homePage } from './views/home.js';
import { profilePage } from './views/my-furniture.js';
// import { searchPage } from './views/search.js';


const container = document.querySelector('.container');
document.getElementById('logoutBtn').addEventListener('click',logout)
setUserNav();


page('/',decorateContext, homePage);
page('/login',decorateContext,loginPage);
page('/register',decorateContext,registerPage);
// page('/all-listings',decorateContext,catalogPage);
page('/details/:id',decorateContext,detailsPage);
page('/create',decorateContext,createPage);
page('/edit/:id',decorateContext,editPage);
page('/my-furniture',decorateContext,profilePage);
// page('/search',decorateContext,searchPage);

page.start();


function decorateContext(ctx,next){
    ctx.render = (content) => render(content,container);
    ctx.setUserNav = setUserNav;
    ctx.user = getUserData();
    next();
}


function setUserNav(){
    const user = getUserData();
    if (user) {
        document.getElementById('user').style.display = '';
        document.getElementById('guest').style.display = 'none';
    }else{
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = '';
    }
}

function logout(){
    apiLogout();
    setUserNav();
    page.redirect('/');
}

