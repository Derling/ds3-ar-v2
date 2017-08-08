import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { WeaponDataService } from './weapon-data.service';
import { FormsModule } from '@angular/forms';
import { FloorPipe } from './floor.pipe';

@NgModule({
  declarations: [
    FloorPipe,AppComponent
  ],
  imports: [
    BrowserModule,HttpModule, FormsModule
  ],
  providers: [WeaponDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
