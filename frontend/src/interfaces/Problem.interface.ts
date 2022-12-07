export interface IProblemItem {
    id: number;
    title: string;
}

export interface IProblemList extends Array<IProblemItem> {}

export interface ISolProblem {
    id: number;
    title: string;
    description: string;
    initCodes: IInitCode[];   
}

export interface IInitCode {
    type: string;
    code: string;
}