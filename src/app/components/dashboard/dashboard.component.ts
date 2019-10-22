import { Component, OnInit } from "@angular/core";
import { UnitService } from "src/app/services/unit.service";
import { UnitModel } from "src/app/models/unit-model";
import { Observable } from "rxjs";
import { TaskDetailModel } from "src/app/models/task-detail-model";
import { QuestionModel } from 'src/app/models/question-model';
import { QuestionDetailsModel } from 'src/app/models/question-details-model';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  units$: Observable<UnitModel[]>;
  taskDetails$: Observable<TaskDetailModel>;
  questionDetails$: Observable<QuestionDetailsModel>;

  constructor(private unitService: UnitService) {}

  ngOnInit() {
    this.units$ = this.unitService.getUnits();
  }

  getDetails(id: number) {
    this.questionDetails$ != null;
    this.taskDetails$ = this.unitService.getTaskDetails(id);
  }


  getQuestion(id: number) {
    this.questionDetails$ = this.unitService.getQuestion(id);
  }
}
