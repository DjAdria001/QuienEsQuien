// =============================================
//  DATOS — Personajes de Chainsaw Man
// =============================================
const CSM_CHARACTERS = [
  { name: "Denji",         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2lGfyBkiEflBkIlYF5DDyj3uxYKTDk-mLNw&s" },
  { name: "Makima",        img: "https://sm.ign.com/ign_latam/screenshot/default/makima_h914.jpg" },
  { name: "Power",         img: "https://preview.redd.it/powers-abilities-v0-7rnkfp57r31e1.jpeg?width=640&crop=smart&auto=webp&s=0eb78a54d53f6e687e8084203e0330e621646065" },
  { name: "Aki",           img: "https://a.storyblok.com/f/178900/1504x846/31be3cacf7/b5c916e5cf3e6eb715edd2370d5f013e1667532273_main.jpg/m/filters:quality(95)format(webp)" },
  { name: "Himeno",        img: "https://comicbook.com/wp-content/uploads/sites/4/2022/11/f57d890c-c14b-42e1-adff-ecaf80988c3c.jpg?w=1200" },
  { name: "Kishibe",       img: "https://static.wikia.nocookie.net/chainsaw-man/images/3/33/Kishibe_passes_Denji_and_Power_with_perfect_score.png/revision/latest?cb=20221213185653" },
  { name: "Kobeni",        img: "https://i.redd.it/why-kobeni-works-and-fami-doesnt-v0-9ryu0ab0s1vg1.jpg?width=1140&format=pjpg&auto=webp&s=5491ac720288ab8624f7a2971b2c76e16dd3b707" },
  { name: "Reze",          img: "https://media.vandalsports.com/i/640x360/9-2025/2025922164933_1.jpg" },
  { name: "Quanxi",        img: "https://static.wikia.nocookie.net/chainsaw-man/images/9/94/Quanxi2.png/revision/latest?cb=20230921122029&path-prefix=es" },
  { name: "Beam",          img: "https://i.pinimg.com/736x/7a/ea/be/7aeabe6e66dab5bdca27935012a21968.jpg" },
  { name: "Galgali",       img: "https://manga-imperial.fr/cdn/shop/articles/galgali_600x.jpg?v=1682070046" },
  { name: "Katana-Man",    img: "https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/11/katana-man-chainsaw-man.jpg" },
  { name: "Angel Devil",   img: "https://static.wikia.nocookie.net/chainsaw-man/images/d/d3/Angel_anime.png/revision/latest?cb=20230120161110&path-prefix=es" },
  { name: "Cosmo",         img: "https://i.pinimg.com/236x/4d/a6/dc/4da6dc4cf34acf66dc214e1f2315f946.jpg" },
  { name: "Pochita",       img: "https://preview.redd.it/pochita-drawing-update-v0-n4zj757fc5sc1.jpg?width=640&crop=smart&auto=webp&s=d3a9aa5782b1e13a8dc9aebd1d7623eba2f6079e" },
  { name: "Nayuta",        img: "https://static0.srcdn.com/wordpress/wp-content/uploads/2024/07/nayuta-csm-cover.jpg?w=1200&h=900&fit=crop" },
  { name: "Future Devil",  img: "https://static.wikia.nocookie.net/chainsaw-man/images/0/02/Future_Devil_anime.png/revision/latest?cb=20221220183132" },
  { name: "Asa Mitaka",    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjfz4VGOn7vIeJBMHrFqCKIT1fcLDD5CoJtw&s" },
  { name: "Yoru",          img: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2024/09/war-devil-asa-mitaka-and-falling-devil.jpg?w=1200&h=675&fit=crop" },
  { name: "Morti",         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzNLJP3_J64sTBM8gST7FyxOkkcFdBAA8tzA&s" },
  { name: "Falling Devil", img: "https://dthezntil550i.cloudfront.net/st/latest/st2306041035108110024105396/1280_960/ae46c2ba-893f-4c02-8752-836d0084c278.png" },
  { name: "Fox Devil",     img: "https://static.wikia.nocookie.net/vsbattles/images/a/a2/FoxDevilAnime.png/revision/latest?cb=20250417042103" },
  { name: "Fami",          img: "https://static.wikia.nocookie.net/chainsaw-man/images/c/c1/Volume_21_%28Textless%29.png/revision/latest/scale-to-width-down/1200?cb=20250626083013" },
  { name: "Barem",         img: "https://static.wikia.nocookie.net/villains/images/d/df/BaremHybrid.jpg/revision/latest?cb=20230924203221" },
  { name: "Fumiko",        img: "https://static.wikia.nocookie.net/chainsaw-man/images/6/60/Fumiko_Mifune_Infobox.png/revision/latest/scale-to-width-down/250?cb=20240902225827" },
];

// =============================================
//  DATOS — Personajes de Jujutsu Kaisen
// =============================================
const JJK_CHARACTERS = [
  { name: "Yuji Itadori",           img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzBi77yp7lx4z9EV1p-kVbgjdogmYkhI7vOQ&s" },
  { name: "Megumi Fushiguro",       img: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/2/2f/Megumi_decides_against_sacrificing_himself_%28Anime%29.png/revision/latest?cb=20210319211218" },
  { name: "Nobara Kugisaki",        img: "https://i.redd.it/5avrkp466moc1.jpeg" },
  { name: "Satoru Gojo",            img: "https://www.geekmi.news/img/2021/07/26/gojo1_x1x.jpg?__scale=w:1200,h:1200,t:2" },
  { name: "Suguru Geto",            img: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/0/02/Suguru_takes_over_the_remnants_of_the_star_religious_group_%28Anime%29.png/revision/latest?cb=20230803191919" },
  { name: "Kenjaku",                img: "https://static0.dualshockersimages.com/wordpress/wp-content/uploads/2023/07/why-geto-consumed-curses.jpg"},
  { name: "Ryomen Sukuna",          img: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/06/ryomen-sukuna.jpg" },
  { name: "Toge Inumaki",           img: "https://s.yimg.com/ny/api/res/1.2/NMhG86zisnepd.QxeJrTwA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTIwNDg7aD0xMTUyO2NmPXdlYnA-/https://media.zenfs.com/en/comingsoon_net_477/a6f000ed102fc4c2a324b18de87364c3" },
  { name: "Panda",                  img: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/7/74/Panda_reinforcing_his_body_with_cursed_energy_%28Anime%29.png/revision/latest?cb=20210130041020" },
  { name: "Maki Zenin",             img: "https://static0.polygonimages.com/wordpress/wp-content/uploads/2026/01/maki-s3-jujutsu-kaisen-jjk.jpg?w=1600&h=1600&fit=crop" },
  { name: "Toji Fushiguro",         img: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/f/f1/Toji_shows_himself_%28Anime%29.png/revision/latest?cb=20230720194633" },
  { name: "Kento Nanami",           img: "https://swordslice.com/cdn/shop/articles/jjk-does-nanami-die_0fc10cc6-d080-4a0a-b4b9-17b0cf2639f9.webp?v=1771252069" },
  { name: "Mahito",                 img: "https://preview.redd.it/mahito-sukuna-all-the-way-v0-xveobl01lm9e1.jpeg?width=640&crop=smart&auto=webp&s=b20ccfcbe85536df73824691062f80bb68ab3d99" },
  { name: "Jogo",                   img: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/f/f9/Jogo_forces_civilians_on_the_train_tracks_%28Anime%29.png/revision/latest?cb=20230921230802" },
  { name: "Hanami",                 img: "https://m.media-amazon.com/images/M/MV5BZjY0MWQxOTctMWEwNS00ZjYwLTlhMmUtODVkODNiYmMzYmZmXkEyXkFqcGc@._V1_QL75_UY281_CR31,0,500,281_.jpg" },
  { name: "Choso",                  img: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/2/20/Choso_hardening_his_body_%28Anime%29.png/revision/latest?cb=20231019234844" },
  { name: "Yuta Okkotsu",           img: "https://i.blogs.es/4d853a/yuta-okkotsu/650_1200.jpeg" },
  { name: "Rika",                   img: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/3/38/Cursed_Rika_emerges_%28Anime%29.png/revision/latest?cb=20220920232645" },
  { name: "Aoi Todo",               img: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/c/c3/Aoi_Todo_arrives_to_rescue_Yuji_%28Anime%29.png/revision/latest?cb=20231207194739" },
  { name: "Mai Zenin",              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6NGxgiMr0FV4qB3FyQCSP3jT3vlJ8v74t2w&s" },
  { name: "Naoya Zenin",            img: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2025/12/naoya-zenin-2.jpg?q=70&fit=crop&w=660&dpr=1" },
  { name: "Mei Mei",                img: "https://preview.redd.it/mei-is-one-of-the-most-underrated-jjk-characters-writing-v0-xl9wliai6omg1.jpg?width=1080&format=pjpg&auto=webp&s=b8f1dce94c653f1f478e24ebeb271f3983b88c76" },
  { name: "Kinji Hakari",           img: "https://static0.polygonimages.com/wordpress/wp-content/uploads/2026/01/g_w7wqkxuamxyb2.jpg?q=49&fit=crop&w=825&dpr=2" },
  { name: "Kirara Hoshiguma",       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrxetdsDhv-HjrLXiAQD211_j6jCmPLkJXSA&s" },
  { name: "Kokichi Muta/Mechamaru", img: "https://fandomwire.com/wp-content/uploads/2023/11/kokichi-muta.jpg" },
  { name: "Yuki Tsukumo",           img: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/3/30/Yuki_Tsukumo_comes_to_the_rescue_%28Anime%29.png/revision/latest?cb=20231221203155" },
  { name: "Utahime Iori",           img: "https://i.redd.it/nle1vbf5m75d1.jpeg" },
  { name: "Shoko Ieiri",            img: "https://media.tenor.com/vA0TW324dUMAAAAe/shoko-ieiri.png" },
  { name: "Masamichi Yaga",         img: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/9/91/Masamichi_Yaga_and_his_dolls_%28Anime%29.png/revision/latest?cb=20201010033941" },
  { name: "Atsuya Kusakabe",        img: "https://www.looper.com/img/gallery/jujutsu-kaisen-kusakabe-is-jjks-strongest-grade-1-sorcerer-for-one-reason/l-intro-1715966141.jpg" },
  { name: "Kasumi Miwa",            img: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/11/miwa-cover.jpg" },
  { name: "Momo Nishimiya",         img: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/7/7f/Momo_riding_her_broom_%28Anime%29.png/revision/latest?cb=20210124223917" },
  { name: "Noritoshi Kamo",         img: "https://sm.ign.com/ign_latam/screenshot/default/e241d-17033583731092-1920_fyby.jpg" },
  { name: "Takuma Ino",             img: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/4/4e/Takuma_Ino_-_Anime.jpg/revision/latest?cb=20201223041233&path-prefix=es" },
  { name: "Naobito Zenin",          img: "https://i.redd.it/etb3hk76ryvg1.jpeg" },
  { name: "Fumihiko Takaba",        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMnn2rpOGH0i8qZRLXKnc71luYrpGu2zOKZw&s" },
  { name: "Hiromi Higuruma",        img: "https://a.storyblok.com/f/178900/960x540/70df109b3e/jujutsu-kaisen-s3-e9-still.jpg/m/filters:quality(95)format(webp)" },
  { name: "Hana Kurusu",            img: "https://static0.polygonimages.com/wordpress/wp-content/uploads/2026/01/jujutsu-kaisen-season-3-angel-copy.jpg?w=1200&h=628&fit=crop" },
  { name: "Hajime Kashimo",         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmeUmATb6eMkvG9KfEZzQekt5GTk2Z4Osu-Q&s" },
  { name: "Ryu Ishigori",           img: "https://pbs.twimg.com/media/HE2ntJ3XcAA2n1Z.png" },
  { name: "Dagon",                  img: "https://preview.redd.it/hot-take-dagon-is-in-my-top-ten-favorite-jujutsu-kaisen-v0-8o8gk5by5uqf1.jpeg?width=640&crop=smart&auto=webp&s=2a72b6539ba26649cc80b11f83c48c7a19d00a25" },
  { name: "Reggie Star",            img: "https://image.idn.media/post/20260314/upload_8b504d0e860e99a5c04256db0ad15042_763c8324-e983-488a-98b5-c0a95b0445c1.jpg" },
  { name: "Ui Ui",                  img: "https://gbaike-image.cdn.bcebos.com/b7003af33a87e950352a385a57634443fbf2b2111ecb/b7003af33a87e950352a385a57634443fbf2b2111ecb_1_1?x-bce-process=image/format,f_auto" },
  { name: "Miguel Oduol",           img: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/8/81/Miguel_with_half_the_Black_Rope_%28Anime%29.png/revision/latest?cb=20220924033657" },
  { name: "Mahoraga",               img: "https://i.pinimg.com/736x/16/c5/46/16c5466c6691a15ec5b52f94860fc184.jpg" },
];

// =============================================
//  DATOS — Rangos de generaciones Pokémon
// =============================================
const GEN_RANGES = {
  0:[1,1025],1:[1,151],2:[152,251],3:[252,386],4:[387,493],
  5:[494,649],6:[650,721],7:[722,809],8:[810,905],9:[906,1025],
};

// =============================================
//  DATOS — Personajes de Resident Evil
// =============================================
const RE_CHARACTERS = [
  { name: "Leon S. Kennedy", img: "" },
  { name: "Claire Redfield", img: "" },
  { name: "Jill Valentine",   img: "" },
  { name: "Chris Redfield",   img: "" },
  { name: "Ada Wong",        img: "" },
  { name: "Albert Wesker",   img: "" },
  { name: "Hunk",            img: "" },
  { name: "Sherry Birkin",   img: "" },
  { name: "Carlos Oliveira", img: "" },
  { name: "Rebecca Chambers", img: "" },
  { name: "Barry Burton",    img: "" },
  { name: "Piers Nivans",     img: "" },
  { name: "Ethan Winters",    img: "" },
  { name: "Mia Winters",      img: "" },
  { name: "Rose Winters",     img: "" },
  { name: "Grace Ashcroft",     img: "" },
  { name: "Sheva Alomar",       img: "" },
  { name: "Ashley Graham", img: "" },
];

