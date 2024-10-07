import { ApplicationConfig, provideZoneChangeDetection, isDevMode, importProvidersFrom } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { customerFeatureKey, customerReducer } from './customer/store/reducer/customer.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    importProvidersFrom(
      StoreModule.forRoot(reducers, { metaReducers }),
      !environment.production ? StoreDevtoolsModule.instrument() : [],
      StoreModule.forFeature(customerFeatureKey, customerReducer)
    )
  ],
};
