export interface Model {
	id: string;
	name: string;
	description: string;
	link: string;
	image: {
		height: number;
		width: number;
	};
	override?: {
		text?: string;
		imagePadding?: boolean;
		darkerImageBackground?: boolean;
	};
}
