import { EData } from "../db/home-data";
import { Exercise } from "../db/practice";

export type RootStackParams = {
	TabNavigation: undefined;
	QuizzResult: undefined;
	QuizzScreen: undefined;
	PracticeDetail: {
		index: number;
	} & Exercise;
	Detail: undefined;
	DetailCommon: {id:number,dataType: EData};
	PuzzleScreen: { id: number };
};

export type BottomTabsParams = {
	Home: undefined;
	Quizz: undefined;
	Practice: undefined;
	Puzzle: undefined;
};

export type BottomRootParams = BottomTabsParams & RootStackParams;
