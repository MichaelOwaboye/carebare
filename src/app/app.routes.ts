import { Routes } from '@angular/router';
import { CPATableComponent } from './cpa-table/cpa-table.component';
import { CPADocumentComponent } from './cpa-document/cpa-document.component';

export const routes: Routes = [
    {
        path: '',
        component: CPATableComponent
    },
    {
        path: 'cpa-document',
        component: CPADocumentComponent
    },
];
