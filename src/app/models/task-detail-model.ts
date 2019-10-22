import { TierModel } from "./tier-model";
import { QuestionModel } from "./question-model";
import { UnitModel } from "./unit-model";

export class TaskDetailModel {
  id: number;
  name: string;
  tier: TierModel;
  questions: QuestionModel[];
  unit: UnitModel;
}
