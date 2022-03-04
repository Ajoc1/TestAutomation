Services.StartTransaction "translate"	
With	Browser("Cambridge Dictionary |").Page("Cambridge Dictionary |")
	.Link("Translate").Click

	.WebElement(DropButton).Click
	.WebElement(Japanese).Click
	.WebEdit(TextBox).Set DataTable("sentences", dtGlobalSheet)
	.WebButton(TranslateButton).Click
	
	.Image("Cambridge Dictionary").Click
End With
Services.EndTransaction "translate"

