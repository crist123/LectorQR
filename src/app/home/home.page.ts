import { Component, OnInit } from '@angular/core';
// import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

  constructor(private androidPermissions: AndroidPermissions) { }

  ngOnInit() {

    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
      result => console.log('Has permission?',result.hasPermission),
      err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
      .then(result=>{
        console.info('ok');
      }).catch(err=>{
        console.info('error');
      })
    );

    // this.qrScanner.prepare()
    //   .then((status: QRScannerStatus) => {
    //     if (status.authorized) {
    //       // camera permission was granted


    //       // start scanning
    //       let scanSub = this.qrScanner.scan().subscribe((text: string) => {
    //         console.log('Scanned something', text);

    //         this.qrScanner.hide(); // hide camera preview
    //         scanSub.unsubscribe(); // stop scanning
    //       });

    //       this.qrScanner.show();

    //     } else if (status.denied) {
    //       // camera permission was permanently denied
    //       // you must use QRScanner.openSettings() method to guide the user to the settings page
    //       // then they can grant the permission from there
    //     } else {
    //       // permission was denied, but not permanently. You can ask for permission again at a later time.
    //     }
    //   })
    //   .catch((e: any) => console.log('Error is', e));
  }

  scanCompleteHandler(event) {
    if (event) console.info('complete', event);
  }
}
