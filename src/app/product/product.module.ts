import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FileUploadModule } from "ng2-file-upload";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list.component';
import { DetailComponent } from './detail/detail.component';

import { ComponentsModule } from "app/components/components.module";
import { PipesModule } from "app/pipes/pipes.module";
import { SharedModule } from "app/shared/shared.module";




@NgModule({
    imports: [
        CommonModule,
        ProductRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        FileUploadModule,
        ComponentsModule.forRoot(),
        PipesModule,
        NgxDatatableModule,
        SharedModule.forRoot()
    ],
    declarations: [ProductListComponent, DetailComponent]
})
export class ProductModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ProductModule
        }
    }
}
