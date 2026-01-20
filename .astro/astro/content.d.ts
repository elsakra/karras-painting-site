declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"faq": {
"engagement-process.md": {
	id: "engagement-process.md";
  slug: "engagement-process";
  body: string;
  collection: "faq";
  data: InferEntrySchema<"faq">
} & { render(): Render[".md"] };
"industries-served.md": {
	id: "industries-served.md";
  slug: "industries-served";
  body: string;
  collection: "faq";
  data: InferEntrySchema<"faq">
} & { render(): Render[".md"] };
};
"industries": {
"financial-services.md": {
	id: "financial-services.md";
  slug: "financial-services";
  body: string;
  collection: "industries";
  data: InferEntrySchema<"industries">
} & { render(): Render[".md"] };
"healthcare.md": {
	id: "healthcare.md";
  slug: "healthcare";
  body: string;
  collection: "industries";
  data: InferEntrySchema<"industries">
} & { render(): Render[".md"] };
"manufacturing.md": {
	id: "manufacturing.md";
  slug: "manufacturing";
  body: string;
  collection: "industries";
  data: InferEntrySchema<"industries">
} & { render(): Render[".md"] };
"nonprofit.md": {
	id: "nonprofit.md";
  slug: "nonprofit";
  body: string;
  collection: "industries";
  data: InferEntrySchema<"industries">
} & { render(): Render[".md"] };
"real-estate.md": {
	id: "real-estate.md";
  slug: "real-estate";
  body: string;
  collection: "industries";
  data: InferEntrySchema<"industries">
} & { render(): Render[".md"] };
"technology.md": {
	id: "technology.md";
  slug: "technology";
  body: string;
  collection: "industries";
  data: InferEntrySchema<"industries">
} & { render(): Render[".md"] };
};
"insights": {
"2025-tax-policy-changes.md": {
	id: "2025-tax-policy-changes.md";
  slug: "2025-tax-policy-changes";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
"ai-in-accounting.md": {
	id: "ai-in-accounting.md";
  slug: "ai-in-accounting";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
"esg-reporting-requirements.md": {
	id: "esg-reporting-requirements.md";
  slug: "esg-reporting-requirements";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
"irs-catch-up-contribution-regulations.md": {
	id: "irs-catch-up-contribution-regulations.md";
  slug: "irs-catch-up-contribution-regulations";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
};
"locations": {
"karras-painting-l-l-c.md": {
	id: "karras-painting-l-l-c.md";
  slug: "karras-painting-l-l-c";
  body: string;
  collection: "locations";
  data: InferEntrySchema<"locations">
} & { render(): Render[".md"] };
};
"services": {
"painting.md": {
	id: "painting.md";
  slug: "painting";
  body: string;
  collection: "services";
  data: InferEntrySchema<"services">
} & { render(): Render[".md"] };
"resinous-flooring.md": {
	id: "resinous-flooring.md";
  slug: "resinous-flooring";
  body: string;
  collection: "services";
  data: InferEntrySchema<"services">
} & { render(): Render[".md"] };
};
"team": {
"john-karras.md": {
	id: "john-karras.md";
  slug: "john-karras";
  body: string;
  collection: "team";
  data: InferEntrySchema<"team">
} & { render(): Render[".md"] };
"michael-karras.md": {
	id: "michael-karras.md";
  slug: "michael-karras";
  body: string;
  collection: "team";
  data: InferEntrySchema<"team">
} & { render(): Render[".md"] };
"nick-karras.md": {
	id: "nick-karras.md";
  slug: "nick-karras";
  body: string;
  collection: "team";
  data: InferEntrySchema<"team">
} & { render(): Render[".md"] };
"shawn-zoladz.md": {
	id: "shawn-zoladz.md";
  slug: "shawn-zoladz";
  body: string;
  collection: "team";
  data: InferEntrySchema<"team">
} & { render(): Render[".md"] };
};
"testimonials": {
"client-testimonial-1.md": {
	id: "client-testimonial-1.md";
  slug: "client-testimonial-1";
  body: string;
  collection: "testimonials";
  data: InferEntrySchema<"testimonials">
} & { render(): Render[".md"] };
"client-testimonial-2.md": {
	id: "client-testimonial-2.md";
  slug: "client-testimonial-2";
  body: string;
  collection: "testimonials";
  data: InferEntrySchema<"testimonials">
} & { render(): Render[".md"] };
"client-testimonial-3.md": {
	id: "client-testimonial-3.md";
  slug: "client-testimonial-3";
  body: string;
  collection: "testimonials";
  data: InferEntrySchema<"testimonials">
} & { render(): Render[".md"] };
"client-testimonial-4.md": {
	id: "client-testimonial-4.md";
  slug: "client-testimonial-4";
  body: string;
  collection: "testimonials";
  data: InferEntrySchema<"testimonials">
} & { render(): Render[".md"] };
"client-testimonial-5.md": {
	id: "client-testimonial-5.md";
  slug: "client-testimonial-5";
  body: string;
  collection: "testimonials";
  data: InferEntrySchema<"testimonials">
} & { render(): Render[".md"] };
"client-testimonial-6.md": {
	id: "client-testimonial-6.md";
  slug: "client-testimonial-6";
  body: string;
  collection: "testimonials";
  data: InferEntrySchema<"testimonials">
} & { render(): Render[".md"] };
"jeremy-zinn-wvu-hospitals-full.md": {
	id: "jeremy-zinn-wvu-hospitals-full.md";
  slug: "jeremy-zinn-wvu-hospitals-full";
  body: string;
  collection: "testimonials";
  data: InferEntrySchema<"testimonials">
} & { render(): Render[".md"] };
"jeremy-zinn-wvu-hospitals.md": {
	id: "jeremy-zinn-wvu-hospitals.md";
  slug: "jeremy-zinn-wvu-hospitals";
  body: string;
  collection: "testimonials";
  data: InferEntrySchema<"testimonials">
} & { render(): Render[".md"] };
"jerry-jacobs-construction.md": {
	id: "jerry-jacobs-construction.md";
  slug: "jerry-jacobs-construction";
  body: string;
  collection: "testimonials";
  data: InferEntrySchema<"testimonials">
} & { render(): Render[".md"] };
"jerry-jacobs-second-project.md": {
	id: "jerry-jacobs-second-project.md";
  slug: "jerry-jacobs-second-project";
  body: string;
  collection: "testimonials";
  data: InferEntrySchema<"testimonials">
} & { render(): Render[".md"] };
"jerry-jacobs-union-local.md": {
	id: "jerry-jacobs-union-local.md";
  slug: "jerry-jacobs-union-local";
  body: string;
  collection: "testimonials";
  data: InferEntrySchema<"testimonials">
} & { render(): Render[".md"] };
"judy-stechly-wheeling-catholic.md": {
	id: "judy-stechly-wheeling-catholic.md";
  slug: "judy-stechly-wheeling-catholic";
  body: string;
  collection: "testimonials";
  data: InferEntrySchema<"testimonials">
} & { render(): Render[".md"] };
"quay-mull.md": {
	id: "quay-mull.md";
  slug: "quay-mull";
  body: string;
  collection: "testimonials";
  data: InferEntrySchema<"testimonials">
} & { render(): Render[".md"] };
"robert-nutting-ogden.md": {
	id: "robert-nutting-ogden.md";
  slug: "robert-nutting-ogden";
  body: string;
  collection: "testimonials";
  data: InferEntrySchema<"testimonials">
} & { render(): Render[".md"] };
"suzy-h.md": {
	id: "suzy-h.md";
  slug: "suzy-h";
  body: string;
  collection: "testimonials";
  data: InferEntrySchema<"testimonials">
} & { render(): Render[".md"] };
"will-turani-orrick.md": {
	id: "will-turani-orrick.md";
  slug: "will-turani-orrick";
  body: string;
  collection: "testimonials";
  data: InferEntrySchema<"testimonials">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
