<?php
	# This test page checks CSP only for browsers with "Content-Security-Policy" header support
	# i.e. no old WebKit or old Firefox
	header("Content-Security-Policy: default-src 'self'; report-uri csp-log.php");
?>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>CSP Test Page</title>
	<script src="../../jquery.js"></script>
<<<<<<< HEAD
	<script src="../iframeTest.js"></script>
=======
>>>>>>> refs/remotes/origin/1.12-stable
	<script src="csp.js"></script>
	<script src="getComputedSupport.js"></script>
</head>
<body>
	<p>CSP Test Page</p>
</body>
</html>
