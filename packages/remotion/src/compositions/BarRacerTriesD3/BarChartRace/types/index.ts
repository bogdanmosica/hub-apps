export type Data = {
	date: Date;
	category: string;
	name: string;
	value: number;
};

export type DataList = Data[];

export type DataByYear = Record<number, DataList>;

