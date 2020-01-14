import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GeneralSettingsRouting } from './generalSettings.routes';
import { GeneralSettingsService } from './services/generalSettings.service';
import { GeneralSettingsDetails } from './views/generalSettings-details';
//import { ColorPickerModule } from '../../components/color-picker/color-picker.module';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      GeneralSettingsRouting,
      //ColorPickerModule
   ],
   declarations: [
      GeneralSettingsDetails
   ],
   providers: [
      GeneralSettingsService
   ]
})
export class GeneralSettingsModule { }
