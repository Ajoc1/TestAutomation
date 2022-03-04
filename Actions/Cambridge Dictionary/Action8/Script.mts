Services.StartTransaction "login"
With Browser("Cambridge Dictionary |").Page("Cambridge Dictionary |")
	.WebButton("Close autocomplete").WebElement(Login).Click
	.WebEdit(EnterMail).Set DataTable("Email", dtGlobalSheet) @@ script infofile_;_ZIP::ssf31.xml_;_
	.WebEdit(Pwd).SetSecure DataTable("PassWord", dtGlobalSheet) @@ script infofile_;_ZIP::ssf32.xml_;_
	.WebButton(LoginButton).Click
	.Sync
Services.EndTransaction "login"
End With
      

