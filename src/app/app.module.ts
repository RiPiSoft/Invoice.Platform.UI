import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DefaultIconButtonComponent } from './units/buttons/default-icon-button/default-icon-button.component';
import { ToggleIconButtonComponent } from './units/buttons/toggle-icon-button/toggle-icon-button.component';
import { InvoiceComponent } from './core/areas/invoice/invoice.component';
import { EstimateComponent } from './core/areas/estimate/estimate.component';
import { ReceiptComponent } from './core/areas/receipt/receipt.component';
import { HistoryComponent } from './core/areas/history/history.component';
import { ReminderComponent } from './core/areas/reminder/reminder.component';
import { StatisticsComponent } from './core/areas/statistics/statistics.component';
import { PageNotFoundComponent } from './core/areas/page-not-found/page-not-found.component';
import { HomeComponent } from './core/areas/home/home.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SearchFieldComponent } from './units/fields/search-field/search-field.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DefaultIconButtonComponent,
    ToggleIconButtonComponent,
    InvoiceComponent,
    EstimateComponent,
    ReceiptComponent,
    HistoryComponent,
    ReminderComponent,
    StatisticsComponent,
    PageNotFoundComponent,
    HomeComponent,
    SearchFieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
