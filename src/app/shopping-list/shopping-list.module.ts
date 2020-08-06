import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

@NgModule({
    declarations:[
        ShoppingListComponent,
        ShoppingEditComponent,
    ],
    imports: [
        AppRoutingModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{ path: 'shopping-list', component: ShoppingListComponent }])
    ],
    exports:[
        ShoppingListComponent,
        ShoppingEditComponent,
    ],
})
export class ShoppingListModule {}