import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent }   from './main/main.component';
import { LoginComponent }  from './session/login/login.component';
import { RegisterComponent }  from './session/register/register.component';
import { ForgotPasswordComponent }  from './session/forgot-password/forgot-password.component';
import { LockScreenComponent }  from './session/lockscreen/lockscreen.component';
import {PinnboardComponent} from "./pinnboard/pinnboard.component";
import {HealthRecordComponent} from "./health-record/health-record.component";
import {BookComponent} from "./book/book.component";
import {ProfileComponent} from "./profile/profile.component";
import {SettingsComponent} from "./settings/settings.component";

const appRoutes: Routes = [
	{	
		path: 'session/login',
		component: LoginComponent,
	},{	
		path: 'session/register',
		component: RegisterComponent,
	},{	
		path: 'session/forgot-password',
		component: ForgotPasswordComponent,
	},{	
		path: 'session/lockscreen',
		component: LockScreenComponent,
	},{
	 	path: '',
	 	component: MainComponent,
	 	children: [
            /*{ path: 'dashboard/dashboard-v1', component: DashboardComponent },
            { path: 'dashboard/dashboard-v2', component: DashboardOneComponent },
            { path: 'inbox', component: InboxComponent },
            { path: 'chat', component: ChatComponent },
            { path: 'calendar', component: CalendarComponent },
            { path: 'editor/wysiwyg', component: EditorComponent },
            { path: 'editor/ckeditor', component: Ckeditor },
            { path: 'icons', component: MaterialIconComponent },
            { path: 'chart/ng2-charts', component: ChartComponent },
            { path: 'chart/easy-pie-chart', component: EasyPieChartComponent },
			{ path: 'components/buttons', component: ButtonsComponent },
			{ path: 'components/cards', component: CardsComponent },
			{ path: 'components/grid', component: GridListComponent },
			{ path: 'components/list', component: ListOverviewComponent },
			{ path: 'components/menu', component: MenuOverviewComponent },
			{ path: 'components/slider', component: SliderOverviewComponent },
			{ path: 'components/snackbar', component: SnackbarOverviewComponent },
			{ path: 'components/tooltip', component: TooltipOverviewComponent },
			{ path: 'components/dialog', component: DialogOverviewComponent },
			{ path: 'components/select', component: SelectComponent },
			{ path: 'components/input', component: InputComponent },
			{ path: 'components/checkbox', component: CheckboxComponent },
			{ path: 'components/radio', component: RadioComponent },
			{ path: 'components/toolbar', component: ToolbarComponent },
			{ path: 'components/progress', component: ProgressComponent },
			{ path: 'components/tabs', component: TabsComponent },
			{ path: 'dragndrop/dragula', component: DragulaDemoComponent },
			{ path: 'dragndrop/sortable', component: SortableDemoComponent },
            { path: 'tables/fullscreen', component: FullscreenTableComponent },
            { path: 'tables/editing', component: EditingTableComponent },
            { path: 'tables/filter', component: FilterTableComponent },
            { path: 'tables/paging', component: PagingTableComponent },
            { path: 'tables/sorting', component: SortingTableComponent },
            { path: 'tables/pinning', component: PinningTableComponent },
            { path: 'tables/selection', component: SelectionTableComponent },	
            { path: 'forms/form-wizard', component: FormWizardComponent },
			{ path: 'forms/form-validation', component: FormValidationComponent },
            { path: 'forms/form-upload', component: FormUploadComponent },
            { path: 'forms/form-tree', component: FormTreeComponent },		
			{ path: 'maps/googlemap', component: GoogleMapComponent },
			{ path: 'maps/leafletmap', component: LeafletMapComponent },
            { path: 'pages/media', component: MediaComponent },
            { path: 'pages/userlist', component: UserListComponent },
            { path: 'pages/pricing', component: PricingComponent },
            { path: 'pages/blank', component: BlankComponent },*/
			{ path: 'health', component: HealthRecordComponent },
			{ path: 'book', component: BookComponent },
			{ path: 'profil', component: ProfileComponent },
			{ path: 'settings', component: SettingsComponent },
			{ path: '', component: PinnboardComponent }
	 	]
  	}
];

@NgModule({
  	imports: [RouterModule.forRoot(appRoutes)],
 	exports: [RouterModule],
  	providers: []
})
export class RoutingModule { }
