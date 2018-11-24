import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  myphoto:any;
  constructor(public navCtrl: NavController,private camera:Camera) {

  }
  takePhoto(){
    const options: CameraOptions = {
      quality: 80,
      sourceType: this.camera.PictureSourceType.CAMERA, 
      saveToPhotoAlbum: true,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.myphoto = 'data:image/jpeg;base64,' + imageData;
    //  alert(this.myphoto); 
    }, (err) => {
     // Handle error
    });
    
  }
  getImage(){
    const options: CameraOptions = {
      quality: 70,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum:true,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true,
      mediaType: this.camera.MediaType.PICTURE
      }
      this.camera.getPicture(options).then((imageData) => {
        this.myphoto = 'data:image/jpeg;base64,'+imageData;
        }, (err) => {
          // Handle error
          alert("Erreur"+err);
        });
}
corpImage(){
  const options: CameraOptions = {
    quality: 70,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    saveToPhotoAlbum:true,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    correctOrientation: true,
    mediaType: this.camera.MediaType.PICTURE,
    allowEdit:true,
    targetHeight:300,
    targetWidth:300
    }
    this.camera.getPicture(options).then((imageData) => {
      this.myphoto = 'data:image/jpeg;base64,'+imageData;
      }, (err) => {
        // Handle error
        alert("Erreur"+err);
      });
}
}
