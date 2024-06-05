import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { OfertaComponent } from './components/oferta/oferta.component';
import { PerfilComponent } from './components/perfil/perfil.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: 'login', 
        component: LoginComponent
    },
    {
        path: 'inicio',
        component: InicioComponent
    },
    {
        path: 'cadastro',
        component: CadastroComponent
    },
    {
        path: 'oferta/:freelanceId',
        component: OfertaComponent
    },
    {
        path: 'perfil',
        component: PerfilComponent
    }
];
