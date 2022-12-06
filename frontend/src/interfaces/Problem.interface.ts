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

interface IInitCode {
    type: string;
    code: string;
}