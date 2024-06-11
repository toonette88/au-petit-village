import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = [
    {
      id:1,
      name :"Astérix",
      photo: "../assets/asterix.jpg",
      descritption: "Et voici une figurine d'Astérix le Gaulois aux dimensions grandissimes : 30 cm de hauteur.Retrouvez ici Astérix, d'après l'œuvre d'Uderzo et de Goscinny, comme vous ne l'avez jamais vu, et oui, ici, il paraît plus grand qu'Obélix, qui lui, on le sait, est tombé dans la potion magique lorsqu'il était enfant, c'est pour dire ! Figurine fabriquée en vinyle.Retrouvez également sur Collector BD, Idéfix en format XXL, soit 30 cm de hauteur.",
      hauteur: "30cm",
      prix: "40"
    },
    {
      id:2,
      name:"Obélix",
      photo:"../assets/obelix.jpg",
      description:"Retrouvez ici Obélix, de la célèbre série Astérix et Obélix par Uderzo et Goscinny.Sacré Obélix, que transporte-t-il dans son tonneau ? On espère que ce n'est pas de la potion magique, il est déjà tombé dans le chaudron de cette dernière lorsqu'il était petit ; si c'est le cas, les romains vont passer un sale quart d'heure !",
      hauteur: "19cm",
      prix:"100"
    },
    {
      id:3,
      name:"Panoramix",
      photo:"../assets/panoramix.jpg",
      descritption:"Retrouvez Panoramix, le fameux druide inventeur de la potion magique, sans qui le petit village Gaulois serait certainement aux mains des Romains depuis quelque temps déjà. Vous l'aurez compris, Panoramix est un des personnages central de la saga à succès réunissant Astérix et Obélix. Fidèle aux dessins d'Albert Uderzo, Éric Delaval de Fariboles Production a sculpté cette magnifique figurine en résine de Panoramix qui a été peinte à la main en France dans leur atelier à Darnétal près de Rouen.Cette figurine a été réalisée en 2021 et mesure 20 cm. Les figurines Fariboles sont fabriquées artisanalement dans un atelier à Darnétal, près de Rouen (France).Tirage limité et numéroté à 350 exemplaires.",
      hauteur: "20cm",
      prix:" 350"
    },
    {
      id:4,
      name:"Falbala",
      photo:"../assets/falbala.jpg",
      descritpion:"Issue de l'univers des aventures d'Astérix, par Uderzo et Goscinny, cette magnifique figurine Falbala par Fariboles Productions a été sculptée par Eric Delaval.Personnage féminin emblématique de la série Astérix, elle est mariée à Tragicomix mais surtout elle fait chavirer bien des cœurs et notamment celui de notre géant Obélix, qui l'aime en secret.D'un tirage de 450 exemplaires, elle est en résine et mesure 19 cm.Elle est accompagnée de son certificat d'authenticité numéroté.",
      hauteur:"19cm",
      prix:"450"
    },
    {
      id:5,
      name:"Jules Cesar",
      photo:"../assets/jules-cesar.jpg",
      description:"Grand homme de l’Histoire, tout le monde connaît son nom et son histoire. Mais lorsqu’il apparut pour la première fois dans l’album d’Astérix le Gaulois, c’est un personnage bien plus burlesque que les lecteurs découvrent. Facilement irritable, il vit très mal la menace que représente le fameux village gaulois où vivent Astérix et Obélix. A chaque album, l’empereur (ou ses subalternes) trouve et met en place de nouvelles stratégies afin de conquérir ce dernier village gaulois.Il fut le grand ennemi d’Astérix dès la première aventure de ce dernier. Le graphisme du personnage évolue dans ce premier opus. Ainsi, César possède des caractéristiques physiques bien différentes entre la première et la dernière page de l’album. Mais aujourd’hui, on a tous en tête son visage long et fin, son grand nez cassé, ses cheveux gris et son front dégarni. Cet antagoniste orgueilleux et charismatique est maintenant aussi connu que le héros de cette grande bande dessinée.Redécouvrez le personnage de Jules César grâce à cette sublime figurine de chez Fariboles. Grâce à sa posture, on reconnait son air supérieur et l’orgueil d’un homme de pouvoir. Les détails de sa toge sont impeccables et la peinture magnifique. Sculptée par Eric Delaval, c’est une superbe figurine en résine de 23 centimètres de haut.Tirage limité à 350 exemplaires numérotés.",
      hauteur: "23cm",
      prix: "300"
    },
    {
      id:6,
      name:"Abraracourcix",
      photo:"../assets/abraracourcix.jpg",
      description:"Respecté par ses hommes et craint par ses adversaires, telle est la posture tant convoitée du mythique chef du village Gaulois, Abraracourcix !Être chef, voilà un grand mot, surtout quand il s’agit de présider aux destinées du seul village gaulois capable de résister encore et toujours aux légions romaines ! Les figurines Fariboles sont fabriquées artisanalement dans un atelier à Darnétal, près de Rouen (France). Tirage : 350 exemplaires",
      hauteur: "17cm",
      prix:"250",
    }
  ]
  constructor() { }
}
