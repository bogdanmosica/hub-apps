export type DataItem = {
	date: Date | string;
	category: string;
	name: string;
	value: number;
};

export type DataList = DataItem[];

export type DataByYear = Record<number, DataList>;

export type RankedItem = Pick<DataItem, 'name' | 'value'> & {
  rank: number;
};

export type RankedList = RankedItem[];

export type Keyframe = [Date, RankedList];

export type TRectangle = {
  color: any;
  width: number;
  y: number;
}

