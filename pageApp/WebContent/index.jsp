<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="css/module-base.css" />
<link rel="stylesheet" href="css/module-frame.css" />
<link rel="stylesheet" href="css/module-main.css" />
<title></title>
</head>
<body>
	<div class="wrapper">
		<%-- header --%>
		<div id="header"></div>

		<%-- main --%>
		<div id="main">
			<!-- <div class="header"></div> -->
			<div class="content-wrapper">
				<div class="input-wrapper">
					<input class="new-todo" type="text" name="newTodo"  value="fuck you everyday?!" />
				</div>
				<div class="todo-wrapper">
					<div class="toggle-all">3</div>
					<ul class="clear-li-style todo-list">
						<li><span class="toggle">1</span><label>asdfasdf</label></li>
						<li><span class="toggle">2</span><label>asdfasdf</label></li>
					</ul>
				</div>
			</div>
			<div class="operator-wrapper">
					<ul class="clear-li-style operator-list">
						<li>
							<a href="/" class="content-tab clear-a-style">asdfasdf</a>
						</li>
						<li>
							<a href="/" class="content-tab clear-a-style">asdfasdf</a>
						</li>
						<li>
							<a href="/" class="content-tab clear-a-style">asdfasdf</a>
						</li>
					</ul>
			</div>
		</div>
		<%-- footer 
	<div id="footer"></div>--%>
	</div>
</body>
</html>