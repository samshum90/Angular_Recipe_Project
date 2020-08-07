import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
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
        SharedModule,
        FormsModule,
        RouterModule.forChild([{ path: 'shopping-list', component: ShoppingListComponent }])
    ],
    exports:[
        ShoppingListComponent,
        ShoppingEditComponent,
    ],
})
export class ShoppingListModule {}