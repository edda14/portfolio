import { Routes } from '@angular/router';
import { Portfolio } from './portfolio/portfolio';
import { Imprint } from './imprint/imprint';
import { PrivacyPolicy } from './privacy-policy/privacy-policy';



export const routes: Routes = [
    {path: '', component: Portfolio}, 
    {path: 'imprint', component: Imprint},
    {path: 'privacy-policy', component: PrivacyPolicy}
];
