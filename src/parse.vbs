Const ForReading = 1
Const ForWriting = 2

strFileName = Wscript.Arguments(0)



Set objFSO = CreateObject("Scripting.FileSystemObject")
Set objFile = objFSO.OpenTextFile(strFileName, ForReading)

strFileName = Mid( strFileName, InStr(1,strFileName,"three.js-master\",1)+16 )
If InStr(strFileName,".min.js") > 0 Then
	Wscript.Quit
End If
If InStr(strFileName,"examples\jsm\libs") = 1 Then
	Wscript.Quit
End If
If InStr(strFileName,"examples\jsm\") = 1 Then
	strFileName = "addons" + Mid(strFileName,13)
End If
strFileName = Replace(strFileName, "\", "|")

WScript.Echo "^..^ FILENAME ^..^"
WScript.Echo strFileName

strText = objFile.ReadAll
objFile.Close

strText = Replace(strText, "\", "|")
strText = Replace(strText, "`", "|")
strText = Replace(strText, "${", "|")
strText = Replace(strText, vbLf, " ")
strText = Replace(strText, vbTab, " ")

WScript.Echo "^..^ CONTENTS ^..^"
WScript.Echo strText
		
		
' Do Until objFile.AtEndOfStream
	' strLine = objFile.ReadLine

	' strLine = Replace(strLine, "`", "|")
	' strLine = Replace(strLine, "${", "|")
	' strLine = Replace(strLine, vbTab, " ")
	' strLine = Replace(strLine, "`", "|")

	' pos = InStr( 1, strLine, strSearch, 0 )

	' If pos > 0  Then
		' WScript.Echo strCommand
		' WScript.Echo strLine
	' End If
	
' Loop 

objFile.Close


