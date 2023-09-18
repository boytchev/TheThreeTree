Const ForReading = 1
Const ForWriting = 2

strFileName = Wscript.Arguments(0)

Set objFSO = CreateObject("Scripting.FileSystemObject")
Set objFile = objFSO.OpenTextFile(strFileName, ForReading)

strFileName = Mid( strFileName, InStr(1,strFileName,"three.js-master\",1)+16 )
If InStr(strFileName,"examples\jsm\") = 1 Then
	strFileName = "addons" + Mid(strFileName,13)
End If
strFileName = Replace(strFileName, "\", "|")

WScript.Echo "@FILENAME"
WScript.Echo strFileName


strText = objFile.ReadAll
objFile.Close

strText = Replace(strText, "\", "|")
strText = Replace(strText, "`", "|")
strText = Replace(strText, "${", "|")
strText = Replace(strText, vbLf, " ")


start = 1
brace = 1

Do
	start = InStr( start, strText, "export", 1 )
	brace = InStr( start+1, strText, "}", 1 )

	If start > 0 And brace > start Then
		WScript.Echo "@EXPORT"
		WScript.Echo Mid( strText, start, brace-start+1 )
		start = start + 1
	End If
	
Loop While start > 0 And brace > 0



start = 1
brace = 1

Do
	start = InStr( start, strText, "class", 1 )
	brace = InStr( start+1, strText, "{", 1 )

	If start > 0 And brace > start Then
		WScript.Echo "@CLASS"
		WScript.Echo Mid( strText, start, brace-start+1 )
		start = start + 1
	End If
	
Loop While start > 0 And brace > 0




rem strNewText = Replace(strText, strOldText, strNewText)

rem Set objFile = objFSO.OpenTextFile(strFileName, ForWriting)
rem objFile.Write strNewText
rem objFile.Close