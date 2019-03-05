var quotes = [
    'William Goldman\’s original script title for Butch Cassidy and the Sundance Kid was The Sundance Kid and Butch Cassidy. The names were reversed when Paul Newman took on the role of Butch.',
    'Disney turned down the chance to make Back to the Future claiming the mother/son relationship was too risqué. ',
    'The idea for the poster for The Usual Suspects came before any script or story. ',
    'Paul Schrader wrote Taxi Driver in five days. It is rumoured he had a loaded gun by his desk for “inspiration and motivation”.',
    'Like Facebook, Star Wars was originally prefixed by the definite article \’The\’. Much cleaner without it. ',
    'In 1994, during one famous lunch at Pixar, filmmakers John Lasseter, Pete Docter and Joe Ranft came up with ideas that would eventually become A Bug\’s Life, Finding Nemo, Monster Inc. and Wall-E. We\’ll have what they\’re having.',
    'George Lucas\’ dog was named Indiana. ',
    'Paramount super producer Robert Towne was adamant he wanted Francis Ford Coppola to make The Godfather even though the director was uninterested in the project. Coppola acquiesced when he decided to make it a film about American capitalism and not “the mafia”. ',
    'Dan Akroyd\’s original script for Ghostbusters was set in a future where Ghostbusters were everyday figures of society like paramedics and firemen. ',
    'The US title for the exceptionally wonderful A Matter of Life and Death was Stairway to Heaven. The UK had no stairway. Denied.',
    'In the Stephen King novella for The Shawshank Redemption, Morgan Freeman\’s Red is described as a white Irishman. The script sees Red sarcastically quip, “Maybe it\’s cause I\’m Irish” as a nod to the change. ',
    'Among Patrick Bateman\’s neighbours in the novel of American Psycho is one Tom Cruise',
    'Stanley Kubrick would reportedly call Stephen King at 3am to ask him questions about The Shining. According to King, one famous exchange had the director ask the author, “Do you believe in God?”. When he replied in the affirmative Kubrick yelled “I knew it!” and slammed the phone down. ',
    'In the penultimate Ian Fleming 007 novel, You Only Live Twice, James Bond\’s parents are revealed to be Scottish and Swiss. His formative years were spent in Germany and France. ',
    'Robert Ludlum, the creator of the Jason Bourne series, died while the first Bourne film was in post-production. ',
    'Francis Ford Coppola would read passages of Heart of Darkness to Marlon Brando on the fractious set of Apocalypse Now after learning the actor had never read the source material.',
    'Author Peter Benchley plays the role of a TV reporter in Jaws. Benchley was reportedly thrown off set after continually arguing with Spielberg about the film\’s ending. ',
    'Fight Club and Choke author Chuck Palahnuik can be glimpsed ever so briefly in the final scene of the latter. He\’s sitting next to Sam Rockwell on the plane. ',
    'Novelist and screenwriter Nick Hornby is brother-in-law to novelist and screenwriter Robert Harris. ',
    'The first notable film lensed by legendary cinematographer Roger Deakins was the 1984 adaptation of George Orwell\’s 1984.',
    'Courtney Love insists that the role of the heroin dealer, Lance, in Pulp Fiction was offered to Kurt Cobain. Tarantino has steadfastly refuted this claim, saying he never even met the late Nirvana singer.',
    'Ronald Reagan was originally announced as the lead for Casablanca. The proclamation turned out to simply be a ruse to keep the actor\’s name in the press. ',
    'While everyone knows Viggo Mortensen replaced Stuart Townsend at the last minute for Aragorn, the beardy ranger had no intention of joining Jackson and co until his son begged him to do it. Good son. ',
    'There\’s a 20 year age gap between Sam Neill and Laura Dern in Jurassic Park, with Laura aged only 26 during filming.',
    'Meanwhile, only 12 years separates father/son duo Sean Connery and Harrison Ford in the Indiana Jones franchise.',
    'The many parts turned down by Sean Connery include roles in The Matrix, The Lord of the Rings, Jurassic Park, Indy IV and Blade Runner. ',
    'Ripley\’s daughter in the Special Edition of Aliens is played by Sigourney Weaver\’s mum.',
    'Bueller? Bueller? Bueller? Cruise? Cusack? Carrey? Depp? All were considered for the part of the hooky playing teen. ',
    'James Woods fired his agent upon learning – after the movie was shot – that Quentin Tarantino wanted him for a part in Reservoir Dogs. ',
    'Bill Murray as Batman? Almost. Until Tim Burton came on board Murray was top of the list. Perhaps when the inevitable re-reboot transpires Bill will get another shot.',
    'The bridge blown up by Eli Wallach and Clint Eastwood in The Good, The Bad and The Ugly was prematurely detonated by a Spanish Army Captain. Upon learning of his mistake the Captain ordered his troops to rebuild the bridge, only for it to suffer another explosion once complete.',
    'Ever the bastard, David Fincher asked a stuntman to fall down the stairs 12 times in Fight Club for the fight between Norton and Pitt. He used the first take. ',
    'Speaking of stunts, Alan Rickman was dropped a second early to get his true reaction to falling from the Nakatomi Plaza in Die Hard. ',
    'James Caan improvised the, now immortal, phrase “Bada-Bing” on the set of The Godfather.',
    'Christian Bale based elements of his performance as Patrick Bateman on Tom Cruise after seeing an interview with the diminutive star. According to director Mary Harron, Bale said he saw “this very intense friendliness with nothing behind the eyes”. ',
    'Orson Welles directed much of Citizen Kane from a wheelchair, after injuring himself on set. ',
    'Shooting for No Country For Old Men was interrupted for a day due to a smoke cloud from the set of There Will Be Blood, which was also filming in the area. ',
    'When filming Chinatown Jack Nicholson was dating Anjelica Huston, the daughter of his screen nemesis John Huston. She visited the set on the day that her father\’s character asked Nicolson\’s Jake Gittes, “Did you sleep with my daughter?”. Awkward. ',
    'The sirens heard in the casino scene in Swingers were police on their way to stop the film makers who were shooting without a permit. ',
    'Drive director Nicolas Winding Refn called Irreversible director Gasper Noe midshoot for advice on how to successfully shoot a \’head smashing\’ scene.',
    'Executive producer of Toy Story and Chief Pixar shareholder Steve Jobs picked Bob Dylan as his first choice to write and perform the soundtrack to the film over Randy Newman. ',
    'Play It, Sam? Dooley Wilson, Sam in Casablanca, was a professional drummer who couldn\’t play the piano. He simply mimed along, copying an offscreen pianist.',
    'Despite Courtney\’s (unsurprisingly) batshit claims (see #72) Kurt Cobain did thank Quentin Tarantino in the liner notes to In Utero, allegedly due to the musician\’s love for Reservoir Dogs. QT returned the favour in the Pulp Fiction soundtrack notes by thanking Nirvana. Sadly, the timing of the release meant the thanks were followed by \’RIP Kurt\’. ',
    'In order to credibly portray a rock band, the members of Stillwater in Almost Famous rehearsed for four hours a night, five nights a week, for six weeks.',
    'Before Stanley Kubrick came on-board for A Clockwork Orange writer Anthony Burgess considered selling the movie rights to Mick Jagger with the intention of Jagger playing Alex and the rest of the Stones playing the other Droogs. Keef with eyeliner? Don\’t be silly.',
    'Pulp members Jarvis Cocker and Steve Mackey and Radiohead\’s Jonny Greenwood and Phil Selway were four of The Weird Sisters in Harry Potter and the Goblet of Fire. Jason Buckle (All Seeing I) and Steven Claydon (Add n to (x)) completed the line up.',
    'Franz Ferdinand were the original choice to play the band at the Hogwarts Yule Ball.',
    'The lights over the facehugger eggs in Alien were provided by Roger Daltrey and The Who. The band were rehearsing the laser show next door to Ridley Scott\’s set. ',
    'Enya was James Cameron\’s first choice to compose the music for Titanic. ',
    'The name of the band isn\’t mentioned once in The Beatles\’ first feature, A Hard Day\’s Night.',
    'Real life pornstar Asia Carrera plays the flatmate of Tara Reid in Logjammin\’, the film within the film in The Big Lebowski. We\’re still unsure if she gets her cable fixed. ',
    'The arty charcoal pic of Kate Winslet\’s boobs in Titanic? Drawn by one James Cameron. ',
    'Marla Singer\’s line of “I haven\’t been fucked like that since grade school” in Fight Club was an alternative to the line “I want to have your abortion”. Head of Fox 2000, Laura Ziskin, said David Fincher could have any line but the original. Hating the new line even more, she still stood by her promise. ',
    'Alred Hitchcock\’s Psycho was the first American film to show a toilet flushing.',
    'While Casino clocks up a breathtaking 398 uses of the word \’fuck\’ – and Nil By Mouth and Summer of Sam chuck over 400 F-bombs – a 2005 documentary takes the top spot. The name of the documentary? Fuck. ',
    'South Park: Bigger Longer and Uncut only uses the f-word 199 times. Fuckers. ',
    'Dirk Diggler\’s penis in Boogie Nights measured 13 inches, half an inch more than its inspiration, John Holmes. Michael Fassbender\’s wang has yet to be measured. Except, presumably, by Michael Fassbender. ',
    'The childish snickering during The Usual Suspects iconic line-up was genuine, caused by Benicio Del Toro\’s persistent flatulence. ',
    'Showgirls still holds the record for most Razzie (anti-Oscars) nominations with 13. Paul Verhoeven was the first director to collect the award for Worst Picture in person. ',
    'Years before Hit-Girl caused Daily Mail readers heads to explode with the use of the C-word, its first outing in Hollywood was in Carnal Knowledge. Jack Nicolson\’s character Jonathan utters the impressively eloquent line, “Answer me, you ball-busting, castrating, son of a cunt bitch!”. The actor would later call Nurse Ratched, “something of a cunt” in One Flew Over The Cuckoo\’s Nest.',
    'The Dark Knight made more money in its first six days in the US than Batman Begins made in its entire domestic run. ',
    'Worldwide ticket sales for the Saw franchise put it at just shy of a billion dollars, making it the highest earning horror franchise globally. ',
    'Adjusted for inflation, all of the 12(!) Friday the 13th movies made more than the Saw series domestically, making Jason Voorhees the North American blood and guts box office champ. ',
    'Within 3 days of release The Hunger Games has become the highest grossing film for production company Lionsgate. ',
    'Despite pulling in over $240m My Big Fat Greek Wedding never once topped the US box office chart. ',
    'While Titanic holds the record for consecutive weeks at the top spot (15), E.T. beats it by one in total weeks at Number One.',
    'In 1982, Spileberg\’s kids classic stayed in the US top ten for ten months. ',
    'Often derided as a mega-flop, Waterworld actually took home nearly $90m more in worldwide box office than its estimated budget. Factor in TV sales, merchandise and home video and Kevin Costner\’s \’Kevin\’s Gate\’ ended up floating quite nicely.',
    'The Postman, Costner\’s second jaunt to a post-apocalyptic world, holds the 8th spot on the biggest flops losing $62m. ',
    'For all the talk of John Carter\’s $200m write-off, the worldwide box office is slowly catching up with the budget. Disney can\’t say the same for 2011\’s Mars Needs Moms which ended with a gulf of $112m between costs and ticket sales. Note to Disney: keep away from the red planet.',
    'When Mark Zuckerberg posts his art essay question on Facebook during The Social Network his alias can be seen as one Tyler Durden.',
    'Michael Smiley aka Tyres from Spaced can be seen as one of the zombies outside The Winchester in Shaun of the Dead in full Tyres get-up. ',
    'An excerpt from Donald Kaufman\’s script for The Three can be found in the end credits to Adaptation. ',
    'Steven Spielberg pops up for a cameo in Vanilla Sky wearing a Pre-Crime baseball cap. ',
    'While Cameron Crowe returns the favour in Minority Report wearing a newspaper. Or hiding behind one. Delete where applicable.',
    'After his character was shot in the foot by Joe Pesci in Goodfellas, Michael Imperioli\’s Christopher got fictional retribution by shooting a baker in the foot in The Sopranos. His kiss-off line? “It happens”.',
    'Porn star Ron Jeremy can clearly be seen watching the events come to a climax (sorry) in the finale to Ghostbusters.',
    'And the voice of Zuul is director Ivan Reitman.',
    'The real Frank Abagnale Jr. appears in Catch Me If You Can as the French policeman who arrests Leo. ',
    'The Alien series has a continuing obsession with alphabetising their androids chronologically. Ash, Bishop, Call. Could Michael Fassbender\’s David be an android in the upcoming Prometheus? SPOILER ALERT Yes. Although as it\’s a prequel it should really be Zeus or Zola or Zebedee.',
    'If you\’re ever looking to authentically recreate the \’assassin in love with a 12 year old\’ look, the correct type of plant featured in Luc Besson\’s gloriously wonderful Leon is an aglaonema. ',
    'The cheque The Dude fills out at Ralph\’s in The Big Lebowski is dated September 11th 1991. On the supermarket TV George Bush Sr. calls out Saddam Hussein over the invasion of Kuwait.',
    'Drive director Nicolas Winding Refn failed his driving test eight times. ',
    'The cigarette smoked by Sigourney Weaver in Avatar is completely CGI. ',
    'The names of the taxi driver and the policeman in everybody\’s favourite Yuletide outing, It\’s A Wonderful Life, are Bert and Ernie. The writers working on Sesame Street at the time claim it\’s merely a coincidence. ',
    'The iconic body and hand in the poster for American Beauty belong to actress/model Chloe Hunter, not Mena Suvari. ',
    'The main characters initials in The Prestige spell ABRA (as in Abracadabra). The main character\’s first initials in Inception spell DREAMS. ',
    'Christoph Waltz, the man who won an Oscar for playing the Jew Hunter in Inglorious Basterds, has a son who is a rabbi. ',
    'For his scene in Ferris Bueller\’s Day Off Charlie Sheen stayed awake for 48 hours to give the desired \’wasted\’ look. To produce the look for his actual life Charlie Sheen hasn\’t slept in 14 years. ',
    'The poop in Trainspotting was made from chocolate. Yummy.',
    'A different denouement for Die Hard with a Vengeance saw McClane turning the tables, so to speak, on Simon Gruber giving him a series of riddles to solve. The face off eventually ended with Gruber blowing himself away with a rocket launcher after the New York cop tricks him into thinking it\’s pointed the wrong way. Daft.',
    'Those who own the DVD of Dodgeball will be aware that the happy-go-lucky finale full of lesbians and treasure may well have ended on more of a bleak note, simply cutting as Ben Stiller\’s White Goodman connects a ball right in Vince Vaughn\’s oversized face. ',
    'The final cut of Terminator 2: Judgement Day ends with a make-your-own-mind-up soliloquy about fate and the future. It could have ended with Sarah Connor as an old lady sitting in a futuristic LA park showing us that everything was hunky dory. Hasta la vista nuance.',
    'Jim \’King of the World\’ Cameron also had a second ending for Titanic in which Bill Paxton and the old lady face off over the million dollar necklace. If you thought the original ending was schmaltzy check out the \’life is priceless\’ alternative. ',
    'Fed up of killing other people Rambo grabs a gun aimed at him and pulls the trigger thus killing himself and ruling out a bajillion sequels. ',
    'After 90 minutes of knob jokes, arguments about the untimely demise of construction workers on the Death Star and one act of necrophilia, Kevin Smith\’s Clerks ends with Dante simply clocking off his shift. However the original ending saw him meet his maker at the hands of an armed gunman. He wasn\’t even supposed to have been there. ',
    'If you made it to the end of I Am Legend you\’ll have been treated to Will Smith going kablooey (along with the point of Matheson\’s novel). In a surprising reversal of the usual \’let the hero survive\’ approach, an alt scene saw Neville survive.',
    'Ripley (or at least her clone) finally makes it back to Earth in a deleted scene for Alien: Resurrection. ',
    'Those who correctly state that Infernal Affairs is better than its remake, The Departed, often state the need for closure as one reason for its inferiority. It\’s a surprise to learn then that one \’happier\’ ending saw the Hong Kong thriller lose its open ending as Andy Lau\’s mole gets his comeuppance with arrest, negating the superb trilogy closer in which his guilt sent him over the edge. ',
    'An original ending for the classic serial killer film Seven saw Detective Somerset (Morgan Freeman) shooting John Doe (Kevin Spacey). This was followed with the cringeworthy kiss off line, “I\’m retiring”. In a move that may well re-establish your faith in a God the scene was storyboarded but never filmed.'
]

function quote() {
    var rand = Math.floor(Math.random()*101)-1;
    document.getElementById('quoteDisplay').innerHTML = quotes[rand];
}