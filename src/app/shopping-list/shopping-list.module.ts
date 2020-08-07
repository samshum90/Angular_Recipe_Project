import { NgModule } from '@angular/core';
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
        SharedModule,
        FormsModule,
        RouterModule.forChild([{ path: '', component: ShoppingListComponent }])
    ],
    exports:[
        ShoppingListComponent,
        ShoppingEditComponent,
    ],
})
export class ShoppingListModule {}