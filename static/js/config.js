// Color Data
const COLOR_DATA = [{"color":"#006837","value":0},{"color":"#016a38","value":2},{"color":"#026c39","value":4},{"color":"#036e3a","value":6},{"color":"#04703b","value":8},{"color":"#05713c","value":10},{"color":"#06733d","value":12},{"color":"#07753e","value":14},{"color":"#08773f","value":16},{"color":"#0a7940","value":18},{"color":"#0b7b41","value":20},{"color":"#0c7d42","value":22},{"color":"#0d7e43","value":24},{"color":"#0e8044","value":26},{"color":"#108245","value":28},{"color":"#118446","value":30},{"color":"#128646","value":32},{"color":"#148747","value":34},{"color":"#158948","value":36},{"color":"#178b49","value":38},{"color":"#188d4a","value":40},{"color":"#1a8f4b","value":42},{"color":"#1c904c","value":44},{"color":"#1e924d","value":46},{"color":"#1f944e","value":48},{"color":"#21954f","value":50},{"color":"#23974f","value":52},{"color":"#259950","value":54},{"color":"#289a51","value":56},{"color":"#2a9c52","value":58},{"color":"#2c9d53","value":60},{"color":"#2e9f54","value":62},{"color":"#31a154","value":64},{"color":"#33a255","value":66},{"color":"#36a456","value":68},{"color":"#38a557","value":70},{"color":"#3ba757","value":72},{"color":"#3da858","value":74},{"color":"#40aa59","value":76},{"color":"#43ab5a","value":78},{"color":"#46ad5a","value":80},{"color":"#48ae5b","value":82},{"color":"#4baf5c","value":84},{"color":"#4eb15c","value":86},{"color":"#51b25d","value":88},{"color":"#53b45e","value":90},{"color":"#56b55e","value":92},{"color":"#59b65f","value":94},{"color":"#5cb85f","value":96},{"color":"#5eb960","value":98},{"color":"#61ba60","value":100},{"color":"#64bc61","value":102},{"color":"#67bd62","value":104},{"color":"#69be62","value":106},{"color":"#6cbf62","value":108},{"color":"#6fc063","value":110},{"color":"#71c263","value":112},{"color":"#74c364","value":114},{"color":"#77c464","value":116},{"color":"#79c565","value":118},{"color":"#7cc665","value":120},{"color":"#7fc866","value":122},{"color":"#81c966","value":124},{"color":"#84ca66","value":126},{"color":"#86cb67","value":128},{"color":"#89cc67","value":130},{"color":"#8bcd68","value":132},{"color":"#8ece68","value":134},{"color":"#90cf69","value":136},{"color":"#92d069","value":138},{"color":"#95d16a","value":140},{"color":"#97d26b","value":142},{"color":"#99d36b","value":144},{"color":"#9cd56c","value":146},{"color":"#9ed66c","value":148},{"color":"#a0d76d","value":150},{"color":"#a3d86e","value":152},{"color":"#a5d86f","value":154},{"color":"#a7d970","value":156},{"color":"#a9da70","value":158},{"color":"#acdb71","value":160},{"color":"#aedc72","value":162},{"color":"#b0dd73","value":164},{"color":"#b2de74","value":166},{"color":"#b4df75","value":168},{"color":"#b6e076","value":170},{"color":"#b8e178","value":172},{"color":"#bae279","value":174},{"color":"#bce37a","value":176},{"color":"#bee47b","value":178},{"color":"#c0e47c","value":180},{"color":"#c2e57e","value":182},{"color":"#c4e67f","value":184},{"color":"#c6e780","value":186},{"color":"#c8e882","value":188},{"color":"#cae983","value":190},{"color":"#cce985","value":192},{"color":"#ceea86","value":194},{"color":"#d0eb88","value":196},{"color":"#d2ec89","value":198},{"color":"#d3ec8b","value":200},{"color":"#d5ed8d","value":202},{"color":"#d7ee8e","value":204},{"color":"#d9ef90","value":206},{"color":"#daef92","value":208},{"color":"#dcf093","value":210},{"color":"#def195","value":212},{"color":"#dff297","value":214},{"color":"#e1f298","value":216},{"color":"#e2f39a","value":218},{"color":"#e4f39c","value":220},{"color":"#e6f49d","value":222},{"color":"#e7f59f","value":224},{"color":"#e8f5a1","value":226},{"color":"#eaf6a2","value":228},{"color":"#ebf6a4","value":230},{"color":"#edf6a5","value":232},{"color":"#eef7a6","value":234},{"color":"#eff7a8","value":236},{"color":"#f0f7a9","value":238},{"color":"#f1f8aa","value":240},{"color":"#f3f8ab","value":242},{"color":"#f4f8ab","value":244},{"color":"#f5f8ac","value":246},{"color":"#f6f8ad","value":248},{"color":"#f7f8ad","value":250},{"color":"#f7f8ad","value":252},{"color":"#f8f7ae","value":254},{"color":"#f9f7ae","value":256},{"color":"#faf7ad","value":258},{"color":"#faf6ad","value":260},{"color":"#fbf6ad","value":262},{"color":"#fbf5ac","value":264},{"color":"#fcf5ab","value":266},{"color":"#fcf4ab","value":268},{"color":"#fcf3aa","value":270},{"color":"#fdf2a9","value":272},{"color":"#fdf1a7","value":274},{"color":"#fdf0a6","value":276},{"color":"#fdefa5","value":278},{"color":"#feeea3","value":280},{"color":"#feeda2","value":282},{"color":"#feeca0","value":284},{"color":"#feeb9f","value":286},{"color":"#feea9d","value":288},{"color":"#fee89b","value":290},{"color":"#fee79a","value":292},{"color":"#fee698","value":294},{"color":"#fee496","value":296},{"color":"#fee394","value":298},{"color":"#fee192","value":300},{"color":"#fee090","value":302},{"color":"#fede8f","value":304},{"color":"#fedd8d","value":306},{"color":"#fedb8b","value":308},{"color":"#feda89","value":310},{"color":"#fed887","value":312},{"color":"#fed685","value":314},{"color":"#fed584","value":316},{"color":"#fed382","value":318},{"color":"#fed180","value":320},{"color":"#fecf7e","value":322},{"color":"#fecd7d","value":324},{"color":"#fecc7b","value":326},{"color":"#fdca79","value":328},{"color":"#fdc878","value":330},{"color":"#fdc676","value":332},{"color":"#fdc474","value":334},{"color":"#fdc273","value":336},{"color":"#fdc071","value":338},{"color":"#fdbe70","value":340},{"color":"#fdbc6e","value":342},{"color":"#fdba6d","value":344},{"color":"#fdb86b","value":346},{"color":"#fcb56a","value":348},{"color":"#fcb368","value":350},{"color":"#fcb167","value":352},{"color":"#fcaf65","value":354},{"color":"#fcad64","value":356},{"color":"#fcaa62","value":358},{"color":"#fba861","value":360},{"color":"#fba660","value":362},{"color":"#fba35e","value":364},{"color":"#fba15d","value":366},{"color":"#fa9f5b","value":368},{"color":"#fa9c5a","value":370},{"color":"#fa9a59","value":372},{"color":"#f99858","value":374},{"color":"#f99556","value":376},{"color":"#f99355","value":378},{"color":"#f89054","value":380},{"color":"#f88e53","value":382},{"color":"#f88b51","value":384},{"color":"#f78950","value":386},{"color":"#f7864f","value":388},{"color":"#f6844e","value":390},{"color":"#f6824d","value":392},{"color":"#f57f4b","value":394},{"color":"#f57d4a","value":396},{"color":"#f47a49","value":398},{"color":"#f37848","value":400},{"color":"#f37547","value":402},{"color":"#f27346","value":404},{"color":"#f17044","value":406},{"color":"#f16e43","value":408},{"color":"#f06b42","value":410},{"color":"#ef6941","value":412},{"color":"#ee6640","value":414},{"color":"#ed643f","value":416},{"color":"#ed613e","value":418},{"color":"#ec5f3d","value":420},{"color":"#eb5d3c","value":422},{"color":"#ea5a3a","value":424},{"color":"#e95839","value":426},{"color":"#e85538","value":428},{"color":"#e75337","value":430},{"color":"#e55136","value":432},{"color":"#e44e35","value":434},{"color":"#e34c34","value":436},{"color":"#e24a33","value":438},{"color":"#e14733","value":440},{"color":"#e04532","value":442},{"color":"#de4331","value":444},{"color":"#dd4030","value":446},{"color":"#dc3e2f","value":448},{"color":"#da3c2e","value":450},{"color":"#d93a2e","value":452},{"color":"#d7382d","value":454},{"color":"#d6352c","value":456},{"color":"#d4332c","value":458},{"color":"#d3312b","value":460},{"color":"#d12f2b","value":462},{"color":"#d02d2a","value":464},{"color":"#ce2b2a","value":466},{"color":"#cc2929","value":468},{"color":"#cb2729","value":470},{"color":"#c92529","value":472},{"color":"#c72328","value":474},{"color":"#c52128","value":476},{"color":"#c41f28","value":478},{"color":"#c21d28","value":480},{"color":"#c01b27","value":482},{"color":"#be1927","value":484},{"color":"#bc1727","value":486},{"color":"#ba1527","value":488},{"color":"#b81327","value":490},{"color":"#b61127","value":492},{"color":"#b50f26","value":494},{"color":"#b30d26","value":496},{"color":"#b10b26","value":498},{"color":"#af0926","value":500},{"color":"#ad0826","value":502},{"color":"#ab0626","value":504},{"color":"#a90426","value":506},{"color":"#a70226","value":508},{"color":"#a50026","value":510}]