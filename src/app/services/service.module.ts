import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService, SidebarService, SharedService , UsuarioService, LoginGuard, SubirArchivoService} from './service.index';
import { HttpClientModule } from '@angular/common/http';
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [SharedService, SidebarService, SettingsService, UsuarioService, LoginGuard, SubirArchivoService, ModalUploadService]
})
export class ServiceModule { }
