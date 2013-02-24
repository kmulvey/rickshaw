var Rickshaw = require('../rickshaw'), assert = require('assert');

////////////   UTILS
var sample_data = {
  data : {
	  constant : [ {x: 0, y: 0, y0: 0}, {x: 1, y: 1, y0: 0}, { x: 2, y: 2, y0: 0} , { x: 3, y: 3, y0: 0}, { x: 4, y: 4, y0: 0}, { x: 5, y: 5, y0: 0}, { x: 6, y: 6,y0: 0}, { x: 7, y: 7, y0: 0}, { x: 8, y: 8, y0: 0}],
    fib : [ {x: 0, y: 0, y0: 0}, {x: 1, y: 1, y0: 0}, { x: 1, y: 1, y0: 0} , { x: 2, y: 2, y0: 0}, { x: 3, y: 3, y0: 0}, { x: 5, y: 5, y0: 0}, { x: 8, y: 8,y0: 0}, { x: 13, y: 13, y0: 0}, { x: 21, y: 21, y0: 0}],
    prime : [ {x: 2, y: 2, y0: 0}, {x: 3, y: 3, y0: 0}, { x: 5, y: 5, y0: 0} , { x: 7, y: 7, y0: 0}, { x: 11, y: 11, y0: 0}, { x: 13, y: 13, y0: 0}, { x: 17, y: 17,y0: 0}, { x: 19, y: 19, y0: 0}, { x: 23, y: 23, y0: 0}],
  	rand : [{"x":1357935117,"y":89.3669875388965,"y0":0},{"x":1357935267,"y":99.3211988473033,"y0":0},{"x":1357935417,"y":95.31507425052837,"y0":0},{"x":1357935567,"y":84.95078660514696,"y0":0},{"x":1357935717,"y":98.66458036062326,"y0":0},{"x":1357935867,"y":102.17973173135127,"y0":0},{"x":1357936017,"y":92.3250449707472,"y0":0},{"x":1357936167,"y":87.13976811779149,"y0":0},{"x":1357936317,"y":91.28876274558698,"y0":0},{"x":1357936467,"y":96.88251428357995,"y0":0},{"x":1357936617,"y":97.81426235959928,"y0":0},{"x":1357936767,"y":80.72501138424627,"y0":0},{"x":1357936917,"y":87.94183061165833,"y0":0},{"x":1357937067,"y":91.83622082890645,"y0":0},{"x":1357937217,"y":84.63353535994891,"y0":0},{"x":1357937367,"y":86.44256825665232,"y0":0},{"x":1357937517,"y":79.24860996405573,"y0":0},{"x":1357937667,"y":79.84870509463894,"y0":0},{"x":1357937817,"y":76.44926039967125,"y0":0},{"x":1357937967,"y":78.08783953496815,"y0":0},{"x":1357938117,"y":72.68827255674353,"y0":0},{"x":1357938267,"y":69.31982733162761,"y0":0},{"x":1357938417,"y":81.80929166231874,"y0":0},{"x":1357938567,"y":88.42970283218472,"y0":0},{"x":1357938717,"y":84.0501887248969,"y0":0},{"x":1357938867,"y":73.43151017759166,"y0":0},{"x":1357939017,"y":78.13092949349355,"y0":0},{"x":1357939167,"y":73.34696430219088,"y0":0},{"x":1357939317,"y":80.3753990150107,"y0":0},{"x":1357939467,"y":89.10349909728106,"y0":0},{"x":1357939617,"y":82.39267630332498,"y0":0},{"x":1357939767,"y":82.51180081279526,"y0":0},{"x":1357939917,"y":79.87419287692268,"y0":0},{"x":1357940067,"y":82.93983900635503,"y0":0},{"x":1357940217,"y":77.44217750560928,"y0":0},{"x":1357940367,"y":88.54556335221413,"y0":0},{"x":1357940517,"y":87.06262654874784,"y0":0},{"x":1357940667,"y":78.6765338016875,"y0":0},{"x":1357940817,"y":91.43548118770993,"y0":0},{"x":1357940967,"y":77.60090924855949,"y0":0},{"x":1357941117,"y":94.71985869359834,"y0":0},{"x":1357941267,"y":84.3057028949485,"y0":0},{"x":1357941417,"y":90.39193197393924,"y0":0},{"x":1357941567,"y":80.22157760814734,"y0":0},{"x":1357941717,"y":80.84198470532694,"y0":0},{"x":1357941867,"y":77.75348511930844,"y0":0},{"x":1357942017,"y":87.65094880974239,"y0":0},{"x":1357942167,"y":77.87658931853024,"y0":0},{"x":1357942317,"y":90.70234706630787,"y0":0},{"x":1357942467,"y":89.37094753101059,"y0":0},{"x":1357942617,"y":95.2002780318738,"y0":0},{"x":1357942767,"y":91.93934824059338,"y0":0},{"x":1357942917,"y":77.48492073826289,"y0":0},{"x":1357943067,"y":84.21133254730927,"y0":0},{"x":1357943217,"y":68.1427261714462,"y0":0},{"x":1357943367,"y":72.97381399354629,"y0":0},{"x":1357943517,"y":69.37473334400345,"y0":0},{"x":1357943667,"y":77.92315509629219,"y0":0},{"x":1357943817,"y":76.64727179795061,"y0":0},{"x":1357943967,"y":60.834632855523736,"y0":0},{"x":1357944117,"y":70.16602060635174,"y0":0},{"x":1357944267,"y":70.75936687593935,"y0":0},{"x":1357944417,"y":76.71958293573725,"y0":0},{"x":1357944567,"y":59.09278954180766,"y0":0},{"x":1357944717,"y":60.037974960684686,"y0":0},{"x":1357944867,"y":59.149587160702566,"y0":0},{"x":1357945017,"y":72.42947855580192,"y0":0},{"x":1357945167,"y":66.18209201245017,"y0":0},{"x":1357945317,"y":59.900774044468555,"y0":0},{"x":1357945467,"y":63.34385570302085,"y0":0},{"x":1357945617,"y":58.712841963343,"y0":0},{"x":1357945767,"y":73.57678013291536,"y0":0},{"x":1357945917,"y":72.3360325411486,"y0":0},{"x":1357946067,"y":68.61184617239158,"y0":0},{"x":1357946217,"y":60.79203312530409,"y0":0},{"x":1357946367,"y":58.24666575374316,"y0":0},{"x":1357946517,"y":64.20016301389856,"y0":0},{"x":1357946667,"y":75.8492680726096,"y0":0},{"x":1357946817,"y":65.95385141832014,"y0":0},{"x":1357946967,"y":65.9185240886994,"y0":0},{"x":1357947117,"y":75.66250178809892,"y0":0},{"x":1357947267,"y":71.70063691379528,"y0":0},{"x":1357947417,"y":80.5210699560788,"y0":0},{"x":1357947567,"y":65.48927706939067,"y0":0},{"x":1357947717,"y":64.46863586709817,"y0":0},{"x":1357947867,"y":82.14761117997277,"y0":0},{"x":1357948017,"y":76.43115652447945,"y0":0},{"x":1357948167,"y":75.07516109972157,"y0":0},{"x":1357948317,"y":81.97100478582475,"y0":0},{"x":1357948467,"y":72.42152970644908,"y0":0},{"x":1357948617,"y":71.79961855939133,"y0":0},{"x":1357948767,"y":77.503460500631,"y0":0},{"x":1357948917,"y":66.21965799112407,"y0":0},{"x":1357949067,"y":67.30135978854888,"y0":0},{"x":1357949217,"y":77.31297370807441,"y0":0},{"x":1357949367,"y":66.10808467263192,"y0":0},{"x":1357949517,"y":69.03134456270112,"y0":0},{"x":1357949667,"y":68.08819594225422,"y0":0},{"x":1357949817,"y":65.0300690909176,"y0":0},{"x":1357949967,"y":61.03039784237197,"y0":0},{"x":1357950117,"y":64.71285618316219,"y0":0},{"x":1357950267,"y":66.11175391723316,"y0":0},{"x":1357950417,"y":59.47477647539462,"y0":0},{"x":1357950567,"y":65.60006314386861,"y0":0},{"x":1357950717,"y":60.01721819029385,"y0":0},{"x":1357950867,"y":50.20398476979872,"y0":0},{"x":1357951017,"y":61.89535906624004,"y0":0},{"x":1357951167,"y":65.89371673427253,"y0":0},{"x":1357951317,"y":57.02634789220542,"y0":0},{"x":1357951467,"y":68.87161999183368,"y0":0},{"x":1357951617,"y":69.14022208612381,"y0":0},{"x":1357951767,"y":67.29112030712919,"y0":0},{"x":1357951917,"y":68.25088402990379,"y0":0},{"x":1357952067,"y":61.98567607667014,"y0":0},{"x":1357952217,"y":57.68366833292455,"y0":0},{"x":1357952367,"y":62.23116286714656,"y0":0},{"x":1357952517,"y":53.87578738880691,"y0":0},{"x":1357952667,"y":61.76435182442518,"y0":0},{"x":1357952817,"y":66.19150343927762,"y0":0},{"x":1357952967,"y":64.42121415648262,"y0":0},{"x":1357953117,"y":57.00567821467149,"y0":0},{"x":1357953267,"y":60.48320607456011,"y0":0},{"x":1357953417,"y":59.24212932841978,"y0":0},{"x":1357953567,"y":67.28236117830359,"y0":0},{"x":1357953717,"y":56.517709140513084,"y0":0},{"x":1357953867,"y":73.73232498571039,"y0":0},{"x":1357954017,"y":53.92837857985785,"y0":0},{"x":1357954167,"y":55.534888424870395,"y0":0},{"x":1357954317,"y":71.03129214737308,"y0":0},{"x":1357954467,"y":63.875934191673096,"y0":0},{"x":1357954617,"y":58.302176708773736,"y0":0},{"x":1357954767,"y":69.27408658576856,"y0":0},{"x":1357954917,"y":72.17933566580464,"y0":0},{"x":1357955067,"y":55.508505633907085,"y0":0},{"x":1357955217,"y":75.35620326188501,"y0":0},{"x":1357955367,"y":55.48039560811414,"y0":0},{"x":1357955517,"y":55.34158168330879,"y0":0},{"x":1357955667,"y":62.08769141767128,"y0":0},{"x":1357955817,"y":64.17977464245438,"y0":0},{"x":1357955967,"y":51.242537921869506,"y0":0},{"x":1357956117,"y":58.67843440875478,"y0":0},{"x":1357956267,"y":57.77400070030548,"y0":0},{"x":1357956417,"y":67.26265224538284,"y0":0},{"x":1357956567,"y":61.70582872339351,"y0":0},{"x":1357956717,"y":45.898214929321746,"y0":0},{"x":1357956867,"y":63.32917729033899,"y0":0},{"x":1357957017,"y":56.91037767023114,"y0":0},{"x":1357957167,"y":43.416140780531705,"y0":0},{"x":1357957317,"y":50.465580172757946,"y0":0},{"x":1357957467,"y":56.4492281050917,"y0":0}] 
	},
  results : {
    sma : {
      constant : [ {x: 0, y: null, y0: 0}, {x: 1, y: null, y0: 0}, { x: 2, y: null, y0: 0} , { x: 3, y: 2, y0: 0}, { x: 4, y: 3, y0: 0}, { x: 5, y: 4, y0: 0}, { x: 6, y: 5,y0: 0}, { x: 7, y: 6, y0: 0}, { x: 8, y: 7, y0: 0}],
      fib : [ {x: 0, y: null, y0: 0}, {x: 1, y: null, y0: 0}, { x: 1, y: null, y0: 0} , { x: 2, y: null, y0: 0}, { x: 3, y: null, y0: 0}, { x: 5, y: 2.4, y0: 0}, { x: 8, y: 3.8,y0: 0}, { x: 13, y: 6.2, y0: 0}, { x: 21, y: 10, y0: 0}],
      prime : [ {x: 2, y: null, y0: 0}, {x: 3, y: null, y0: 0}, { x: 5, y: null, y0: 0} , { x: 7, y: null, y0: 0}, { x: 11, y: null, y0: 0}, { x: 13, y: 7.8, y0: 0}, { x: 17, y: 10.6,y0: 0}, { x: 19, y: 13.4, y0: 0}, { x: 23, y: 16.6, y0: 0}]
    },
    stochastic : {
			k : {
      	constant : [ {x: 0, y: null, y0: 0}, {x: 1, y: null, y0: 0}, { x: 2, y: 100, y0: 0} , { x: 3, y: 100, y0: 0}, { x: 4, y: 100, y0: 0}, { x: 5, y: 100, y0: 0}, { x: 6, y: 100,y0: 0}, { x: 7, y: 100, y0: 0}, { x: 8, y: 100, y0: 0}],
      	fib : [ {x: 0, y: null, y0: 0}, {x: 1, y: null, y0: 0}, { x: 1, y: 100, y0: 0} , { x: 2, y: 100, y0: 0}, { x: 3, y: 100, y0: 0}, { x: 5, y: 100, y0: 0}, { x: 8, y: 100,y0: 0}, { x: 13, y: 100, y0: 0}, { x: 21, y: 100, y0: 0}],
      	prime : [ {x: 2, y: null, y0: 0}, {x: 3, y: null, y0: 0}, { x: 5, y: 100, y0: 0} , { x: 7, y: 100, y0: 0}, { x: 11, y: 100, y0: 0}, { x: 13, y: 100, y0: 0}, { x: 17, y: 100,y0: 0}, { x: 19, y: 100, y0: 0}, { x: 23, y: 100, y0: 0}],
				rand_old : [ {x: 60, y: 66.6, y0: 0}, {x: 70, y: 67.1, y0: 0}, { x: 80, y: 70, y0: 0} , { x: 90, y: 71.8, y0: 0}, { x: 100, y: 74.4, y0: 0}, { x: 103, y: 74.8, y0: 0}],
    		rand : [{"x":1357935117,"y0":0,"y":null},{"x":1357935267,"y0":0,"y":null},{"x":1357935417,"y0":0,"y":null},{"x":1357935567,"y0":0,"y":null},{"x":1357935717,"y0":0,"y":null},{"x":1357935867,"y0":0,"y":null},{"x":1357936017,"y0":0,"y":null},{"x":1357936167,"y0":0,"y":null},{"x":1357936317,"y0":0,"y":null},{"x":1357936467,"y0":0,"y":null},{"x":1357936617,"y0":0,"y":null},{"x":1357936767,"y0":0,"y":null},{"x":1357936917,"y0":0,"y":null},{"x":1357937067,"y0":0,"y":51.78911337410871},{"x":1357937217,"y0":0,"y":18.217547991624297},{"x":1357937367,"y0":0,"y":26.649412250099786},{"x":1357937517,"y0":0,"y":0},{"x":1357937667,"y0":0,"y":2.616946247431608},{"x":1357937817,"y0":0,"y":0},{"x":1357937967,"y0":0,"y":6.368243761160515},{"x":1357938117,"y0":0,"y":0},{"x":1357938267,"y0":0,"y":0},{"x":1357938417,"y0":0,"y":38.00821870557897},{"x":1357938567,"y0":0,"y":58.155602852934095},{"x":1357938717,"y0":0,"y":44.8277670381572},{"x":1357938867,"y0":0,"y":12.512765697512595},{"x":1357939017,"y0":0,"y":26.814144236950504},{"x":1357939167,"y0":0,"y":12.255473788283885},{"x":1357939317,"y0":0,"y":33.644564356906855},{"x":1357939467,"y0":0,"y":60.20611479873881},{"x":1357939617,"y0":0,"y":39.783587963838706},{"x":1357939767,"y0":0,"y":40.1461103498481},{"x":1357939917,"y0":0,"y":32.11928256670104},{"x":1357940067,"y0":0,"y":41.448725805915494},{"x":1357940217,"y0":0,"y":24.71811869924362},{"x":1357940367,"y0":0,"y":58.5081921928787},{"x":1357940517,"y0":0,"y":53.995285565314816},{"x":1357940667,"y0":0,"y":28.474539536817936},{"x":1357940817,"y0":0,"y":67.30285513632931},{"x":1357940967,"y0":0,"y":25.20117470883915},{"x":1357941117,"y0":0,"y":77.29794661905449},{"x":1357941267,"y0":0,"y":45.60535350628383},{"x":1357941417,"y0":0,"y":64.12710270237072},{"x":1357941567,"y0":0,"y":33.17645159251107},{"x":1357941717,"y0":0,"y":35.06448842193292},{"x":1357941867,"y0":0,"y":25.665497029722804},{"x":1357942017,"y0":0,"y":55.78568109975676},{"x":1357942167,"y0":0,"y":26.040130497076518},{"x":1357942317,"y0":0,"y":65.07176489186645},{"x":1357942467,"y0":0,"y":61.020019886459565},{"x":1357942617,"y0":0,"y":78.75996955263155},{"x":1357942767,"y0":0,"y":68.83623468227738},{"x":1357942917,"y0":0,"y":24.848195866035276},{"x":1357943067,"y0":0,"y":45.31816354221315},{"x":1357943217,"y0":0,"y":0},{"x":1357943367,"y0":0,"y":14.193633495747392},{"x":1357943517,"y0":0,"y":3.619610927256558},{"x":1357943667,"y0":0,"y":28.73469262045527},{"x":1357943817,"y0":0,"y":24.986174566785625},{"x":1357943967,"y0":0,"y":0},{"x":1357944117,"y0":0,"y":22.569513689767977},{"x":1357944267,"y0":0,"y":24.004620354694865},{"x":1357944417,"y0":0,"y":38.4203944654264},{"x":1357944567,"y0":0,"y":0},{"x":1357944717,"y0":0,"y":2.193670218506253},{"x":1357944867,"y0":0,"y":0.13182095551140866},{"x":1357945017,"y0":0,"y":30.952971680665758},{"x":1357945167,"y0":0,"y":16.453482448246117},{"x":1357945317,"y0":0,"y":1.8752421536587396},{"x":1357945467,"y0":0,"y":9.866251688301155},{"x":1357945617,"y0":0,"y":0},{"x":1357945767,"y0":0,"y":34.196001252687395},{"x":1357945917,"y0":0,"y":31.341535247898722},{"x":1357946067,"y0":0,"y":22.77366579914413},{"x":1357946217,"y0":0,"y":4.783390698203059},{"x":1357946367,"y0":0,"y":0},{"x":1357946517,"y0":0,"y":13.551290190376863},{"x":1357946667,"y0":0,"y":40.066865189509365},{"x":1357946817,"y0":0,"y":17.54301798218498},{"x":1357946967,"y0":0,"y":17.46260627215603},{"x":1357947117,"y0":0,"y":39.64174966352747},{"x":1357947267,"y0":0,"y":30.623792946545926},{"x":1357947417,"y0":0,"y":50.70077333935334},{"x":1357947567,"y0":0,"y":16.48555855250106},{"x":1357947717,"y0":0,"y":14.162385380811434},{"x":1357947867,"y0":0,"y":54.40309000608218},{"x":1357948017,"y0":0,"y":41.39135379261852},{"x":1357948167,"y0":0,"y":38.30485073487835},{"x":1357948317,"y0":0,"y":54.00110031968508},{"x":1357948467,"y0":0,"y":32.26468182286798},{"x":1357948617,"y0":0,"y":30.849093966161774},{"x":1357948767,"y0":0,"y":43.83212124713234},{"x":1357948917,"y0":0,"y":18.14804421217631},{"x":1357949067,"y0":0,"y":20.610202892328832},{"x":1357949217,"y0":0,"y":43.39853713840278},{"x":1357949367,"y0":0,"y":17.894082154192432},{"x":1357949517,"y0":0,"y":24.547976720893367},{"x":1357949667,"y0":0,"y":22.401191379466},{"x":1357949817,"y0":0,"y":15.440314000920914},{"x":1357949967,"y0":0,"y":6.336302797641366},{"x":1357950117,"y0":0,"y":14.718277191750584},{"x":1357950267,"y0":0,"y":17.902434051606352},{"x":1357950417,"y0":0,"y":2.795413191233699},{"x":1357950567,"y0":0,"y":16.73772869362986},{"x":1357950717,"y0":0,"y":4.030113531008997},{"x":1357950867,"y0":0,"y":0},{"x":1357951017,"y0":0,"y":22.493903368218355},{"x":1357951167,"y0":0,"y":30.186640657766407},{"x":1357951317,"y0":0,"y":13.126051131989179},{"x":1357951467,"y0":0,"y":35.91604991428746},{"x":1357951617,"y0":0,"y":36.432833433510034},{"x":1357951767,"y0":0,"y":32.87520918164033},{"x":1357951917,"y0":0,"y":34.72176989289774},{"x":1357952067,"y0":0,"y":22.667670972745345},{"x":1357952217,"y0":0,"y":14.390718749378802},{"x":1357952367,"y0":0,"y":23.139981242106185},{"x":1357952517,"y0":0,"y":7.064453776343595},{"x":1357952667,"y0":0,"y":22.241848805324295},{"x":1357952817,"y0":0,"y":30.759574617186697},{"x":1357952967,"y0":0,"y":27.35358358043542},{"x":1357953117,"y0":0,"y":13.086283204172345},{"x":1357953267,"y0":0,"y":19.776957341979372},{"x":1357953417,"y0":0,"y":17.38915761096564},{"x":1357953567,"y0":0,"y":32.8583568431216},{"x":1357953717,"y0":0,"y":12.147443259227702},{"x":1357953867,"y0":0,"y":45.267921273581756},{"x":1357954017,"y0":0,"y":7.165637874938348},{"x":1357954167,"y0":0,"y":10.256521486867795},{"x":1357954317,"y0":0,"y":40.07120358074068},{"x":1357954467,"y0":0,"y":26.304478956286623},{"x":1357954617,"y0":0,"y":15.580712952457231},{"x":1357954767,"y0":0,"y":36.69038528696154},{"x":1357954917,"y0":0,"y":42.28000977506203},{"x":1357955067,"y0":0,"y":10.205761675791244},{"x":1357955217,"y0":0,"y":48.392221300238106},{"x":1357955367,"y0":0,"y":10.151678709338178},{"x":1357955517,"y0":0,"y":9.88460428920905},{"x":1357955667,"y0":0,"y":22.86394586433392},{"x":1357955817,"y0":0,"y":26.889060166838608},{"x":1357955967,"y0":0,"y":1.9981495462470613},{"x":1357956117,"y0":0,"y":16.30462308742724},{"x":1357956267,"y0":0,"y":14.564515900284112},{"x":1357956417,"y0":0,"y":32.820437363223924},{"x":1357956567,"y0":0,"y":22.129251864533895},{"x":1357956717,"y0":0,"y":0},{"x":1357956867,"y0":0,"y":30.97102450584395},{"x":1357957017,"y0":0,"y":19.56621528102152},{"x":1357957167,"y0":0,"y":0},{"x":1357957317,"y0":0,"y":11.996270612743968},{"x":1357957467,"y0":0,"y":22.178847673668628}] 
			},
			d : {
				constant : [ {x: 0, y: null, y0: 0}, {x: 1, y: null, y0: 0}, { x: 2, y: null, y0: 0} , { x: 3, y: 100, y0: 0}, { x: 4, y: 100, y0: 0}, { x: 5, y: 100, y0: 0}, { x: 6, y: 100,y0: 0}, { x: 7, y: 100, y0: 0}, { x: 8, y: 100, y0: 0}],
      	fib : [ {x: 0, y: null, y0: 0}, {x: 1, y: null, y0: 0}, { x: 1, y: null, y0: 0} , { x: 2, y: 100, y0: 0}, { x: 3, y: 100, y0: 0}, { x: 5, y: 100, y0: 0}, { x: 8, y: 100,y0: 0}, { x: 13, y: 100, y0: 0}, { x: 21, y: 100, y0: 0}],
      	prime : [ {x: 2, y: null, y0: 0}, {x: 3, y: null, y0: 0}, { x: 5, y: null, y0: 0} , { x: 7, y: 100, y0: 0}, { x: 11, y: 100, y0: 0}, { x: 13, y: 100, y0: 0}, { x: 17, y: 100,y0: 0}, { x: 19, y: 100, y0: 0}, { x: 23, y: 100, y0: 0}],
				rand : [{"x":1357935117,"y0":0,"y":null},{"x":1357935267,"y0":0,"y":null},{"x":1357935417,"y0":0,"y":null},{"x":1357935567,"y0":0,"y":null},{"x":1357935717,"y0":0,"y":null},{"x":1357935867,"y0":0,"y":null},{"x":1357936017,"y0":0,"y":null},{"x":1357936167,"y0":0,"y":null},{"x":1357936317,"y0":0,"y":null},{"x":1357936467,"y0":0,"y":null},{"x":1357936617,"y0":0,"y":null},{"x":1357936767,"y0":0,"y":null},{"x":1357936917,"y0":0,"y":null},{"x":1357937067,"y0":0,"y":null},{"x":1357937217,"y0":0,"y":null},{"x":1357937367,"y0":0,"y":32.2186912052776},{"x":1357937517,"y0":0,"y":14.95565341390803},{"x":1357937667,"y0":0,"y":9.755452832510464},{"x":1357937817,"y0":0,"y":0.8723154158105361},{"x":1357937967,"y0":0,"y":2.9950633361973744},{"x":1357938117,"y0":0,"y":2.1227479203868382},{"x":1357938267,"y0":0,"y":2.1227479203868382},{"x":1357938417,"y0":0,"y":12.669406235192989},{"x":1357938567,"y0":0,"y":32.05460718617102},{"x":1357938717,"y0":0,"y":46.99719619889009},{"x":1357938867,"y0":0,"y":38.49871186286796},{"x":1357939017,"y0":0,"y":28.051558990873435},{"x":1357939167,"y0":0,"y":17.19412790758233},{"x":1357939317,"y0":0,"y":24.238060794047083},{"x":1357939467,"y0":0,"y":35.36871764797652},{"x":1357939617,"y0":0,"y":44.54475570649479},{"x":1357939767,"y0":0,"y":46.71193770414187},{"x":1357939917,"y0":0,"y":37.34966029346261},{"x":1357940067,"y0":0,"y":37.90470624082155},{"x":1357940217,"y0":0,"y":32.76204235728672},{"x":1357940367,"y0":0,"y":41.558345566012605},{"x":1357940517,"y0":0,"y":45.740532152479055},{"x":1357940667,"y0":0,"y":46.992672431670485},{"x":1357940817,"y0":0,"y":49.92422674615401},{"x":1357940967,"y0":0,"y":40.32618979399547},{"x":1357941117,"y0":0,"y":56.60065882140765},{"x":1357941267,"y0":0,"y":49.368158278059155},{"x":1357941417,"y0":0,"y":62.34346760923635},{"x":1357941567,"y0":0,"y":47.63630260038855},{"x":1357941717,"y0":0,"y":44.12268090560491},{"x":1357941867,"y0":0,"y":31.302145681388932},{"x":1357942017,"y0":0,"y":38.83855551713749},{"x":1357942167,"y0":0,"y":35.83043620885203},{"x":1357942317,"y0":0,"y":48.96585882956657},{"x":1357942467,"y0":0,"y":50.710638425134185},{"x":1357942617,"y0":0,"y":68.28391811031919},{"x":1357942767,"y0":0,"y":69.53874137378949},{"x":1357942917,"y0":0,"y":57.48146670031473},{"x":1357943067,"y0":0,"y":46.334198030175266},{"x":1357943217,"y0":0,"y":23.388786469416143},{"x":1357943367,"y0":0,"y":19.83726567932018},{"x":1357943517,"y0":0,"y":5.937748141001317},{"x":1357943667,"y0":0,"y":15.515979014486406},{"x":1357943817,"y0":0,"y":19.113492704832485},{"x":1357943967,"y0":0,"y":17.9069557290803},{"x":1357944117,"y0":0,"y":15.851896085517867},{"x":1357944267,"y0":0,"y":15.524711348154279},{"x":1357944417,"y0":0,"y":28.331509503296413},{"x":1357944567,"y0":0,"y":20.808338273373753},{"x":1357944717,"y0":0,"y":13.538021561310885},{"x":1357944867,"y0":0,"y":0.7751637246725539},{"x":1357945017,"y0":0,"y":11.092820951561139},{"x":1357945167,"y0":0,"y":15.846091694807761},{"x":1357945317,"y0":0,"y":16.427232094190206},{"x":1357945467,"y0":0,"y":9.39832543006867},{"x":1357945617,"y0":0,"y":3.913831280653298},{"x":1357945767,"y0":0,"y":14.687417646996183},{"x":1357945917,"y0":0,"y":21.84584550019537},{"x":1357946067,"y0":0,"y":29.437067433243413},{"x":1357946217,"y0":0,"y":19.63286391508197},{"x":1357946367,"y0":0,"y":9.18568549911573},{"x":1357946517,"y0":0,"y":6.111560296193307},{"x":1357946667,"y0":0,"y":17.872718459962076},{"x":1357946817,"y0":0,"y":23.720391120690405},{"x":1357946967,"y0":0,"y":25.024163147950123},{"x":1357947117,"y0":0,"y":24.88245797262283},{"x":1357947267,"y0":0,"y":29.242716294076473},{"x":1357947417,"y0":0,"y":40.32210531647558},{"x":1357947567,"y0":0,"y":32.60337494613344},{"x":1357947717,"y0":0,"y":27.11623909088861},{"x":1357947867,"y0":0,"y":28.35034464646489},{"x":1357948017,"y0":0,"y":36.65227639317071},{"x":1357948167,"y0":0,"y":44.69976484452635},{"x":1357948317,"y0":0,"y":44.56576828239398},{"x":1357948467,"y0":0,"y":41.52354429247713},{"x":1357948617,"y0":0,"y":39.03829203623828},{"x":1357948767,"y0":0,"y":35.64863234538736},{"x":1357948917,"y0":0,"y":30.943086475156804},{"x":1357949067,"y0":0,"y":27.53012278387916},{"x":1357949217,"y0":0,"y":27.385594747635974},{"x":1357949367,"y0":0,"y":27.300940728308017},{"x":1357949517,"y0":0,"y":28.613532004496193},{"x":1357949667,"y0":0,"y":21.61441675151727},{"x":1357949817,"y0":0,"y":20.796494033760094},{"x":1357949967,"y0":0,"y":14.725936059342759},{"x":1357950117,"y0":0,"y":12.16496466343762},{"x":1357950267,"y0":0,"y":12.985671346999434},{"x":1357950417,"y0":0,"y":11.805374811530212},{"x":1357950567,"y0":0,"y":12.47852531215664},{"x":1357950717,"y0":0,"y":7.854418471957519},{"x":1357950867,"y0":0,"y":6.922614074879619},{"x":1357951017,"y0":0,"y":8.841338966409117},{"x":1357951167,"y0":0,"y":17.56018134199492},{"x":1357951317,"y0":0,"y":21.935531719324644},{"x":1357951467,"y0":0,"y":26.40958056801435},{"x":1357951617,"y0":0,"y":28.491644826595557},{"x":1357951767,"y0":0,"y":35.07469750981261},{"x":1357951917,"y0":0,"y":34.67660416934937},{"x":1357952067,"y0":0,"y":30.088216682427802},{"x":1357952217,"y0":0,"y":23.926719871673964},{"x":1357952367,"y0":0,"y":20.066123654743446},{"x":1357952517,"y0":0,"y":14.865051255942861},{"x":1357952667,"y0":0,"y":17.48209460792469},{"x":1357952817,"y0":0,"y":20.02195906628486},{"x":1357952967,"y0":0,"y":26.785002334315475},{"x":1357953117,"y0":0,"y":23.733147133931485},{"x":1357953267,"y0":0,"y":20.07227470886238},{"x":1357953417,"y0":0,"y":16.750799385705786},{"x":1357953567,"y0":0,"y":23.341490598688868},{"x":1357953717,"y0":0,"y":20.798319237771647},{"x":1357953867,"y0":0,"y":30.091240458643682},{"x":1357954017,"y0":0,"y":21.527000802582602},{"x":1357954167,"y0":0,"y":20.8966935451293},{"x":1357954317,"y0":0,"y":19.164454314182276},{"x":1357954467,"y0":0,"y":25.544068007965034},{"x":1357954617,"y0":0,"y":27.318798496494846},{"x":1357954767,"y0":0,"y":26.191859065235132},{"x":1357954917,"y0":0,"y":31.517036004826934},{"x":1357955067,"y0":0,"y":29.725385579271602},{"x":1357955217,"y0":0,"y":33.62599758369712},{"x":1357955367,"y0":0,"y":22.916553895122508},{"x":1357955517,"y0":0,"y":22.809501432928442},{"x":1357955667,"y0":0,"y":14.30007628762705},{"x":1357955817,"y0":0,"y":19.879203440127196},{"x":1357955967,"y0":0,"y":17.2503851924732},{"x":1357956117,"y0":0,"y":15.063944266837638},{"x":1357956267,"y0":0,"y":10.955762844652805},{"x":1357956417,"y0":0,"y":21.229858783645092},{"x":1357956567,"y0":0,"y":23.17140170934731},{"x":1357956717,"y0":0,"y":18.316563075919273},{"x":1357956867,"y0":0,"y":17.70009212345928},{"x":1357957017,"y0":0,"y":16.845746595621822},{"x":1357957167,"y0":0,"y":16.845746595621822},{"x":1357957317,"y0":0,"y":10.520828631255164},{"x":1357957467,"y0":0,"y":11.391706095470866}]
			}
		},
    linreg : {
      constant : [ {x: 0, y: 0, y0: 0}, {x: 1, y: 1, y0: 0}, { x: 2, y: 2, y0: 0} , { x: 3, y: 3, y0: 0}, { x: 4, y: 4, y0: 0}, { x: 5, y: 5, y0: 0}, { x: 6, y: 6,y0: 0}, { x: 7, y: 7, y0: 0}, { x: 8, y: 8, y0: 0}],
      fib : [ {x: 0, y:0, y0: 0}, {x: 1, y: 1, y0: 0}, { x: 1, y: 1, y0: 0} , { x: 2, y: 2, y0: 0}, { x: 3, y: 3, y0: 0}, { x: 5, y: 5, y0: 0}, { x: 8, y: 8, y0: 0}, { x: 13, y: 13, y0: 0}, { x: 21, y: 21, y0: 0}],
      prime : [ {x: 2, y: 2, y0: 0}, {x: 3, y: 3, y0: 0}, { x: 5, y: 5, y0: 0} , { x: 7, y: 7, y0: 0}, { x: 11, y: 11, y0: 0}, { x: 13, y: 13, y0: 0}, { x: 17, y: 17,y0: 0}, { x: 19, y: 19, y0: 0}, { x: 23, y: 23, y0: 0}],
    	rand_old : [ {x: 60, y: 65.89729323308265, y0: 0}, {x: 70, y: 67.94737998843259, y0: 0}, { x: 80, y: 69.99746674378252, y0: 0} , { x: 90, y: 72.04755349913245, y0: 0}, { x: 100, y: 74.09764025448239, y0: 0}, { x: 103, y: 74.71266628108737, y0: 0}]
		}
  }
};


////////////   MOMENTUM
function momentum(data_set, period, test, msg){
  var tech = new Rickshaw.Technicals.Momentum();
  var data = tech.calc({
    datum: sample_data,
    period: period
	});

  for(var i in data.momentum){
    if(i < period['p']) continue;
	  test.equal(data.momentum[i].y, sample_data.data[data_set][i].y - sample_data.data[data_set][i-period['p']].y, msg);
  }
  test.done();
}

exports.constantMomentum = function(test) {
  var period = new Array();
  period['p'] = 1;
  momentum('constant', period, test, 'constant momentum');
};
exports.fibMomentum = function(test) {
  var period = new Array();
  period['p'] = 2;
  momentum('fib', period, test, 'fib momentum');
};
exports.primeMomentum = function(test) {
  var period = new Array();
  period['p'] = 3;
  momentum('prime', period, test, 'prime momentum');
};


////////////   sma
function sma(data_set, period, test, msg){
  var tech = new Rickshaw.Technicals.SMA();
	var results = sample_data.results.sma[data_set];
  var data = tech.calc({
    datum: sample_data.data[data_set],
    period: period
	});
  for(var i in data.sma){
	  test.equal(data.sma[i].y, results[i].y, msg);
  }
  test.done();
}

exports.constantsma = function(test) {
  var period = new Array();
  period['p'] = 3;
  sma('constant', period, test, 'constant sma');
};

exports.fibsma = function(test) {
  var period = new Array();
  period['p'] = 5;
  sma('fib', period, test, 'fib sma');
};

exports.primesma = function(test) {
  var period = new Array();
  period['p'] = 5;
  sma('prime', period, test, 'prime sma');
};



////////////   stochastic
function stochastic(data_set, period, test, msg){
  var tech = new Rickshaw.Technicals.FStochastic();
	var results_k = sample_data.results.stochastic.k[data_set];
	var results_d = sample_data.results.stochastic.d[data_set];
  var data = tech.calc({
    datum: sample_data.data[data_set],
    period: period
	});
 	for(var i in data['%k']){
	  test.equal(data['%k'][i].y, results_k[i].y, msg);
  }
	for(var i in data['%d']){
	  test.equal(data['%d'][i].y, results_d[i].y, msg);
  }
	test.done();
}

exports.constantstochastic = function(test) {
  var period = new Array();
	period['%k'] = 3;
	period['%d'] = 2;
  stochastic('constant', period, test, 'constant stochastic');
};

exports.fibstochastic = function(test) {
  var period = new Array();
	period['%k'] = 3;
	period['%d'] = 2;
  stochastic('fib', period, test, 'fib stochastic');
};

exports.primestochastic = function(test) {
  var period = new Array();
	period['%k'] = 3;
	period['%d'] = 2;
  stochastic('prime', period, test, 'prime stochastic');
};

exports.randstochastic = function(test) {
  var period = new Array();
	period['%k'] = 14;
	period['%d'] = 3;
  stochastic('rand', period, test, 'prime stochastic');
};

////////////   linear regression
function linreg(data_set, period, test, msg){
  var tech = new Rickshaw.Technicals.Linreg();
	var results = sample_data.results.linreg[data_set];
  var data = tech.calc({
    datum: sample_data.data[data_set]
	});
	for(var i in data.linreg){
	  test.equal(data.linreg[i].y, results[i].y, msg);
  }
  test.done();
}

exports.constantlinreg = function(test) {
  var period = new Array();
  period['p'] = 3;
  linreg('constant', period, test, 'constant linreg');
};

exports.fiblinreg = function(test) {
  var period = new Array();
  period['p'] = 3;
  linreg('fib', period, test, 'fib linreg');
};
exports.primelinreg = function(test) {
  var period = new Array();
  period['p'] = 3;
  linreg('prime', period, test, 'prime linreg');
};
exports.randlinreg = function(test) {
  var period = new Array();
  period['p'] = 3;
  linreg('rand_old', period, test, 'rand linreg');
};
