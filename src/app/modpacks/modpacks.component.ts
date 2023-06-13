import { Component } from '@angular/core';
import { ModpacksService } from './modpacks-service/modpacks.service';
import { Modpack } from './modpacks-service/modpack';
import { MODPACKS } from './modpacks-service/mock-modpacks';

import { Version } from './versions-service/versionst';
import { VERSIONS } from './versions-service/mock-versions';
import { VersionsService } from './versions-service/versions.service';

import { Theme } from './themes-service/theme';
import { THEMES } from './themes-service/mock-theme';
import { ThemesService } from './themes-service/themes.service';

import { Type } from './type-service/type';
import { TYPES } from './type-service/mock-type';
import { TypeService } from './type-service/type.service';

@Component({
  selector: 'app-modpacks',
  templateUrl: './modpacks.component.html',
  styleUrls: ['./modpacks.component.css']
})
export class ModpacksComponent {

  modpacks: Modpack[] = [];
  filteredModpacks: Modpack[] = [];
  versions: Version[] = [];
  themes:  Theme[] = [];
  types: Type[] = [];

  selectedVersionId: string;
  selectedThemeId: string;
  selectedTypeId: string;

  pageSize = 8;

  possibleVersions: string[] = [];
  possibleThemes: string[] = [];
  possibleTypes: string[] = [];


  constructor(private modpackService:ModpacksService,
    private versionServiece:VersionsService,
    private themeService:ThemesService,
    private typeService:TypeService){
      this.selectedVersionId = 'all';
      this.selectedThemeId = 'all';
      this.selectedTypeId = 'all';
    }

  getVersions(): void {
    this.versions = this.versionServiece.getVersions();
  }

  getThemes(): void {
    this.themes = this.themeService.getThemes();
  }

  getTypes(): void {
    this.types = this.typeService.getTypes();
  }

  ngOnInit(): void {
    this.getVersions();
    this.getThemes();
    this.applyFilter();
    this.getTypes();
  }

  onSelectVersion(version:string): void {
    this.selectedVersionId = version;
    this.applyFilter();
  }

  onSelectTheme(theme:string): void {
    this.selectedThemeId = theme;
    this.applyFilter();
  }

  onSelectType(type:string): void {
    this.selectedTypeId = type;
    this.applyFilter();
  }

  applyFilter() {
    var result = this.modpackService.getModpack(this.selectedVersionId, this.selectedThemeId, this.selectedTypeId);
    this.filteredModpacks = result.modpacks;
    this.possibleVersions = result.filterPossibleValues.versions;
    this.possibleThemes = result.filterPossibleValues.themes;
    this.possibleTypes = result.filterPossibleValues.types;
  }

  isPossibleVersion(versionId: string): boolean {
    return this.possibleVersions.some(q => q == versionId);
  }

  isPossibleTheme(themeId: string): boolean {
    return this.possibleThemes.some(q => q == themeId);
  }

  isPossibleType(typeId: string): boolean {
    return this.possibleTypes.some(q => q == typeId);
  }

}
