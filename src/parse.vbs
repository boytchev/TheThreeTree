Const ForReading = 1

Dim strFileName, strText, strOutputName
Dim objFSO, objFile

strFileName = WScript.Arguments(0)
Set objFSO = CreateObject("Scripting.FileSystemObject")

' === READ AS UTF-8 (this fixes the Ї>х garbage) ===
strText = ReadFileUTF8(strFileName)

' === Your original filename processing ===
strOutputName = strFileName
strOutputName = Mid(strOutputName, InStr(1, strOutputName, "three.js-master\", 1) + 16)

If InStr(strOutputName, ".min.js") > 0 Then WScript.Quit
If InStr(strOutputName, "examples\jsm\libs") = 1 Then WScript.Quit
If InStr(strOutputName, "examples\jsm\") = 1 Then
    strOutputName = "addons" & Mid(strOutputName, 13)
End If
strOutputName = Replace(strOutputName, "\", "|")

' === Escaping ===
strText = Replace(strText, "\", "\\")
strText = Replace(strText, "`", "\`")
strText = Replace(strText, "${", "\${")

' === Output exactly like your original script ===
WScript.Echo "data['" & strOutputName & "']=`" & strText & "`;"

' ====================== Helper Function ======================
Function ReadFileUTF8(FilePath)
    Dim stream
    Set stream = CreateObject("ADODB.Stream")
    stream.Type = 2
    stream.Charset = "UTF-8"
    stream.Open
    stream.LoadFromFile FilePath
    ReadFileUTF8 = stream.ReadText
    stream.Close
End Function