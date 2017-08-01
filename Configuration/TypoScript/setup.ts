TCAdefaults.pages.url_scheme = 2

config {
  #baseURL = http://hamag-maschinenbau.de/
  # Clear base URL:
  baseURL >
  #absRefPrefix = auto
  absRefPrefix = /hamag/
  absRefPrefix = https://hamag-maschinenbau.de/
}

#config.additionalHeaders = Content-Security-Policy: default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'
#[globalVar = GP:L = 1]
# Localization:
config.linkVars = L
#chosen freely, yet hard-coded by some extensions like realurl, ...
config.defaultGetVars.L = 43

# default
[globalVar = GP:L=30]
config.language = en
config.sys_language_uid = 30
plugin.tx_aimeos.settings.client.html.common.format.separatorDecimal = .
plugin.tx_aimeos.settings.client.html.common.format.separator1000 = ,
[globalVar = GP:L=0]
#[globalVar = GP:loc_languageid = en]
   config.language = en
   config.sys_language_uid = 0
   plugin.tx_aimeos.settings.client.html.common.format.separatorDecimal = .
   plugin.tx_aimeos.settings.client.html.common.format.separator1000 = ,
#[else]
[globalVar = GP:L=43]
   config.language = de
   config.sys_language_uid = 43 # BUG? workaround: from tree root -> languages; then get the website language to appear by filling in the sys_languages database table manually and freely. Then fix the errors  in tree root -> website languages -> language just created.
   plugin.tx_aimeos.settings.client.html.common.format.separatorDecimal = ,
   plugin.tx_aimeos.settings.client.html.common.format.separator1000 = .
   config.locale_all = de_DE
   config.metaCharset = iso-8859-1
#[end]
[global]
# After having debugged hacking usergroupd and Users system folder pageid:
plugin.tx_aimeos.settings.mshop.customer.manager.typo3.pid-default = 2
# from https://aimeos.org/docs/TYPO3/Install_Aimeos/Configure_TYPO3
plugin.tx_aimeos.settings.client.html.email.from-name = Bot HAMAG Maschinenbau
plugin.tx_aimeos.settings.client.html.email.from-email = info@hamag-maschinenbau.de
#plugin.tx_aimeos.settings.client.html.email.reply-name = HAMAG Maschinenbau
#plugin.tx_aimeos.settings.client.html.email.reply-email = info@hamag-maschinenbau.de
# from aimeos_dist/Configuration/TypoScript/constants.txt
config.typolinkLinkAccessRestrictedPages = {$tx_aimeos.basket.target}
config.typolinkLinkAccessRestrictedPages_addParams = &return_url=###RETURN_URL###
#config.language = de en fr es
#config.loc-currency = usd # precedence over config.currency



page.shortcutIcon = fileadmin/aimeos_dist/favicon.ico

# AIMEOS
plugin.tx_aimeos.settings.controller.frontend.customer.groupids {
  all = 1
}
plugin.tx_aimeos.settings.client.html.catalog.detail.standard.subparts {
 #0 = image
 #1 = basic
 #2 = basket
 #3 = actions
 #4 = social
 #5 = bundle
 #6 = additional
 #7 = suggest
 #8 = bought
 #10 = service
 9 = seen
}
#plugin.tx_aimeos.settings.client.html.catalog.detail.image.standard.template-body = catalog/detail/image-body-bottom.html
plugin.tx_aimeos.settings.client.html.catalog.detail.basket.selection.color = radio
plugin.tx_aimeos.settings.client.html.catalog.detail.basket.selection.length = radio
plugin.tx_aimeos.settings.client.html.catalog.detail.basket.selection.width = radio

plugin.tx_aimeos.settings.i18n.en {
  0 {
	domain = client/html
	string = Attributes
	trans = Filter
  }
  1 {
	domain = client/html
	string = %1$d article
	trans {
	  0 = %1$d
	  1 = %1$d
	}
  }
}

# from aimeos_dist/Configuration/TypoScript/constants.txt
plugin.tx_aimeos.settings.client.html.basket.standard.url.target = {$tx_aimeos.basket.target}

lib.navigation.basket = COA
lib.navigation.basket.10 = USER
lib.navigation.basket.10 {
	userFunc = TYPO3\CMS\Extbase\Core\Bootstrap->run
	vendorName = Aimeos
	extensionName = Aimeos
	pluginName = basket-small
	controller = Basket
	action = small
	settings =< plugin.tx_aimeos.settings
}

lib.navigation.locale = COA
lib.navigation.locale.10 = USER
lib.navigation.locale.10 {
	userFunc = TYPO3\CMS\Extbase\Core\Bootstrap->run
	vendorName = Aimeos
	extensionName = Aimeos
	pluginName = locale-select
	controller = Locale
	action = select
	settings =< plugin.tx_aimeos.settings
}


lib.language >




plugin.tx_aimeos.settings.client.html.checkout.standard.address.states {
	'DE' = {
		'BW' = 'Baden-Württemberg'
		'BY' = 'Bayern'
		'BE' = 'Berlin'
		'BB' = 'Brandenburg'
		'HB' = 'Bremen'
		'HH' = 'Hamburg'
		'HE' = 'Hessen'
		'MV' = 'Mecklenburg-Vorpommern'
		'NI' = 'Niedersachsen'
		'NW' = 'Nordrhein-Westfalen'
		'RP' = 'Rheinland-Pfalz'
		'SL' = 'Saarland'
		'SN' = 'Sachsen'
		'ST' = 'Sachsen-Anhalt'
		'SH' = 'Schleswig-Holstein'
		'TH' = 'Thüringen'
	},
}



plugin.tx_aimeos.settings.client.html.checkout.standard.address.countries {

	0 = AD
	# Andorra

	1 = AE
	# United Arab Emirates

	2 = AF
	# Afghanistan

	3 = AG
	# Antigua and Barbuda

	4 = AI
	# Anguilla

	5 = AL
	# Albania

	6 = AM
	# Armenia

	7 = AO
	# Angola

	8 = AQ
	# Antarctica

	9 = AR
	# Argentina

	10 = AS
	# American Samoa

	11 = AT
	# Austria

	12 = AU
	# Australia

	13 = AW
	# Aruba

	14 = AX
	# Åland Islands

	15 = AZ
	# Azerbaijan

	16 = BA
	# Bosnia and Herzegovina

	17 = BB
	# Barbados

	18 = BD
	# Bangladesh

	19 = BE
	# Belgium

	20 = BF
	# Burkina Faso

	21 = BG
	# Bulgaria

	22 = BH
	# Bahrain

	23 = BI
	# Burundi

	24 = BJ
	# Benin

	25 = BL
	# Saint Barthélemy

	26 = BM
	# Bermuda

	27 = BN
	# Brunei Darussalam

	28 = BO
	# Bolivia, Plurinational State of

	29 = BQ
	# Bonaire, Sint Eustatius and Saba

	30 = BR
	# Brazil

	31 = BS
	# Bahamas

	32 = BT
	# Bhutan

	33 = BV
	# Bouvet Island

	34 = BW
	# Botswana

	35 = BY
	# Belarus

	36 = BZ
	# Belize

	37 = CA
	# Canada

	38 = CC
	# Cocos (Keeling) Islands

	39 = CD
	# Congo, the Democratic Republic of the

	40 = CF
	# Central African Republic

	41 = CG
	# Congo

	42 = CH
	# Switzerland

	43 = CI
	# Côte d'Ivoire

	44 = CK
	# Cook Islands

	45 = CL
	# Chile

	46 = CM
	# Cameroon

	47 = CN
	# China

	48 = CO
	# Colombia

	49 = CR
	# Costa Rica

	50 = CU
	# Cuba

	51 = CV
	# Cape Verde

	52 = CW
	# Curaçao

	53 = CX
	# Christmas Island

	54 = CY
	# Cyprus

	55 = CZ
	# Czech Republic

	56 = DE
	# Germany

	57 = DJ
	# Djibouti

	58 = DK
	# Denmark

	59 = DM
	# Dominica

	60 = DO
	# Dominican Republic

	61 = DZ
	# Algeria

	62 = EC
	# Ecuador

	63 = EE
	# Estonia

	64 = EG
	# Egypt

	65 = EH
	# Western Sahara

	66 = ER
	# Eritrea

	67 = ES
	# Spain

	68 = ET
	# Ethiopia

	69 = FI
	# Finland

	70 = FJ
	# Fiji

	71 = FK
	# Falkland Islands (Malvinas)

	72 = FM
	# Micronesia, Federated States of

	73 = FO
	# Faroe Islands

	74 = FR
	# France

	75 = GA
	# Gabon

	76 = GB
	# United Kingdom

	77 = GD
	# Grenada

	78 = GE
	# Georgia

	79 = GF
	# French Guiana

	80 = GG
	# Guernsey

	81 = GH
	# Ghana

	82 = GI
	# Gibraltar

	83 = GL
	# Greenland

	84 = GM
	# Gambia

	85 = GN
	# Guinea

	86 = GP
	# Guadeloupe

	87 = GQ
	# Equatorial Guinea

	88 = GR
	# Greece

	89 = GS
	# South Georgia and the South Sandwich Islands

	90 = GT
	# Guatemala

	91 = GU
	# Guam

	92 = GW
	# Guinea-Bissau

	93 = GY
	# Guyana

	94 = HK
	# Hong Kong

	95 = HM
	# Heard Island and McDonald Islands

	96 = HN
	# Honduras

	97 = HR
	# Croatia

	98 = HT
	# Haiti

	99 = HU
	# Hungary

	100 = ID
	# Indonesia

	101 = IE
	# Ireland

	102 = IL
	# Israel

	103 = IM
	# Isle of Man

	104 = IN
	# India

	105 = IO
	# British Indian Ocean Territory

	106 = IQ
	# Iraq

	107 = IR
	# Iran, Islamic Republic of

	108 = IS
	# Iceland

	109 = IT
	# Italy

	110 = JE
	# Jersey

	111 = JM
	# Jamaica

	112 = JO
	# Jordan

	113 = JP
	# Japan

	114 = KE
	# Kenya

	115 = KG
	# Kyrgyzstan

	116 = KH
	# Cambodia

	117 = KI
	# Kiribati

	118 = KM
	# Comoros

	119 = KN
	# Saint Kitts and Nevis

	120 = KP
	# Korea, Democratic People's Republic of

	121 = KR
	# Korea, Republic of

	122 = KW
	# Kuwait

	123 = KY
	# Cayman Islands

	124 = KZ
	# Kazakhstan

	125 = LA
	# Lao People's Democratic Republic

	126 = LB
	# Lebanon

	127 = LC
	# Saint Lucia

	128 = LI
	# Liechtenstein

	129 = LK
	# Sri Lanka

	130 = LR
	# Liberia

	131 = LS
	# Lesotho

	132 = LT
	# Lithuania

	133 = LU
	# Luxembourg

	134 = LV
	# Latvia

	135 = LY
	# Libya

	136 = MA
	# Morocco

	137 = MC
	# Monaco

	138 = MD
	# Moldova, Republic of

	139 = ME
	# Montenegro

	140 = MF
	# Saint Martin (French part)

	141 = MG
	# Madagascar

	142 = MH
	# Marshall Islands

	143 = MK
	# Macedonia

	144 = ML
	# Mali

	145 = MM
	# Myanmar

	146 = MN
	# Mongolia

	147 = MO
	# Macao

	148 = MP
	# Northern Mariana Islands

	149 = MQ
	# Martinique

	150 = MR
	# Mauritania

	151 = MS
	# Montserrat

	152 = MT
	# Malta

	153 = MU
	# Mauritius

	154 = MV
	# Maldives

	155 = MW
	# Malawi

	156 = MX
	# Mexico

	157 = MY
	# Malaysia

	158 = MZ
	# Mozambique

	159 = NA
	# Namibia

	160 = NC
	# New Caledonia

	161 = NE
	# Niger

	162 = NF
	# Norfolk Island

	163 = NG
	# Nigeria

	164 = NI
	# Nicaragua

	165 = NL
	# Netherlands

	166 = NO
	# Norway

	167 = NP
	# Nepal

	168 = NR
	# Nauru

	169 = NU
	# Niue

	170 = NZ
	# New Zealand

	171 = OM
	# Oman

	172 = PA
	# Panama

	173 = PE
	# Peru

	174 = PF
	# French Polynesia

	175 = PG
	# Papua New Guinea

	176 = PH
	# Philippines

	177 = PK
	# Pakistan

	178 = PL
	# Poland

	179 = PM
	# Saint Pierre and Miquelon

	180 = PN
	# Pitcairn

	181 = PR
	# Puerto Rico

	182 = PS
	# Palestine, State of

	183 = PT
	# Portugal

	184 = PW
	# Palau

	185 = PY
	# Paraguay

	186 = QA
	# Qatar

	187 = RE
	# Réunion

	188 = RO
	# Romania

	189 = RS
	# Serbia

	190 = RU
	# Russian Federation

	191 = RW
	# Rwanda

	192 = SA
	# Saudi Arabia

	193 = SB
	# Solomon Islands

	194 = SC
	# Seychelles

	195 = SD
	# Sudan

	196 = SE
	# Sweden

	197 = SG
	# Singapore

	198 = SH
	# Saint Helena, Ascension and Tristan da Cunha

	199 = SI
	# Slovenia

	200 = SJ
	# Svalbard and Jan Mayen

	201 = SK
	# Slovakia

	202 = SL
	# Sierra Leone

	203 = SM
	# San Marino

	204 = SN
	# Senegal

	205 = SO
	# Somalia

	206 = SR
	# Suriname

	207 = SS
	# South Sudan

	208 = ST
	# Sao Tome and Principe

	209 = SV
	# El Salvador

	210 = SX
	# Sint Maarten (Dutch part)

	211 = SY
	# Syrian Arab Republic

	212 = SZ
	# Swaziland

	213 = TC
	# Turks and Caicos Islands

	214 = TD
	# Chad

	215 = TF
	# French Southern Territories

	216 = TG
	# Togo

	217 = TH
	# Thailand

	218 = TJ
	# Tajikistan

	219 = TK
	# Tokelau

	220 = TL
	# Timor-Leste

	221 = TM
	# Turkmenistan

	222 = TN
	# Tunisia

	223 = TO
	# Tonga

	224 = TR
	# Turkey

	225 = TT
	# Trinidad and Tobago

	226 = TV
	# Tuvalu

	227 = TW
	# Taiwan

	228 = TZ
	# Tanzania, United Republic of

	229 = UA
	# Ukraine

	230 = UG
	# Uganda

	231 = UM
	# United States Minor Outlying Islands

	232 = US
	# United States

	233 = UY
	# Uruguay

	234 = UZ
	# Uzbekistan

	235 = VA
	# Vatican City State (Holy See)

	236 = VC
	# Saint Vincent and the Grenadines

	237 = VE
	# Venezuela, Bolivarian Republic of

	238 = VG
	# Virgin Islands, British

	239 = VI
	# Virgin Islands, U.S.

	240 = VN
	# Viet Nam

	241 = VU
	# Vanuatu

	242 = WF
	# Wallis and Futuna

	243 = WS
	# Samoa

	244 = YE
	# Yemen

	245 = YT
	# Mayotte

	246 = ZA
	# South Africa

	247 = ZM
	# Zambia

	248 = ZW
	# Zimbabwe

}

