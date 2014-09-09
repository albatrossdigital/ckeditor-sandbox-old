var MODE = 2;

var lang = {
	toolbar: 'Show Blocks'
};

var d = {};
d['doksoft_foundation_advanced_blocks'] = lang;
CKEDITOR.plugins.setLang('doksoft_foundation_advanced_blocks', "en", CKEDITOR.version.charAt(0) == '4' ? lang:d);
