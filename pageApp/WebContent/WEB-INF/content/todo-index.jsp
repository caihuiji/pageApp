<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags" %>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="${BASE_URL}/css/module-base.css" />
<link rel="stylesheet" href="${BASE_URL}/css/module-frame.css" />
<link rel="stylesheet" href="${BASE_URL}/css/module-main.css" />
<title></title>
</head>
<body>
		<%-- header --%>
		<div id="header" >
			<div class="user-info">welcome! ${id}</div>
		</div>

		<%-- main --%>
		<div id="main" class="wrapper">
			<!-- <div class="header"></div> -->
			<div class="content-wrapper">
				<div class="input-wrapper">
					<input class="new-todo" type="text" name="newTodo"  value="fuck you everyday?!" />
				</div>
				<div class="todo-wrapper">
					<div class="toggle-all">!</div>
					<ul class="clear-li-style todo-list">
						<s:iterator value="tasks" status="status" var="var">
						<li><span class="toggle">${status.count}</span><label>${content}</label></li>
						</s:iterator>
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
	<script type="text/javascript" src="${BASE_URL}/lib/jquery-1.7.2.min.js"></script>
	<script type="text/javascript" src="${BASE_URL}/lib/coconut.define.js"></script>
	<script type="text/javascript" src="${BASE_URL}/lib/coconut.override.js"></script>
	<script type="text/javascript" src="${BASE_URL}/js/model/task.js"></script>
</body>
</html>