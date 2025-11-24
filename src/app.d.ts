import { IStaticMethods } from "preline/dist";

// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	interface Window {
    // Optional plugins
    _;
    $: typeof import("jquery");
    jQuery: typeof import("jquery");
    DataTable;
	noUiSlider: typeof import("nouislider");
    Dropzone;
    VanillaCalendarPro;

    // Preline UI
    HSStaticMethods: IStaticMethods;
  }
}

export {};
