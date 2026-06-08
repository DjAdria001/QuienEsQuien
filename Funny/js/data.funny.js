// =============================================
//  DATOS FUNNY — Personajes de Chainsaw Man
//  (versión memes / gifs)
// =============================================
const CSM_CHARACTERS = [
  { name: "Denji",         img: "https://i.pinimg.com/736x/c3/0e/31/c30e316955381cabfcb1583da89214d7.jpg" },
  { name: "Makima",        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkXN6aIaQJwHZUfD5obRDenQ5FSg86Xn_pNQ&s" },
  { name: "Power",         img: "https://images.steamusercontent.com/ugc/2100425147026543778/8EEFB2DF2422255EB2031F02711A2D4C3344E0D1/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" },
  { name: "Aki",           img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6MN-CgWDF-yys2j5CHD9TI6IjKiUAFY4rDA&s" },
  { name: "Himeno",        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDOo5V9t8MK18xQ2nx-4s-CSLQxFMfSvxezg&s" },
  { name: "Kishibe",       img: "https://i.redd.it/8erywl6q63m41.jpg" },
  { name: "Kobeni",        img: "https://media.tenor.com/HYvUm2u72KsAAAAi/chainsaw-man-kobeni.gif" },
  { name: "Reze",          img: "https://media1.tenor.com/m/3Sykma8la9gAAAAC/reze-tongue-out-reze-chainsaw-man-moving-her-head.gif" },
  { name: "Quanxi",        img: "https://media1.tenor.com/m/Np63XQmt_XIAAAAd/quanxi-stare-quanxi.gif" },
  { name: "Beam",          img: "https://media1.tenor.com/m/bSls_UJPZ3EAAAAC/beam-pool.gif" },
  { name: "Galgali",       img: "https://media1.tenor.com/m/dXe8aznPEm0AAAAC/chainsaw-man-chainsaw-man-the-movie.gif" },
  { name: "Katana-Man",    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ76TmRESUgT9zHdKiPcK2sXWG0YXPwYduvrA&s" },
  { name: "Angel Devil",   img: "https://media1.tenor.com/m/Xm5UUXHIRL8AAAAC/angel-chainsawman.gif" },
  { name: "Cosmo",         img: "https://media1.tenor.com/m/K6fG003HfgUAAAAd/cosmo-chainsaw-man.gif" },
  { name: "Pochita",       img: "https://media.tenor.com/v3-Ju08pVzcAAAAi/super-speed-pochita.gif" },
  { name: "Nayuta",        img: "https://media1.tenor.com/m/1424xR5RASIAAAAC/chainsaw-man-csm.gif" },
  { name: "Future Devil",  img: "https://media1.tenor.com/m/P9V_gR2qOz4AAAAC/chainsaw-man-future-devil.gif" },
  { name: "Asa Mitaka",    img: "https://media1.tenor.com/m/DvM78Y83N0wAAAAC/asa-mitaka-faces.gif" },
  { name: "Yoru",          img: "https://media1.tenor.com/m/8uXbIFBvKMEAAAAC/yoru-dog.gif" },
  { name: "Morti",         img: "https://media1.tenor.com/m/MYtZWi50ZSYAAAAC/chainsaw-man-not-listening.gif" },
  { name: "Falling Devil", img: "https://media1.tenor.com/m/ZtHl5r-li2UAAAAC/falling-devil-falling-csm.gif" },
  { name: "Fox Devil",     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRth05SiHmtAiFjEb2Nj2Mc1yr6ahu8Mj6E-g&s" },
  { name: "Fami",          img: "https://media1.tenor.com/m/nlCSdIFT4hwAAAAd/chainsaw-man-csm.gif" },
  { name: "Barem",         img: "https://media1.tenor.com/m/QIj37sJM_OEAAAAC/barem-bridge-barem.gif" },
  { name: "Fumiko",        img: "https://pbs.twimg.com/media/G0ACd1xXsAI1dw1.jpg" },
];

// =============================================
//  DATOS FUNNY — Personajes de Jujutsu Kaisen
//  (versión memes / gifs)
// =============================================
const JJK_CHARACTERS = [
  { name: "Yuji Itadori",           img: "https://i.pinimg.com/736x/79/42/6d/79426d91030244f605ea12879174e0fd.jpg" },
  { name: "Megumi Fushiguro",       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRpITnLPiaf_NC38a8Zrwz8QVEc8bTcmtdDQ&s" },
  { name: "Nobara Kugisaki",        img: "https://media.tenor.com/1i64WUMDpKsAAAAe/nobara-jujutsu.png" },
  { name: "Satoru Gojo",            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfhFEufPpORTBzP_3PHJMYZ7W7Dl6d456dJw&s" },
  { name: "Suguru Geto",            img: "https://i.redd.it/2xd2n91hco091.jpg" },
  { name: "Kenjaku",                img: "https://media.tenor.com/7iAF88pUAyEAAAAe/geto-no-brain.png" },
  { name: "Ryomen Sukuna",          img: "https://media.tenor.com/zr2tYVuEY1IAAAAe/thukuna.png" },
  { name: "Toge Inumaki",           img: "https://media.tenor.com/cHq-Xcl4kwMAAAAe/inumaki-salmon.png" },
  { name: "Panda",                  img: "https://media.tenor.com/CU-rjMjHmpEAAAAe/panda-jjk.png" },
  { name: "Maki Zenin",             img: "https://media1.tenor.com/m/0aBEQuoZlY8AAAAC/yuji-itadori-yuji.gif" },
  { name: "Toji Fushiguro",         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLoq_zJqeKLVAYpcnk1qRPIOCpG727i2MjBA&s" },
  { name: "Kento Nanami",           img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR28mDiW8_Vb0tRBHPr3pkAcMUIqUfcoTw9hw&s" },
  { name: "Mahito",                 img: "https://static.wikia.nocookie.net/fa43e6ad-ac85-449d-a3f2-bd9fdc00ace9/scale-to-width/755" },
  { name: "Jogo",                   img: "https://media.tenor.com/mimVflzgoA4AAAAe/jogo-jujutsu-kaisen.png" },
  { name: "Hanami",                 img: "https://i.redd.it/axi6n2yriky61.jpg" },
  { name: "Choso",                  img: "https://media.tenor.com/7mZbjm-rgyUAAAAj/choso-in-pain.gif" },
  { name: "Yuta Okkotsu",           img: "https://media1.tenor.com/m/i-SPXGavbR0AAAAd/yuta-jujutsu-kaisen.gif" },
  { name: "Rika",                   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-svv80d519YfSnBUWzkzpHdP_ZUns_3o_yA&s" },
  { name: "Aoi Todo",               img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZRjCXSbaTagqAHiahzqLeE8sISz2oBB4OXA&s" },
  { name: "Mai Zenin",              img: "https://i.redd.it/vrwdnk9ic3171.jpg" },
  { name: "Naoya Zenin",            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqgvV5Ffag71FjOVMrwogHH7mTxr8_bgd_cQ&s" },
  { name: "Mei Mei",                img: "https://hips.hearstapps.com/hmg-prod/images/jujutsu-kaisen-mei-mei-6586a5fb79367.jpg?crop=1xw:1xh;0,0.104xh" },
  { name: "Kinji Hakari",           img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwQjpD0yAK22gBUAalAWIdtJXxdRN7CfGebA&s" },
  { name: "Kirara Hoshiguma",       img: "https://media.tenor.com/gYMSIrqFvfwAAAAe/kirara-kirara-hoshi.png" },
  { name: "Kokichi Muta/Mechamaru", img: "https://i.pinimg.com/736x/4a/ff/30/4aff3047797a811acd053f72d131c0d5.jpg" },
  { name: "Yuki Tsukumo",           img: "https://media.tenor.com/pB7mP_EM_z0AAAAe/yuki-jjk.png" },
  { name: "Utahime Iori",           img: "https://media1.tenor.com/m/wypkub9yEncAAAAd/ashi-ashi-utahime.gif" },
  { name: "Shoko Ieiri",            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrglW9H6qnogTpW7TE5erXjAzJ9_iRxf3GnA&s" },
  { name: "Masamichi Yaga",         img: "https://media.tenor.com/rzKhK3gxQCcAAAAe/masamichi-yaga-god-damn.png" },
  { name: "Atsuya Kusakabe",        img: "https://media1.tenor.com/m/Q8gI58EZhqYAAAAC/jujutsukaisen-kusakabe.gif" },
  { name: "Kasumi Miwa",            img: "https://media1.tenor.com/m/9KhRw2oz_AcAAAAC/miwa-jujutsu-kaisen.gif" },
  { name: "Momo Nishimiya",         img: "https://preview.redd.it/momo-has-become-popular-on-twitter-i-wonder-why-v0-ogz19w9lbfug1.png?auto=webp&s=465e1c795fee472ae23c841766881f481e09b0ce" },
  { name: "Noritoshi Kamo",         img: "https://64.media.tumblr.com/16a4316317dd5e824001edf7fa36f6a5/12134505a2e7277c-67/s640x960/f59de9e8828728778409636e0f1b80ea2e559632.jpg" },
  { name: "Takuma Ino",             img: "https://preview.redd.it/daily-reminder-that-ino-hasnt-used-his-4th-beast-bro-isnt-v0-xjerof8dmdjc1.jpg?width=602&format=pjpg&auto=webp&s=4594ce8b8d15708a5dc53c5407fb85db5b594c5c" },
  { name: "Naobito Zenin",          img: "https://preview.redd.it/naobito-meme-not-a-slander-v0-tzk2wir3ys3h1.png?auto=webp&s=94503e37aa7260082e37e6ddab592f7a344c9a58" },
  { name: "Fumihiko Takaba",        img: "https://i.redd.it/the-takaba-meme-contest-continues-v0-n0kjslajlwyb1.png?width=1080&format=png&auto=webp&s=b862673ec370b875722c6f5566efff12241d8afb" },
  { name: "Hiromi Higuruma",        img: "https://media.tenor.com/0iDXJGZMKGwAAAAe/higuruma-jjk.png" },
  { name: "Hana Kurusu",            img: "https://i.redd.it/sdao5ovwtl9c1.png" },
  { name: "Hajime Kashimo",         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp4o4QnEsbssQzT0D0canrxuZv_gwhfSq5uQ&s" },
  { name: "Ryu Ishigori",           img: "https://media.tenor.com/nH_ZTfp0QpIAAAAe/jjk-ryu-jjk.png" },
  { name: "Dagon",                  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyWNL9dTx9giVP9x3Zod4m9AGiqcJsDy00Ww&s" },
  { name: "Reggie Star",            img: "https://media.tenor.com/KeYRdHrX13IAAAAe/jujutsu-kaisen-season-3-jujutsu-kaisen-meme.png" },
  { name: "Ui Ui",                  img: "https://hips.hearstapps.com/hmg-prod/images/jujutsu-kaisen-mei-mei-hermano-6586bfd23540d.jpg" },
  { name: "Miguel Oduol",           img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA7GLHJl_IYXHmJkpSXMb1gc7HigTbX4nMXg&s" },
  { name: "Mahoraga",               img: "https://preview.redd.it/guys-why-are-they-no-yuki-memes-v0-hqvx0bv7c2rb1.jpg?auto=webp&s=aca00abcdbf4db23e484983fad44304bffbcd3b5" },
];

// GEN_RANGES es el mismo que el principal (los Pokémon no cambian)
const GEN_RANGES = {
  0:[1,1025],1:[1,151],2:[152,251],3:[252,386],4:[387,493],
  5:[494,649],6:[650,721],7:[722,809],8:[810,905],9:[906,1025],
};

// =============================================
//  DATOS FUNNY — Resident Evil (memes / gifs)
// =============================================
const RE_CHARACTERS = [
  { name: "Leon S. Kennedy",  img: "https://preview.redd.it/leon-this-shit-goes-hard-as-fuck-v0-fo8uhae7zfr81.jpg?auto=webp&s=c5242a03f0ea81a834bb2fd7b7f5be0f5a469c4d" },
  { name: "Claire Redfield",  img: "https://i.pinimg.com/170x/05/63/07/056307a93205b0319b75143818fe798c.jpg" },
  { name: "Jill Valentine",   img: "https://i.pinimg.com/736x/6d/87/4a/6d874a46f9914afa1681c82829eef397.jpg" },
  { name: "Chris Redfield",   img: "https://preview.redd.it/chris-and-his-boulder-meme-by-v0-wjzgd2xfaa0e1.jpeg?auto=webp&s=d6656c66e329a00441b2aab80e68b0712aaa14c7" },
  { name: "Ada Wong",         img: "https://media.tenor.com/QRLhhD0WZxMAAAAe/ada-wong.png" },
  { name: "Albert Wesker",    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpKM_GyIWPONhkqN0O0KM45rFT5DxB3NZAWA&s" },
  { name: "Hunk",             img: "https://i.pinimg.com/736x/db/e5/be/dbe5be9e39e2100230de24ef97ff1813.jpg" },
  { name: "Sherry Birkin",    img: "https://media.tenor.com/hl69scW3isoAAAAe/sherry-birkin-leon-sherry-x-leon.png" },
  { name: "Carlos Oliveira",  img: "https://i.pinimg.com/736x/37/bb/b0/37bbb0733993abad0770d8305ce461c3.jpg" },
  { name: "Rebecca Chambers", img: "https://preview.redd.it/im-literally-rebecca-chambers-if-you-even-care-j-v0-5o5vp7t9dxcc1.jpeg?width=1080&crop=smart&auto=webp&s=fb4faa65c5dc93cd52b9eeb305d106fea50aeada" },
  { name: "Barry Burton",     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr1RHhr4l46RIzxh12WXdxEUiQe-R6MMUqdg&s" },
  { name: "Piers Nivans",     img: "https://pbs.twimg.com/media/E8BDpkdVUAUiWw7.jpg" },
  { name: "Ethan Winters",    img: "https://preview.redd.it/evil-v0-nhldeukr8x0d1.jpeg?width=640&crop=smart&auto=webp&s=3b825835c027d17f8ac8f60095becc701a4ebc04" },
  { name: "Mia Winters",      img: "https://media.tenor.com/k6BgAefqffYAAAAe/mia-winters-resident-evil.png" },
  { name: "Rosemary Winters", img: "https://ih1.redbubble.net/image.5627467743.2699/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg" },
  { name: "Grace Ashcroft",   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLY5ofuiNUqdZ9hpX0V1YqEySVtaH12-YTqA&s" },
  { name: "Sheva Alomar",     img: "https://img.ifunny.co/images/29ef354601e54a698a167e58b071a04e300b39efa2b454724cbd3b08804ade64_1.jpg" },
  { name: "Ashley Graham",    img: "https://i.redd.it/7yale8qy67sa1.jpg" },
];
