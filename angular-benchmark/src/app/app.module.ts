import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { BenchmarkItemComponent } from './benchmark-item.component'
import { CommonModule } from '@angular/common'

@NgModule({
    declarations: [AppComponent, BenchmarkItemComponent],
    imports: [BrowserModule, CommonModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
