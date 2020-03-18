import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';

// the scanner!
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { HomePage } from './home.page';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    ZXingScannerModule
  ],
  declarations: [HomePage],
  providers: [
    QRScanner,
    AndroidPermissions
  ]
})
export class HomePageModule {}
