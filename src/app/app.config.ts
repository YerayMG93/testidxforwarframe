import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withJsonpSupport } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ApiServiceService } from './Services/api/api-service.service';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(withJsonpSupport()), provideAnimationsAsync(),
    HttpClient
  ]
};
