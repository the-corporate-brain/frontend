import { Component, OnInit } from '@angular/core';
import { UnitService } from 'src/app/services/unit.service';
import { UnitModel } from 'src/app/models/unit-model';
import { Observable } from 'rxjs';
import { TaskDetailModel } from 'src/app/models/task-detail-model';
import { QuestionModel } from 'src/app/models/question-model';
import { QuestionDetailsModel } from 'src/app/models/question-details-model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  units: UnitModel[];
  taskDetails: TaskDetailModel;
  questionDetails: QuestionDetailsModel;
  isChecked: boolean;

  constructor(private unitService: UnitService) {}

  ngOnInit() {
    this.unitService.getUnits().subscribe((units: UnitModel[]) => this.units = units);
  }

  getDetails(id: number) {

    this.unitService.getTaskDetails(id).subscribe((taskDetails: TaskDetailModel) => {
      this.taskDetails = taskDetails;
      // tslint:disable-next-line:forin
    });
  }

  submitAnswer(questionId: number, answerId: number, event: Event) {
    console.log(questionId, answerId, event)
    this.unitService.submitAnswer({answerType: 'idAnswer', answerId, questionId}).subscribe((answer) => {
      console.log(answer);
      this.taskDetails.questions[this.taskDetails.questions.findIndex(({id}) => id === questionId)] = null;
    });


  }
}
