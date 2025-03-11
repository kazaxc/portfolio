<script>
	import ProjectTemplate from './ProjectTemplate.svelte';

	let projects = [
		{
			title: 'Tin',
			imageUrl:
				'https://user-images.githubusercontent.com/12881812/161390756-f98deb3b-ccb1-495d-bccc-56a2cdeaac99.png',
			altText: 'Code snippet of the Tin language',
			itemUrl: 'https://github.com/The-Tin-Foil-Hat-Society/tin',
			description:
				'Tin is a structured, imperative, and procedural programming language desgined around the RISC-V architecture, aimed at embedded applications.',
			badgeList: ['Flex', 'Bison', 'C', 'RISC-V', 'Python']
		},
		{
			title: 'GAN-Aimbot',
			imageUrl: 'https://raw.githubusercontent.com/kazaxc/GAN-Aimbot/main/Classified.png',
			altText: 'Screenshot of the aimbot identifying targets',
			itemUrl: 'https://github.com/kazaxc/GAN-Aimbot',
			description:
				'GAN-Aimbot is a machine learning Aimbot for the First Person Shooter game CS:GO, making use of the YOLOv8 image classifier it is designed to be easily retrained on any First Person Shooter.',
			badgeList: ['Python', 'YOLOv8', 'Computer Vision', 'Machine Learning']
		},
		{
			title: 'Dotfiles',
			imageUrl: 'https://raw.githubusercontent.com/kazaxc/dotfiles/main/Pictures/croppedF.png',
			altText: 'Screenshot of desktop configured',
			itemUrl: 'https://github.com/kazaxc/dotfiles',
			description:
				'My dotfiles contain all of the configuration files needed for my Arch Linux setup, including instructions on how to install them. The setup makes use of DWM for window management on XOrg and config for fastfetch, cava and more.',
			badgeList: ['Linux', 'Arch', 'DWM', 'Configuration']
		},
		{
			title: 'Moldge Pack Balatro Mod',
			imageUrl:
				'https://raw.githubusercontent.com/kazaxc/MoldgePack/refs/heads/main/assets/20250311165754_1.jpg',
			altText: 'Screenshot of gameplay in the mod',
			itemUrl: 'https://github.com/kazaxc/MoldgePack',
			description:
				'A mod for the game Balatro made up of community submitted jokers implemented into the game by myself. Credits for the art found in the project README.',
			badgeList: ['Lua', 'Mod', 'Community']
		},
		{
			title: 'LPEngine',
			imageUrl: 'https://raw.githubusercontent.com/kazaxc/LPEngine/main/Cropped.png',
			altText: 'Screenshot of example render',
			itemUrl: 'https://github.com/kazaxc/LPEngine',
			description:
				'Testing game engine written in C++ with a Vulkan renderer, the purpose of the engine was to test the performance impact of GameObjects vs ECS and was created as a part of my 4th year project at university.',
			badgeList: ['C++', 'Vulkan', 'ECS']
		},
		{
			title: 'Unity PCG Tool',
			imageUrl: 'https://raw.githubusercontent.com/kazaxc/portfolio/main/static/Capture.PNG',
			altText: 'Screenshot of tool generating some meshes',
			itemUrl: 'https://github.com/kazaxc/UnitTest-PR',
			description:
				'Procedural content generation tool for the Unity game engine created to solve a set of unit tests as outlined in a university assignment.',
			badgeList: ['Unity', 'C#', 'PCG', 'Unit Testing']
		},
		{
			title: 'The Jungle',
			imageUrl: 'https://raw.githubusercontent.com/kazaxc/portfolio/main/static/anotherCrop.png',
			altText: 'Gameplay screenshot of a level in the game',
			itemUrl: '#',
			description:
				'2D platformer game created in the Unity game engine created in an exercise to create a fully fledged polished game from start to finish including art, sfx, music, etc.',
			badgeList: ['Unity', 'C#', '2D', 'Platformer']
		}
	];
</script>

<div class="divider text-3xl">My Projects</div>
<div class="grid grid-cols-3 gap-6 m-8 px-32 justify-items-center">
	{#each projects as project}
		<ProjectTemplate
			title={project.title}
			imageUrl={project.imageUrl}
			altText={project.altText}
			itemUrl={project.itemUrl}
			description={project.description}
			badgeList={project.badgeList}
		/>
	{/each}
</div>
