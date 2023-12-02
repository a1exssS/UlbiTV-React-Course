export enum ArticleBlockBaseType {
	CODE = 'CODE',
	IMAGE = 'IMAGE',
	TEXT = 'TEXT'
}

export interface ArticleBlockBase {
	id: string;
	type: ArticleBlockBaseType;
}

export interface ArticleBlockCode extends ArticleBlockBase {
	type: ArticleBlockBaseType.CODE;
	code: string;
}
export interface ArticleBlockImage extends ArticleBlockBase {
	type: ArticleBlockBaseType.IMAGE;
	title: string;
	src: string;
}
export interface ArticleBlockText extends ArticleBlockBase {
	type: ArticleBlockBaseType.TEXT;
	title?: string;
	paragraphs: string[];
}

export enum ArticleType {
	IT = 'IT',
	SCIENCE = "SCIENCE",
	ECONOMICS = 'ECONOMICS'
}

export type ArticleBlock = ArticleBlockCode | ArticleBlockImage | ArticleBlockText

export interface Article {
	id: string;
	title: string;
	subtitle: string;
	img: string;
	views: number;
	createdAt: string;
	type: ArticleType[];
	blocks: ArticleBlock[];
}