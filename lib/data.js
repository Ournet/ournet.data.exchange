'use strict';

var utils = require('./utils');
var _ = utils._;
var internal = {};

internal.COUNTRIES = ['md', 'ro', 'ru', 'bg'];

internal.SOURCES = {
	md: [{
			id: 2,
			isCentral: true,
			uniqueName: 'bnm',
			country: 'md',
			name: 'Banca Nationala a Moldovei',
			shortName: 'Banca Nationala',
			abbr: 'BNM',
			names: {
				ru: {
					name: 'Национальный банк Молдовы',
					shortName: 'Национальный банк'
				}
			}
		}, {
			id: 6,
			uniqueName: 'bem',
			country: 'md',
			name: 'Banca de Economii',
			abbr: 'BEM'
		}, {
			id: 7,
			uniqueName: 'soc',
			country: 'md',
			name: 'Banca Socială',
			abbr: 'SOC'
		}, {
			id: 8,
			uniqueName: 'bcr',
			country: 'md',
			name: 'BCR Chișinău',
			abbr: 'BCR'
		}, {
			id: 9,
			uniqueName: 'come',
			country: 'md',
			name: 'Comerțbank',
			abbr: 'COME'
		}, {
			id: 10,
			uniqueName: 'eneg',
			country: 'md',
			name: 'Energbank',
			abbr: 'ENEG'
		}, {
			id: 11,
			uniqueName: 'ecb',
			country: 'md',
			name: 'EuroCreditBank',
			abbr: 'ECB'
		}, {
			id: 12,
			uniqueName: 'exim',
			country: 'md',
			name: 'Eximbank',
			abbr: 'EXIM'
		}, {
			id: 13,
			uniqueName: 'fin',
			country: 'md',
			name: 'FinComBank',
			abbr: 'FIN'
		}, {
			id: 14,
			uniqueName: 'mobi',
			country: 'md',
			name: 'Mobiasbanca',
			abbr: 'MOBI'
		}, {
			id: 15,
			uniqueName: 'micb',
			country: 'md',
			name: 'Moldindconbank',
			abbr: 'MICB'
		}, {
			id: 16,
			uniqueName: 'maib',
			country: 'md',
			name: 'Moldova Agroindbank',
			abbr: 'MAIB'
		}, {
			id: 17,
			uniqueName: 'proc',
			country: 'md',
			name: 'ProCredit Bank',
			abbr: 'PROC'
		}, {
			id: 18,
			uniqueName: 'uni',
			country: 'md',
			name: 'Unibank',
			abbr: 'UNI'
		}, {
			id: 19,
			uniqueName: 'vb',
			country: 'md',
			name: 'Victoriabank',
			abbr: 'VB'
		}, {
			id: 20,
			uniqueName: 'armetis',
			country: 'md',
			name: 'Armetis-Grup CSV',
			abbr: 'ARMETIS'
		}, {
			id: 21,
			uniqueName: 'aurmar',
			country: 'md',
			name: 'Aurmar-com CSV',
			abbr: 'AURMAR'
		},
		// {
		//   id: 22,
		//   uniqueName: 'bonifar',
		//   country: 'md',
		//   name: 'Bonifar-com CSV',
		//   abbr: 'BONIFAR'
		// },
		{
			id: 23,
			uniqueName: 'ciocana',
			country: 'md',
			name: 'Ciocana CSV',
			abbr: 'CIOCANA'
		}, {
			id: 24,
			uniqueName: 'clio',
			country: 'md',
			name: 'Clio CSV',
			abbr: 'CLIO'
		}, {
			id: 25,
			uniqueName: 'degh',
			country: 'md',
			name: 'Deghest CSV',
			abbr: 'DEGH'
		}, {
			id: 26,
			uniqueName: 'fianirix',
			country: 'md',
			name: 'Fianirix-Group CSV',
			abbr: 'FIANIRIX'
		},
		// {
		//   id: 27,
		//   uniqueName: 'lisaschimb',
		//   country: 'md',
		//   name: 'Lisa-Schimb CSV',
		//   abbr: 'LISASCHIMB'
		// },
		// {
		//   id: 28,
		//   uniqueName: 'nelus',
		//   country: 'md',
		//   name: 'Nelus-Grup CSV',
		//   abbr: 'NELUS'
		// },
		{
			id: 29,
			uniqueName: 'orion',
			country: 'md',
			name: 'Orion CSV',
			abbr: 'ORION'
		},
		// {
		//   id: 30,
		//   uniqueName: 'protanir',
		//   country: 'md',
		//   name: 'Protanir CSV',
		//   abbr: 'PROTANIR'
		// },
		{
			id: 31,
			uniqueName: 'vadisan',
			country: 'md',
			name: 'Vadisan CSV',
			abbr: 'VADISAN'
		}, {
			id: 32,
			uniqueName: 'valutaelit',
			country: 'md',
			name: 'Valuta Elit CSV',
			abbr: 'VALUTAELIT'
		}
	],
	ro: [{
		id: 3,
		isCentral: true,
		uniqueName: 'bnr',
		country: 'ro',
		name: 'Banca Nationala a Romaniei',
		shortName: 'Banca Nationala',
		abbr: 'BNR'
	}, {
		id: 34,
		country: 'ro',
		uniqueName: 'alpha',
		name: 'Alpha Bank',
		abbr: 'ALPHA'
	}, {
		id: 35,
		country: 'ro',
		uniqueName: 'banca-carpatica',
		name: 'Banca Carpatica'
	}, {
		id: 36,
		country: 'ro',
		uniqueName: 'banca-romaneasca',
		name: 'Banca Romaneasca',
		abbr: 'BANCA-ROMANEASCA'
	}, {
		id: 37,
		country: 'ro',
		uniqueName: 'banca-transilvania',
		name: 'Banca Transilvania'
	}, {
		id: 38,
		country: 'ro',
		uniqueName: 'bancpost',
		name: 'Bancpost'
	}, {
		id: 39,
		country: 'ro',
		uniqueName: 'bank-leumi',
		name: 'Bank Leumi Romania',
		abbr: 'BANK-LEUMI'
	}, {
		id: 40,
		country: 'ro',
		uniqueName: 'bank-of-cyprus',
		name: 'Bank of Cyprus'
	}, {
		id: 41,
		country: 'ro',
		uniqueName: 'bcr',
		name: 'Banca Comerciala Romana',
		abbr: 'BCR'
	}, {
		id: 42,
		country: 'ro',
		uniqueName: 'brd',
		name: 'BRD Groupe Societe Generale',
		abbr: 'BRD',
		shortName: 'BRD'
	}, {
		id: 43,
		country: 'ro',
		uniqueName: 'cec',
		name: 'Casa de Economii si Consemnatiuni',
		abbr: 'CEC',
		shortName: 'CEC'
	}, {
		id: 44,
		country: 'ro',
		uniqueName: 'citibank',
		name: 'Citibank'
	}, {
		id: 45,
		country: 'ro',
		uniqueName: 'credit-europe',
		name: 'Credit Europe Bank'
	}, {
		id: 46,
		country: 'ro',
		uniqueName: 'emporiki',
		name: 'Emporiki Bank',
		abbr: 'EMPORIKI'
	}, {
		id: 47,
		country: 'ro',
		uniqueName: 'garanti',
		name: 'Garanti Bank',
		abbr: 'GARANTI'
	}, {
		id: 48,
		country: 'ro',
		uniqueName: 'ing',
		name: 'ING Bank',
		abbr: 'ING'
	}, {
		id: 49,
		country: 'ro',
		uniqueName: 'intesa-sanpaolo',
		name: 'Intesa Sanpaolo Bank'
	}, {
		id: 33,
		country: 'ro',
		uniqueName: 'libra',
		name: 'Libra Bank',
		abbr: 'LIBRA'
	}, {
		id: 50,
		country: 'ro',
		uniqueName: 'millennium',
		name: 'Millennium Bank',
		abbr: 'MILLENNIUM'
	}, {
		id: 51,
		country: 'ro',
		uniqueName: 'mkb-romexterra',
		name: 'MKB Romexterra Bank'
	}, {
		id: 52,
		country: 'ro',
		uniqueName: 'otp',
		name: 'OTP Bank',
		abbr: 'OTP'
	}, {
		id: 53,
		country: 'ro',
		uniqueName: 'piraeus',
		name: 'Piraeus Bank',
		abbr: 'PIRAEUS'
	}, {
		id: 54,
		country: 'ro',
		uniqueName: 'procredit',
		name: 'ProCredit Bank',
		abbr: 'PROCREDIT'
	}, {
		id: 4,
		country: 'ro',
		uniqueName: 'raiffeisen',
		name: 'Raiffeisen Bank SA',
		shortName: 'Raiffeisen Bank',
		abbr: 'RAIFFEISEN'
	}, {
		id: 55,
		country: 'ro',
		uniqueName: 'rib',
		name: 'Romanian International Bank',
		abbr: 'RIB'
	}, {
		id: 56,
		country: 'ro',
		uniqueName: 'unicredit-tiriac',
		name: 'UniCredit Tiriac Bank',
		shortName: 'UniCredit Tiriac',
		abbr: 'UNICREDIT-TIRIAC'
	}, {
		id: 57,
		country: 'ro',
		uniqueName: 'volksbank',
		name: 'Volksbank'
	}],
	ru: [{
		id: 78,
		isCentral: true,
		uniqueName: 'cbr',
		country: 'ru',
		name: 'Центральный банк России',
		shortName: 'Центральный Банк РФ',
		abbr: 'ЦБ РФ'
	}, {
		id: 58,
		uniqueName: 'alfa',
		name: 'Альфа-Банк'
	}, {
		id: 59,
		uniqueName: 'bank24-ru',
		name: 'Банк24.ру'
	}, {
		id: 81,
		uniqueName: 'bank-houm-kredit',
		name: 'Хоум Кредит'
	}, {
		id: 71,
		uniqueName: 'bank-sankt-peterburg',
		name: 'Банк Санкт-Петербург',
		shortName: 'Санкт-Петербург'
	}, {
		id: 75,
		uniqueName: 'chelyabinvestbank',
		name: 'ЧелябИнвестБанк'
	}, {
		id: 79,
		uniqueName: 'ekaterinburg',
		name: 'Екатеринбург'
	}, {
		id: 80,
		uniqueName: 'izhcombank',
		name: 'Ижкомбанк'
	}, {
		id: 66,
		uniqueName: 'moskomprivatbank',
		name: 'Москомприватбанк',
		shortName: 'Приватбанк'
	}, {
		id: 62,
		uniqueName: 'mts',
		name: 'МТС-Банк',
		shortName: 'МТС Банк'
	}, {
		id: 63,
		uniqueName: 'nomos',
		name: 'Номос-Банк'
	}, {
		id: 64,
		uniqueName: 'otp',
		name: 'ОТП Банк'
	}, {
		id: 65,
		uniqueName: 'petrokommerc',
		name: 'КБ Петрокоммерц',
		shortName: 'Петрокоммерц'
	}, {
		id: 67,
		uniqueName: 'promsvyazbank',
		name: 'Промсвязьбанк'
	}, {
		id: 68,
		uniqueName: 'raiffaizenbank',
		name: 'Райффайзенбанк'
	}, {
		id: 69,
		uniqueName: 'rosbank',
		name: 'АКБ Росбанк',
		shortName: 'Росбанк'
	}, {
		id: 70,
		uniqueName: 'rosselhozbank',
		name: 'РоссельхозБанк'
	}, {
		id: 72,
		uniqueName: 'svyaznoy',
		name: 'Связной Банк'
	}, {
		id: 73,
		uniqueName: 'transstroybank',
		name: 'АКБ Трансстройбанк',
		shortName: 'Трансстройбанк'
	}, {
		id: 76,
		uniqueName: 'uniastrum',
		name: 'Юниаструм Банк'
	}, {
		id: 77,
		uniqueName: 'unicredit',
		name: 'ЮниКредит Банк'
	}, {
		id: 74,
		uniqueName: 'uralsib',
		name: 'Уралсиб'
	}, {
		id: 60,
		uniqueName: 'vostochnyy-ekspress',
		name: 'Восточный экспресс банк'
	}, {
		id: 61,
		uniqueName: 'vtb24',
		name: 'Банк ВТБ 24',
		shortName: 'ВТБ 24'
	}],
	bg: [{
		id: 100,
		isCentral: true,
		uniqueName: 'bnb',
		country: 'bg',
		name: 'Българска народна банка',
		abbr: 'БНБ'
	}, {
		id: 101,
		uniqueName: 'rbb',
		country: 'bg',
		name: 'Райфайзенбанк'
	}, {
		id: 102,
		uniqueName: 'sgeb',
		country: 'bg',
		name: 'Societe Generale Експресбанк',
		shortName: 'Експресбанк'
	}, {
		id: 103,
		uniqueName: 'fibank',
		country: 'bg',
		name: 'Първа инвестиционна банка',
		shortName: 'Fibank'
	}, {
		id: 104,
		uniqueName: 'bulbank',
		country: 'bg',
		name: 'УниКредит Булбанк'
	}, {
		id: 105,
		uniqueName: 'dsk',
		country: 'bg',
		name: 'Банка ДСК'
	}, {
		id: 106,
		uniqueName: 'tbvictoria',
		country: 'bg',
		name: 'Търговска банка "Виктория"',
		shortName: 'ТБ "Виктория"'
	}, {
		id: 107,
		uniqueName: 'procredit',
		country: 'bg',
		name: 'ПроКредит Банк',
		shortName: 'ПроКредит'
	}]
};

internal.CURRENCIES = [{
	code: 'EUR',
	symbol: '€',
	htmlName: '&euro;',
	names: {
		ro: {
			name: 'Euro'
		},
		ru: {
			name: 'Евро'
		},
		bg: {
			name: 'Евро'
		}
	}
}, {
	code: 'USD',
	symbol: '$',
	htmlName: '$',
	names: {
		ro: {
			name: 'Dolar S.U.A.'
		},
		ru: {
			name: 'Доллар США'
		},
		bg: {
			name: 'Щатски долар'
		}
	}
}, {
	code: 'RUB',
	symbol: '₽',
	htmlName: '&#8359;',
	names: {
		ro: {
			name: 'Rubla rusa'
		},
		ru: {
			name: 'Российский Рубль'
		},
		bg: {
			name: 'Руска рубла'
		}
	}
}, {
	code: 'RON',
	names: {
		ro: {
			name: 'Leu romanesc'
		},
		ru: {
			name: 'Румынский Лей'
		},
		bg: {
			name: 'Румънска лея'
		}
	}
}, {
	code: 'MDL',
	names: {
		ro: {
			name: 'Leu moldovenesc'
		},
		ru: {
			name: 'Молдавский лей'
		}
	}
}, {
	code: 'UAH',
	names: {
		ro: {
			name: 'Hrivna ucraineana'
		},
		ru: {
			name: 'Украинская Гривна'
		}
	}
}, {
	code: 'GBP',
	symbol: '£',
	htmlName: '&pound;',
	names: {
		ro: {
			name: 'Lira sterlina'
		},
		ru: {
			name: 'Английский Фунт Стерлингов'
		},
		bg: {
			name: 'Британска лира'
		}
	}
}, {
	code: 'CAD',
	names: {
		ro: {
			name: 'Dolar canadian'
		},
		ru: {
			name: 'Канадский Доллар'
		},
		bg: {
			name: 'Канадски долар'
		}
	}
}, {
	code: 'BYR',
	names: {
		ro: {
			name: 'Rubla biolorusa'
		},
		ru: {
			name: 'Белорусский Рубль'
		}
	}
}, {
	code: 'AED',
	names: {
		ro: {
			name: 'Dirham E.A.U.'
		},
		ru: {
			name: 'О.А.Э. Дирхам'
		}
	}
}, {
	code: 'ALL',
	names: {
		ro: {
			name: 'Lek albanez'
		},
		ru: {
			name: 'Албанский лек'
		}
	}
}, {
	code: 'AMD',
	names: {
		ro: {
			name: 'Dram armenesc'
		},
		ru: {
			name: 'Армянский Драм'
		}
	}
}, {
	code: 'AUD',
	names: {
		ro: {
			name: 'Dolar australian'
		},
		ru: {
			name: 'Австралийский Доллар'
		},
		bg: {
			name: 'Австралийски долар'
		}
	}
}, {
	code: 'AZN',
	names: {
		ro: {
			name: 'Manat azer'
		},
		ru: {
			name: 'Азербайджанский Манат'
		}
	}
}, {
	code: 'BGN',
	names: {
		ro: {
			name: 'Leva bulgara'
		},
		ru: {
			name: 'Болгарский Лев'
		},
		bg: {
			name: 'Български лев'
		}
	}
}, {
	code: 'CHF',
	names: {
		ro: {
			name: 'Franc elvetian'
		},
		ru: {
			name: 'Швейцарский Франк'
		},
		bg: {
			name: 'Швейцарски франк'
		}
	}
}, {
	code: 'CNY',
	names: {
		ro: {
			name: 'Yuan chinez'
		},
		ru: {
			name: 'Китайский юань Ренминби'
		},
		bg: {
			name: 'Китайски ренминби юан'
		}
	}
}, {
	code: 'DKK',
	names: {
		ro: {
			name: 'Coroana daneza'
		},
		ru: {
			name: 'Датская Крона'
		},
		bg: {
			name: 'Датска крона'
		}
	}
}, {
	code: 'GEL',
	names: {
		ro: {
			name: 'Lari georgian'
		},
		ru: {
			name: 'Грузинский Лари'
		}
	}
}, {
	code: 'HKD',
	names: {
		ro: {
			name: 'Dolar Hong Kong'
		},
		ru: {
			name: 'Гонконгский доллаp'
		},
		bg: {
			name: 'Хонконгски долар'
		}
	}
}, {
	code: 'CZK',
	names: {
		ro: {
			name: 'Coroana ceha'
		},
		ru: {
			name: 'Чешская Крона'
		},
		bg: {
			name: 'Чешка крона'
		}
	}
}, {
	code: 'HUF',
	names: {
		ro: {
			name: 'Forint ungar'
		},
		bg: {
			name: 'Унгарски форинт'
		}
	}
}, {
	code: 'EGP',
	names: {
		ro: {
			name: 'Lira egipteana'
		}
	}
}, {
	code: 'RSD',
	names: {
		ro: {
			name: 'Dinarul sarbesc'
		}
	}
}, {
	code: 'PLN',
	names: {
		ro: {
			name: 'Zlotul polonez'
		},
		bg: {
			name: 'Полска злота'
		}
	}
}, {
	code: 'TRY',
	names: {
		bg: {
			name: 'Турска лира'
		}
	}
}];

var COUNTRY_CURRENCIES = {
	md: ['USD', 'EUR', 'RUB', 'RON', 'UAH', 'GBP', 'CAD', 'BYR', 'AUD', 'CHF', 'CZK', 'GEL'],
	ro: ['USD', 'EUR', 'CHF', 'RUB', 'MDL', 'GBP', 'UAH', 'CAD', 'RSD', 'AUD', 'CZK', 'PLN'],
	ru: ['USD', 'EUR', 'CHF', 'GBP', 'UAH', 'CAD', 'AUD', 'AZN', 'AMD', 'BYR', 'RON', 'MDL'],
	bg: ['USD', 'EUR', 'GBP', 'CHF', 'CAD', 'AUD', 'RON']
};

exports.getCountries = function() {
	return internal.COUNTRIES;
};

exports.getSources = function(country) {
	return internal.SOURCES[country] || [];
};

exports.getSource = function(country, id) {
	return _.find(exports.getSources(country), {
		id: id
	});
};

exports.getSourceByUniqueName = function(country, uniqueName) {
	return _.find(exports.getSources(country), {
		uniqueName: uniqueName
	});
};

exports.getCurrencies = function() {
	return internal.CURRENCIES;
};

exports.getCurrency = function(currency) {
	return _.find(exports.getCurrencies(), {
		'code': currency.toUpperCase()
	});
};

exports.getCurrenciesCodes = function(country) {
	return COUNTRY_CURRENCIES[country];
};

exports.formatRateKey = function(country, date, source, currency) {
	if (typeof date === 'string') {
		if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
			throw new Error('Invalid date format:', date);
		}
	} else {
		date = utils.formatDate(date);
	}

	return [country.toUpperCase(), date, currency.toUpperCase(), source].join('');
};

exports.formatRateKeys = function(country, date, source, currency, past, days) {
	var list = [];
	date = new Date(date.getFullYear(), date.getMonth(), date.getDate());

	if (past > 0) {
		date.setDate(date.getDate() - past);
	}

	days = days || 1;

	if (_.isNumber(source)) {
		source = [source];
	}
	if (_.isString(currency)) {
		currency = [currency];
	}

	function createListByDate() {
		source.forEach(function(s) {
			currency.forEach(function(c) {
				list.push(exports.formatRateKey(country, date, s, c));
			});
		});
	}

	for (var i = 0; i < days; i++) {
		if (i > 0) {
			date.setDate(date.getDate() - 1);
		}
		createListByDate();
	}

	return list;
};


internal.getName = function(lang) {
	return this.names && this.names[lang] && this.names[lang].name || this.name;
};

internal.getShortName = function(lang) {
	return this.names && this.names[lang] && this.names[lang].shortName || this.shortName || this.name;
};

internal.getAbbr = function(lang) {
	return this.names && this.names[lang] && this.names[lang].abbr || this.abbr || this.shortName;
};

Object.keys(internal.SOURCES).forEach(function(country) {
	internal.SOURCES[country].forEach(function(source) {
		source.getName = internal.getName;
		source.getShortName = internal.getShortName;
		source.getAbbr = internal.getAbbr;
	});
});

internal.CURRENCIES.forEach(function(c) {
	c.getName = internal.getName;
	c.getAbbr = internal.getAbbr;
});
