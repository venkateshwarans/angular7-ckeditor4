(function(){
    CKEDITOR.basePath = '/assets/js/ckeditor/'
    // CKEDITOR.plugins.addExternal('wordcount', 'plugins/wordcount/');
    // CKEDITOR.plugins.addExternal('notification', 'plugins/notification/');
    CKEDITOR.plugins.addExternal('ckeditor_wiris', 'plugins/ckeditor_wiris/', 'plugin.js');
    CKEDITOR.editorConfig = function( config ) {
        config.extraPlugins = 'ckeditor_wiris';
        // config.extraPlugins = 'wordcount,notification,ckeditor_wiris';
    }

})();
