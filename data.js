const ND=[
{n:"Shailaputri",t:"Daughter of the Mountain",day:1,hue:"#f2b134",ride:"Bull (Nandi)",hold:"Trident and lotus",chakra:"Muladhara (root)",planet:"Moon",
story:"Reborn as Parvati, daughter of Himavan (Shaila), after Sati ended her life at Daksha's yagna. She is the first form, the foundation of all spiritual practice.",
mantra:"Om Devi Shailaputryai Namah",dhyana:"Vande vanchhita labhaya chandrardhakritashekharam, Vrisharudham shuladharam Shailaputrim yashasvinim.",offer:"Pure ghee"},
{n:"Brahmacharini",t:"The Ascetic",day:2,hue:"#ffffff",ride:"Walks barefoot",hold:"Rosary (japa mala) and water pot (kamandalu)",chakra:"Svadhisthana (sacral)",planet:"Mars",
story:"Parvati's years of austerity to win Shiva, first living on fruits, then leaves, then nothing at all. The name Aparna means the one who ate not even a leaf.",
mantra:"Om Devi Brahmacharinyai Namah",dhyana:"Dadhana kara padmabhyam akshamala kamandalu, Devi prasidatu mayi Brahmacharinyanuttama.",offer:"Sugar and rock candy"},
{n:"Chandraghanta",t:"Bearer of the Moon-Bell",day:3,hue:"#9fc5ff",ride:"Tiger or lion",hold:"Ten arms with weapons; a half-moon shaped like a bell on her forehead",chakra:"Manipura (solar plexus)",planet:"Venus",
story:"After her marriage to Shiva, Parvati took this fierce yet gentle form. Her bell-like moon is said to drive away evil spirits and fear.",
mantra:"Om Devi Chandraghantayai Namah",dhyana:"Pindaja pravararudha chandakopastrakairyuta, Prasadam tanute mahyam Chandraghanteti vishruta.",offer:"Milk and milk sweets"},
{n:"Kushmanda",t:"Creator of the Cosmos",day:4,hue:"#ff9a3c",ride:"Lion",hold:"Eight arms: kamandalu, bow, arrow, lotus, nectar pot, discus, mace, rosary",chakra:"Anahata (heart)",planet:"Sun",
story:"With a gentle smile she created the universe from darkness. She is said to reside in the core of the Sun and gives it its radiance.",
mantra:"Om Devi Kushmandayai Namah",dhyana:"Surasampurna kalasham rudhirapluta meva cha, Dadhana hastapadmabhyam Kushmanda shubhadastu me.",offer:"Malpua"},
{n:"Skandamata",t:"Mother of Skanda",day:5,hue:"#ffe066",ride:"Lion",hold:"Child Kartikeya (Skanda) on her lap, two lotuses",chakra:"Vishuddha (throat)",planet:"Mercury",
story:"Mother of Kartikeya, the commander of the gods who slew the demon Tarakasura. Also called Padmasana Devi as she sits on a lotus.",
mantra:"Om Devi Skandamatayai Namah",dhyana:"Simhasanagata nityam padmashritakaradvaya, Shubhadastu sada devi Skandamata yashasvini.",offer:"Bananas"},
{n:"Katyayani",t:"Warrior Goddess",day:6,hue:"#e85a5a",ride:"Lion",hold:"Sword and lotus; four arms",chakra:"Ajna (third eye)",planet:"Jupiter",
story:"Born as the daughter of Sage Katyayana from the combined fury of the gods to slay Mahishasura. Gopis of Vrindavan worshipped her to win Krishna.",
mantra:"Om Devi Katyayanyai Namah",dhyana:"Chandrahasojjvalakara shardulavara vahana, Katyayani shubham dadyad devi danavaghatini.",offer:"Honey"},
{n:"Kalaratri",t:"Dark Night, Destroyer of Fear",day:7,hue:"#7f6bff",ride:"Donkey (Gardabha)",hold:"Sword and iron hook; one hand blessing, one granting fearlessness",chakra:"Sahasrara (crown)",planet:"Saturn",
story:"The most fearsome form, with dishevelled hair and a necklace that flashes like lightning. She slew Shumbha, Nishumbha and Raktabija. Despite her look, she grants fearlessness; hence Shubhankari (the auspicious).",
mantra:"Om Devi Kalaratryai Namah",dhyana:"Karalavadanam ghoram muktakeshim chaturbhujam, Kalaratrim karalimcha divyam vidyutamala vibhushitam.",offer:"Jaggery"},
{n:"Mahagauri",t:"The Radiant White",day:8,hue:"#e8f0ff",ride:"White bull",hold:"Trident and damaru; calm, four-armed",chakra:"Svadhisthana / Sahasrara by tradition",planet:"Rahu",
story:"After years of penance Parvati's skin turned dark with dust. Shiva bathed her with Ganga water and she became brilliantly fair. Ashtami is Kanya Pujan day.",
mantra:"Om Devi Mahagauryai Namah",dhyana:"Shvete vrishe samarudha shvetambaradhara shuchih, Mahagauri shubham dadyan mahadeva pramodada.",offer:"Coconut"},
{n:"Siddhidatri",t:"Giver of Perfection",day:9,hue:"#ff7ac6",ride:"Lotus or lion",hold:"Mace, discus, conch and lotus",chakra:"Sahasrara (crown)",planet:"Ketu",
story:"Bestower of all eight siddhis (Anima, Mahima and others). Shiva's half-female form Ardhanarishvara arose through her grace.",
mantra:"Om Devi Siddhidatryai Namah",dhyana:"Siddha gandharva yakshadyairasurairamarairapi, Sevyamana sada bhuyat siddhida siddhidayini.",offer:"Sesame seeds"}];
const P=`Hinglaj|Balochistan, Pakistan|Brahmarandhra (crown)|Kottari|Bhimalochana
Shivaharkaray|Karachi, Pakistan|Eyes|Mahishasuramardini|Krodhish
Sugandha|Shikarpur, Bangladesh|Nose|Sunanda|Tryambaka
Amarnath|Pahalgam, Jammu and Kashmir|Throat|Mahamaya|Trisandhyeshwar
Jwalamukhi|Kangra, Himachal Pradesh|Tongue|Siddhida|Unmatta
Jalandhar|Punjab|Left breast|Tripurmalini|Bhishan
Vaidyanath|Deoghar, Jharkhand|Heart|Jai Durga|Vaidyanath
Guhyeshwari|Kathmandu, Nepal|Both knees|Mahamaya|Kapali
Manasa|Lake Manasarovar, Tibet|Right palm|Dakshayani|Amar
Viraja|Jajpur, Odisha|Navel|Viraja|Varaha
Gandaki|Muktinath, Nepal|Right cheek|Gandaki Chandi|Chakrapani
Bahula|Ketugram, West Bengal|Left arm|Bahula|Bhiruk
Ujjaini|Guskara, West Bengal|Right elbow|Mangal Chandika|Kapilambar
Tripura Sundari|Udaipur, Tripura|Right foot|Tripura Sundari|Tripuresh
Chhatal|Sitakunda, Bangladesh|Right arm|Bhavani|Chandrashekhar
Kalighat|Kolkata, West Bengal|Right toes|Kalika|Nakuleshwar
Kanyakumari|Tamil Nadu|Back|Shravani|Nimish
Kamakhya|Guwahati, Assam|Yoni|Kamakhya|Umananda
Kalmadhav|Amarkantak, Madhya Pradesh|Left buttock|Kali|Asitang
Kankalitala|Birbhum, West Bengal|Pelvis|Devgarbha|Ruru
Kireet|Murshidabad, West Bengal|Crown ornament|Vimala|Sanvarta
Kanchi|Kanchipuram, Tamil Nadu|Skeleton|Kamakshi|Ruru
Janasthan|Nashik, Maharashtra|Chin|Bhramari|Vikritaksha
Ratnavali|Khanakul, West Bengal|Right shoulder|Kumari|Ghanteshwar
Jayanti|Nartiang, Meghalaya|Left thigh|Jayanti|Kramadishwar
Sri Parvat|Ladakh|Right anklet|Sri Sundari|Sundarananda
Sri Shail|Joinpur, Bangladesh|Neck|Mahalakshmi|Sambaranand
Prabhas|Somnath, Gujarat|Stomach|Chandrabhaga|Vakratunda
Bhairavparvat|Ujjain, Madhya Pradesh|Upper lip|Avanti|Lambakarna
Jashoreshwari|Satkhira, Bangladesh|Palms and soles|Jashoreshwari|Chanda
Attahas|Labpur, West Bengal|Lower lip|Phullara|Vishweshwar
Nandipur|Sainthia, West Bengal|Necklace|Nandini|Nandikeshwar
Lanka|Trincomalee, Sri Lanka|Anklet|Indrakshi|Rakshasesvara
Yugadya|Khirgram, West Bengal|Right toe|Bhootdhatri|Kshirakanthaka
Nalhati|Birbhum, West Bengal|Throat tube|Kalika|Yogesh
Kurukshetra|Haryana|Ankle|Savitri|Sthanu
Manibandh|Pushkar, Rajasthan|Wrists|Gayatri|Sarvananda
Shrinkhala|Hooghly, West Bengal|Waist chain|Shrinkhala|Chandrashekhar
Mithila|Janakpur, Nepal|Left shoulder|Uma|Mahodar
Vakreshwar|Birbhum, West Bengal|Between eyebrows|Mahishmardini|Vakranath
Suchi|Suchindram, Tamil Nadu|Upper teeth|Narayani|Sanhar
Panchsagar|Unknown, tradition varies|Lower teeth|Varahi|Maharudra
Karnat|Kangra, Himachal Pradesh|Both ears|Jai Durga|Abhiru
Vrindavan|Uttar Pradesh|Hair|Uma|Bhootesh
Maihar|Satna, Madhya Pradesh|Necklace|Shivani|Chanda
Ambaji|Banaskantha, Gujarat|Heart|Ambaji|Batuk
Karveer|Kolhapur, Maharashtra|Three eyes|Mahalakshmi|Krodhish
Alopi|Prayagraj, Uttar Pradesh|Fingers|Lalita|Bhava
Ambika|Virat Nagar, Rajasthan|Toes|Ambika|Amriteshwar
Tara Tarini|Berhampur, Odisha|Breasts|Tara Tarini|Not specified
Sharada|Neelum Valley, Kashmir|Right hand|Sharada|Not specified`.split("\n").map(l=>{const a=l.split("|");return{n:a[0],loc:a[1],part:a[2],sh:a[3],bh:a[4]}});
