@echo off

@set threejs=171

@set srcdir=D:\Install\Three.js\three.js-master-r%threejs%\three.js-master
@set curdir=%cd%
@set dstdir=%cd%\src\data




REM echo Parse %srcdir%\build

REM cd %srcdir%\build
REM echo export const DATA_BUILD = ` > %dstdir%\data-build.js
REM for /r %%x in (*.js) do (
	REM echo   - %%x
	REM cscript %curdir%\src\parse.vbs //NoLogo %%x >> %dstdir%\data-build.js
REM )
REM echo `; >> %dstdir%\data-build.js



echo Parse %srcdir%\docs\api\en

cd %srcdir%\docs\api\en
echo export const DOCS_SRC = ` > %dstdir%\temp.js
dir /b /s >> %dstdir%\temp.js
echo `; >> %dstdir%\temp.js
cscript %curdir%\src\parse-docs.vbs //NoLogo %dstdir%\temp.js > %dstdir%\docs-src.js
del %dstdir%\temp.js





echo Parse %srcdir%\docs\examples\en

cd %srcdir%\docs\examples\en
echo export const DOCS_ADDONS = ` > %dstdir%\temp.js
dir /b /s >> %dstdir%\temp.js
echo `; >> %dstdir%\temp.js
cscript %curdir%\src\parse-docs.vbs //NoLogo %dstdir%\temp.js > %dstdir%\docs-addons.js
del %dstdir%\temp.js




echo Parse %srcdir%\src

cd %srcdir%\src
echo export const DATA_SRC = ` > %dstdir%\data-src.js
for /r %%x in (*.js) do (
	echo   - %%x
	cscript %curdir%\src\parse.vbs //NoLogo %%x >> %dstdir%\data-src.js
)
echo `; >> %dstdir%\data-src.js




echo Parse %srcdir%\examples\jsm

cd %srcdir%\examples\jsm
echo export const DATA_ADDONS = ` > %dstdir%\data-addons.js
for /r %%x in (*.js) do (
	echo   - %%x
	cscript %curdir%\src\parse.vbs //NoLogo %%x >> %dstdir%\data-addons.js
)
echo `; >> %dstdir%\data-addons.js





dir %dstdir%
cd %curdir%

pause