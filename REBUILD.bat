@echo aoff

set srcdir=D:\Install\Three.js\three.js-master-r156\three.js-master
set curdir=%cd%
set dstdir=%cd%\raw-data

cd %srcdir%\src
echo DATA_SRC = ` > %dstdir%\data-src.js
C:\Windows\system32\findstr /B /S class *.js >> %dstdir%\data-src.js
echo `; >> %dstdir%\data-src.js

cd %srcdir%\src
echo DATA_EXPORTS = ` > %dstdir%\data-exports.js
C:\Windows\system32\findstr /B /S export *.js >> %dstdir%\data-exports.js
echo `; >> %dstdir%\data-exports.js

cd %srcdir%\examples\jsm
echo DATA_ADDONS = ` > %dstdir%\delme.js
C:\Windows\system32\findstr /B /S class *.js >> %dstdir%\delme.js
echo `; >> %dstdir%\delme.js
C:\Windows\system32\findstr /V libs %dstdir%\delme.js > %dstdir%\data-addons.js
del %dstdir%\delme.js

cd %curdir%

cscript replace.vbs "%dstdir%\data-src.js" "\" "|"
cscript replace.vbs "%dstdir%\data-addons.js" "\" "|"
cscript replace.vbs "%dstdir%\data-exports.js" "\" "|"
cscript replace.vbs "%dstdir%\data-exports.js" "*/`" "*/"

	
	
pause