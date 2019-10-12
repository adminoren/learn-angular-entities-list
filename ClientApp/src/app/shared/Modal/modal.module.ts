import { NgModule } from '@angular/core';
import { ModalComponent } from './modal.component';
import { ModalService } from './modal.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule],
  exports: [ModalComponent],
  providers: [ModalService]
})
export class ModalModule {}
