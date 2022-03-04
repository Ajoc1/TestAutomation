 Services.StartTransaction "search_words"
       With	Browser("Cambridge Dictionary |").Page("Cambridge Dictionary |")
	.WebEdit(SearchBox).Set DataTable("search_input", dtGlobalSheet)
	.WebButton(SearchButton).Click

	'------Checkpoint For searching words
	x1=DataTable("search_input", dtGlobalSheet)

	x2=.WebElement("class:=ti fs fs12 lmb-0 hw superentry").GetROProperty("innertext")
	If InStr(1,Strx1,Strx2)=0 Then

		Reporter.ReportEvent micPass, "Check_Search", "The Search is complete"
		Else
			Reporter.ReportEvent micFail, "Check_Search", "The Search Failed"
	End If
	.Image("Cambridge Dictionary").Click
	.Image(Image101).WaitProperty "visible", true, 10000
End With
Services.EndTransaction "search_words"

