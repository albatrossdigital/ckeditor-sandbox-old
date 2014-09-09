var MODE = 2;

var lang = {
	toolbar: 'Показывать блоки'
};

var d = {};
d['doksoft_foundation_advanced_blocks'] = lang;
CKEDITOR.plugins.setLang('doksoft_foundation_advanced_blocks', "ru", CKEDITOR.version.charAt(0) == '4' ? lang:d);
