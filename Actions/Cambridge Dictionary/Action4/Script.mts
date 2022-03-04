Services.StartTransaction "eng_pron"
     With	Browser("Cambridge Dictionary |").Page("Cambridge Dictionary |")
	.WebEdit(SearchBox).Set DataTable("eng_proun", dtGlobalSheet)
	.WebButton(SearchButton).Click

	'------Checkpoint For searching words
	y1=DataTable("eng_proun", dtGlobalSheet)

	y2=.WebElement("class:=ti fs fs12 lmb-0 hw superentry").GetROProperty("innertext")

	'-----Builtin String function for finding substring
	If InStr(1,Stry1,Stry2)=0 Then
		Reporter.ReportEvent micPass, "Check_Search", "The Search is complete"
		Else
			Reporter.ReportEvent micFail, "Check_Search", "The Search Failed"
	End If
	'-----Select accent from excel
	lang_a=DataTable("accent", dtGlobalSheet)
	If lang_a=UK Then
		.WebButton(UK_acc).Click
		Else
			.WebButton(US_acc).Click
	End If

	wait(5)

	.Image("Cambridge Dictionary").Click
End With
Services.EndTransaction "eng_pron"

