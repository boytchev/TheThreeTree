Const ForReading = 1
Const ForWriting = 2

strFileName = Wscript.Arguments(0)

rem WScript.Echo "->" & strFileName

Set objFSO = CreateObject("Scripting.FileSystemObject")
Set objFile = objFSO.OpenTextFile(strFileName, ForReading)

strText = objFile.ReadAll
objFile.Close

start = 1
brace = 1

Do
	start = InStr( start, strText, "export", 1 )
	brace = InStr( start+1, strText, "}", 1 )

	If start > 0 And brace > start Then
		str = Mid( strText, start, brace-start+1 )
		str = Replace(str, vbLf, " ")
		WScript.Echo str
		start = start + 1
	End If
	
Loop While start > 0 And brace > 0

rem strNewText = Replace(strText, strOldText, strNewText)

rem Set objFile = objFSO.OpenTextFile(strFileName, ForWriting)
rem objFile.Write strNewText
rem objFile.Close