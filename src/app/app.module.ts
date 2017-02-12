import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { BrowserModule,Title  } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule,JsonpModule ,Http} from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

import { AppCommonModule } from './app.commonmodulte'

import { APPSTATE,runnersAppStateFactory } from './app.state'

import { HeaderComponent } from './layout/header.component';
import { FooterComponent } from './layout/footer.component';
import { SidebarComponent } from './layout/sidebar.component';

import { AppComponent } from './app.component';

import {appRoutes} from './app.routes';

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent,HeaderComponent,FooterComponent,SidebarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    RouterModule.forRoot(appRoutes),
    AppCommonModule
  ],
  providers: [
    { provide: APPSTATE,    useFactory:  runnersAppStateFactory},
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
