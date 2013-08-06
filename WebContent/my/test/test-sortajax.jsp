<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="/pageApp/lib/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="/pageApp/my/coconut.define.js"></script>
<script type="text/javascript" src="/pageApp/my/coconut.sortajax.js"></script>
<title>Insert title here</title>
</head>
<body>
<script type="text/javascript">
$(function (){
	coconut.sortajax.ajax({
		url:"1.jsp",
		success : function(){
			console.log(1);
		}
	});
	coconut.sortajax.ajax({
		url:"2.jsp",
		success : function(){
			console.log(2);
		}
	});
	coconut.sortajax.ajax({
		url:"3.jsp",
		success : function(){
			console.log(3);
		}
	});
})
</script>
</body>
</html>