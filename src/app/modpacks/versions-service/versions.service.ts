import { Injectable } from '@angular/core';
import { Version } from './versionst';
import { VERSIONS } from './mock-versions';

@Injectable({
  providedIn: 'root'
})
export class VersionsService {

  getVersions(): Version[] {
    return VERSIONS;
  }

  constructor() { }
}
