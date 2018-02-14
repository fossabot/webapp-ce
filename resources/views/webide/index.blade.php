<h2>Monaco Editor Sample</h2>
<div id="container" style="width:800px;height:600px;border:1px solid grey"></div>

<script src="../node_modules/monaco-editor/min/vs/loader.js"></script>
<script>
	require.config({ paths: { 'vs': '../node_modules/monaco-editor/min/vs' }});
	require(['vs/editor/editor.main'], function() {
		var editor = monaco.editor.create(document.getElementById('container'), {
			value: [
				'function x() {',
				'\tconsole.log("Hello world!");',
				'}'
			].join('\n'),
			language: 'javascript'
		});
	});
</script>