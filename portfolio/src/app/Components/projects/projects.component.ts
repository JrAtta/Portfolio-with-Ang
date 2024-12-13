import { Component } from '@angular/core';
import { Iproject } from '../../iproject';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Iproject[] = [
    {
      image: './assets/images/movie.png',
      projectName: 'simple movie app with api',
      projectDet:
        'Enjoy watching the best and latest war, comedy and science fiction movies in high quality up to 4K.',
      skills: [
        './assets/images/html.png',
        './assets/images/css.png',
        './assets/images/js.png',
      ],
      projectLink: 'https://legendary-travesseiro-49f48a.netlify.app/',
    },
    {
      image: './assets/images/yellowMoon.png',
      projectName: 'the yellow side of moon',
      projectDet:
      "Welcome to Yellow Side of the Moon, where we do some creative work!!! We do some art, we develop some apps.",
      skills: ['./assets/images/html.png', './assets/images/css.png'],
      projectLink: 'https://symphonious-starlight-4d3411.netlify.app/',
    },
    {
      image: './assets/images/AI.png',
      projectName: 'simple clone _ neura',
      projectDet:
        'Start Your AI Go Journey With Us with Advanced Machine Learning Techniques AI like Artifacia Sensitivo AI Artificial Intelligence ;  is a branch of computer science that focuses on the development of intelligent machines',
      skills: [
        './assets/images/html.png',
        './assets/images/css.png',
        './assets/images/Bootstrap.png',
      ],
      projectLink: 'https://lively-gnome-a7c2db.netlify.app/',
    },
    {
      image: './assets/images/ecomerce.png',
      projectName: 'full e-commerce',
      projectDet:
        "An amazing store that contains most of the things you might need in your normal day and includes more than one section such as clothes, electronics, children's toys, and others. It was built using the latest technologies used with Framework Angular.",
      skills: [
        './assets/images/html.png',
        './assets/images/sass.png',
        './assets/images/ts.png',
        './assets/images/Bootstrap.png',
        './assets/images/angular.png',
      ],
      projectLink: 'https://e-commercee-c48m.vercel.app/',
    },
    {
      image: './assets/images/audio.png',
      projectName: 'Responsive audiophile site ',
      projectDet:
        'bringing you the best audio gear, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products.',
      skills: ['./assets/images/html.png', './assets/images/css.png'],
      projectLink: 'https://cute-pavlova-2ee050.netlify.app/',
    },
    {
      image: './assets/images/galleria.png',
      projectName: 'awesome gallery for best paintings',
      projectDet:
        'A very wonderful gallery that reflects the beauty of design and simplicity and is also responsive to all devices, includes the best and most beautiful amazing paintings in history by the best painters.',
      skills: ['./assets/images/html.png', './assets/images/css.png'],
      projectLink: 'https://brilliant-semifreddo-5b4b0d.netlify.app/',
    },
  ];
}
