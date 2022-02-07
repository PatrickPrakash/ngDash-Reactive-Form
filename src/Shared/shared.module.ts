import { NgModule } from '@angular/core';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@NgModule({
  exports: [
    NzDatePickerModule,
    NzTimePickerModule,
    NzUploadModule,
    NzButtonModule,
    NzIconModule,
    NzTypographyModule,
  ],
})
export class SharedModule {}
