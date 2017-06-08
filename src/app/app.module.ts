import { NgModule} from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule, Http } from '@angular/http';
import { CalendarModule } from 'angular-calendar';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgmCoreModule } from '@agm/core';
import { QuillModule } from 'ngx-quill';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';
import { SortablejsModule, SortablejsOptions} from "angular-sortablejs";
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TreeModule } from 'angular-tree-component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { EasyPieChartModule } from 'ng2modules-easypiechart';
import { PerfectScrollbarModule, PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';
import { CKEditorModule } from 'ng2-ckeditor';
import 'hammerjs';

import { GeneAppComponent} from './app.component';
import { RoutingModule } from "./app-routing.module";
import { MainComponent }   from './main/main.component';
import { MenuToggleModule } from './core/menu/menu-toggle.module';
import { MenuItems } from './core/menu/menu-items/menu-items';
import { BreadcrumbsComponent } from './core/breadcrumb/breadcrumb.component';
import { BreadcrumbService } from "./core/breadcrumb/breadcrumb.service";
import { PageTitleService } from './core/page-title/page-title.service';
import { D3ChartService } from "./core/nvD3/nvD3.service";
import { nvD3 } from "./core/nvD3/nvD3.component";

import { CalendarComponent}  from './calendar/calendar.component';

import { CardsComponent }   from './components/cards/cards.component';
import { ButtonsComponent }   from './components/buttons/buttons.component';
import { GridListComponent }  from './components/grid-list/gridlist.component';
import { ListOverviewComponent }  from './components/list/list.component';
import { MenuOverviewComponent }  from './components/menu/menu.component';
import { SliderOverviewComponent }  from './components/slider/slider.component';
import { SnackbarOverviewComponent }  from './components/snackbar/snackbar.component';
import { TooltipOverviewComponent }  from './components/tooltip/tooltip.component';
import { DialogOverviewComponent, DemoDialog}  from './components/dialog/dialog.component';
import { SelectComponent}  from './components/select/select.component';
import { InputComponent}  from './components/input/input.component';
import { CheckboxComponent}  from './components/checkbox/checkbox.component';
import { RadioComponent}  from './components/radio/radio.component';
import { ToolbarComponent}  from './components/toolbar/toolbar.component';
import { ProgressComponent}  from './components/progress/progress.component';
import { TabsComponent}  from './components/tabs/tabs.component';

import { FullscreenTableComponent}  from './tables/table-fullscreen/table-fullscreen.component';
import { EditingTableComponent}  from './tables/table-editing/table-editing.component';
import { FilterTableComponent}  from './tables/table-filter/table-filter.component';
import { PagingTableComponent}  from './tables/table-paging/table-paging.component';
import { SortingTableComponent}  from './tables/table-sorting/table-sorting.component';
import { PinningTableComponent}  from './tables/table-pinning/table-pinning.component';
import { SelectionTableComponent}  from './tables/table-selection/table-selection.component';

import { FormWizardComponent}  from './forms/form-wizard/formwizard.component';
import { FormValidationComponent}  from './forms/form-validation/formvalidation.component';
import { FormUploadComponent}  from './forms/form-upload/formupload.component';
import { FormTreeComponent}  from './forms/form-tree/formtree.component';

import { MediaComponent } from './custom-pages/media/media.component';
import { UserListComponent } from './custom-pages/user-list/userlist.component';
import { PricingComponent } from './custom-pages/pricing/pricing.component';
import { BlankComponent } from './custom-pages/blank/blank.component';

import { LoginComponent } from './session/login/login.component';
import { RegisterComponent } from './session/register/register.component';
import { ForgotPasswordComponent } from './session/forgot-password/forgot-password.component';
import { LockScreenComponent } from './session/lockscreen/lockscreen.component';

import {dialogChecklist, PinnboardComponent} from './pinnboard/pinnboard.component';
import { HealthRecordComponent } from './health-record/health-record.component';
import {BookComponent, DialogInfoProfessional, DialogPrevAppointments} from './book/book.component';
import {DialogAddMember, ProfileComponent} from './profile/profile.component';
import {FamilyService} from "./shared/services/family.service";
import {ExpertService} from "./shared/services/expert.service";
import {PinService} from "./shared/services/pin.service";
import {HealthRecordService} from "./shared/services/health_record.service";
import { SettingsComponent } from './settings/settings.component';
import {SettingsService} from "./settings/settings.service";
import {MainService} from "./shared/services/main.service";

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}

const perfectScrollbarConfig: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

const sortablejsConfig: SortablejsOptions = {
	animation: 300
};

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		MaterialModule.forRoot(),
		RoutingModule,
		FlexLayoutModule,
		NgbModalModule.forRoot(),
		CalendarModule.forRoot(),
		AgmCoreModule.forRoot({apiKey: 'AIzaSyBtdO5k6CRntAMJCF-H5uZjTCoSGX95cdk'}),
		QuillModule,
        CKEditorModule,
		DragulaModule,
		SortablejsModule,
        FileUploadModule,
        NgxDatatableModule,
        TreeModule,
        ChartsModule,
        EasyPieChartModule,
        PerfectScrollbarModule.forRoot(perfectScrollbarConfig),
        MenuToggleModule,
        HttpModule,
        TranslateModule.forRoot({
		    provide: TranslateLoader,
		    useFactory: (createTranslateLoader),
		    deps: [Http]
		}),
	],
	declarations: [
		GeneAppComponent, 
		MainComponent,
        CalendarComponent,
		ButtonsComponent, 
		CardsComponent, 
		GridListComponent, 
		ListOverviewComponent, 
		MenuOverviewComponent, 
		SliderOverviewComponent, 
		SnackbarOverviewComponent, 
		TooltipOverviewComponent, 
		DialogOverviewComponent,
		DemoDialog,
		SelectComponent,
		InputComponent,
		CheckboxComponent,
		RadioComponent,
		ToolbarComponent,
		ProgressComponent,
		TabsComponent,
		FullscreenTableComponent,
        EditingTableComponent,
        FilterTableComponent,
        PagingTableComponent,
        SortingTableComponent,
        PinningTableComponent,
        SelectionTableComponent,
		FormWizardComponent,
		FormValidationComponent,
        FormUploadComponent,
        FormTreeComponent,
        MediaComponent,
        UserListComponent,
        PricingComponent,
		BlankComponent,
        LoginComponent,
        RegisterComponent,
        ForgotPasswordComponent,
        LockScreenComponent,
		BreadcrumbsComponent,
		nvD3,
		PinnboardComponent,
		dialogChecklist,
		HealthRecordComponent,
		BookComponent,
		DialogInfoProfessional,
		ProfileComponent,
		DialogAddMember,
		SettingsComponent,
		DialogPrevAppointments
	],
	entryComponents: [
		DemoDialog,
		dialogChecklist,
		DialogInfoProfessional,
		DialogAddMember,
		DialogPrevAppointments
	],
	bootstrap: [GeneAppComponent],
	providers:[
		D3ChartService,
		MenuItems,
		BreadcrumbService,
		PageTitleService,
		FamilyService,
		ExpertService,
		PinService,
		HealthRecordService,
		SettingsService,
		MainService
	]
})
export class GeneAppModule { }
