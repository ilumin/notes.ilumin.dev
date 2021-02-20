---
to: notes/<%= filename %>.mdx
unless_exists: true
---
<%
current_time = new Date().toISOString()
%>---
title: <%= title %>
emoji: <%= emoji %>
created: <%= current_time %>
modified: <%= current_time %>
tags: 
<% tags.forEach(function(tag){ -%>  - <%= tag %>
<% }) -%>

---

<!-- content -->