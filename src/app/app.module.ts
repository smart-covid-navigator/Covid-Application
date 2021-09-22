// Modules
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UiSwitchModule } from "../../angular2-ui-switch/src";

// Components
import { AppComponent } from "./app.component";
import { VariantSelectorComponent } from "./routes/entry-and-visualization/variant-selector/variant-selector.component";
import { SMARTLaunchComponent } from "./smart-initialization/smart-launch.component";
import { SMARTTokenReceptionComponent } from "./smart-initialization/smart-token-reception.component";
import { FilterableSearchComponent } from "./routes/entry-and-visualization/filterable-search/filterable-search.component";
import { AssocsComponent } from "./routes/entry-and-visualization/variant-visualization/assocs/assocs.component";
import { DrugModalComponent } from "./routes/entry-and-visualization/variant-visualization/assocs/drug-modal.component";
import { DiseaseModalComponent } from "./routes/entry-and-visualization/variant-visualization/assocs/disease-modal.component";

import { ClinicalTrialsComponent } from "./routes/entry-and-visualization/variant-visualization/clinical-trials/clinical-trials.component";
import { DrugDetailsModalComponent } from "./routes/entry-and-visualization/variant-visualization/drugs/drug-details-modal.component";
import { GeneInformationComponent } from "./routes/entry-and-visualization/variant-visualization/gene/gene-information.component";
import { VariantInformationComponent } from "./routes/entry-and-visualization/variant-visualization/variant/variant-information.component";
import { VariantVisualizationComponent } from "./routes/entry-and-visualization/variant-visualization/variant-visualization.component";
import { EHRLoginComponent } from "./routes/ehr-instructions/ehr-instructions.component";
import { FeedbackFormModalComponent } from "./routes/feedback-form/feedback-form-modal.component";
import { HeaderComponent } from "./universal-components/header.component";
import { ClassificationsModalComponent } from "./routes/entry-and-visualization/variant-visualization/variant/classifications-modal.component";
import { VariantEntryAndVisualizationComponent } from "./routes/entry-and-visualization/variant-entry-and-visualization.component";
import { CovidCancerComponent } from "./routes/entry-and-visualization/covid-cancer.component";
import { LandingPageComponent } from "./routes/home/home.component";
import { GithubForkUsComponent } from "./universal-components/github-fork-us.component";
import { TeamComponent } from "./routes/team/team.component";
import { DBAnalysisComponent } from "./routes/db-analysis/db-analysis.component";
import { ConditionVisualizationComponent } from "./routes/entry-and-visualization/condition-visualization.component"
import { CancerVisualizationComponent } from "./routes/entry-and-visualization/cancer-visualization.component"
import { ClinicalTrialModalComponent } from "./routes/entry-and-visualization/clinical-trial-modal.component";
import { CancerTrialsModalComponent } from "./routes/entry-and-visualization/cancer-trials-modal.component"
import { CovidPatientInformationComponent } from "./routes/entry-and-visualization/covid-cancer-tabs/covid-patient-information.component"
import { CancerDrugsInformationComponent } from "./routes/entry-and-visualization/covid-cancer-tabs/cancer-drugs-information.component"
import { CancerSummaryModalComponent } from "./routes/entry-and-visualization/covid-cancer-tabs/cancer-summary-modal.component"

// Services
import { SMARTReferenceService } from "./smart-initialization/smart-reference.service";
import { MyVariantInfoSearchService } from "./routes/entry-and-visualization/genomic-data-providers/myvariantinfo-search.service";
import { AssocsService } from "./routes/entry-and-visualization/variant-visualization/assocs/assocs.service";
import { ClinicalTrialsService } from "./routes/entry-and-visualization/variant-visualization/clinical-trials/clinical-trials.service";
import { VariantSelectorService } from "./routes/entry-and-visualization/variant-selector/variant-selector.service";
import { DrugsSearchService } from "./routes/entry-and-visualization/variant-visualization/drugs/drugs-search.service";
import { MyGeneInfoSearchService } from "./routes/entry-and-visualization/genomic-data-providers/mygeneinfo-search.service";
import { JSONNavigatorService } from "./routes/entry-and-visualization/genomic-data-providers/utilities/json-navigator.service";
import { CSVReader } from "./routes/entry-and-visualization/genomic-data-providers/csv-reader.service"
import { XLSXReader } from "./routes/entry-and-visualization/genomic-data-providers/xlsx-reader.service"

@NgModule({
  imports:      [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    UiSwitchModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    VariantEntryAndVisualizationComponent,
    CovidCancerComponent,
    VariantVisualizationComponent,
    VariantSelectorComponent,
    SMARTLaunchComponent,
    SMARTTokenReceptionComponent,
    FilterableSearchComponent,
    VariantInformationComponent,
    ClinicalTrialsComponent,
    AssocsComponent,
    DrugModalComponent,
    DiseaseModalComponent,
    GeneInformationComponent,
    DrugDetailsModalComponent,
    ClassificationsModalComponent,
    EHRLoginComponent,
    LandingPageComponent,
    GithubForkUsComponent,
    FeedbackFormModalComponent,
    TeamComponent,
    DBAnalysisComponent,
    ConditionVisualizationComponent,
    CancerVisualizationComponent,
    ClinicalTrialModalComponent,
    CancerTrialsModalComponent,
    CovidPatientInformationComponent,
    CancerDrugsInformationComponent,
    CancerSummaryModalComponent

  ],
  entryComponents: [
    DrugDetailsModalComponent, // Since it enters later on in the flow.
    ClassificationsModalComponent,
    DrugModalComponent,
    DiseaseModalComponent,
    FeedbackFormModalComponent,
    ClinicalTrialModalComponent,
    CancerTrialsModalComponent,
    CovidPatientInformationComponent,
    CancerDrugsInformationComponent,
    CancerSummaryModalComponent
  ],
  providers: [
    SMARTReferenceService,
    VariantSelectorService,
    MyVariantInfoSearchService,
    MyGeneInfoSearchService,
    AssocsService,
    ClinicalTrialsService,
    DrugsSearchService,
    JSONNavigatorService,
    CSVReader,
    XLSXReader
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
