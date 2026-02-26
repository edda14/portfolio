// import { ApplicationConfig, provideBrowserGlobalErrorListeners, importProvidersFrom } from '@angular/core';
// import { provideRouter, withInMemoryScrolling } from '@angular/router';
// import { routes } from './app.routes';
// import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
// import { provideAnimations } from '@angular/platform-browser/animations';
// import { provideHttpClient, HttpClient } from '@angular/common/http';

// import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideBrowserGlobalErrorListeners(),
//     provideRouter(
//       routes,
//       withInMemoryScrolling({
//         anchorScrolling: 'enabled',
//         scrollPositionRestoration: 'enabled',
//       })
//     ),
//     provideClientHydration(withEventReplay()),
//     provideAnimations(),
//     provideHttpClient(),
//     importProvidersFrom(
//       TranslateModule.forRoot({
//         defaultLanguage: 'de',
//         loader: {
//           provide: TranslateLoader,
//           deps: [HttpClient],
//         },
//       })
//     ),
//   ],
// };

import { ApplicationConfig, provideBrowserGlobalErrorListeners, importProvidersFrom } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, HttpClient } from '@angular/common/http';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { JsonTranslateLoader } from './translate-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      })
    ),
    provideClientHydration(withEventReplay()),
    provideAnimations(),
    provideHttpClient(),

    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'de',
        loader: {
          provide: TranslateLoader,
          useClass: JsonTranslateLoader,
          deps: [HttpClient],
        },
      })
    ),
  ],
};
