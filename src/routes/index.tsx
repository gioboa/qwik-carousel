import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

const media = {
	title: 'Qwik Workshop - Live Coding',
	rating: 100,
	banner: 'https://i.ytimg.com/vi/GHbNaDSWUX8/maxresdefault.jpg',
	description: 'Lorem ipsum',
};

export default component$(() => {
	return (
		<div class='carousel'>
			{[...new Array(10)]?.map(() => {
				const { title, banner, rating, description } = media;
				return (
					<div class='carousel__card'>
						<img src={banner} alt='img' class='carousel__card__poster' />
						<div class='carousel__card__info'>
							<div>{title}</div>
							<div>{`${rating}% 👍`}</div>
							<div class="carousel__card__info__detail">{description}</div>
						</div>
					</div>
				);
			})}
		</div>
	);
});

export const head: DocumentHead = {
	title: 'Qwik - Carousel',
	meta: [
		{
			name: 'description',
			content: 'Qwik site for Carousel',
		},
	],
};
