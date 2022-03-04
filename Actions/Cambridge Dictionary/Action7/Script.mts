 Services.StartTransaction "Wotd"
	With Browser("Cambridge Dictionary |").Page("Cambridge Dictionary |")
		DataTable.Value("WOTD")=.WebElement(WordOfTheDay).GetROProperty("innertext")
		Var1=.WebElement(WordOfTheDay).GetROProperty("innertext")
		.Link(About).Click
		
		Var2=.WebElement(WOTDMeaning).GetROProperty("innertext")


		If InStr(1,StrVar1,StrVar2)=0 Then

			Reporter.ReportEvent micPass, "wotd_check","The Link opened the correct content"
			Else
				Reporter.ReportEvent micFail, "wotd_check","The Link didn't opened the correct content"
		End  If
		.Image("Cambridge Dictionary").Click
	End With
	Services.EndTransaction "Wotd"
      

