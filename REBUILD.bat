@echo off

@set threejs=184

@set srcdir=D:\Install\Three.js\three.js-master-r%threejs%\three.js-master
@set curdir=%cd%
@set dstdir=%cd%\src\data




REM echo Parse %srcdir%\docs\api\en

REM cd %srcdir%\docs\api\en
REM echo export const DOCS_SRC = ` > %dstdir%\temp.js
REM dir /b /s >> %dstdir%\temp.js
REM echo `; >> %dstdir%\temp.js
REM cscript %curdir%\src\parse-docs.vbs //NoLogo %dstdir%\temp.js > %dstdir%\docs-src.js
REM del %dstdir%\temp.js





REM echo Parse %srcdir%\docs\examples\en

REM cd %srcdir%\docs\examples\en
REM echo export const DOCS_ADDONS = ` > %dstdir%\temp.js
REM dir /b /s >> %dstdir%\temp.js
REM echo `; >> %dstdir%\temp.js
REM cscript %curdir%\src\parse-docs.vbs //NoLogo %dstdir%\temp.js > %dstdir%\docs-addons.js
REM del %dstdir%\temp.js




echo Parse %srcdir%\src

cd %srcdir%\src
echo export var data = {}; > %dstdir%\data-src.js
for /r %%x in (*.js) do (
	echo   - %%x
	cscript %curdir%\src\parse.vbs //NoLogo %%x >> %dstdir%\data-src.js
)




echo Parse %srcdir%\examples\jsm

cd %srcdir%\examples\jsm
echo export var data = {}; > %dstdir%\data-addons.js
for /r %%x in (*.js) do (
	echo   - %%x
	cscript %curdir%\src\parse.vbs //NoLogo %%x >> %dstdir%\data-addons.js
)





dir %dstdir%
cd %curdir%

pause