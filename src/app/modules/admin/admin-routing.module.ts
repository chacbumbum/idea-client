import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from "app/modules/admin/layout/layout.component";
import { MediaComponent } from "app/modules/admin/media/media.component";
import { ProductRouting } from "app/modules/admin/product/product-routing.module";
import { UsersComponent } from "app/modules/admin/users/users.component";
import { AuthGuard } from "app/shared/guard/auth.guard";
import { RepositoryRouting } from "app/modules/admin/repository/repository-routing.module";

const routes: Routes = [{
    path: 'admin',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [{
        path: 'users',
        component: UsersComponent
    }, {
        path: '',
        redirectTo: 'repository',
        pathMatch: 'full'
    }, {
        path: 'medias',
        component: MediaComponent
    }, ...ProductRouting, ...RepositoryRouting]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
