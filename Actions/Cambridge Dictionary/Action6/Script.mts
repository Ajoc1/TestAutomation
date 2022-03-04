 Services.StartTransaction "grammar"
      With Browser("Cambridge Dictionary |").Page("Cambridge Dictionary |")
	.Link("Grammar").Click
	'-------User Input to open Links
	Grammer=InputBox("Select 1-7","Select the link you want to read")

	'-----Select Case for opening any link from the available links
	Select Case Grammer
		Case 1
			.Link(AdjAndAdv).Click
			wait(3)
			.Link("Grammar").Click

		Case 2
			.Link(ECW).Click
			wait(3)
			.Link("Grammar").Click

		Case 3
			.Link(PAndD).Click
			wait(3)
			.Link("Grammar").Click

		Case 4
			.Link(Prop).Click
			wait(3)
			.Link("Grammar").Click

		Case 5
			.Link(UsingEnglish).Click
			wait(3)
			.Link("Grammar").Click

		Case 6
			.Link(Verbs).Click
			wait(3)
			.Link("Grammar").Click

		Case 7
			.Link(WSAndC).Click
			wait(3)
			.Link("Grammar").Click
		Case Else
			MsgBox ("wrong no. selected")
	End Select
	.Image("Cambridge Dictionary").Click
End With
Services.EndTransaction "grammar"

