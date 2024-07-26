export type RootStackParams = {
	TabNavigation: undefined;
	QuizzResult: undefined;
	QuizzScreen: undefined;
	PracticeDetail: undefined;
	Detail: undefined;
	PuzzleScreen: { id: number };
};

export type BottomTabsParams = {
	Home: undefined;
	Quizz: undefined;
	Practice: undefined;
	Puzzle: undefined;
};

export type BottomRootParams = BottomTabsParams & RootStackParams;
