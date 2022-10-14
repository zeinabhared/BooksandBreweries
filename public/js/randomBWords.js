var randomBWords = ['ba','baa','babe','baby','baccalaureate','baccalaureates','bacchanalians','bach','bachelor','bachelorette','bachelorettes','bachelorhoods',
'bacillus','back','backboard','backbone','backbreaking','backcountries','backcountry','backcourt','backdoor','backdrop','backed','backfield',
'backfire','backgammon','background','backgrounder','backgrounders','backgrounding','backhand','backhanded','backing','backlash','backlight',
'backlog','backpack','backpedalling','backroom','backscatter','backscattered','backscattering','backscatterings','backside','backstabbings',
'backstage','backstitching','backstop','backstreet','backstretch','backstretches','backstroke','backtrack','backup','backward','backwardnesses',
'backwater','backyard','bacon','bacteremia','bacteria','bacterial','bactericidally','bactericide','bacteriocin','bacteriologic','bacteriological',
'bacteriologies','bacteriologist','bacteriologists','bacteriology','bacteriolyses','bacteriolysis','bacteriolytic','bacteriophage',
'bacteriophages','bacteriophagies','bacteriophagy','bacteriostases','bacteriostasis','bacteriostat','bacteriostatic','bacteriostats','bacterium',
'bacteriuria','bacterization','bacterizations','bad','badge','badger','badly','badminton','bag','baggage','bah','bail','bailey','bait','bake',
'baked','baker','bakery','bal','balance','balcony','bald','balderdash','bale','balefulnesses','balkanization','balkanizations','ball','ballerina',
'ballet','balletomane','balletomanias','ballhandlings','ballistic','ballistically','ballistics','balloon','ballot','ballpark','ballplayer',
'ballroom','balustrade','bam','bamboo','bamboozlement','bamboozlements','ban','banality','banana','bananas','band','banderillero','banderilleros',
'bandleader','bandstand','bandwagon','bandwidth','bang','bangkok','bank','bankabilities','bankable','bankcard','banker','banking','bankrupt',
'banner','bannister','banquet','bans','bantamweight','bantamweights','bap','baptism','baptistery','bar','barbarian','barbarianisms','barbaric',
'barbarism','barbarization','barbarizations','barbarous','barbarousness','barbarousnesses','barbecue','barber','barbershop','barbiturate','bard',
'bare','barefacedness','barefacednesses','barefoot','barely','bargain','barge','baritone','bark','barker','barley','barlow','barn','barney',
'barometer','barometrically','baron','baroness','baroque','baroreceptor','baroreceptors','barquentine','barrage','barred','barrel','barrelhouse',
'barren','barricade','barrier','barring','barrister','barrow','bartender','bas','basal','base','baseball','baseless','baseman','basement','bases',
'bash','bashfulnesses','basic','basically','basidiomycete','basidiomycetes','basidiomycetous','basidiospore','basidiospores','basifications',
'basil','basilica','basin','basis','basket','basketball','bass','bastard','bastardization','bastardizations','bat','batch','bath','bathroom',
'bathymetrical','bathymetrically','bathypelagic','bathyscaphe','bathysphere','baton','bats','battalion','batter','battery','batting','battle',
'battlefield','battlefront','battleground','battlegrounds','battleship','battlewagon','bay','be','beach','beachcomber','beachfront','beachhead',
'beacon','bead','beam','bean','bear','bearable','bearbaiting','beard','beardtongue','bearing','beast','beat','beaten','beating','beau',
'beauteousnesses','beautician','beautifications','beautiful','beautifulnesses','beauty','beaver','beaverboard','became','because','beck','become',
'becoming','bed','bedchamber','bedclothes','bedding','bedraggled','bedridden','bedrock','bedroom','bedside','bedtime','bee','beech','beef','been',
'beer','befitting','before','beforehand','beg','began','begin','beginner','beginning','begun','behalf','behave','behavior','behaviorism',
'behaviour','behemoth','behind','beholden','being','bejeweled','bel','belatednesses','belief','believabilities','believable','believe','bell',
'belladonna','belle','bellflower','bellicosities','belligerence','belligerences','belligerency','belligerent','belligerently','bellows',
'bellwether','belly','belong','belonging','belongingness','belongingnesses','belongings','beloved','below','belowground','belt','belvedere','ben',
'bench','benchmark','benchmarkings','benchwarmer','bend','beneath','benedict','benediction','benefaction','benefactor','benefactress',
'beneficence','beneficent','beneficial','beneficiaries','beneficiary','beneficiate','beneficiating','beneficiation','benefit','benevolence',
'benevolent','benightedness','benightednesses','benign','benjamin','benny','bent','benzaldehyde','benzaldehydes','benzanthracenes','benzimidazole',
'benzoapyrenes','benzodiazepine','benzodiazepines','benzophenone','benzophenones','bereaved','berg','berlin','berry','berth','beryllium','bes',
'beside','besides','bespectacled','best','bestiality','bestsellerdom','bet','beta','beth','better','betterment','between','betweenbrain',
'betweenbrains','betweennesses','betweentimes','betweenwhiles','beverage','beware','bewhiskered','bewilderingly','bewilderment','bewilderments',
'bewitchment','bey','beyond','bi','biannual','bias','biased','bib','biblical','bibliographer','bibliographers','bibliographical','bibliographies',
'bibliography','bibliolatry','bibliomania','bibliomaniacal','bibliophile','bibliophilisms','bibliotheca','bibliotherapies','bibliotherapy',
'bibulousnesses','bicarbonate','bicentenary','bicentennial','bicultural','biculturalisms','bicycle','bid','bidding','bidialectal','bidialectalism',
'bidialectalisms','bidirectional','bidirectionally','biennale','biennial','biennium','biflagellate','bifunctional','big','bigheartedness','bike',
'bilateral','bildungsroman','bildungsromans','bile','bilharziasis','bilingual','bill','billboard','billiard','billiards','billing','billingsgate',
'billion','billionaire','billionth','billy','bimetallic','bimetallism','bimillenary','bimolecular','bimonthly','bimorphemic','bin','binary',
'binational','bind','binder','binding','bingo','binocular','binocularities','binoculars','bio','bioacoustics','bioactive','bioactivity',
'bioavailability','biochemistries','biochemistry','biocoenosis','biocontrol','bioconversion','bioconversions','biodegradable','biodegradation',
'biodegradations','biodiversities','biodiversity','biodynamic','bioelectric','bioelectricity','bioenergetics','bioengineering','bioengineerings',
'bioethics','biofeedback','biogenetically','biogeochemical','biogeochemicals','biogeochemistry','biogeographers','biogeographical',
'biogeographies','biogeography','biographer','biographical','biographically','biography','biological','biology','bioluminescence','bioluminescent',
'biomarker','biomass','biomaterial','biomathematical','biomathematics','biomechanically','biomechanics','biomedicine','biometeorology',
'biometrics','biomimetics','biomolecule','biophysics','biopolymer','biopsy','bioreactor','bioregionalism','bioregionalisms','bioregionalist',
'bioregionalists','bioremediation','bioremediations','bioscience','biosphere','biostatistical','biostatistician','biostatistics','biostratigraphy',
'biosynthesis','biosystematics','biosystematist','biosystematists','biotech','biotechnologies','biotechnologist','biotechnology','biotelemetries',
'biotelemetry','bipartisan','bipartisanisms','bipartisanship','bipartisanships','bipolar','bipolarization','bipolarizations','bipropellant',
'biquadratic','birch','bird','birdwatching','birefringence','birefringences','birth','birthday','birthing','birthplace','birthright','bis',
'biscuit','bisexual','bishop','bit','bad-b-word','bite','biting','bitten','bitter','bitterbrush','bittersweet','bittersweetness','bituminization',
'bituminizations','bituminous','biuniquenesses','biweekly','biz','bizarre','blabbermouth','black','blackberry','blackbird','blackboard',
'blackguardisms','blackjack','blacklist','blackmail','blackout','blacksmith','blacksmithings','blackthorn','bladder','bladderwort','blade','blah',
'blame','blamed','blameless','blamelessnesses','blameworthiness','blameworthy','bland','blank','blanket','blanketflowers','blasphemous',
'blasphemousness','blasphemy','blast','blasted','blastocyst','blastomycosis','blastospore','blatant','blatherskite','blaxploitation',
'blaxploitations','blaze','bleacher','bleacherite','bleak','bleeding','blend','blepharoplast','blepharoplasts','blepharoplasty','blepharospasm',
'blepharospasms','bless','blessed','blessing','blew','blimpishnesses','blind','blindfold','blink','bliss','blissfulnesses','blistering','blitz',
'blitzkrieg','blizzard','bloated','bloc','block','blockade','blockage','blockbuster','blockbusting','blog','blond','blood','bloodcurdling',
'bloodguiltiness','bloodhound','bloodless','bloodlessnesses','bloodletting','bloodmobile','bloodshed','bloodstained','bloodstock','bloodstream',
'bloodsucker','bloodthirstily','bloodthirsty','bloody','bloom','blooming','blossom','blot','blow','blowfish','blown','blowout','blue','bluebird',
'bluebonnet','bluegrass','blueprint','blues','bluestocking','bluff','blunderbuss','blunt','blur','bo','boa','boar','board','boardinghouses',
'boardroom','boardsailing','boardwalk','boast','boastfulnesses','boat','boatbuilding','boathouse','bob','bobby','bod','bode','bodhisattva',
'bodily','body','bodybuilding','bodyguard','bodywork','bog','bogus','bohemia','bohemian','bohemianisms','boil','boiled','boiler','boilermaker',
'boilermakers','boilerplate','boilerplates','boiling','boisterous','boisterously','boisterousness','bold','boldface','bologna','bolometrically',
'bolshevizing','bolster','bolt','bomb','bombardier','bombardments','bombed','bomber','bombinations','bombproofing','bombshell','bonanza','bond',
'bondholder','bonding','bone','bonefishings','boneheadedness','boneless','boniface','bonnyclabber','bonus','bony','boo','book','bookbindery',
'bookbinding','bookbindings','bookcase','booking','bookkeeping','bookkeepings','booklet','bookmark','bookmobile','bookseller','booksellings',
'bookshelf','bookshop','bookstore','boom','boomerang','boomeranging','boomtown','boon','boondoggle','boondogglers','boondoggling','boost',
'booster','boosterism','boot','bootable','booth','bootlessness','bootlessnesses','bootstrap','bootstrapped','bop','borborygmus','border',
'borderland','borderline','bore','boredom','borehole','boring','boringnesses','born','borne','borosilicate','borough','borrow','borrowing','bos',
'boss','bot','botanical','botanist','both','bother','botheration','botherations','bothersome','bottle','bottlebrush','bottleneck','bottlenecked',
'bottom','bottomland','bottomless','bottomlessly','bottomlessness','botulinum','bougainvillaea','bougainvillaeas','bougainvillea','bougainvilleas',
'bought','bouillabaisse','bouillabaisses','boulder','boulevard','boulevardier','bouleversement','bouleversements','bounce','bouncing','bound',
'boundary','boundless','boundlessnesses','bounteousnesses','bountiful','bountifulnesses','bouquet','bourgeois','bourgeoisie','bourgeoisies',
'bourgeoisified','bourgeoisifies','bourgeoisify','bourgeoisifying','boustrophedon','boustrophedonic','boustrophedons','bout','boutique',
'boutonniere','boutonnieres','bow','bowdlerising','bowdlerization','bowdlerizations','bowdlerizers','bowdlerizing','bowel','bowl','bowler',
'bowling','bowstringing','box','boxer','boxing','boy','boycott','boyfriend','boyishnesses','boysenberry','bra','brace','bracelet','brachycephalic',
'brachycephalies','brachypterous','bracing','bracket','brackish','brackishnesses','brad','bradycardia','braggadocio','braillewriters','brain',
'brainchild','brainlessnesses','brainpower','brainstorm','brainstorming','brainstormings','brainteaser','brainwashing','brake','bran','branch',
'branchiopod','brand','brandy','brass','brasserie','braunschweiger','braunschweigers','brave','bravery','bray','breach','bread','breadbasket',
'breadth','breadwinner','break','breakage','breakaway','breakdown','breaker','breakeven','breakfast','breaking','breakneck','breakout',
'breakthrough','breakwater','breast','breastbone','breastfeed','breastplate','breaststroke','breaststrokers','breath','breathabilities',
'breathable','breathe','breathed','breather','breathing','breathless','breathlessness','breathtaking','breathtakingly','bred','breechblock',
'breechcloth','breechloader','breed','breeding','breeze','bremsstrahlung','bremsstrahlungs','brent','brethren','brew','brewery','bribery','brick',
'bricklayer','bricklayings','brickwork','bride','bridegroom','bridesmaid','bridge','bridgehead','brief','briefcase','briefing','brigade',
'brigadier','brigantine','bright','brighten','brightness','brightnesses','brilliance','brilliancies','brilliant','brilliantine','bring','brink',
'brinkmanship','brinksmanships','brisk','bristletail','bristletails','brittle','bro','broad','broadband','broadcast','broadcasters','broadcasting',
'broaden','broadsheet','broadside','brocade','broccoli','brochure','broke','broken','brokenhearted','broker','brokerage','bromocriptine',
'bromocriptines','bronchial','bronchiectases','bronchiectasis','bronchitis','bronchodilator','bronchodilators','bronchogenic','bronchoscope',
'bronchoscopies','bronchoscopist','bronchoscopists','bronchospasm','bronchospastic','broncobuster','brontosaurus','brontosauruses','bronze',
'brook','broomstick','brother','brotherhood','brotherlinesses','brotherly','brought','brow','brown','brownfield','brownie','brownstone','browse',
'browser','brr','brucellosis','brunette','brush','brushed','brusquenesses','brutal','brutality','brutalization','brutishnesses','bub','bubble',
'buccaneering','buck','bucket','buckeye','buckyballs','bud','budding','buddy','budget','buff','buffalo','buffalofishes','buffer','buffet','bug',
'build','builder','building','built','bulb','bulk','bulkhead','bulky','bull','bullbaiting','bulldozer','bullet','bulletin','bulletproof',
'bullfightings','bullish','bullishnesses','bullmastiff','bullock','bullpen','bullshit','bully','bum','bumbershoot','bump','bumper','bumptiousness',
'bumptiousnesses','bun','bunch','bundle','bungalow','bunk','bunker','bunny','bunt','buoyancy','buoyant','bur','burden','burdensome','bureau',
'bureaucracies','bureaucracy','bureaucrat','bureaucratese','bureaucratise','bureaucratising','bureaucratism','bureaucratize','bureaucratizing',
'bureaucrats','bureaux','burger','burgess','burglar','burglarious','burglariously','burglarized','burglarizes','burglarproof','burglary',
'burgomaster','burial','burke','burn','burning','burnt','burr','burst','burton','bury','bus','bush','business','businesslike','businessman',
'businessperson','businesspersons','businesswoman','businesswomen','bust','busy','but','butadiene','butcher','butler','butt','butter','butterball',
'butterfingers','butterfly','buttermilk','butternut','butterscotch','button','buttonhole','buttonhooking','buttress','butyraldehyde',
'butyrophenone','buy','buyback','buyer','buyout','buzz','buzzword','by','bye','byline','bypass','byproduct','bys','bystander','byte']