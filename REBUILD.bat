@echo off

@set srcdir=D:\Install\Three.js\three.js-master-r156\three.js-master
@set curdir=%cd%
@set dstdir=%cd%\raw-data




echo Parse %srcdir%\src

cd %srcdir%\src
echo DATA_SRC = ` > %dstdir%\data-src.js
for /r %%x in (*.js) do (
	echo   - %%x
	cscript %curdir%\src\parse.vbs //NoLogo %%x >> %dstdir%\data-src.js
)
echo `; >> %dstdir%\data-src.js




echo Parse %srcdir%\examples\jsm

cd %srcdir%\examples\jsm
echo DATA_ADDONS = ` > %dstdir%\data-addons.js
for /r %%x in (*.js) do (
	echo   - %%x
	cscript %curdir%\src\parse.vbs //NoLogo %%x >> %dstdir%\data-addons.js
)
echo `; >> %dstdir%\data-addons.js




dir %dstdir%
cd %curdir%

pause