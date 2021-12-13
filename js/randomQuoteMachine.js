// Thanks to Useful Programmer Youtube channel
window.onload = go;
function go() {
  // Triggers genRandQuote when New Quote button is clicked
  $("#new-quote").click(function() {
    genRandQuote();
  });
  
//   $("#tweet-quote").click(function() {
    
//   });

  // Generate a random quote when window is loaded initially
  genRandQuote();
}

// Generates a random quote from the quote variable and renders it to DOM
function genRandQuote() {
  var quotes = [{
		id: 1,
		text: "Tak ada penyakit yang tak bisa disembuhkan kecuali kemalasan. Tak ada obat yang tak berguna selain kurangnya pengetahuan.",
		source: "Ibnu Sina"
	},
	{
		id: 2,
		text: "Ketika kamu memperlakukan orang dengan baik, orang-orang yang sama itu mungkin tidak memperlakukanmu dengan cara yang sama. Tetapi jika kamu memperhatikan, kamu akan melihat bahwa Allah telah mengirim orang lain yang memperlakukanmu dengan lebih baik.",
		source: "Omar Suleiman"
	},
	{
		id: 3,
		text: "Banyak orang yang telah meninggal, tapi nama baik mereka tetap kekal. Dan banyak orang yang masih hidup, tapi seakan mereka orang mati yang tak berguna.",
		source: "Imam Syafi'i"
	},
	{
		id: 4,
		text: "Di antara tanda matinya hati, adalah tidak adanya perasaan sedih atas kesempatan beramal yang engkau lewatkan dan tidak adanya penyesalan atas pelanggaran yang engkau lakukan",
		source: "Ibnu Athaillah"
	},
	{
		id: 5,
		text: "Dunia ini hanya memiliki tiga hari: Hari kemarin, ia telah pergi bersama dengan semua yang menyertainya. Hari esok, kamu mungkin tak akan pernah menemuinya. Hari ini, itulah yang kamu miliki, maka beramal lah di hari ini.",
		source: "Hasan al Bashri"
	},
	{
		id: 6,
		text: "Hidup ini terlalu singkat untuk mengejar sesuatu yang tidak membawa kita semakin dekat dengan surga.",
		source: "Boona Mohammed"
	},
	{
		id: 7,
		text: "Hidup lah sebagaimana semaumu, tetapi ingat, bahwa engkau akan mati. Dan cintai lah siapa yang engkau sukai, namun ingat, engkau akan berpisah dengannya. Dan berbuat lah seperti yang engkau kehendaki, namun ingat, engkau pasti akan menerima balasannya nanti.",
		source: "Imam Ghazali"
	},
	{
		id: 8,
		text: "Jalanilah kehidupan di dunia ini tanpa membiarkan dunia hidup di dalam dirimu, karena ketika perahu berada di atas air, ia mampu berlayar dengan sempurna, tetapi ketika air masuk ke dalamnya, perahu itu tenggelam.",
		source: "Ali bin Abi Thalib"
	},
	{
		id: 9,
		text: "Jangan terlalu bergantung pada siapapun di dunia ini. Karena bayanganmu saja akan meninggalkanmu di saat gelap.",
		source: "Ibnu Taymiyyah"
	},
	{
		id: 10,
		text: "Kehidupan itu cuma dua hari. Satu hari untukmu dan satu hari melawanmu. Maka pada saat ia untukmu, jangan bangga dan gegabah dan pada saat ia melawanmu bersabarlah. Karena keduanya adalah ujian bagimu.",
		source: "Ali bin Abi Thalib"
	},
	{
		id: 11,
		text: "Lidah seseorang dapat menggambarkan bagaimanakah hatinya.",
		source: "Ibnu Qayyim"
	},
	{
		id: 12,
		text: "Memangnya kenapa jika hidup ini tidak sempurna? Hidup ini bukanlah surga.",
		source: "Nouman Ali Khan"
	},
	{
		id: 13,
		text: "Terkadang Allah membiarkan kamu untuk merasakan kepahitan dunia ini supaya kamu dapat sepenuhnya menghargai manisnya iman.",
		source: "Omar Suleiman"
	},
	{
		id: 14,
		text: "Barang siapa belum merasakan pahitnya belajar walau sebentar, maka akan merasakan hinanya kebodohan sepanjang hidupnya.",
		source: "Imam Syafi'i"
	},
	{
		id: 15,
		text: "Betapa banyak kegetiran dan kesulitan yang dialami, yang bisa memalingkan jalan ibadah. Kecuali untuk orang-orang yang bersabar dan selalu istiqomah.",
		source: "Erick Yusuf"
	},
	{
		id: 16,
		text: "Jika terdapat banyak kebutuhan yang harus dipenuhi, maka mulailah dari yang terpenting dan mendesak.",
		source: "Imam Syafi'i"
	},
	{
		id: 17,
		text: "Orang berilmu pengetahuan ibarat gula yang mengundang banyak semut. Dia menjadi cahaya bagi diri dan sekelilingnya.",
		source: "Abdullah Gymnastiar"
	},

	// Kata-kata bijak dari tokoh Islam tentang ibadah dan mengingat Allah.
	// bijak dari tokoh Islam berbagai sumber

	{
		id: 18,
		text: "Belajarlah Alquran, niscaya kamu tertuntun ke jalan yang benar, dan berbuatlah kebajikan sesuai dengan Alquran, niscaya kamu menjadi ahlinya.",
		source: "Umar bin Khattab"
	},
	{
		id: 19,
		text: "Jagalah Alquran, jangan kalian didahului orang dalam mengamalkannya.",
		source: "Ali bin Abi Thalib"
	},
	{
		id: 20,
		text: "Jika Allah bersamamu, maka jangan takut kepada siapa saja. Akan tetapi jika Allah sudah tidak lagi bersamamu, maka siapa lagi yang bisa diharapkan olehmu.",
		source: "Hasan Al-Banna"
	},
	{
		id: 21,
		text: "Menyampaikan shalawat dan salam kepada Rasulullah SAW, membantu menghilangkan kesulitan dan melenyapkan segala cemas.",
		source: "Dr. Aidh Al-Qarni"
	},
	{
		id: 22,
		text: "Rasulullah sangat piawai memperingatkan manusia, bahwa lawan rohani mereka bukan musuh yang memakai senjata tajam, tetapi hawa nafsu yang melekat di dalam diri.",
		source: "Jalaluddin Rumi"
	},
	{
		id: 23,
		text: "Tempat terbitnya cahaya ilahi adalah hati dan relung batin..",
		source: "Ibnu Athaillah"
	},
	{
		id: 24,
		text: "Wahai anak Adam, juallah duniamu untuk akhiratmu, niscaya kamu untung di keduanya. Dan janganlah kamu jual akhiratmu untuk duniamu, karena kamu akan rugi di keduanya. Singgah di dunia ini sebentar, sedang tinggal di akhirat sana sangatlah panjang.",
		source: "Hasan Al-Bashri"
	},
	{
		id: 25,
		text: "Wahai anakku, ambillah harta dunia sekedar keperluanmu saja dan nafkahkanlah selebihnya untuk bekal akhiratmu.",
		source: "Luqman Al-Hakim"
	},
	{
		id: 26,
		text: "Menghindarkan telinga dari mendengar hal-hal yang tidak baik merupakan suatu keharusan, sebagaimana seseorang mensucikan tutur katanya dari ungkapan buruk.",
		source: "Imam Syafi'i"
	},
	{
		id: 27,
		text: "Bila engkau pulang ke alam baka, tidak membawa bekal takwa, kau lihat orang-orang membawanya pada hari perhimpunan. Engkau akan menyesal, karena engkau tidak seperti mereka. Mereka mempunyai persiapan sedang engkau tidak memilikinya.",
		source: "Ibnu Qayyim"
	},
	{
		id: 28,
		text: "Jika engkau bertakwa kepada Allah, maka engkau tidak butuh kepada manusia. Sedang apabila engkau takut kepada manusia, mereka tidak dapat memenuhi kebutuhanmu kepada Allah sedikit pun.",
		source: "Sufyan Ats-Tsauri"
	},
	{
		id: 29,
		text: "Jika semua orang menjauh ketika engkau mendapat kesulitan, maka ketahuilah bahwa Allah SWT ingin membuatmu kuat dan Ia akan menjadi penolongmu.",
		source: "Imam Syafi'i"
	},

	// Kata-kata bijak dari tokoh Islam tentang sabar dan bersyukur.
	// bijak dari tokoh Islam berbagai sumber


	{
		id: 30,
		text: "Hatiku tenang karena mengetahui bahwa apa yang melewatkanku tidak akan pernah menjadi takdirku, dan apa yang ditakdirkan untukku tidak akan pernah melewatkanku.",
		source: "Umar bin Khattab"
	},
	{
		id: 31,
		text: "Jangan berduka, apa pun yang hilang darimu akan kembali lagi dalam wujud lain.",
		source: "Jalaluddin Rumi"
	},
	{
		id: 32,
		text: "Jika kamu mampu bersabar sebentar pada saat dirimu marah, maka hal itu dapat menghindarkan mu dari ribuan penyesalan di masa yang akan datang.",
		source: "Ali bin Abi Thalib"
	},
	{
		id: 33,
		text: "Kesabaran adalah ketika hati tidak merasa marah terhadap apa yang sudah ditakdirkan dan mulut tidak mengeluh.",
		source: "Ibnu Qayyim"
	},
	{
		id: 34,
		text: "Kesabaran itu ada dua macam: sabar atas sesuatu yang tidak kau ingin dan sabar menahan diri dari sesuatu yang kau ingini.",
		source: "Ali Bin Abi Thalib"
	},
	{
		id: 35,
		text: "Memang sangat sulit untuk bersabar, tetapi menyia-nyiakan pahala dari kesabaran itulah yang lebih buruk.",
		source: "Abu Bakar"
	},
	{
		id: 36,
		text: "Orang yang terkaya adalah orang yang menerima pembagian (taqdir) dari Allah dengan senang hati.",
		source: "Ali bin Husein"
	},
	{
		id: 37,
		text: "Petunjuk tidak bisa dicapai kecuali dengan pengetahuan, dan arah tujuan yang benar tidak bisa dituju kecuali dengan kesabaran.",
		source: "Ibnu Taimiyah"
	},
	{
		id: 38,
		text: "Sabar memiliki dua sisi, sisi yang satu adalah sabar, sisi yang lain adalah bersyukur kepada Allah.",
		source: "Ibnu Mas'ud"
	},
	{
		id: 39,
		text: "Untuk mendapatkan apa yang kamu suka, pertama kamu harus sabar dengan apa yang kamu benci.",
		source: "Imam Al Ghazali"
	},
	{
		id: 40,
		text: "Ketahui lah bahwa rasa syukur merupakan tingkatan tertinggi, dan ini lebih tinggi daripada kesabaran, ketakutan (khauf), dan keterpisahan dari dunia (zuhud).",
		source: "Imam al-Ghazali"
	},

	// Kata-kata bijak dari tokoh Islami tentang cinta.
	// bijak dari tokoh Islam berbagai sumber


	{
		id: 41,
		text: "Aku mencintaimu karena agama yang ada padamu. Jika kau hilangkan agama dalam dirimu, maka hilanglah cintaku padamu.",
		source: "Imam An Nawawi"
	},
	{
		id: 42,
		text: "Benar, mencintai makhluk itu sangat berpeluang mengalami kehilangan. Kebersamaan bersama makhluk juga berpeluang mengalami perpisahan. Hanya cinta kepada Allah yang tidak.",
		source: "Habiburrahman El Shirazy"
	},
	{
		id: 43,
		text: "Cinta bukan melemahkan hati, bukan membawa putus asa, bukan menimbulkan tangis sedu sedan. Tetapi cinta menghidupkan pengharapan, menguatkan hati dalam perjuangan menempuh onak dan duri penghidupan.",
		source: "Buya Hamka"
	},
	{
		id: 44,
		text: "Cintai lah kekasihmu sekadarnya saja, siapa tahu nanti akan jadi musuhmu. Dan bencilah musuhmu sekadarnya saja, siapa tahu nanti akan jadi kekasihmu.",
		source: "Ali bin Abi Thalib"
	},
	{
		id: 45,
		text: "Jangan berhenti berdoa untuk yang terbaik bagi orang yang kau cintai.",
		source: "Ali bin Abi Thalib",
	},
	{
		id: 46,
		text: "Jangan mencintai orang yang tidak mencintai Allah. Jika mereka bisa meninggalkan Allah, maka mereka juga akan meninggalkanmu.",
		source: "Imam Asy Syafi’i"
	},
	{
		id: 47,
		text: "Janganlah kalian menikahi wanita karena kecantikannya, karena mungkin saja kecantikannya akan membinasakannya. Dan jangan pula kalian menikahi wanita karena hartanya, karena mungkin saja hartanya akan menjadikannya bersikap sewenang-wenang. Akan tetapi, nikahilah wanita itu karena agamanya.",
		source: "Ali bin Abi Thalib"
	},
	{
		id: 48,
		text: "Kau tidak akan pernah menemukan cinta sejati sampai kau belajar mencintai Allah terlebih dahulu.",
		source: "Boonaa Mohammed"
	},
	{
		id: 49,
		text: "Orang yang suka berkata jujur akan mendapatkan 3 keuntungan, yaitu kepercayaan, cinta dan rasa hormat.",
		source: "Ali bin Abi Thalib."
	},
	{
		id: 50,
		text: "Pria mengimpikan wanita sempurna. Wanita menginginkan pria sempurna. Mereka tidak tahu bahwa Allah menciptakan mereka untuk menyempurnakan satu sama lain.",
		source: "Ahmad Alshugairi"
	},


	
	// {
	// 	id: 51,
	// 	text: "You can’t be that kid standing at the top of the waterslide, overthinking it. You have to go down the chute.",
	// 	source: "Tina Fey"
	// },
	// {
	// 	id: 52,
	// 	text: "Above all, be the heroine of your life, not the victim.",
	// 	source: "Nora Ephron"
	// },
	// {
	// 	id: 53,
	// 	text: "Learn from the mistakes of others. You can’t live long enough to make them all yourself.",
	// 	source: "Eleanor Roosevelt"
	// },
	// {
	// 	id: 54,
	// 	text: "What you do makes a difference, and you have to decide what kind of difference you want to make.",
	// 	source: "Jane Goodall"
	// },
	// {
	// 	id: 55,
	// 	text: "One of the secrets to staying young is to always do things you don’t know how to do, to keep learning.",
	// 	source: "Ruth Reichl"
	// },
	// {
	// 	id: 56,
	// 	text: "If you don’t risk anything, you risk even more.",
	// 	source: "Erica Jong"
	// },
	// {
	// 	id: 57,
	// 	text: "When the whole world is silent, even one voice becomes powerful.",
	// 	source: "Malala Yousafzai"
	// },
	// {
	// 	id: 58,
	// 	text: "The most common way people give up their power is by thinking they don’t have any.",
	// 	source: "Alice Walker"
	// },
	// {
	// 	id: 59,
	// 	text: "My philosophy is that not only are you responsible for your life, but doing the best at this moment puts you in the best place for the next moment.",
	// 	source: "Oprah Winfrey"
	// },
	// {
	// 	id: 60,
	// 	text: "Don’t be intimidated by what you don’t know. That can be your greatest strength and ensure that you do things differently from everyone else.",
	// 	source: "Sara Blakely"
	// },
	// {
	// 	id: 61,
	// 	text: "If I had to live my life again, I’d make the same mistakes, only sooner.",
	// 	source: "Tallulah Bankhead"
	// },
	// {
	// 	id: 62,
	// 	text: "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
	// 	source: "Mae C. Jemison"
	// },
	// {
	// 	id: 63,
	// 	text: "If you obey all the rules, you miss all the fun.",
	// 	source: "Katharine Hepburn"
	// },
	// {
	// 	id: 64,
	// 	text: "Life shrinks or expands in proportion to one’s courage.",
	// 	source: "Anaïs Nin"
	// },
	// {
	// 	id: 65,
	// 	text: "Avoiding danger is no safer in the long run than outright exposure. The fearful are caught as often as the bold.",
	// 	source: "Helen Keller"
	// },
	// {
	// 	id: 66,
	// 	text: "How wonderful it is that nobody need wait a single moment before beginning to improve the world.",
	// 	source: "Anne Frank"
	// },
	// {
	// 	id: 67,
	// 	text: "So often people are working hard at the wrong thing. Working on the right thing is probably more important than working hard.",
	// 	source: "Caterina Fake"
	// },
	// {
	// 	id: 68,
	// 	text: "There are still many causes worth sacrificing for, so much history yet to be made.",
	// 	source: "Michelle Obama"
	// },
	// {
	// 	id: 69,
	// 	text: "Nothing is impossible; the word itself says ‘I’m possible’!",
	// 	source: "Audrey Hepburn"
	// },
	// {
	// 	id: 70,
	// 	text: "You only live once, but if you do it right, once is enough.",
	// 	source: "Mae West"
	// },
];
  var randQuote = quotes[Math.floor(Math.random() * (quotes.length))];
  $("#text").html(randQuote.text);
  $("#author").html(randQuote.source);
//   $("#tweet-quote").attr("href", stringToClickToTweetURL('"' + randQuote.text + '" - ' + randQuote.source));
}


// This function makes strings into click to tweet URLS
// function stringToClickToTweetURL(str) {
  
//   // Convert to Click to Tweet URL
//   var stringToConvert = str.split(" ").join("%20").split("@").join("%40").split("!").join("%21");

//   // Put 'Click to Tweet' URL suffix at the begining
//   var resultString = "https://twitter.com/intent/tweet?text=" + stringToConvert;

//   // Return properly formatted "Click to Tweet URL"
//   return resultString;
// }