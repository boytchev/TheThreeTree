Const ForReading = 1
Const ForWriting = 2

strFileName = Wscript.Arguments(0)

Set objFSO = CreateObject("Scripting.FileSystemObject")
Set objFile = objFSO.OpenTextFile(strFileName, ForReading)
strText = objFile.ReadAll
objFile.Close

strText = Replace(strText, "\", "|")
rem strText = Replace(strText, vbLf, " ")

WScript.Echo strText		
		
objFile.Close


