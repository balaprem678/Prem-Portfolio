declare module '*.scss' {
	const content: { [className: string]: string };
	export default content;
}

declare module '*.sass' {
	const content: { [className: string]: string };
	export default content;
}

declare module '*.css' {
	const content: { [className: string]: string };
	export default content;
}

// Minimal Lenis typing to satisfy TypeScript until dependency is installed
declare module '@studio-freight/lenis' {
	type LenisOptions = {
		duration?: number
		easing?: (t: number) => number
		smooth?: boolean
		direction?: 'vertical' | 'horizontal'
		gestureOrientation?: 'vertical' | 'horizontal'
	}

	class Lenis {
		constructor(options?: LenisOptions)
		raf(time?: number): void
		destroy(): void
	}

	export default Lenis
}

// Also declare the new package name
declare module 'lenis' {
	type LenisOptions = {
		duration?: number
		easing?: (t: number) => number
		smooth?: boolean
		direction?: 'vertical' | 'horizontal'
		gestureOrientation?: 'vertical' | 'horizontal'
	}

	class Lenis {
		constructor(options?: LenisOptions)
		raf(time?: number): void
		destroy(): void
	}

	export default Lenis
}
