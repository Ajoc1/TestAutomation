 '------Logo Checkpoint
With Browser("Cambridge Dictionary |_2").Page("Cambridge Dictionary |")
	.Sync
	.WebElement("<img src='/external/images/log").Check CheckPoint("<img src='/external/images/logo-lrg.png?version=5.0.213' width='254' height='80' class='lpb-5' alt='Cambridge Dictionary' /> Make your words meaningful") @@ script infofile_;_ZIP::ssf65.xml_;_
End With
'--------Facebook Page
Browser("Cambridge Dictionary |").Page("Cambridge Dictionary |").WebElement(FaceBook).Click

