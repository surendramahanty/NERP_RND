import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntityList } from './views/entity-list';
import { CableDetails } from './views/cable-details';
import { ChamberDetails } from './views/chamber-details';
import { DuctDetails } from './views/duct-details';
import { ODFDetails } from './views/odf-details';
import { PoleDetails } from './views/pole-details';
import { SplitterDetails } from './views/splitter-details';
import { SpliceClosureDetails } from './views/spliceClosure-details';
import { HomepassDetails } from './views/homepass-details';
import { FdtDetails } from './views/fdt-details';
import { FatDetails } from './views/fat-details';

export const entitiesRoutes: Routes = [
   {
      path: 'entities',
      children: [
          { path: '', component: EntityList },
          { path: 'cable', component: CableDetails },
          { path: 'cable/:id', component: CableDetails },
          { path: 'chamber', component: ChamberDetails },
          { path: 'chamber/:id', component: ChamberDetails },
          { path: 'duct', component: DuctDetails },
          { path: 'duct/:id', component: DuctDetails },
          { path: 'odf', component: ODFDetails },
          { path: 'odf/:id', component: ODFDetails },
          { path: 'pole', component: PoleDetails },
          { path: 'pole/:id', component: PoleDetails },
          { path: 'splitter', component: SplitterDetails },
          { path: 'splitter/:id', component: SplitterDetails },
          { path: 'spliceclosure', component: SpliceClosureDetails },
          { path: 'spliceclosure/:id', component: SpliceClosureDetails },
         { path: 'homepass', component: HomepassDetails },       
         { path: 'homepass/:id', component: HomepassDetails },
         { path: 'fat', component: FatDetails },
         { path: 'fat/:id', component: FatDetails },
         { path: 'fdt', component: FdtDetails },
         { path: 'fdt/:id', component: FdtDetails },
      ]
   },
];

export const EntitiesRouting: ModuleWithProviders = RouterModule.forChild(entitiesRoutes);
