 '-----Logout
With Browser("Cambridge Dictionary |").Page("Cambridge Dictionary |")
	.WebButton("View user options").Click
	.WebButton("Close autocomplete").WebElement(Logout).Click
	.Sync
End With


