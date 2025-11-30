@echo off
echo Criando pasta de producao...

if exist dist rmdir /s /q dist
mkdir dist

echo Copiando arquivos necessarios...
copy index.html dist\
copy style.css dist\
copy script.js dist\

echo.
echo ========================================
echo   Build concluido!
echo ========================================
echo.
echo Os arquivos para upload estao em: dist\
echo.
echo Arquivos prontos para o seu dominio:
echo   - index.html
echo   - style.css  
echo   - script.js
echo.
pause
