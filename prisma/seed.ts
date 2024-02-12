const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const movies = [
	{
		"id": 1,
		"title": "102 Dalmatians",
		"description": "102 Dalmatians is a 2000 American crime comedy film directed by Kevin Lima and produced by Edward S. Feldman and Walt Disney Pictures. The sequel to the 1996 film 101 Dalmatians, a live-action remake of the 1961 Disney animated film of the same name, it stars Glenn Close reprising her role as Cruella de Vil as she attempts to steal puppies for her \\\"grandest\\\" fur coat yet. Glenn Close and Tim McInnerny were the only two actors from the 1996 film to return for the sequel. The film received generally negative reviews from critics and was unable to achieve the box office success of its predecessor, although the film was nominated for the Academy Award for Best Costume Design.",
		"image": "https://upload.wikimedia.org/wikipedia/en/f/fe/102_dalmatians_poster.jpg"
	},
	{
		"id": 2,
		"title": "3 Strikes",
		"description": "3 Strikes is a 2000 American comedy film written and directed by DJ Pooh, and starring Brian Hooks, N'Bushe Wright, Faizon Love and David Alan Grier. Despite some commercial success, it was negatively received by critics. The title refers to California's habitual offender law, whereby three convictions confer an automatic life sentence.",
		"image": "https://upload.wikimedia.org/wikipedia/en/d/db/3_Strikes_Poster.jpg"
	},
	{
		"id": 3,
		"title": "The 6th Day",
		"description": "The 6th Day is a 2000 American science fiction action film directed by Roger Spottiswoode and starring Arnold Schwarzenegger, Tony Goldwyn, Michael Rapaport, and Robert Duvall. In the film, a family man of the future is illegally cloned by accident as part of a vast conspiracy involving a shady billionaire businessman, and is thrust into a struggle to clear his name and protect his family from the conspirators who seek to keep the cloning a secret. The title refers to the Judeo-Christian Genesis creation narrative, where God created mankind on the sixth day. The film was Terry Crews' acting debut.",
		"image": "https://upload.wikimedia.org/wikipedia/en/a/a0/The_6th_Day_%282000_film%29.jpg"
	},
	{
		"id": 4,
		"title": "Adventures in Wild California",
		"description": "Adventures in Wild California is a documentary film showcasing the scenery and extreme sports found in California. It is narrated by Jimmy Smits and was released to IMAX theaters in 2000. The film is directed by Greg MacGillivray and features songs by musician Lindsey Buckingham.",
		"image": "https://upload.wikimedia.org/wikipedia/en/e/e9/Adventuresinwildcalifornia.jpg"
	},
	{
		"id": 5,
		"title": "American Psycho",
		"description": "American Psycho is a 2000 satirical horror film directed by Mary Harron, who co-wrote the screenplay with Guinevere Turner. Based on the 1991 novel by Bret Easton Ellis, it stars Christian Bale as Patrick Bateman, a New York City investment banker who leads a double life as a serial killer. Willem Dafoe, Jared Leto, Josh Lucas, Chloë Sevigny, Samantha Mathis, Cara Seymour, Justin Theroux, and Reese Witherspoon appear in supporting roles. The film blends horror and black comedy to satirize 1980s yuppie culture and consumerism, exemplified by Bateman and supporting cast.",
		"image": "https://upload.wikimedia.org/wikipedia/en/0/0c/American_Psycho.png"
	},
	{
		"id": 6,
		"title": "Animal Factory",
		"description": "Animal Factory is a 2000 neo-noir film directed by Steve Buscemi and starring Willem Dafoe, Edward Furlong, Danny Trejo, John Heard, Mickey Rourke, Tom Arnold, Seymour Cassel, Shell Galloway and Mark Boone, Jr. Set in San Quentin, the film is about life in prison. It is based on the novel of the same name by Eddie Bunker who plays the part of Buzzard in the film.",
		"image": "https://upload.wikimedia.org/wikipedia/en/8/88/AnimalFactory.jpg"
	},
	{
		"id": 7,
		"title": "The Art of War",
		"description": "The Art of War is a 2000 action spy film directed by Christian Duguay and starring Wesley Snipes, Michael Biehn, Anne Archer and Donald Sutherland. It is the first installment in The Art of War film series. The film's title refers to the ancient Chinese text of the same name by war strategist Sun Tzu. The film was followed by two direct-to-video sequels, The Art of War II: Betrayal and The Art of War III: Retribution. The latter did not feature Snipes.",
		"image": "https://upload.wikimedia.org/wikipedia/en/a/a6/Art_of_war_poster.jpg"
	},
	{
		"id": 8,
		"title": "Brother",
		"description": "Brother  is a 2000 gangster film starring, written, directed, and edited by Takeshi Kitano. The film premiered on September 7, 2000 at the Venice Film Festival. The plot centers on a mature yakuza gangster who has to flee to Los Angeles, where he unites forces with his little brother and his brother’s gang.",
		"image": "https://upload.wikimedia.org/wikipedia/en/a/a1/BrotherKitano.jpg"
	},
	{
		"id": 9,
		"title": "Digimon: The Movie",
		"description": "Digimon: The Movie is a 2000 American-Japanese animated film adaptation, produced by Saban Entertainment and distributed by 20th Century Fox as part of the Digimon franchise. The film used footage from the short films Digimon Adventure (1999), Digimon Adventure: Our War Game! (2000), and Digimon Adventure 02: Digimon Hurricane Landing!! / Transcendent Evolution!! The Golden Digimentals (2000), while the events of the film take place during the first two seasons of Digimon: Digital Monsters.",
		"image": "https://upload.wikimedia.org/wikipedia/en/3/30/Digimonthemovie.jpg"
	},
	{
		"id": 10,
		"title": "Dungeons & Dragons",
		"description": "Dungeons & Dragons is a 2000 American fantasy adventure film directed by Courtney Solomon and written by Carroll Cartwright and Topper Lilien. It is based on the role-playing game of the same name. The film follows an empress who wishes to get hold of a mythical rod that will help her fight an evil wizard, and enlists two thieves for help. Parts of the film were made on location at Sedlec Ossuary.",
		"image": "https://upload.wikimedia.org/wikipedia/en/2/26/Dungeons_and_dragons_poster.jpg"
	},
	{
		"id": 11,
		"title": "The Flintstones in Viva Rock Vegas",
		"description": "The Flintstones in Viva Rock Vegas is a 2000 American romantic comedy film directed by Brian Levant, written by Jim Cash, Harry Elfont, Deborah Kaplan, and Jack Epps, Jr., and is the prequel to Levant's The Flintstones (1994), based on the 1960–66 animated television series of the same name. It is set before the events of both the series and the first film, showing how Fred and Barney meet Wilma and Betty. The title is a play on the Elvis Presley song, Viva Las Vegas, also used as the title of an MGM musical film.",
		"image": "https://upload.wikimedia.org/wikipedia/en/d/d1/Flintstonesmov.jpg"
	},
	{
		"id": 12,
		"title": "How the Grinch Stole Christmas",
		"description": "How the Grinch Stole Christmas is a 2000 American Christmas fantasy comedy film directed by Ron Howard, who also produced with Brian Grazer, from a screenplay written by Jeffrey Price and Peter S. Seaman. The film was based on Dr. Seuss's 1957 children's book of the same name, as the first Dr. Seuss book to be adapted into a full-length feature film and the first of only two live-action Dr. Seuss films, followed by The Cat in the Hat in 2003. This was also the second adaptation of the book, after the 1966 animated TV special of the same name.",
		"image": "https://upload.wikimedia.org/wikipedia/en/e/e7/How_the_Grinch_Stole_Christmas_film_poster.jpg"
	},
	{
		"id": 13,
		"title": "Price of Glory",
		"description": "Price of Glory is a 2000 American sports drama film written by Phil Berger, directed by Carlos Avila and starring Jimmy Smits. The movie was nominated for several ALMA Awards in 2001. The film was shot in Huntington Park, California, Los Angeles, California, and Nogales, Arizona. The film was released by New Line Cinema on March 31, 2000.",
		"image": "https://upload.wikimedia.org/wikipedia/en/4/41/Price_of_glory.jpg"
	},
	{
		"id": 14,
		"title": "Scary Movie",
		"description": "Scary Movie is a 2000 American slasher parody film directed by Keenen Ivory Wayans and written by Marlon and Shawn Wayans, alongside Buddy Johnson, Phil Beauman, Jason Friedberg and Aaron Seltzer. Starring Jon Abrahams, Carmen Electra, Shannon Elizabeth, Anna Faris, Kurt Fuller, Regina Hall, Lochlyn Munro, Cheri Oteri, and Dave Sheridan, it follows a group of teenagers who accidentally hit a man with their car, dump his body in a lake and never talk about it again. A year later, someone wearing a Ghostface mask and robe kills them one by one.",
		"image": "https://upload.wikimedia.org/wikipedia/en/2/29/Movie_poster_for_%22Scary_Movie%22.jpg"
	},
	{
		"id": 15,
		"title": "The Watcher",
		"description": "The Watcher is a 2000 American thriller film directed by Joe Charbanic and starring James Spader, Marisa Tomei, and Keanu Reeves. Set in Chicago, the film is about a retired FBI agent who is stalked and taunted by a serial killer.",
		"image": "https://upload.wikimedia.org/wikipedia/en/1/14/The_Watcher_theatrical_poster.jpg"
	},
	{
		"id": 16,
		"title": "X-Men",
		"description": "X-Men is a 2000 American superhero film directed by Bryan Singer from a screenplay by David Hayter and a story by Singer and Tom DeSanto, based on the Marvel Comics superhero team of the same name created by Stan Lee and Jack Kirby. The film features an ensemble cast consisting of Patrick Stewart, Hugh Jackman, Ian McKellen, Halle Berry, Famke Janssen, James Marsden, Bruce Davison, Rebecca Romijn, Ray Park, Tyler Mane, and Anna Paquin. The film depicts a world where an unknown proportion of people are mutants, whose possession of superhuman powers makes them distrusted by normal humans. It focuses on mutants Wolverine and Rogue as they are brought into a conflict between two groups that have radically different approaches to bringing about the acceptance of mutant-kind: Charles Xavier's X-Men, and the Brotherhood of Mutants, led by Magneto.",
		"image": "https://upload.wikimedia.org/wikipedia/en/8/81/X-MenfilmPoster.jpg"
	}
];
// seed.js (ou seed.ts)
async function seed() {
    movies.map(async (movie)=>{
        await prisma.movie.create({
            data: movie,
          });
    })    
  }
  
  seed()
    .catch((error) => {
      throw error;
    })
    .finally(async () => {
      await prisma.$disconnect();
    });