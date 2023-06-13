import { Injectable } from '@angular/core';
import { Modpack } from './modpack';
import { MODPACKS } from './mock-modpacks';

@Injectable({
  providedIn: 'root'
})
export class ModpacksService {

  getModpack(versionId: string, themeId:string, typeId:string): {
    modpacks: Modpack[],
    filterPossibleValues: {
      versions: string[],
      themes: string[],
      types: string[]
    }
  } {
    var filteredModpacks: Modpack[] = [];
    MODPACKS.forEach(item => {
      if ((item.version == versionId || versionId == 'all') && (item.themeClass_1 == themeId || item.themeClass_2 == themeId || item.themeClass_3 == themeId || themeId == 'all') && (item.type == typeId || typeId == 'all')) {
        filteredModpacks.push(item);
      }
    });

    var versions: string[] = [];
    filteredModpacks.map(q => q.version).filter(q => q != undefined).forEach(v => {
      if (!versions.some(q => q == v)) {
        versions.push(v ?? '');
        versions.push('all');
      }
      /* CHANGED */
      if ((versionId != 'all') && (themeId == 'all') && (typeId == 'all')) {
        MODPACKS.forEach(item => {
          versions.push(item.version ?? '');
        })
      }
      /* CHANGED */
    });

    var themes: string[] = [];
    filteredModpacks.map(q => q.themeClass_1)
      .concat(filteredModpacks.map(q => q.themeClass_2))
      .concat(filteredModpacks.map(q => q.themeClass_3))
      .filter(q => q != undefined)
      .forEach(v => {
      if (!themes.some(q => q == v)) {
        themes.push(v ?? '');
        themes.push('all');
      }
      /* CHANGED */
      if ((versionId == 'all') && (themeId != 'all') && (typeId == 'all')) {
        MODPACKS.forEach(item => {
          themes.push(item.themeClass_1 ?? '');
          themes.push(item.themeClass_2 ?? '');
          themes.push(item.themeClass_3 ?? '');
        })
      }
      /* CHANGED */
    });

    var types: string[] = [];
    filteredModpacks.map(q => q.type).filter(q => q != undefined).forEach(v => {
      if (!types.some(q => q == v)) {
        types.push(v ?? '');
        types.push('all');
      }
      /* CHANGED */
      if ((versionId == 'all') && (themeId == 'all') && (typeId != 'all')) {
        MODPACKS.forEach(item => {
          types.push(item.type ?? '');
        })
      }
      /* CHANGED */
    });
    return {
      modpacks: filteredModpacks,
      filterPossibleValues: {
        versions, 
        themes,
        types
      }
    }
  }

  constructor() { }
}
